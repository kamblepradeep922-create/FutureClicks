'use client';

import { useState } from 'react';
import {
  Phone, Mail, MapPin, Instagram, Facebook, Linkedin, Twitter, Youtube,
  ArrowRight, Send, CheckCircle2,
} from 'lucide-react';
import { agency, navLinks, services } from '@/lib/site-data';

const socials = [
  { icon: Instagram, href: agency.social.instagram, label: 'Instagram' },
  { icon: Facebook, href: agency.social.facebook, label: 'Facebook' },
  { icon: Linkedin, href: agency.social.linkedin, label: 'LinkedIn' },
  { icon: Twitter, href: agency.social.twitter, label: 'Twitter' },
  { icon: Youtube, href: agency.social.youtube, label: 'YouTube' },
];

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="relative overflow-hidden bg-brand-navy text-white">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[80%] -translate-x-1/2 rounded-full bg-brand-blue/5 blur-3xl" />

      <div className="container-px relative z-10 mx-auto max-w-7xl py-14 md:py-16">
        {/* Newsletter */}
        <div className="mb-12 grid gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm md:grid-cols-2 md:items-center md:p-10">
          <div>
            <h3 className="font-heading text-2xl font-bold text-white">
              Get Growth Tips in Your Inbox
            </h3>
            <p className="mt-2 text-sm text-white/60">
              Join 2,000+ local business owners getting weekly digital marketing insights. No spam, ever.
            </p>
          </div>
          <form onSubmit={subscribe} className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="h-12 flex-1 rounded-full border border-white/15 bg-white/5 px-5 text-sm text-white placeholder:text-white/40 focus:border-brand-blue focus:outline-none"
            />
            <button
              type="submit"
              className="group flex h-12 items-center justify-center gap-2 rounded-full bg-brand-blue px-6 text-sm font-semibold text-white transition-colors hover:bg-brand-blue-dark"
            >
              {subscribed ? (
                <><CheckCircle2 className="h-5 w-5" /> Subscribed!</>
              ) : (
                <>Subscribe <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /></>
              )}
            </button>
          </form>
        </div>

        {/* Links */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-brand-blue to-brand-cyan text-white">
                <span className="font-heading text-xl font-bold">F</span>
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-heading text-base font-bold tracking-wide">{agency.name}</span>
                <span className="font-heading text-xs font-medium tracking-[0.15em] text-brand-blue">DIGITAL AGENCY</span>
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              {agency.tagline}
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:border-brand-blue hover:bg-brand-blue hover:text-white"
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="group inline-flex items-center gap-1.5 text-sm text-white/60 transition-colors hover:text-brand-cyan">
                    <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:opacity-100" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
            <ul className="mt-5 space-y-3">
              {services.slice(0, 8).map((s) => (
                <li key={s.title}>
                  <a href="/#services" className="text-sm text-white/60 transition-colors hover:text-brand-cyan">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan" />
                <a href={agency.phoneHref} className="text-white/60 hover:text-brand-cyan">{agency.phone}</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan" />
                <a href={`mailto:${agency.email}`} className="text-white/60 hover:text-brand-cyan">{agency.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan" />
                <span className="text-white/60">{agency.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 sm:flex-row">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} {agency.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/50">
            <a href="/" className="hover:text-brand-cyan">Privacy Policy</a>
            <a href="/" className="hover:text-brand-cyan">Terms of Service</a>
            <a href="/" className="hover:text-brand-cyan">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
