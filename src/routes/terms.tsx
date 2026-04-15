import { createFileRoute } from '@tanstack/react-router';
import { PublicLayout } from '@/components/public-layout';

export const Route = createFileRoute('/terms')({
  head: () => ({
    meta: [
      { title: 'Terms of Service — AssetWise' },
      { name: 'description', content: 'Read the AssetWise terms of service governing use of our platform.' },
      { property: 'og:title', content: 'Terms of Service — AssetWise' },
      { property: 'og:description', content: 'Read the AssetWise terms of service governing use of our platform.' },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <PublicLayout>
      <section className="py-16 sm:py-24 bg-landing-bg" style={{
        backgroundImage: `radial-gradient(circle, var(--landing-grid) 1.2px, transparent 1.2px)`,
        backgroundSize: '24px 24px',
      }}>
        <div className="mx-auto max-w-[800px] px-4 sm:px-6 lg:px-8">
          <h1 className="text-[32px] sm:text-[44px] font-normal tracking-tight text-landing-dark leading-[1.1] mb-4">
            Terms of Service
          </h1>
          <p className="text-[14px] text-landing-light-muted">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-[800px] px-4 sm:px-6 lg:px-8 prose-landing">
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing or using AssetWise ("the Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service.</p>

          <h2>2. Description of Service</h2>
          <p>AssetWise provides an online asset management platform that allows organizations to track, manage, and monitor company equipment and assets. The Service includes features such as asset tracking, employee assignments, depreciation calculations, and AI-powered insights.</p>

          <h2>3. User Accounts</h2>
          <p>To use the Service, you must create an account and provide accurate, complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
          <ul>
            <li>You must be at least 18 years of age to use the Service</li>
            <li>You must provide a valid email address</li>
            <li>You are responsible for all activity on your account</li>
            <li>You must notify us immediately of any unauthorized use</li>
          </ul>

          <h2>4. Subscription and Billing</h2>
          <p>Some features of the Service require a paid subscription. By subscribing to a paid plan:</p>
          <ul>
            <li>You authorize us to charge your payment method on a recurring basis</li>
            <li>Subscription fees are billed in advance on a monthly or annual basis</li>
            <li>You may cancel your subscription at any time</li>
            <li>Refunds are provided in accordance with our Refund Policy</li>
          </ul>

          <h2>5. Acceptable Use</h2>
          <p>You agree not to use the Service to:</p>
          <ul>
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe on the rights of others</li>
            <li>Transmit malicious code or interfere with the Service</li>
            <li>Attempt to gain unauthorized access to the Service</li>
            <li>Use the Service for any illegal or unauthorized purpose</li>
          </ul>

          <h2>6. Data Ownership</h2>
          <p>You retain all rights to your data. We do not claim ownership of any content you upload or create through the Service. You grant us a limited license to use your data solely for the purpose of providing the Service.</p>

          <h2>7. Service Availability</h2>
          <p>We strive to maintain 99.9% uptime but do not guarantee uninterrupted access. We may perform scheduled maintenance with advance notice. We are not liable for any downtime or service interruptions.</p>

          <h2>8. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, AssetWise shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the Service.</p>

          <h2>9. Termination</h2>
          <p>We may terminate or suspend your account at any time for violation of these Terms. Upon termination, your right to use the Service will cease immediately. You may export your data before termination.</p>

          <h2>10. Changes to Terms</h2>
          <p>We reserve the right to modify these Terms at any time. We will notify users of material changes via email or through the Service. Continued use after changes constitutes acceptance of the modified Terms.</p>

          <h2>11. Contact</h2>
          <p>If you have questions about these Terms, please contact us at support@assetwise.app.</p>
        </div>
      </section>
    </PublicLayout>
  );
}
