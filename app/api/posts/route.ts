import { NextRequest, NextResponse } from 'next/server';
import {
  addPost,
  getPosts,
  updatePost,
  deletePost,
  getPostCounts,
} from '@/lib/posts';
import { ResourceCategory, PostStatus } from '@/types';

// GET - List posts (public: published only, admin: all with filters)
export async function GET(request: NextRequest) {
  try {
    const authToken = request.cookies.get('admin_auth')?.value;
    const isAdmin = authToken === 'authenticated';

    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status') as PostStatus | 'all' | null;
    const category = searchParams.get('category') as ResourceCategory | 'all' | null;
    const limit = parseInt(searchParams.get('limit') || '10', 10);
    const offset = parseInt(searchParams.get('offset') || '0', 10);
    const featured = searchParams.get('featured');
    const includeCounts = searchParams.get('counts') === 'true';

    // Non-admin users can only see published posts
    const effectiveStatus = isAdmin ? (status || 'all') : 'published';

    const { posts, total } = await getPosts({
      status: effectiveStatus,
      category: category || 'all',
      limit,
      offset,
      featured: featured === 'true' ? true : featured === 'false' ? false : undefined,
    });

    const response: Record<string, unknown> = { posts, total };

    // Include counts for admin dashboard
    if (isAdmin && includeCounts) {
      response.counts = await getPostCounts();
    }

    return NextResponse.json(response);
  } catch (error) {
    console.error('Failed to fetch posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    );
  }
}

// POST - Create new post (admin only)
export async function POST(request: NextRequest) {
  const authToken = request.cookies.get('admin_auth')?.value;
  if (authToken !== 'authenticated') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const data = await request.json();

    // Validate required fields
    const { title, excerpt, content, author, category } = data;
    if (!title || !excerpt || !content || !author || !category) {
      return NextResponse.json(
        { error: 'Missing required fields: title, excerpt, content, author, category' },
        { status: 400 }
      );
    }

    // Validate category
    const validCategories: ResourceCategory[] = ['webinar', 'qa', 'tool-demo', 'guide', 'blog'];
    if (!validCategories.includes(category)) {
      return NextResponse.json(
        { error: 'Invalid category' },
        { status: 400 }
      );
    }

    const post = await addPost({
      title,
      excerpt,
      content,
      author,
      category,
      tags: data.tags || [],
      image: data.image || undefined,
      status: data.status || 'draft',
      featured: data.featured || false,
    });

    return NextResponse.json({ success: true, post });
  } catch (error) {
    console.error('Failed to create post:', error);
    return NextResponse.json(
      { error: 'Failed to create post' },
      { status: 500 }
    );
  }
}

// PATCH - Update existing post (admin only)
export async function PATCH(request: NextRequest) {
  const authToken = request.cookies.get('admin_auth')?.value;
  if (authToken !== 'authenticated') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { id, ...data } = await request.json();

    if (!id) {
      return NextResponse.json(
        { error: 'Post ID is required' },
        { status: 400 }
      );
    }

    // Validate category if provided
    if (data.category) {
      const validCategories: ResourceCategory[] = ['webinar', 'qa', 'tool-demo', 'guide', 'blog'];
      if (!validCategories.includes(data.category)) {
        return NextResponse.json(
          { error: 'Invalid category' },
          { status: 400 }
        );
      }
    }

    const updated = await updatePost(id, data);

    if (updated) {
      return NextResponse.json({ success: true });
    }
    return NextResponse.json({ error: 'Post not found' }, { status: 404 });
  } catch (error) {
    console.error('Failed to update post:', error);
    return NextResponse.json(
      { error: 'Failed to update post' },
      { status: 500 }
    );
  }
}

// DELETE - Delete post (admin only)
export async function DELETE(request: NextRequest) {
  const authToken = request.cookies.get('admin_auth')?.value;
  if (authToken !== 'authenticated') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { id } = await request.json();

    if (!id) {
      return NextResponse.json(
        { error: 'Post ID is required' },
        { status: 400 }
      );
    }

    const deleted = await deletePost(id);

    if (deleted) {
      return NextResponse.json({ success: true });
    }
    return NextResponse.json({ error: 'Post not found' }, { status: 404 });
  } catch (error) {
    console.error('Failed to delete post:', error);
    return NextResponse.json(
      { error: 'Failed to delete post' },
      { status: 500 }
    );
  }
}
