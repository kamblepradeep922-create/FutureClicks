'use client';

import { ArrowUpRight, TrendingUp } from 'lucide-react';
import { SectionHeading } from '@/components/shared/section-heading';
import { StaggerGroup, StaggerItem } from '@/components/shared/motion';
import { portfolioItems } from '@/lib/site-data';
import { cn } from '@/lib/utils';

export function Portfolio() {
  return (
    <section id="portfolio" className="section-py bg-brand-gray">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Our Work"
          title="Results That Speak for Themselves"
          description="A selection of websites and marketing campaigns we have built for local businesses across industries."
        />

        <StaggerGroup className="mt-14 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <StaggerItem
              key={item.id}
              className={cn(item.span ?? '', 'h-full')}
            >
              <article className="group relative h-full overflow-hidden rounded-2xl bg-brand-navy shadow-soft transition-all duration-300 hover:shadow-luxury">
                <img
                  src={item.image}
                  alt={`${item.title} — ${item.businessType} project by FutureClicks`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/95 via-brand-navy/40 to-transparent" />

                {/* Metric badge */}
                <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-green-500/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  <TrendingUp className="h-3 w-3" />
                  {item.metrics}
                </div>

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-xs font-medium uppercase tracking-wider text-brand-cyan">
                    {item.businessType}
                  </p>
                  <h3 className="mt-1 font-heading text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {item.services.map((s) => (
                      <span
                        key={s}
                        className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs text-white/80 backdrop-blur-sm"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <a
                    href="/#contact"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-white opacity-0 transition-all duration-300 group-hover:opacity-100"
                  >
                    View Project
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
