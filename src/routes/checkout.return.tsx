import { createFileRoute, Link } from '@tanstack/react-router';
import { PublicLayout } from '@/components/public-layout';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const Route = createFileRoute('/checkout/return')({
  head: () => ({
    meta: [
      { title: 'Payment Complete — AssetWise' },
    ],
  }),
  component: CheckoutReturnPage,
});

function CheckoutReturnPage() {
  const searchParams = new URLSearchParams(window.location.search);
  const sessionId = searchParams.get('session_id');

  return (
    <PublicLayout>
      <section className="py-24 sm:py-36 bg-landing-bg" style={{
        backgroundImage: `radial-gradient(circle, var(--landing-grid) 1.2px, transparent 1.2px)`,
        backgroundSize: '24px 24px',
      }}>
        <div className="mx-auto max-w-[500px] px-4 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-landing-dark text-landing-light mx-auto mb-6">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h1 className="text-[28px] sm:text-[36px] font-normal text-landing-dark tracking-tight mb-3">
            Payment successful!
          </h1>
          <p className="text-[16px] text-landing-light-muted mb-8">
            Thank you for subscribing to AssetWise. Your account has been upgraded and you can start using all premium features immediately.
          </p>
          {sessionId && (
            <p className="text-[12px] text-landing-light-muted/60 mb-6">
              Session: {sessionId.slice(0, 20)}...
            </p>
          )}
          <Link to="/" hash="login">
            <Button size="lg" className="rounded-full bg-landing-dark text-landing-light hover:bg-landing-dark-subtle text-[15px] px-8 min-h-[48px]">
              Go to dashboard <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </Link>
        </div>
      </section>
    </PublicLayout>
  );
}
