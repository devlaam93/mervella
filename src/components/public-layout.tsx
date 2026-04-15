import { Link, useLocation } from '@tanstack/react-router';
import { Package, ArrowRight, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const navLinks = [
  { to: '/features' as const, label: 'Features' },
  { to: '/pricing' as const, label: 'Pricing' },
  { to: '/blog' as const, label: 'Blog' },
  { to: '/case-studies' as const, label: 'Case Studies' },
  { to: '/about' as const, label: 'About' },
  { to: '/contact' as const, label: 'Contact' },
];

const footerLinks = {
  Product: [
    { to: '/features' as const, label: 'Features' },
    { to: '/pricing' as const, label: 'Pricing' },
    { to: '/case-studies' as const, label: 'Case Studies' },
    { to: '/faq' as const, label: 'FAQ' },
  ],
  Company: [
    { to: '/about' as const, label: 'About' },
    { to: '/blog' as const, label: 'Blog' },
    { to: '/contact' as const, label: 'Contact' },
  ],
  Legal: [
    { to: '/terms' as const, label: 'Terms of Service' },
    { to: '/privacy' as const, label: 'Privacy Policy' },
    { to: '/refund-policy' as const, label: 'Refund Policy' },
  ],
};

const font = "'Onest', system-ui, sans-serif";

export function PublicLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-landing-bg" style={{ fontFamily: font }}>
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-landing-grid bg-landing-bg/90 backdrop-blur-sm">
        <div className="mx-auto flex h-14 max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2">
              <Package className="h-5 w-5 text-landing-dark" />
              <span className="text-[15px] font-semibold text-landing-dark tracking-tight">AssetWise</span>
            </Link>
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-1.5 text-[14px] rounded-full transition-colors ${
                    location.pathname === link.to || location.pathname.startsWith(link.to + '/')
                      ? 'text-landing-dark font-medium bg-landing-dark/5'
                      : 'text-landing-light-muted hover:text-landing-dark'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/" hash="login" className="hidden sm:inline-flex text-[14px] text-landing-light-muted hover:text-landing-dark transition-colors">
              Sign in
            </Link>
            <Link to="/" hash="login" className="hidden sm:inline-block">
              <Button size="sm" className="rounded-full bg-landing-dark text-landing-light hover:bg-landing-dark-subtle text-[13px] px-5">
                Get started <ArrowRight className="h-3.5 w-3.5 ml-1" />
              </Button>
            </Link>
            <button
              className="md:hidden p-1.5 text-landing-dark"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-landing-grid bg-landing-bg px-4 py-4">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="px-3 py-2.5 text-[15px] text-landing-dark rounded-lg hover:bg-landing-dark/5"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 pt-3 border-t border-landing-grid flex flex-col gap-2">
                <Link to="/" hash="login" className="text-center text-[14px] text-landing-light-muted py-2">
                  Sign in
                </Link>
                <Link to="/" hash="login">
                  <Button className="w-full rounded-full bg-landing-dark text-landing-light hover:bg-landing-dark-subtle">
                    Get started
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="border-t border-landing-grid bg-landing-bg">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Package className="h-5 w-5 text-landing-dark" />
                <span className="text-[15px] font-semibold text-landing-dark">AssetWise</span>
              </div>
              <p className="text-[14px] text-landing-light-muted leading-relaxed max-w-xs">
                The simple, reliable way to track all company equipment with depreciation tracking and AI-powered insights.
              </p>
            </div>
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-[13px] font-semibold text-landing-dark mb-3 uppercase tracking-wider">{category}</h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.to}>
                      <Link to={link.to} className="text-[14px] text-landing-light-muted hover:text-landing-dark transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-6 border-t border-landing-grid flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-xs text-landing-light-muted/60">© {new Date().getFullYear()} AssetWise. All rights reserved.</p>
            <div className="flex gap-4">
              <Link to="/terms" className="text-xs text-landing-light-muted/60 hover:text-landing-light-muted">Terms</Link>
              <Link to="/privacy" className="text-xs text-landing-light-muted/60 hover:text-landing-light-muted">Privacy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
