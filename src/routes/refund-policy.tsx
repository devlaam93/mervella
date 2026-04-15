import { createFileRoute } from '@tanstack/react-router';
import { PublicLayout } from '@/components/public-layout';

export const Route = createFileRoute('/refund-policy')({
  head: () => ({
    meta: [
      { title: 'Refund Policy — AssetWise' },
      { name: 'description', content: 'AssetWise refund policy for subscription plans.' },
      { property: 'og:title', content: 'Refund Policy — AssetWise' },
      { property: 'og:description', content: 'AssetWise refund policy for subscription plans.' },
    ],
  }),
  component: RefundPage,
});

function RefundPage() {
  return (
    <PublicLayout>
      <section className="py-16 sm:py-24 bg-landing-bg" style={{
        backgroundImage: `radial-gradient(circle, var(--landing-grid) 1.2px, transparent 1.2px)`,
        backgroundSize: '24px 24px',
      }}>
        <div className="mx-auto max-w-[800px] px-4 sm:px-6 lg:px-8">
          <h1 className="text-[32px] sm:text-[44px] font-normal tracking-tight text-landing-dark leading-[1.1] mb-4">
            Refund Policy
          </h1>
          <p className="text-[14px] text-landing-light-muted">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-[800px] px-4 sm:px-6 lg:px-8 prose-landing">
          <h2>Overview</h2>
          <p>We want you to be completely satisfied with AssetWise. If you're not happy with your subscription, we offer a straightforward refund policy.</p>

          <h2>Free Plan</h2>
          <p>Our Starter plan is completely free and does not require payment information. No refunds apply.</p>

          <h2>Paid Plans — Monthly Billing</h2>
          <ul>
            <li>You may cancel your monthly subscription at any time</li>
            <li>Cancellation takes effect at the end of the current billing period</li>
            <li>We offer a full refund within 14 days of your first payment if you're not satisfied</li>
            <li>After 14 days, no refunds will be issued for the current billing period</li>
          </ul>

          <h2>Paid Plans — Annual Billing</h2>
          <ul>
            <li>Annual plans are billed once per year at a discounted rate</li>
            <li>We offer a full refund within 30 days of your annual payment</li>
            <li>After 30 days, a prorated refund may be issued based on remaining months</li>
            <li>Prorated refunds are calculated based on the monthly rate, not the annual discount</li>
          </ul>

          <h2>How to Request a Refund</h2>
          <p>To request a refund, contact our support team at support@assetwise.app with:</p>
          <ul>
            <li>Your account email address</li>
            <li>The reason for your refund request</li>
            <li>Your subscription plan details</li>
          </ul>
          <p>We will process your refund within 5-10 business days.</p>

          <h2>Exceptions</h2>
          <ul>
            <li>Refunds are not available for accounts terminated due to Terms of Service violations</li>
            <li>Partial-month usage is not refundable for monthly plans after the 14-day period</li>
          </ul>

          <h2>Contact</h2>
          <p>Questions about refunds? Contact us at support@assetwise.app.</p>
        </div>
      </section>
    </PublicLayout>
  );
}
