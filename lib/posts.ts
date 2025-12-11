import { ObjectId } from 'mongodb';
import { connectToDatabase } from './mongodb';
import { BlogPost, CreatePostData, GetPostsOptions, ResourceCategory } from '@/types';

const COLLECTION_NAME = 'blog_posts';

// Utility: Generate URL-safe slug from title
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

// Utility: Calculate read time from content (average 200 words per minute)
export function calculateReadTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

// Utility: Ensure unique slug by appending number if needed
async function ensureUniqueSlug(baseSlug: string, excludeId?: string): Promise<string> {
  const { db } = await connectToDatabase();
  const collection = db.collection<BlogPost>(COLLECTION_NAME);

  let slug = baseSlug;
  let counter = 1;

  while (true) {
    const query: Record<string, unknown> = { slug };
    if (excludeId) {
      query.id = { $ne: excludeId };
    }
    const existing = await collection.findOne(query);
    if (!existing) break;
    slug = `${baseSlug}-${counter}`;
    counter++;
  }

  return slug;
}

// Create a new post
export async function addPost(data: CreatePostData): Promise<BlogPost> {
  const { db } = await connectToDatabase();
  const collection = db.collection<BlogPost>(COLLECTION_NAME);

  const baseSlug = generateSlug(data.title);
  const slug = await ensureUniqueSlug(baseSlug);
  const now = new Date().toISOString();

  const post: Omit<BlogPost, '_id'> = {
    ...data,
    id: new ObjectId().toString(),
    slug,
    date: now,
    readTime: calculateReadTime(data.content),
    createdAt: now,
    updatedAt: now,
  };

  await collection.insertOne(post as BlogPost);
  return post as BlogPost;
}

// Get posts with filtering and pagination
export async function getPosts(options: GetPostsOptions = {}): Promise<{ posts: BlogPost[]; total: number }> {
  const { db } = await connectToDatabase();
  const collection = db.collection<BlogPost>(COLLECTION_NAME);

  const { status = 'all', category = 'all', limit = 10, offset = 0, featured } = options;

  // Build filter
  const filter: Record<string, unknown> = {};

  if (status !== 'all') {
    filter.status = status;
  }

  if (category !== 'all') {
    filter.category = category;
  }

  if (featured !== undefined) {
    filter.featured = featured;
  }

  const total = await collection.countDocuments(filter);

  const posts = await collection
    .find(filter)
    .sort({ date: -1 })
    .skip(offset)
    .limit(limit)
    .toArray();

  return { posts, total };
}

// Get published posts for public display
export async function getPublishedPosts(
  category?: ResourceCategory | 'all',
  limit?: number
): Promise<BlogPost[]> {
  const { db } = await connectToDatabase();
  const collection = db.collection<BlogPost>(COLLECTION_NAME);

  const filter: Record<string, unknown> = { status: 'published' };

  if (category && category !== 'all') {
    filter.category = category;
  }

  let query = collection.find(filter).sort({ date: -1 });

  if (limit) {
    query = query.limit(limit);
  }

  return query.toArray();
}

// Get single post by slug (public - only published)
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const { db } = await connectToDatabase();
  const collection = db.collection<BlogPost>(COLLECTION_NAME);

  return collection.findOne({ slug, status: 'published' });
}

// Get single post by ID (admin - any status)
export async function getPostById(id: string): Promise<BlogPost | null> {
  const { db } = await connectToDatabase();
  const collection = db.collection<BlogPost>(COLLECTION_NAME);

  return collection.findOne({ id });
}

// Update an existing post
export async function updatePost(
  id: string,
  data: Partial<CreatePostData> & { slug?: string }
): Promise<boolean> {
  const { db } = await connectToDatabase();
  const collection = db.collection<BlogPost>(COLLECTION_NAME);

  const updateData: Record<string, unknown> = {
    ...data,
    updatedAt: new Date().toISOString(),
  };

  // Recalculate read time if content changed
  if (data.content) {
    updateData.readTime = calculateReadTime(data.content);
  }

  // Ensure slug uniqueness if title changed
  if (data.title && !data.slug) {
    const baseSlug = generateSlug(data.title);
    updateData.slug = await ensureUniqueSlug(baseSlug, id);
  }

  const result = await collection.updateOne({ id }, { $set: updateData });
  return result.modifiedCount > 0;
}

// Delete a post
export async function deletePost(id: string): Promise<boolean> {
  const { db } = await connectToDatabase();
  const collection = db.collection<BlogPost>(COLLECTION_NAME);

  const result = await collection.deleteOne({ id });
  return result.deletedCount > 0;
}

// Get featured posts
export async function getFeaturedPosts(limit = 3): Promise<BlogPost[]> {
  const { db } = await connectToDatabase();
  const collection = db.collection<BlogPost>(COLLECTION_NAME);

  return collection
    .find({ status: 'published', featured: true })
    .sort({ date: -1 })
    .limit(limit)
    .toArray();
}

// Get related posts (same category, excluding current post)
export async function getRelatedPosts(
  currentSlug: string,
  category: ResourceCategory,
  limit = 3
): Promise<BlogPost[]> {
  const { db } = await connectToDatabase();
  const collection = db.collection<BlogPost>(COLLECTION_NAME);

  return collection
    .find({
      slug: { $ne: currentSlug },
      category,
      status: 'published',
    })
    .sort({ date: -1 })
    .limit(limit)
    .toArray();
}

// Get post counts by status
export async function getPostCounts(): Promise<{
  total: number;
  published: number;
  draft: number;
}> {
  const { db } = await connectToDatabase();
  const collection = db.collection<BlogPost>(COLLECTION_NAME);

  const [total, published, draft] = await Promise.all([
    collection.countDocuments({}),
    collection.countDocuments({ status: 'published' }),
    collection.countDocuments({ status: 'draft' }),
  ]);

  return { total, published, draft };
}
