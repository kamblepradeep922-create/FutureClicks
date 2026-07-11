'use client';

import { useState, FormEvent } from 'react';
import { Send, CheckCircle2, Loader2, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { agency } from '@/lib/site-data';
import { cn } from '@/lib/utils';
import { supabase } from '@/lib/supabase-client';

type Status = 'idle' | 'loading' | 'success' | 'error';
type Errors = Partial<Record<'name' | 'email' | 'phone' | 'message', string>>;

export function IndustryContactForm({ industryName }: { industryName: string }) {
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Errors>({});
  const [form, setForm] = useState({ name: '', business: '', email: '', phone: '', message: '' });
  const validate = (): Errors => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!form.email.trim()) {
      e.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      e.email = 'Please enter a valid email';
    }
    if (!form.phone.trim()) {
      e.phone = 'Please enter your phone number';
    } else if (!/^[+]?[\d\s-]{8,15}$/.test(form.phone.trim())) {
      e.phone = 'Please enter a valid phone number';
    }
    if (!form.message.trim()) e.message = 'Please tell us about your project';
    return e;
  };

  const handleSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    setStatus('loading');
    try {
      const { error: insertError } = await supabase.from('leads').insert({
        name: form.name.trim(),
        business: form.business.trim() || null,
        email: form.email.trim(),
        phone: form.phone.trim(),
        service: null,
        message: form.message.trim(),
        industry: industryName,
      });
      if (insertError) throw insertError;
      setStatus('success');
      setForm({ name: '', business: '', email: '', phone: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
    }
  };

  const update = (key: keyof typeof form, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key as keyof Errors]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const whatsappHref = `https://wa.me/${agency.whatsapp}?text=${encodeURIComponent(
    `Hi! I run a ${industryName} business and I'd like to discuss a website.`
  )}`;

  return (
    <div className="rounded-3xl border border-brand-navy/10 bg-white p-6 shadow-soft sm:p-8">
      <h3 className="font-heading text-xl font-bold text-brand-navy">Get Your Free Consultation</h3>
      <p className="mt-2 text-sm text-brand-navy/60">
        Tell us about your {industryName.toLowerCase()} business and we will get back to you within 24 hours.
      </p>
      <form onSubmit={handleSubmit} noValidate className="mt-6">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Full Name *" error={errors.name}>
            <Input
              value={form.name}
              onChange={(e) => update('name', e.target.value)}
              placeholder="Your name"
              className={inputClass(!!errors.name)}
            />
          </Field>
          <Field label="Business Name">
            <Input
              value={form.business}
              onChange={(e) => update('business', e.target.value)}
              placeholder="Your business"
              className={inputClass(false)}
            />
          </Field>
        </div>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <Field label="Email *" error={errors.email}>
            <Input
              type="email"
              value={form.email}
              onChange={(e) => update('email', e.target.value)}
              placeholder="you@example.com"
              className={inputClass(!!errors.email)}
            />
          </Field>
          <Field label="Phone *" error={errors.phone}>
            <Input
              type="tel"
              value={form.phone}
              onChange={(e) => update('phone', e.target.value)}
              placeholder="+91 98765 43210"
              className={inputClass(!!errors.phone)}
            />
          </Field>
        </div>
        <div className="mt-5">
          <Field label="Message *" error={errors.message}>
            <Textarea
              value={form.message}
              onChange={(e) => update('message', e.target.value)}
              placeholder="Tell us about your business and what you need..."
              rows={5}
              className={inputClass(!!errors.message)}
            />
          </Field>
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button
            type="submit"
            disabled={status === 'loading'}
            className="group h-12 flex-1 rounded-full bg-brand-blue px-7 text-base font-semibold text-white hover:bg-brand-blue-dark disabled:opacity-70"
          >
            {status === 'loading' ? (
              <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...</>
            ) : (
              <><Send className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" /> Send Message</>
            )}
          </Button>
          <Button
            type="button"
            asChild
            variant="outline"
            className="h-12 rounded-full border-[#25D366] bg-[#25D366]/10 px-6 text-base font-semibold text-[#1a8d4d] hover:bg-[#25D366]/20"
          >
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp
            </a>
          </Button>
        </div>
        {status === 'success' && (
          <p className="mt-4 flex items-center gap-2 rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
            <CheckCircle2 className="h-5 w-5" />
            Thank you! We will be in touch within 24 hours.
          </p>
        )}
        {status === 'error' && (
          <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
            Something went wrong. Please try again or call us directly.
          </p>
        )}
      </form>
    </div>
  );
}

function inputClass(hasError: boolean) {
  return cn(
    'h-12 rounded-xl border-brand-navy/15 bg-brand-gray/50 text-brand-navy placeholder:text-brand-navy/40 focus-visible:ring-brand-blue',
    hasError && 'border-red-400'
  );
}

function Field({
  label, error, children,
}: {
  label: string; error?: string; children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-brand-navy">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-500">{error}</span>}
    </label>
  );
}
