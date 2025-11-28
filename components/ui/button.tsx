'use client';

import { forwardRef, ButtonHTMLAttributes, ReactElement, cloneElement, isValidElement } from 'react';
import { cn } from '@/lib/cn';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'cta';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      disabled,
      children,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const baseStyles = cn(
      'inline-flex items-center justify-center font-medium transition-all duration-200',
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      'rounded-lg'
    );

    const variants = {
      primary: cn(
        'bg-primary-700 text-white',
        'hover:bg-primary-800',
        'focus-visible:ring-primary-500',
        'shadow-sm hover:shadow-md'
      ),
      secondary: cn(
        'bg-secondary-100 text-secondary-900',
        'hover:bg-secondary-200',
        'focus-visible:ring-secondary-500'
      ),
      outline: cn(
        'border-2 border-primary-700 text-primary-700 bg-transparent',
        'hover:bg-primary-50',
        'focus-visible:ring-primary-500'
      ),
      ghost: cn(
        'text-secondary-700 bg-transparent',
        'hover:bg-secondary-100 hover:text-secondary-900',
        'focus-visible:ring-secondary-500'
      ),
      cta: cn(
        'bg-gradient-to-r from-accent-orange to-accent-teal text-white',
        'hover:opacity-90',
        'focus-visible:ring-accent-orange',
        'shadow-lg hover:shadow-xl'
      ),
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-sm gap-1.5',
      md: 'px-4 py-2 text-base gap-2',
      lg: 'px-6 py-3 text-lg gap-2.5',
    };

    const combinedClassName = cn(baseStyles, variants[variant], sizes[size], className);

    // If asChild is true and children is a valid element, clone it with button styles
    if (asChild && isValidElement(children)) {
      return cloneElement(children as ReactElement<{ className?: string }>, {
        className: cn(combinedClassName, (children as ReactElement<{ className?: string }>).props.className),
        ...props,
      });
    }

    return (
      <button
        ref={ref}
        className={combinedClassName}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Loading...
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
