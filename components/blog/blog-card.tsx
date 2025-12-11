import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { BlogPost, ResourceCategory, CategoryConfig } from '@/types';

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

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const categoryLabel = categories.find((c) => c.value === post.category)?.label || post.category;
  const badgeColor = categoryBadgeColors[post.category] || 'bg-gray-100 text-gray-700';

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <Link
      href={`/resources/blog/${post.slug}`}
      className="group block bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      {/* Image */}
      {post.image ? (
        <div className="relative aspect-[16/9] bg-gray-100 overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${badgeColor}`}>
              {categoryLabel}
            </span>
          </div>
        </div>
      ) : (
        <div className="relative aspect-[16/9] bg-gradient-to-br from-primary-100 to-primary-50 flex items-center justify-center">
          <div className="text-primary-300 text-6xl font-serif font-bold">
            {post.title.charAt(0)}
          </div>
          <div className="absolute top-4 left-4">
            <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${badgeColor}`}>
              {categoryLabel}
            </span>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 group-hover:text-primary-700 transition-colors mb-2">
          {post.title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-3 mb-4">
          {post.excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {formatDate(post.date)}
            </span>
            {post.readTime && (
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime} min read
              </span>
            )}
          </div>
          <ArrowRight className="w-5 h-5 text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 duration-300" />
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
