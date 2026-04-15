import { createFileRoute } from '@tanstack/react-router';
import { PublicLayout } from '@/components/public-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MessageSquare, Clock } from 'lucide-react';
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [
      { title: 'Contact — AssetWise' },
      { name: 'description', content: 'Get in touch with the AssetWise team. We\'d love to hear from you.' },
      { property: 'og:title', content: 'Contact — AssetWise' },
      { property: 'og:description', content: 'Get in touch with the AssetWise team. We\'d love to hear from you.' },
    ],
  }),
  component: ContactPage,
});

const contactInfo = [
  { icon: Mail, title: 'Email us', description: 'support@assetwise.app', detail: 'For general inquiries and support' },
  { icon: MessageSquare, title: 'Live chat', description: 'Available in-app', detail: 'For existing customers with active plans' },
  { icon: Clock, title: 'Response time', description: 'Within 24 hours', detail: 'Priority support for Pro and Enterprise plans' },
];

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    const { error } = await supabase.from('contact_submissions').insert({
      name: data.get('name') as string,
      email: data.get('email') as string,
      company: (data.get('company') as string) || null,
      message: data.get('message') as string,
    });

    setSubmitting(false);
    if (error) {
      toast.error('Something went wrong. Please try again.');
    } else {
      setSubmitted(true);
      toast.success('Message sent! We\'ll get back to you soon.');
    }
  }

  return (
    <PublicLayout>
      {/* Hero */}
      <section className="py-16 sm:py-24 bg-landing-bg" style={{
        backgroundImage: `radial-gradient(circle, var(--landing-grid) 1.2px, transparent 1.2px)`,
        backgroundSize: '24px 24px',
      }}>
        <div className="mx-auto max-w-[800px] px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[32px] sm:text-[44px] lg:text-[52px] font-normal tracking-tight text-landing-dark leading-[1.1]">
            Get in touch
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-[17px] text-landing-light-muted">
            Have a question, feedback, or want to learn more? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-[1000px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Info */}
            <div className="lg:col-span-2 space-y-8">
              {contactInfo.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-landing-dark text-landing-light">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-semibold text-landing-dark">{item.title}</h3>
                    <p className="text-[15px] text-landing-dark mt-0.5">{item.description}</p>
                    <p className="text-[13px] text-landing-light-muted mt-0.5">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="rounded-xl border border-landing-grid bg-landing-bg p-8 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-landing-dark text-landing-light mx-auto mb-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <h3 className="text-[20px] font-semibold text-landing-dark mb-2">Message sent!</h3>
                  <p className="text-[15px] text-landing-light-muted">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="rounded-xl border border-landing-grid bg-landing-bg p-6 sm:p-8 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <Label htmlFor="name" className="text-[14px] text-landing-dark">Name *</Label>
                      <Input id="name" name="name" required placeholder="Your name" className="bg-white" />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="email" className="text-[14px] text-landing-dark">Email *</Label>
                      <Input id="email" name="email" type="email" required placeholder="you@company.com" className="bg-white" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="company" className="text-[14px] text-landing-dark">Company</Label>
                    <Input id="company" name="company" placeholder="Your company name" className="bg-white" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="message" className="text-[14px] text-landing-dark">Message *</Label>
                    <Textarea id="message" name="message" required rows={5} placeholder="How can we help?" className="bg-white resize-none" />
                  </div>
                  <Button type="submit" disabled={submitting} className="w-full rounded-full bg-landing-dark text-landing-light hover:bg-landing-dark-subtle">
                    {submitting ? 'Sending...' : 'Send message'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
