'use client';

import {
  Compass, Lightbulb, PenTool, Code2, CheckCircle, Rocket, LifeBuoy,
  type LucideIcon,
} from 'lucide-react';
import { SectionHeading } from '@/components/shared/section-heading';
import { Reveal } from '@/components/shared/motion';
import { processSteps } from '@/lib/site-data';

const iconMap: Record<string, LucideIcon> = {
  Compass, Lightbulb, PenTool, Code2, CheckCircle, Rocket, LifeBuoy,
};

export function Process() {
  return (
    <section id="process" className="section-py bg-white">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Our Process"
          title="A Proven Path from Idea to Launch"
          description="Our structured 7-step process ensures every project is delivered on time, on budget, and beyond expectations."
        />

        <div className="relative mt-16">
          {/* Connector line */}
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-brand-blue via-brand-cyan to-transparent md:left-0 md:right-0 md:top-[3.25rem] md:h-px md:w-full md:bg-gradient-to-r" />

          <ol className="grid gap-8 md:grid-cols-4 md:gap-x-6 md:gap-y-12 lg:grid-cols-7 lg:gap-x-4">
            {processSteps.map((step, i) => {
              const Icon = iconMap[step.icon] ?? Compass;
              return (
                <Reveal
                  key={step.step}
                  as="li"
                  delay={i * 0.06}
                  className="relative pl-14 md:pl-0"
                >
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-brand-blue bg-white text-brand-blue shadow-soft md:left-1/2 md:top-0 md:h-[3.25rem] md:w-[3.25rem] md:-translate-x-1/2">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </div>
                  <div className="md:mt-20 md:text-center lg:mt-24">
                    <span className="font-heading text-xs font-bold text-brand-blue/60">
                      STEP {step.step}
                    </span>
                    <h3 className="mt-1 font-heading text-base font-semibold text-brand-navy sm:text-lg">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-navy/60">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
