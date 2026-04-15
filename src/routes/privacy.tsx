import { createFileRoute } from '@tanstack/react-router';
import { PublicLayout } from '@/components/public-layout';

export const Route = createFileRoute('/privacy')({
  head: () => ({
    meta: [
      { title: 'Privacy Policy — AssetWise' },
      { name: 'description', content: 'Learn how AssetWise collects, uses, and protects your personal information.' },
      { property: 'og:title', content: 'Privacy Policy — AssetWise' },
      { property: 'og:description', content: 'Learn how AssetWise collects, uses, and protects your personal information.' },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <PublicLayout>
      <section className="py-16 sm:py-24 bg-landing-bg" style={{
        backgroundImage: `radial-gradient(circle, var(--landing-grid) 1.2px, transparent 1.2px)`,
        backgroundSize: '24px 24px',
      }}>
        <div className="mx-auto max-w-[800px] px-4 sm:px-6 lg:px-8">
          <h1 className="text-[32px] sm:text-[44px] font-normal tracking-tight text-landing-dark leading-[1.1] mb-4">
            Privacy Policy
          </h1>
          <p className="text-[14px] text-landing-light-muted">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-[800px] px-4 sm:px-6 lg:px-8 prose-landing">
          <h2>1. Information We Collect</h2>
          <p>We collect information you provide directly:</p>
          <ul>
            <li><strong>Account Information:</strong> Name, email address, and password when you create an account</li>
            <li><strong>Asset Data:</strong> Equipment details, serial numbers, purchase information, and notes you enter</li>
            <li><strong>Employee Data:</strong> Names, departments, and email addresses of employees you add</li>
            <li><strong>Payment Information:</strong> Billing details processed securely by our payment provider</li>
            <li><strong>Communications:</strong> Messages you send through our contact form or support channels</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Provide, maintain, and improve the Service</li>
            <li>Process transactions and send billing notifications</li>
            <li>Send important service updates and security alerts</li>
            <li>Respond to support requests and communications</li>
            <li>Analyze usage patterns to improve the user experience</li>
            <li>Detect and prevent fraud or abuse</li>
          </ul>

          <h2>3. Data Storage and Security</h2>
          <p>Your data is stored securely in encrypted databases. We implement industry-standard security measures including:</p>
          <ul>
            <li>Encryption at rest and in transit (TLS 1.3)</li>
            <li>Row-level security policies on all database tables</li>
            <li>Regular security audits and penetration testing</li>
            <li>Automated backups with point-in-time recovery</li>
          </ul>

          <h2>4. Data Sharing</h2>
          <p>We do not sell your personal information. We may share data with:</p>
          <ul>
            <li><strong>Service Providers:</strong> Third-party services that help us operate (hosting, payment processing, analytics)</li>
            <li><strong>Legal Requirements:</strong> When required by law, regulation, or legal process</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
          </ul>

          <h2>5. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal data at any time</li>
            <li>Correct inaccurate information</li>
            <li>Delete your account and associated data</li>
            <li>Export your data in standard formats (CSV)</li>
            <li>Opt out of non-essential communications</li>
          </ul>

          <h2>6. Cookies</h2>
          <p>We use essential cookies to maintain your session and preferences. We do not use third-party tracking cookies. Analytics are privacy-respecting and anonymized.</p>

          <h2>7. Data Retention</h2>
          <p>We retain your data for as long as your account is active. After account deletion, we remove your data within 30 days, except where retention is required by law.</p>

          <h2>8. Children's Privacy</h2>
          <p>The Service is not intended for children under 18. We do not knowingly collect information from children.</p>

          <h2>9. Changes to This Policy</h2>
          <p>We may update this Privacy Policy periodically. We will notify you of material changes via email or through the Service.</p>

          <h2>10. Contact</h2>
          <p>For privacy-related inquiries, contact us at privacy@assetwise.app.</p>
        </div>
      </section>
    </PublicLayout>
  );
}
