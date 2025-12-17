import { Metadata } from 'next';
import { Download, Scale, BookOpen, Bell, ClipboardList, Link2, Wrench } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { knowledgeBankCategories } from '@/data/knowledge-bank';

export const metadata: Metadata = {
  title: 'Knowledge Bank | JDSS',
  description: 'Download tax rules, acts, bulletins, forms, and other useful reference documents for professionals.',
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Scale,
  BookOpen,
  Bell,
  ClipboardList,
  Link2,
  Wrench,
};

export default function KnowledgeBankPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <Container size="xl">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Knowledge Bank
            </h1>
            <p className="text-xl text-secondary-600">
              Downloadable reference documents including tax rules, acts, bulletins, and utilities.
            </p>
          </div>
        </Container>
      </section>

      {/* Documents Grid */}
      <section className="section-padding">
        <Container size="xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {knowledgeBankCategories.map((category) => {
              const IconComponent = iconMap[category.icon] || BookOpen;
              return (
                <div
                  key={category.id}
                  className="bg-white rounded-xl border border-border overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-primary-700" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-secondary-900">
                          {category.title}
                        </h3>
                        <p className="text-sm text-secondary-600 mt-1">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {category.documents.map((doc) => (
                        <a
                          key={doc.id}
                          href={`/documents/${doc.filename}`}
                          download
                          className="group flex items-center justify-between p-3 bg-secondary-50 rounded-lg hover:bg-primary-50 transition-colors"
                        >
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-secondary-900 group-hover:text-primary-700 transition-colors truncate">
                              {doc.title}
                            </p>
                            {doc.fileSize && (
                              <p className="text-xs text-secondary-500">
                                PDF - {doc.fileSize}
                              </p>
                            )}
                          </div>
                          <Download className="w-4 h-4 text-secondary-400 group-hover:text-primary-600 flex-shrink-0 ml-3" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <p className="text-secondary-600 mb-4">
              Need assistance with any of these resources?
            </p>
            <a
              href="/contact"
              className="text-primary-700 font-medium hover:text-primary-800 transition-colors"
            >
              Contact our team for guidance
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
