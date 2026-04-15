import { createFileRoute, Link } from '@tanstack/react-router';
import { PublicLayout } from '@/components/public-layout';
import { Button } from '@/components/ui/button';
import { ArrowRight, Target, Heart, Zap, Users } from 'lucide-react';

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      { title: 'About — AssetWise' },
      { name: 'description', content: 'AssetWise is on a mission to make asset management simple, reliable, and accessible for every team.' },
      { property: 'og:title', content: 'About — AssetWise' },
      { property: 'og:description', content: 'AssetWise is on a mission to make asset management simple, reliable, and accessible for every team.' },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Target, title: 'Simplicity first', description: 'We believe tools should get out of your way. Every feature is designed to be intuitive and fast.' },
  { icon: Heart, title: 'Built with care', description: 'We sweat the details so you don\'t have to. From pixel-perfect UI to reliable data handling.' },
  { icon: Zap, title: 'Speed matters', description: 'Fast load times, instant search, real-time updates. Your workflow should never wait.' },
  { icon: Users, title: 'Team-centric', description: 'Designed for collaboration. Everyone on your team can contribute, from IT to operations.' },
];

const stats = [
  { value: '40K+', label: 'Assets tracked' },
  { value: '2,500+', label: 'Teams worldwide' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '< 2min', label: 'Average setup time' },
];

function AboutPage() {
  return (
    <PublicLayout>
      {/* Hero */}
      <section className="py-16 sm:py-24 bg-landing-bg" style={{
        backgroundImage: `radial-gradient(circle, var(--landing-grid) 1.2px, transparent 1.2px)`,
        backgroundSize: '24px 24px',
      }}>
        <div className="mx-auto max-w-[800px] px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[32px] sm:text-[44px] lg:text-[52px] font-normal tracking-tight text-landing-dark leading-[1.1]">
            Making asset management<br className="hidden sm:block" /> simple for every team
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-[17px] text-landing-light-muted leading-relaxed">
            We started AssetWise because we were tired of spreadsheets, lost equipment, and surprise replacements. There had to be a better way.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-[1000px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-[36px] sm:text-[44px] font-semibold text-landing-dark">{stat.value}</p>
                <p className="text-[14px] text-landing-light-muted mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 sm:py-28 bg-landing-bg" style={{
        backgroundImage: `radial-gradient(circle, var(--landing-grid) 1.2px, transparent 1.2px)`,
        backgroundSize: '24px 24px',
      }}>
        <div className="mx-auto max-w-[800px] px-4 sm:px-6 lg:px-8">
          <p className="text-[14px] font-medium text-landing-light-muted mb-3 uppercase tracking-wider">Our mission</p>
          <h2 className="text-[28px] sm:text-[36px] font-normal text-landing-dark tracking-tight mb-6">
            Every asset accounted for
          </h2>
          <div className="space-y-4 text-[16px] text-landing-light-muted leading-relaxed">
            <p>
              Companies lose millions every year to mismanaged equipment — laptops that disappear, monitors that break without warning, and software licenses that go unused. We believe that shouldn't happen.
            </p>
            <p>
              AssetWise gives IT managers, office administrators, and operations teams a single source of truth for all company equipment. From the moment an asset is purchased to the day it's retired, every detail is tracked, every assignment is logged, and every dollar of depreciation is calculated automatically.
            </p>
            <p>
              We built AssetWise to be the tool we always wanted — simple enough to set up in minutes, powerful enough to scale with your organization, and reliable enough to trust with your most important data.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <p className="text-[14px] font-medium text-landing-light-muted mb-3 uppercase tracking-wider">Our values</p>
          <h2 className="text-[28px] sm:text-[36px] font-normal text-landing-dark tracking-tight mb-16">
            What drives us
          </h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-landing-dark text-landing-light">
                  <v.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-[18px] font-semibold text-landing-dark mb-1">{v.title}</h3>
                  <p className="text-[15px] text-landing-light-muted leading-relaxed">{v.description}</p>
                </div>
              </div>
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
          <h2 className="text-[28px] sm:text-[36px] font-normal text-landing-dark tracking-tight">Join thousands of teams</h2>
          <p className="mt-3 text-[16px] text-landing-light-muted">Start tracking your assets today. It takes less than 2 minutes.</p>
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
