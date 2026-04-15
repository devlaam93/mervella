import { createFileRoute, Link } from '@tanstack/react-router';
import { PublicLayout } from '@/components/public-layout';
import { Button } from '@/components/ui/button';
import { Package, Users, BarChart3, Search, Shield, Zap, ArrowRight, CheckCircle2, Upload, FileText, Bot, Lock } from 'lucide-react';

export const Route = createFileRoute('/features')({
  head: () => ({
    meta: [
      { title: 'Features — AssetWise' },
      { name: 'description', content: 'Everything you need to manage company assets: tracking, assignments, depreciation, AI insights, and more.' },
      { property: 'og:title', content: 'Features — AssetWise' },
      { property: 'og:description', content: 'Everything you need to manage company assets: tracking, assignments, depreciation, AI insights, and more.' },
    ],
  }),
  component: FeaturesPage,
});

const coreFeatures = [
  { icon: Package, title: 'Complete Asset Registry', description: 'Log every piece of equipment with purchase details, serial numbers, condition notes, and custom categories. Never lose track of what you own.' },
  { icon: Users, title: 'Employee Assignments', description: 'Assign assets to team members with full history tracking. Know who has what, when they got it, and when it was returned.' },
  { icon: BarChart3, title: 'Depreciation Tracking', description: 'Automatic straight-line depreciation calculations with customizable useful life and residual values. See real-time book values.' },
  { icon: Bot, title: 'AI-Powered Insights', description: 'Ask questions about your inventory using our built-in AI chat. Find assets, check assignments, and analyze trends instantly.' },
  { icon: Upload, title: 'Bulk Import & Export', description: 'Import hundreds of assets at once via CSV. Export your data anytime for reporting, audits, or migration.' },
  { icon: Shield, title: 'Enterprise Security', description: 'Row-level security, role-based access control, encrypted data, and full audit trails keep your data safe.' },
];

const additionalFeatures = [
  { icon: Zap, title: 'Real-time Dashboard', description: 'At-a-glance metrics showing total assets, current value, condition breakdowns, and recent activity.' },
  { icon: FileText, title: 'Custom Categories', description: 'Organize assets by type with custom categories, each with their own default depreciation settings.' },
  { icon: Lock, title: 'Asset Archiving', description: 'Soft-delete retired assets to preserve history while keeping your active inventory clean.' },
  { icon: CheckCircle2, title: 'Condition Tracking', description: 'Rate assets from Excellent to Retired. Filter and sort by condition to plan replacements.' },
  { icon: Search, title: 'Advanced Search', description: 'Find any asset instantly by name, serial number, location, category, or assigned employee.' },
  { icon: Users, title: 'Team Management', description: 'Manage employees across departments. See each person\'s assigned equipment at a glance.' },
];

function FeaturesPage() {
  return (
    <PublicLayout>
      {/* Hero */}
      <section className="py-16 sm:py-24 bg-landing-bg" style={{
        backgroundImage: `radial-gradient(circle, var(--landing-grid) 1.2px, transparent 1.2px)`,
        backgroundSize: '24px 24px',
      }}>
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[32px] sm:text-[44px] lg:text-[52px] font-normal tracking-tight text-landing-dark leading-[1.1]">
            Everything you need to<br className="hidden sm:block" /> manage assets
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-[17px] text-landing-light-muted">
            Built for IT managers, office managers, and operations teams who need full visibility into company equipment.
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <p className="text-[14px] font-medium text-landing-light-muted mb-3 uppercase tracking-wider">Core Features</p>
          <h2 className="text-[28px] sm:text-[36px] font-normal text-landing-dark tracking-tight mb-16">
            The essentials, done right
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {coreFeatures.map((f) => (
              <div key={f.title} className="group">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-landing-dark text-landing-light mb-4">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="text-[18px] font-semibold text-landing-dark mb-2">{f.title}</h3>
                <p className="text-[15px] text-landing-light-muted leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 sm:py-28 bg-landing-bg" style={{
        backgroundImage: `radial-gradient(circle, var(--landing-grid) 1.2px, transparent 1.2px)`,
        backgroundSize: '24px 24px',
      }}>
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <p className="text-[14px] font-medium text-landing-light-muted mb-3 uppercase tracking-wider">And more</p>
          <h2 className="text-[28px] sm:text-[36px] font-normal text-landing-dark tracking-tight mb-16">
            Built for every workflow
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {additionalFeatures.map((f) => (
              <div key={f.title} className="rounded-xl border border-landing-grid bg-white p-6 transition-all hover:border-landing-dark/20">
                <f.icon className="h-5 w-5 text-landing-dark mb-3" />
                <h3 className="text-[16px] font-semibold text-landing-dark mb-1">{f.title}</h3>
                <p className="text-[14px] text-landing-light-muted leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-[600px] px-4 text-center">
          <h2 className="text-[28px] sm:text-[36px] font-normal text-landing-dark tracking-tight">See it in action</h2>
          <p className="mt-3 text-[16px] text-landing-light-muted">Start tracking your assets today. Free to get started.</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/" hash="login">
              <Button size="lg" className="rounded-full bg-landing-dark text-landing-light hover:bg-landing-dark-subtle text-[15px] px-8 min-h-[48px]">
                Get started free <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
            <Link to="/pricing">
              <Button size="lg" variant="outline" className="rounded-full text-[15px] px-8 min-h-[48px]">
                View pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
