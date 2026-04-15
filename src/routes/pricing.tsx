import { createFileRoute, Link } from '@tanstack/react-router';
import { PublicLayout } from '@/components/public-layout';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export const Route = createFileRoute('/pricing')({
  head: () => ({
    meta: [
      { title: 'Pricing — AssetWise' },
      { name: 'description', content: 'Simple, transparent pricing for teams of all sizes. Start free and scale as you grow.' },
      { property: 'og:title', content: 'Pricing — AssetWise' },
      { property: 'og:description', content: 'Simple, transparent pricing for teams of all sizes. Start free and scale as you grow.' },
    ],
  }),
  component: PricingPage,
});

const plans = [
  {
    name: 'Starter',
    description: 'For small teams getting started',
    priceMonthly: 0,
    priceYearly: 0,
    features: ['Up to 50 assets', '3 team members', 'Basic depreciation tracking', 'CSV import/export', 'Email support'],
    cta: 'Get started free',
    popular: false,
  },
  {
    name: 'Professional',
    description: 'For growing teams that need more',
    priceMonthly: 29,
    priceYearly: 290,
    features: ['Unlimited assets', '15 team members', 'Advanced depreciation & reports', 'AI-powered insights', 'Assignment history', 'Priority support', 'Custom categories'],
    cta: 'Start free trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'For organizations at scale',
    priceMonthly: 79,
    priceYearly: 790,
    features: ['Unlimited everything', 'Unlimited team members', 'Custom integrations', 'Role-based access control', 'Audit logs & compliance', 'Dedicated account manager', 'SSO & SAML', 'API access'],
    cta: 'Contact sales',
    popular: false,
  },
];

const faqs = [
  { q: 'Can I try AssetWise for free?', a: 'Yes! Our Starter plan is completely free and includes up to 50 assets. No credit card required.' },
  { q: 'What happens when I exceed the free plan limits?', a: "We'll notify you when you're approaching the limit and guide you to the plan that best fits your needs." },
  { q: 'Can I change plans at any time?', a: 'Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.' },
  { q: 'Do you offer discounts for nonprofits?', a: 'Yes, we offer a 50% discount for registered nonprofits and educational institutions. Contact our sales team for details.' },
  { q: 'What payment methods do you accept?', a: 'We accept all major credit cards, including Visa, Mastercard, and American Express. Enterprise plans also support invoicing.' },
  { q: 'Is there a contract or commitment?', a: 'No long-term contracts. Monthly plans can be cancelled at any time. Annual plans are billed yearly with a discount.' },
];

function PricingPage() {
  const [annual, setAnnual] = useState(true);

  return (
    <PublicLayout>
      {/* Hero */}
      <section className="py-16 sm:py-24 bg-landing-bg" style={{
        backgroundImage: `radial-gradient(circle, var(--landing-grid) 1.2px, transparent 1.2px)`,
        backgroundSize: '24px 24px',
      }}>
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[32px] sm:text-[44px] lg:text-[52px] font-normal tracking-tight text-landing-dark leading-[1.1]">
            Simple, transparent pricing
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-[17px] text-landing-light-muted">
            Start free and scale as your team grows. No hidden fees.
          </p>

          {/* Toggle */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className={`text-[14px] ${!annual ? 'text-landing-dark font-medium' : 'text-landing-light-muted'}`}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative h-7 w-12 rounded-full transition-colors ${annual ? 'bg-landing-dark' : 'bg-landing-grid'}`}
            >
              <span className={`absolute top-0.5 h-6 w-6 rounded-full bg-white transition-transform shadow-sm ${annual ? 'translate-x-5.5' : 'translate-x-0.5'}`} />
            </button>
            <span className={`text-[14px] ${annual ? 'text-landing-dark font-medium' : 'text-landing-light-muted'}`}>
              Annual <span className="text-[12px] text-landing-light-muted">(save 17%)</span>
            </span>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="pb-20 sm:pb-32 -mt-4">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-xl border p-6 sm:p-8 transition-all ${
                  plan.popular
                    ? 'border-landing-dark bg-white shadow-md scale-[1.02]'
                    : 'border-landing-grid bg-white hover:border-landing-dark/20'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-landing-dark text-landing-light text-[11px] font-medium px-3 py-1">
                    Most popular
                  </span>
                )}
                <h3 className="text-[20px] font-semibold text-landing-dark">{plan.name}</h3>
                <p className="mt-1 text-[14px] text-landing-light-muted">{plan.description}</p>
                <div className="mt-6 mb-6">
                  <span className="text-[40px] font-semibold text-landing-dark">
                    ${annual ? plan.priceYearly === 0 ? 0 : Math.round(plan.priceYearly / 12) : plan.priceMonthly}
                  </span>
                  <span className="text-[14px] text-landing-light-muted">/month</span>
                  {annual && plan.priceYearly > 0 && (
                    <p className="text-[12px] text-landing-light-muted mt-1">Billed ${plan.priceYearly}/year</p>
                  )}
                </div>
                <Link to="/" hash="login">
                  <Button
                    className={`w-full rounded-full ${
                      plan.popular
                        ? 'bg-landing-dark text-landing-light hover:bg-landing-dark-subtle'
                        : 'bg-landing-bg text-landing-dark hover:bg-landing-grid border border-landing-grid'
                    }`}
                  >
                    {plan.cta} <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[14px] text-landing-dark">
                      <Check className="h-4 w-4 mt-0.5 text-landing-light-muted shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-[700px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] sm:text-[36px] font-normal text-landing-dark text-center mb-12 tracking-tight">
            Frequently asked questions
          </h2>
          <div className="space-y-0 divide-y divide-landing-grid">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="flex cursor-pointer items-center justify-between text-[16px] font-medium text-landing-dark">
                  {faq.q}
                  <span className="text-landing-light-muted group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <p className="mt-3 text-[15px] text-landing-light-muted leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 bg-landing-bg" style={{
        backgroundImage: `radial-gradient(circle, var(--landing-grid) 1.2px, transparent 1.2px)`,
        backgroundSize: '24px 24px',
      }}>
        <div className="mx-auto max-w-[600px] px-4 text-center">
          <h2 className="text-[28px] sm:text-[36px] font-normal text-landing-dark tracking-tight">Ready to get started?</h2>
          <p className="mt-3 text-[16px] text-landing-light-muted">Start tracking your assets for free. No credit card required.</p>
          <Link to="/" hash="login" className="inline-block mt-8">
            <Button size="lg" className="rounded-full bg-landing-dark text-landing-light hover:bg-landing-dark-subtle text-[15px] px-8 min-h-[48px]">
              Get started free <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </Link>
        </div>
      </section>
    </PublicLayout>
  );
}
