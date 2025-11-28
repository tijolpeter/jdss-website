import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <section className="section-padding min-h-[60vh] flex items-center">
      <Container size="sm">
        <div className="text-center">
          <div className="text-8xl font-bold text-primary-100 mb-4">404</div>
          <h1 className="text-3xl font-bold text-secondary-900 mb-4">Page Not Found</h1>
          <p className="text-lg text-secondary-600 mb-8">
            Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild>
              <Link href="/">
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
