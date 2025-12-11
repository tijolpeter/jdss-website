'use client';

import { ResourceCategory, CategoryConfig } from '@/types';

const categories: CategoryConfig[] = [
  { value: 'all', label: 'All', color: 'default' },
  { value: 'webinar', label: 'Webinars', color: 'primary' },
  { value: 'qa', label: 'Q&A', color: 'success' },
  { value: 'tool-demo', label: 'Tool Demos', color: 'warning' },
  { value: 'guide', label: 'Guides', color: 'secondary' },
  { value: 'blog', label: 'Blog Posts', color: 'primary' },
];

interface CategoryFilterProps {
  activeCategory: ResourceCategory | 'all';
  onCategoryChange: (category: ResourceCategory | 'all') => void;
}

export function CategoryFilter({ activeCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {categories.map((category) => (
        <button
          key={category.value}
          onClick={() => onCategoryChange(category.value as ResourceCategory | 'all')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            activeCategory === category.value
              ? 'bg-primary-700 text-white shadow-md'
              : 'bg-white text-gray-700 border border-gray-200 hover:border-primary-300 hover:bg-primary-50'
          }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
