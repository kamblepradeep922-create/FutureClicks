'use client';

import {
  Palette, LayoutTemplate, Code2, ShoppingCart, RefreshCw, Search,
  MapPin, Target, Megaphone, Share2, Mail, MessageCircle, Bot, Sparkles, Wrench,
  ArrowUpRight, type LucideIcon,
} from 'lucide-react';
import { SectionHeading } from '@/components/shared/section-heading';
import { StaggerGroup, StaggerItem } from '@/components/shared/motion';
import { services } from '@/lib/site-data';

const iconMap: Record<string, LucideIcon> = {
  Palette, LayoutTemplate, Code2, ShoppingCart, RefreshCw, Search,
  MapPin, Target, Megaphone, Share2, Mail, MessageCircle, Bot, Sparkles, Wrench,
};

export function Services() {
  return (
    <section id="services" className="section-py bg-brand-gray">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Our Services"
          title="Everything You Need to Grow Online"
          description="From stunning websites to data-driven marketing campaigns, we offer a full suite of digital services to help your business thrive."
        />

        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon] ?? Palette;
            return (
              <StaggerItem key={service.title}>
                <article className="group relative h-full overflow-hidden rounded-2xl border border-brand-navy/10 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-blue/30 hover:shadow-luxury">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue transition-all duration-300 group-hover:bg-brand-blue group-hover:text-white">
                    <Icon className="h-7 w-7" strokeWidth={1.6} />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-brand-navy">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-brand-navy/60">
                    {service.description}
                  </p>
                  <a
                    href="/#contact"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-blue opacity-0 transition-all duration-300 group-hover:opacity-100"
                  >
                    Learn More
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-blue/0 blur-2xl transition-all duration-500 group-hover:bg-brand-blue/10" />
                </article>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
