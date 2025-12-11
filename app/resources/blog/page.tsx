'use client';

import { useState, useEffect } from 'react';
import { Container } from '@/components/ui/container';
import { BlogCard } from '@/components/blog/blog-card';
import { CategoryFilter } from '@/components/blog/category-filter';
import { BlogPost, ResourceCategory } from '@/types';
import { FileText } from 'lucide-react';

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<ResourceCategory | 'all'>('all');

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/api/posts?status=published');
        const data = await response.json();
        setPosts(data.posts || []);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const filteredPosts = activeCategory === 'all'
    ? posts
    : posts.filter((post) => post.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <Container size="xl">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-primary-700 font-semibold tracking-wider uppercase text-sm mb-4">
              Resources
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-serif mb-6">
              Blog & Insights
            </h1>
            <p className="text-lg text-gray-600">
              Stay informed with the latest insights, guides, and updates on taxation,
              compliance, and financial best practices for your business.
            </p>
          </div>
        </Container>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-100">
        <Container size="xl">
          <CategoryFilter
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </Container>
      </section>

      {/* Posts Grid */}
      <section className="section-padding bg-gray-50">
        <Container size="xl">
          {isLoading ? (
            <div className="text-center py-12">
              <div className="animate-spin w-8 h-8 border-4 border-primary-200 border-t-primary-700 rounded-full mx-auto mb-4" />
              <p className="text-gray-500">Loading posts...</p>
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No posts found</h3>
              <p className="text-gray-500">
                {activeCategory !== 'all'
                  ? 'Try selecting a different category.'
                  : 'Check back soon for new content.'}
              </p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 gap-8">
                {filteredPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>

              {/* Results count */}
              <div className="mt-8 text-center text-sm text-gray-500">
                Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'}
                {activeCategory !== 'all' && ` in "${activeCategory}"`}
              </div>
            </>
          )}
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-900">
        <Container size="lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white font-serif mb-4">
              Need Expert Financial Guidance?
            </h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Our team of experienced professionals is here to help you navigate
              complex financial matters and optimize your business operations.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-accent-orange text-white font-semibold rounded-lg hover:bg-accent-orange-dark transition-colors"
            >
              Schedule a Consultation
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
