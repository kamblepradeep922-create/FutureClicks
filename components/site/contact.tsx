'use client';

import { useState, FormEvent } from 'react';
import {
  Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2, Loader2,
  Instagram, Facebook, Linkedin, Twitter,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { agency } from '@/lib/site-data';
import { cn } from '@/lib/utils';
import { supabase } from '@/lib/supabase-client';

type Status = 'idle' | 'loading' | 'success' | 'error';
type Errors = Partial<Record<'name' | 'email' | 'phone' | 'message', string>>;

const serviceOptions = [
  'Website Design', 'Landing Page', 'WordPress Development', 'E-commerce',
  'SEO', 'Local SEO', 'Google Ads', 'Meta Ads', 'Social Media Marketing',
  'Email Marketing', 'WhatsApp Marketing', 'AI Automation', 'Brand Identity', 'Maintenance',
];

const socials = [
  { icon: Instagram, href: agency.social.instagram, label: 'Instagram' },
  { icon: Facebook, href: agency.social.facebook, label: 'Facebook' },
  { icon: Linkedin, href: agency.social.linkedin, label: 'LinkedIn' },
  { icon: Twitter, href: agency.social.twitter, label: 'Twitter' },
];

export function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Errors>({});
  const [form, setForm] = useState({
    name: '', business: '', email: '', phone: '', service: '', message: '', consent: false,
  });

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
        service: form.service || null,
        message: form.message.trim(),
        industry: null,
      });
      if (insertError) throw insertError;
      setStatus('success');
      setForm({ name: '', business: '', email: '', phone: '', service: '', message: '', consent: false });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
    }
  };

  const update = (key: keyof typeof form, value: string | boolean) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key as keyof Errors]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const whatsappHref = `https://wa.me/${agency.whatsapp}?text=${encodeURIComponent(agency.whatsappMessage)}`;

  return (
    <section id="contact" className="section-py bg-brand-gray">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left: Info */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">
              Get In Touch
            </span>
            <h2 className="mt-5 font-heading text-3xl font-bold leading-tight text-brand-navy text-balance sm:text-4xl">
              Let&apos;s Grow Your Business Together
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-navy/70">
              Book a free 30-minute consultation. We will review your current online presence, discuss your goals, and outline a growth plan — no obligation.
            </p>

            <div className="mt-8 space-y-4">
              <ContactRow icon={Phone} label="Phone" value={agency.phone} href={agency.phoneHref} />
              <ContactRow icon={Mail} label="Email" value={agency.email} href={`mailto:${agency.email}`} />
              <ContactRow icon={MapPin} label="Address" value={agency.address} />
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
                  <Clock className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-brand-navy/50">Business Hours</p>
                  <ul className="mt-1 space-y-0.5">
                    {agency.hours.map((h) => (
                      <li key={h.day} className="flex gap-3 text-sm text-brand-navy/80">
                        <span className="w-24 font-medium">{h.day}</span>
                        <span>{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="mt-7 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-navy/15 text-brand-navy/60 transition-all duration-300 hover:border-brand-blue hover:bg-brand-blue hover:text-white"
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Map */}
            <div className="mt-6 overflow-hidden rounded-2xl border border-brand-navy/10 shadow-soft">
              <iframe
                title="FutureClicks office location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30147.929555211358!2d72.92495730864675!3d19.173736836580872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8f20aff8003%3A0x162a4dae186b3659!2sMulund%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1783783792676!5m2!1sen!2sin"
                className="h-56 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right: Form */}
          <div className="rounded-3xl border border-brand-navy/10 bg-white p-6 shadow-soft sm:p-8">
            <form onSubmit={handleSubmit} noValidate>
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
                <Field label="Service Required">
                  <select
                    value={form.service}
                    onChange={(e) => update('service', e.target.value)}
                    className={cn(inputClass(false), 'h-12 cursor-pointer')}
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Message *" error={errors.message}>
                  <Textarea
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    placeholder="Tell us about your project and goals..."
                    rows={5}
                    className={inputClass(!!errors.message)}
                  />
                </Field>
              </div>

              <label className="mt-5 flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={form.consent}
                  onChange={(e) => update('consent', e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-brand-navy/20 text-brand-blue focus:ring-brand-blue"
                />
                <span className="text-sm text-brand-navy/60">
                  I agree to be contacted about my inquiry and accept the privacy policy.
                </span>
              </label>

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
        </div>
      </div>
    </section>
  );
}

function inputClass(hasError: boolean) {
  return cn(
    'h-12 rounded-xl border-brand-navy/15 bg-brand-gray/50 text-brand-navy placeholder:text-brand-navy/40 focus-visible:ring-brand-blue',
    hasError && 'border-red-400'
  );
}

function ContactRow({
  icon: Icon, label, value, href,
}: {
  icon: typeof Phone; label: string; value: string; href?: string;
}) {
  const content = (
    <>
      <p className="text-xs uppercase tracking-wider text-brand-navy/50">{label}</p>
      <p className="font-medium text-brand-navy">{value}</p>
    </>
  );
  return (
    <div className="flex items-start gap-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
        <Icon className="h-4 w-4" />
      </span>
      <div>
        {href ? (
          <a href={href} className="block hover:text-brand-blue">{content}</a>
        ) : (
          content
        )}
      </div>
    </div>
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
