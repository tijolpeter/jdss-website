import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, Clock, User, Tag } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { PostContent } from '@/components/blog/post-content';
import { BlogCard } from '@/components/blog/blog-card';
import { getPostBySlug, getRelatedPosts, getPublishedPosts } from '@/lib/posts';
import { ResourceCategory, CategoryConfig } from '@/types';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

const categories: CategoryConfig[] = [
  { value: 'webinar', label: 'Webinars', color: 'primary' },
  { value: 'qa', label: 'Q&A', color: 'success' },
  { value: 'tool-demo', label: 'Tool Demos', color: 'warning' },
  { value: 'guide', label: 'Guides', color: 'secondary' },
  { value: 'blog', label: 'Blog Posts', color: 'primary' },
];

const categoryBadgeColors: Record<ResourceCategory, string> = {
  webinar: 'bg-primary-100 text-primary-700',
  qa: 'bg-green-100 text-green-700',
  'tool-demo': 'bg-amber-100 text-amber-700',
  guide: 'bg-gray-100 text-gray-700',
  blog: 'bg-blue-100 text-blue-700',
};

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: post.image ? [post.image] : undefined,
    },
  };
}

export async function generateStaticParams() {
  const posts = await getPublishedPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(slug, post.category, 3);
  const categoryLabel = categories.find((c) => c.value === post.category)?.label || post.category;
  const badgeColor = categoryBadgeColors[post.category] || 'bg-gray-100 text-gray-700';

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <>
      {/* Back Link */}
      <section className="pt-8 pb-4 bg-white">
        <Container size="md">
          <Link
            href="/resources/blog"
            className="inline-flex items-center gap-2 text-primary-700 hover:text-primary-800 font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </Container>
      </section>

      {/* Article Header */}
      <article className="pb-16">
        <header className="py-8 bg-white">
          <Container size="md">
            {/* Category Badge */}
            <span className={`inline-flex px-3 py-1 text-sm font-medium rounded-full ${badgeColor} mb-4`}>
              {categoryLabel}
            </span>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-serif mb-6">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-gray-600">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {formatDate(post.date)}
              </span>
              {post.readTime && (
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTime} min read
                </span>
              )}
            </div>
          </Container>
        </header>

        {/* Featured Image */}
        {post.image && (
          <div className="pb-8 bg-white">
            <Container size="lg">
              <div className="relative aspect-[21/9] rounded-2xl overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </Container>
          </div>
        )}

        {/* Content */}
        <div className="bg-white pb-12">
          <Container size="md">
            <PostContent content={post.content} />
          </Container>
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="bg-white pb-8">
            <Container size="md">
              <div className="flex items-center gap-2 flex-wrap">
                <Tag className="w-4 h-4 text-gray-500" />
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Container>
          </div>
        )}

        {/* Divider */}
        <Container size="md">
          <hr className="border-gray-200" />
        </Container>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section-padding bg-gray-50">
          <Container size="xl">
            <h2 className="text-2xl font-bold text-gray-900 font-serif mb-8 text-center">
              Related Posts
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* CTA Section */}
      <section className="section-padding bg-primary-900">
        <Container size="lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white font-serif mb-4">
              Have Questions About This Topic?
            </h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Our expert team is here to provide personalized guidance
              and help you make informed financial decisions.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-accent-orange text-white font-semibold rounded-lg hover:bg-accent-orange-dark transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
