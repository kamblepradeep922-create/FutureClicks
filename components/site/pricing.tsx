'use client';

import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { SectionHeading } from '@/components/shared/section-heading';
import { StaggerGroup, StaggerItem } from '@/components/shared/motion';
import { Button } from '@/components/ui/button';
import { pricingPlans } from '@/lib/site-data';
import { cn } from '@/lib/utils';

export function Pricing() {
  return (
    <section id="pricing" className="section-py bg-white">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple, Transparent Pricing"
          description="Choose the plan that fits your business. No hidden fees, no surprises — just results."
        />

        <StaggerGroup className="mt-14 grid gap-6 lg:grid-cols-3 lg:items-center">
          {pricingPlans.map((plan) => (
            <StaggerItem key={plan.name} className="h-full">
              <div
                className={cn(
                  'relative flex h-full flex-col rounded-3xl border p-7 transition-all duration-300',
                  plan.highlighted
                    ? 'border-brand-blue bg-brand-navy text-white shadow-luxury lg:scale-105'
                    : 'border-brand-navy/10 bg-white text-brand-navy hover:border-brand-blue/30 hover:shadow-luxury'
                )}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan px-4 py-1 text-xs font-semibold text-white">
                    <Sparkles className="h-3.5 w-3.5" />
                    Most Popular
                  </span>
                )}

                <h3 className="font-heading text-xl font-bold">{plan.name}</h3>
                <p className={cn('mt-2 text-sm', plan.highlighted ? 'text-white/70' : 'text-brand-navy/60')}>
                  {plan.description}
                </p>

                {/* <div className="mt-5 flex items-baseline gap-2">
                  <span className="font-heading text-4xl font-bold">{plan.price}</span>
                  <span className={cn('text-sm', plan.highlighted ? 'text-white/60' : 'text-brand-navy/50')}>
                    {plan.period}
                  </span>
                </div>  */}

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <span
                        className={cn(
                          'mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full',
                          plan.highlighted ? 'bg-brand-blue/30 text-brand-cyan' : 'bg-brand-blue/10 text-brand-blue'
                        )}
                      >
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span className={plan.highlighted ? 'text-white/80' : 'text-brand-navy/70'}>{f}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={cn(
                    'mt-7 w-full rounded-full',
                    plan.highlighted
                      ? 'bg-brand-blue text-white hover:bg-brand-blue-dark'
                      : 'bg-brand-navy text-white hover:bg-brand-navy-light'
                  )}
                >
                  <a href="/#contact" className="group">
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <p className="mt-8 text-center text-sm text-brand-navy/50">
          Need something custom? <a href="/#contact" className="font-medium text-brand-blue hover:underline">Get in touch</a> for a tailored quote.
        </p>
      </div>
    </section>
  );
}
