'use client';

import {
  Sofa, Calculator, Zap, Wrench, Sparkles, Shirt, Scissors, Dumbbell,
  FlaskConical, GraduationCap, PartyPopper, Printer, Factory,
  ArrowRight, type LucideIcon,
} from 'lucide-react';
import Link from 'next/link';
import { SectionHeading } from '@/components/shared/section-heading';
import { StaggerGroup, StaggerItem } from '@/components/shared/motion';
import { industries } from '@/lib/industries';

const iconMap: Record<string, LucideIcon> = {
  Sofa, Calculator, Zap, Wrench, Sparkles, Shirt, Scissors, Dumbbell,
  FlaskConical, GraduationCap, PartyPopper, Printer, Factory,
};

export function Industries() {
  return (
    <section id="industries" className="section-py bg-white">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Websites Built for Your Industry"
          description="We understand the unique challenges of each industry and build websites that solve them. Explore our industry-specific solutions."
        />

        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {industries.map((industry) => {
            const Icon = iconMap[industry.iconName] ?? Sofa;
            return (
              <StaggerItem key={industry.slug}>
                <Link href={`/${industry.slug}`} className="group block h-full">
                  <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-brand-navy/10 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-blue/30 hover:shadow-luxury">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue/10 to-brand-cyan/10 text-brand-blue transition-all duration-300 group-hover:from-brand-blue group-hover:to-brand-cyan group-hover:text-white">
                      <Icon className="h-7 w-7" strokeWidth={1.6} />
                    </div>
                    <h3 className="font-heading text-base font-semibold text-brand-navy">
                      {industry.name}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-navy/60">
                      {industry.tagline}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-blue">
                      Learn More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </article>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
