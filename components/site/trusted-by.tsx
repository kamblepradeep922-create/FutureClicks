'use client';

import { BadgeCheck, Star, Briefcase } from 'lucide-react';
import { Reveal } from '@/components/shared/motion';
import { trustedBy } from '@/lib/site-data';

const iconMap: Record<string, typeof BadgeCheck> = {
  BadgeCheck,
  Star,
  Briefcase,
};

export function TrustedBy() {
  return (
    <section className="border-y border-brand-navy/10 bg-white py-10 md:py-12">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="mb-6 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-navy/40">
            Trusted & Recognized By
          </p>
        </Reveal>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {trustedBy.map((item, i) => {
            const Icon = iconMap[item.icon] ?? BadgeCheck;
            return (
              <Reveal
                key={item.label}
                delay={i * 0.08}
                className="flex items-center justify-center gap-2.5"
              >
                <Icon className="h-6 w-6 text-brand-blue" />
                <span className="font-heading text-sm font-semibold text-brand-navy/70 sm:text-base">
                  {item.label}
                </span>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
