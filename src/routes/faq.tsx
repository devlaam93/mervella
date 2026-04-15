import { createFileRoute, Link } from '@tanstack/react-router';
import { PublicLayout } from '@/components/public-layout';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const Route = createFileRoute('/faq')({
  head: () => ({
    meta: [
      { title: 'FAQ — AssetWise' },
      { name: 'description', content: 'Frequently asked questions about AssetWise asset management platform.' },
      { property: 'og:title', content: 'FAQ — AssetWise' },
      { property: 'og:description', content: 'Frequently asked questions about AssetWise asset management platform.' },
    ],
  }),
  component: FAQPage,
});

const faqCategories = [
  {
    title: 'Getting Started',
    questions: [
      { q: 'What is AssetWise?', a: 'AssetWise is an asset management platform that helps teams track, assign, and monitor company equipment. It includes depreciation tracking, AI-powered insights, and employee assignment management.' },
      { q: 'How do I get started?', a: 'Sign up for a free account, add your first assets (manually or via CSV import), assign them to employees, and start tracking. The whole process takes less than 5 minutes.' },
      { q: 'Is there a free plan?', a: 'Yes! Our Starter plan is completely free and includes up to 50 assets and 3 team members. No credit card required.' },
      { q: 'Can I import my existing data?', a: 'Absolutely. AssetWise supports CSV import for both assets and employees. You can also export your data at any time.' },
    ],
  },
  {
    title: 'Features & Functionality',
    questions: [
      { q: 'How does depreciation tracking work?', a: 'AssetWise uses straight-line depreciation to calculate the declining value of your assets over time. You set the useful life and residual value percentage, and we calculate the rest automatically.' },
      { q: 'What is the AI chat feature?', a: 'The AI chat lets you ask natural-language questions about your assets and employees. For example, "Which laptops are due for replacement?" or "How many assets are assigned to the Engineering department?"' },
      { q: 'Can I track asset assignments?', a: 'Yes. You can assign assets to employees with dates and notes, track full assignment history, and ensure assets are returned before being reassigned.' },
      { q: 'Does AssetWise support custom categories?', a: 'Yes. You can create custom asset categories (e.g., Laptops, Monitors, Furniture) with their own default depreciation settings.' },
    ],
  },
  {
    title: 'Billing & Plans',
    questions: [
      { q: 'Can I change my plan at any time?', a: 'Yes. You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.' },
      { q: 'Do you offer annual billing discounts?', a: 'Yes. Annual plans save you approximately 17% compared to monthly billing.' },
      { q: 'What payment methods do you accept?', a: 'We accept all major credit cards including Visa, Mastercard, and American Express. Enterprise plans also support invoicing.' },
      { q: 'What is your refund policy?', a: 'We offer a 14-day refund for monthly plans and a 30-day refund for annual plans. See our Refund Policy for full details.' },
    ],
  },
  {
    title: 'Security & Privacy',
    questions: [
      { q: 'Is my data secure?', a: 'Yes. All data is encrypted at rest and in transit. We use row-level security policies, regular security audits, and automated backups.' },
      { q: 'Who can access my data?', a: 'Only authenticated users in your organization can access your data. We support role-based access control for more granular permissions.' },
      { q: 'Can I export or delete my data?', a: 'Yes. You can export all your data via CSV at any time. Account deletion removes all associated data within 30 days.' },
      { q: 'Do you comply with GDPR?', a: 'Yes. We are committed to data protection and privacy. Users can access, correct, and delete their personal data at any time.' },
    ],
  },
];

function FAQPage() {
  return (
    <PublicLayout>
      {/* Hero */}
      <section className="py-16 sm:py-24 bg-landing-bg" style={{
        backgroundImage: `radial-gradient(circle, var(--landing-grid) 1.2px, transparent 1.2px)`,
        backgroundSize: '24px 24px',
      }}>
        <div className="mx-auto max-w-[800px] px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[32px] sm:text-[44px] lg:text-[52px] font-normal tracking-tight text-landing-dark leading-[1.1]">
            Frequently asked questions
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-[17px] text-landing-light-muted">
            Everything you need to know about AssetWise.
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-[800px] px-4 sm:px-6 lg:px-8 space-y-12">
          {faqCategories.map((cat) => (
            <div key={cat.title}>
              <h2 className="text-[20px] font-semibold text-landing-dark mb-4">{cat.title}</h2>
              <div className="divide-y divide-landing-grid border-t border-landing-grid">
                {cat.questions.map((faq) => (
                  <details key={faq.q} className="group py-5">
                    <summary className="flex cursor-pointer items-center justify-between text-[16px] font-medium text-landing-dark">
                      {faq.q}
                      <span className="text-landing-light-muted group-open:rotate-45 transition-transform text-xl shrink-0 ml-4">+</span>
                    </summary>
                    <p className="mt-3 text-[15px] text-landing-light-muted leading-relaxed">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 bg-landing-bg" style={{
        backgroundImage: `radial-gradient(circle, var(--landing-grid) 1.2px, transparent 1.2px)`,
        backgroundSize: '24px 24px',
      }}>
        <div className="mx-auto max-w-[600px] px-4 text-center">
          <h2 className="text-[28px] sm:text-[36px] font-normal text-landing-dark tracking-tight">Still have questions?</h2>
          <p className="mt-3 text-[16px] text-landing-light-muted">Get in touch and we'll help you find the answers.</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/contact">
              <Button size="lg" className="rounded-full bg-landing-dark text-landing-light hover:bg-landing-dark-subtle text-[15px] px-8 min-h-[48px]">
                Contact us <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
            <Link to="/" hash="login">
              <Button size="lg" variant="outline" className="rounded-full text-[15px] px-8 min-h-[48px]">
                Get started free
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
