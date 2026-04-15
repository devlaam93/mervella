import { createFileRoute, Link } from '@tanstack/react-router';
import { PublicLayout } from '@/components/public-layout';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Clock, DollarSign } from 'lucide-react';

export const Route = createFileRoute('/case-studies')({
  head: () => ({
    meta: [
      { title: 'Case Studies — AssetWise' },
      { name: 'description', content: 'See how companies use AssetWise to save time, reduce costs, and gain full visibility into their assets.' },
      { property: 'og:title', content: 'Case Studies — AssetWise' },
      { property: 'og:description', content: 'See how companies use AssetWise to save time, reduce costs, and gain full visibility into their assets.' },
    ],
  }),
  component: CaseStudiesPage,
});

const caseStudies = [
  {
    company: 'TechFlow Inc.',
    industry: 'SaaS / Technology',
    size: '150 employees',
    challenge: 'TechFlow was managing 800+ laptops and monitors across 3 offices using spreadsheets. Equipment went missing regularly and they had no visibility into depreciation costs.',
    solution: 'After switching to AssetWise, TechFlow imported their entire inventory in 20 minutes. They set up departments, assigned assets to employees, and configured depreciation tracking.',
    results: [
      { icon: Clock, value: '85%', label: 'Reduction in time spent on asset audits' },
      { icon: DollarSign, value: '$45K', label: 'Annual savings from better asset lifecycle planning' },
      { icon: TrendingUp, value: '100%', label: 'Asset visibility across all locations' },
    ],
    quote: '"AssetWise replaced our 15-tab spreadsheet in a single afternoon. Now our entire IT team has a real-time view of every asset."',
    quoteName: 'Sarah Chen, IT Director',
  },
  {
    company: 'GreenLeaf Marketing',
    industry: 'Marketing Agency',
    size: '45 employees',
    challenge: 'GreenLeaf had no system for tracking equipment assignments. New hires waited days for equipment, and departing employees sometimes left with company assets.',
    solution: 'AssetWise\'s assignment tracking feature gave them a clear picture of who had what. The onboarding checklist ensured new hires received equipment on day one.',
    results: [
      { icon: Clock, value: '90%', label: 'Faster equipment provisioning for new hires' },
      { icon: DollarSign, value: '$12K', label: 'Recovered in previously lost equipment' },
      { icon: TrendingUp, value: '0', label: 'Missing assets at offboarding since adopting AssetWise' },
    ],
    quote: '"We used to lose 2-3 laptops per quarter during employee transitions. Since implementing AssetWise, that number dropped to zero."',
    quoteName: 'Marcus Rivera, Operations Manager',
  },
  {
    company: 'BuildRight Construction',
    industry: 'Construction',
    size: '300 employees',
    challenge: 'BuildRight managed expensive tools and equipment across 12 job sites. Without centralized tracking, tools were frequently duplicated or lost between sites.',
    solution: 'Using AssetWise\'s location tracking and assignment features, BuildRight created a real-time view of equipment across all job sites. The AI chat feature helped site managers quickly check availability.',
    results: [
      { icon: Clock, value: '60%', label: 'Less time locating equipment across sites' },
      { icon: DollarSign, value: '$120K', label: 'Annual savings from reduced equipment duplication' },
      { icon: TrendingUp, value: '40%', label: 'Improvement in equipment utilization rates' },
    ],
    quote: '"Before AssetWise, we\'d buy a new drill because no one knew where the existing ones were. Now I just ask the AI chat and get an answer in seconds."',
    quoteName: 'Tom Nakamura, Fleet Manager',
  },
];

function CaseStudiesPage() {
  return (
    <PublicLayout>
      {/* Hero */}
      <section className="py-16 sm:py-24 bg-landing-bg" style={{
        backgroundImage: `radial-gradient(circle, var(--landing-grid) 1.2px, transparent 1.2px)`,
        backgroundSize: '24px 24px',
      }}>
        <div className="mx-auto max-w-[800px] px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[32px] sm:text-[44px] lg:text-[52px] font-normal tracking-tight text-landing-dark leading-[1.1]">
            Real results from<br className="hidden sm:block" /> real teams
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-[17px] text-landing-light-muted">
            See how companies use AssetWise to save time, reduce costs, and gain full visibility into their assets.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-[1000px] px-4 sm:px-6 lg:px-8 space-y-16">
          {caseStudies.map((cs, i) => (
            <article key={cs.company} className="rounded-xl border border-landing-grid overflow-hidden">
              <div className="p-6 sm:p-10">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <h2 className="text-[22px] font-semibold text-landing-dark">{cs.company}</h2>
                  <span className="text-[12px] text-landing-light-muted bg-landing-bg rounded-full px-3 py-1">{cs.industry}</span>
                  <span className="text-[12px] text-landing-light-muted bg-landing-bg rounded-full px-3 py-1">{cs.size}</span>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 mb-8">
                  <div>
                    <h3 className="text-[14px] font-semibold text-landing-dark uppercase tracking-wider mb-2">Challenge</h3>
                    <p className="text-[15px] text-landing-light-muted leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-[14px] font-semibold text-landing-dark uppercase tracking-wider mb-2">Solution</h3>
                    <p className="text-[15px] text-landing-light-muted leading-relaxed">{cs.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {cs.results.map((r) => (
                    <div key={r.label} className="rounded-lg bg-landing-bg p-4 text-center">
                      <r.icon className="h-5 w-5 text-landing-dark mx-auto mb-2" />
                      <p className="text-[24px] sm:text-[28px] font-semibold text-landing-dark">{r.value}</p>
                      <p className="text-[12px] text-landing-light-muted mt-1">{r.label}</p>
                    </div>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="border-l-2 border-landing-dark pl-4">
                  <p className="text-[16px] text-landing-dark italic leading-relaxed">{cs.quote}</p>
                  <cite className="text-[14px] text-landing-light-muted not-italic mt-2 block">— {cs.quoteName}</cite>
                </blockquote>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 bg-landing-bg" style={{
        backgroundImage: `radial-gradient(circle, var(--landing-grid) 1.2px, transparent 1.2px)`,
        backgroundSize: '24px 24px',
      }}>
        <div className="mx-auto max-w-[600px] px-4 text-center">
          <h2 className="text-[28px] sm:text-[36px] font-normal text-landing-dark tracking-tight">Join these teams</h2>
          <p className="mt-3 text-[16px] text-landing-light-muted">Start tracking your assets today and see results in your first week.</p>
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
