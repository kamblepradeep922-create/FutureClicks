'use client';

import {
  Palette, Search, Zap, Smartphone, TrendingUp, ShieldCheck,
  Settings, Wallet, Headset, type LucideIcon,
} from 'lucide-react';
import { SectionHeading } from '@/components/shared/section-heading';
import { StaggerGroup, StaggerItem } from '@/components/shared/motion';
import { whyChooseUs } from '@/lib/site-data';

const iconMap: Record<string, LucideIcon> = {
  Palette, Search, Zap, Smartphone, TrendingUp, ShieldCheck,
  Settings, Wallet, Headset,
};

export function WhyChooseUs() {
  return (
    <section id="about" className="section-py bg-brand-navy relative overflow-hidden">
      <div className="pointer-events-none absolute -top-20 right-0 h-96 w-96 rounded-full bg-brand-blue/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-20 h-80 w-80 rounded-full bg-brand-cyan/10 blur-3xl" />

      <div className="container-px relative z-10 mx-auto max-w-7xl">
        <SectionHeading
          dark
          eyebrow="Why Choose Us"
          title="The FutureClicks Advantage"
          description="We do not just build websites — we build growth engines for local businesses."
        />

        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item) => {
            const Icon = iconMap[item.icon] ?? Palette;
            return (
              <StaggerItem key={item.title}>
                <div className="group flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/40 hover:bg-white/[0.07]">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-blue/15 text-brand-cyan transition-all duration-300 group-hover:bg-brand-blue group-hover:text-white">
                    <Icon className="h-6 w-6" strokeWidth={1.6} />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-semibold text-white sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/60">
                      {item.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
