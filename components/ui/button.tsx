'use client';

import { forwardRef, ButtonHTMLAttributes, ReactElement, cloneElement, isValidElement } from 'react';
import { cn } from '@/lib/cn';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'dark';
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
      'inline-flex items-center justify-center font-semibold transition-all duration-200',
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      'rounded-full uppercase tracking-wide'
    );

    const variants = {
      // Orange primary button (airCFO style)
      primary: cn(
        'bg-accent-orange text-primary-900',
        'hover:bg-accent-orange-dark',
        'focus-visible:ring-accent-orange',
        'shadow-sm hover:shadow-md'
      ),
      // Dark teal secondary button
      secondary: cn(
        'bg-primary-900 text-white',
        'hover:bg-primary-800',
        'focus-visible:ring-primary-700'
      ),
      // Outline button
      outline: cn(
        'border-2 border-primary-800 text-primary-800 bg-transparent',
        'hover:bg-primary-50',
        'focus-visible:ring-primary-500'
      ),
      // Ghost button
      ghost: cn(
        'text-secondary-700 bg-transparent',
        'hover:bg-secondary-100 hover:text-secondary-900',
        'focus-visible:ring-secondary-500'
      ),
      // Dark button for light backgrounds
      dark: cn(
        'bg-secondary-900 text-white',
        'hover:bg-secondary-800',
        'focus-visible:ring-secondary-700'
      ),
    };

    const sizes = {
      sm: 'px-4 py-2 text-xs gap-1.5',
      md: 'px-5 py-2.5 text-sm gap-2',
      lg: 'px-7 py-3.5 text-sm gap-2.5',
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
