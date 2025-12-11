'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import { cn } from '@/lib/cn';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { mainNavigation } from '@/data/navigation';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-white'
      )}
    >
      <Container size="xl">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              {/* Logo mark */}
              <div className="w-8 h-8 rounded-full bg-primary-800 flex items-center justify-center">
                <span className="text-white font-serif font-bold text-sm">J</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-serif font-bold text-primary-900 italic">JDSS & Co</span>
                <span className="text-[10px] text-secondary-500 -mt-1 tracking-wide">CHARTERED ACCOUNTANTS</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {mainNavigation.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.title)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors',
                    pathname === item.href || pathname.startsWith(item.href + '/')
                      ? 'text-primary-800'
                      : 'text-secondary-600 hover:text-primary-800'
                  )}
                >
                  {item.title}
                  {item.children && (
                    <ChevronDown className={cn(
                      'w-4 h-4 transition-transform duration-200',
                      openDropdown === item.title && 'rotate-180'
                    )} />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.children && openDropdown === item.title && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="bg-white rounded-xl shadow-xl border border-border p-4 min-w-[240px]">
                      <div className="space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={cn(
                              'block px-4 py-2.5 rounded-lg transition-colors',
                              pathname === child.href
                                ? 'bg-primary-50 text-primary-800'
                                : 'text-secondary-600 hover:bg-secondary-50 hover:text-secondary-900'
                            )}
                          >
                            <div className="font-medium">{child.title}</div>
                            {child.description && (
                              <div className="text-xs text-secondary-500 mt-0.5">
                                {child.description}
                              </div>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              className="p-2 text-secondary-500 hover:text-primary-800 transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <Button asChild>
              <Link href="/contact">Schedule a Call</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 -mr-2 text-secondary-700 hover:text-primary-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>
      </Container>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-border">
          <Container size="xl">
            <div className="py-4 space-y-2">
              {mainNavigation.map((item) => (
                <div key={item.title}>
                  {item.children ? (
                    <div>
                      <button
                        className={cn(
                          'flex items-center justify-between w-full px-4 py-3 text-left',
                          'text-secondary-700 hover:bg-secondary-50'
                        )}
                        onClick={() =>
                          setOpenDropdown(openDropdown === item.title ? null : item.title)
                        }
                      >
                        <span className="font-medium">{item.title}</span>
                        <ChevronDown
                          className={cn(
                            'w-5 h-5 transition-transform',
                            openDropdown === item.title && 'rotate-180'
                          )}
                        />
                      </button>
                      {openDropdown === item.title && (
                        <div className="pl-4 space-y-1 mt-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={cn(
                                'block px-4 py-2.5 rounded-lg text-sm',
                                pathname === child.href
                                  ? 'bg-primary-50 text-primary-800'
                                  : 'text-secondary-600 hover:bg-secondary-50'
                              )}
                            >
                              {child.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        'block px-4 py-3 font-medium',
                        pathname === item.href
                          ? 'bg-primary-50 text-primary-800'
                          : 'text-secondary-700 hover:bg-secondary-50'
                      )}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-border mt-4">
                <Button className="w-full" asChild>
                  <Link href="/contact">Schedule a Call</Link>
                </Button>
              </div>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
