import { NextRequest, NextResponse } from 'next/server';
import { getPostBySlug, getRelatedPosts } from '@/lib/posts';

interface RouteParams {
  params: Promise<{ slug: string }>;
}

// GET - Get single published post by slug
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const { slug } = await params;

    const post = await getPostBySlug(slug);

    if (!post) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      );
    }

    // Get related posts
    const related = await getRelatedPosts(slug, post.category, 3);

    return NextResponse.json({ post, related });
  } catch (error) {
    console.error('Failed to fetch post:', error);
    return NextResponse.json(
      { error: 'Failed to fetch post' },
      { status: 500 }
    );
  }
}
