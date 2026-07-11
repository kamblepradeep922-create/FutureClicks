'use client';

import { useState, useCallback, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionHeading } from '@/components/shared/section-heading';
import { Reveal } from '@/components/shared/motion';
import { testimonials } from '@/lib/site-data';
import { cn } from '@/lib/utils';

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const count = testimonials.length;

  const go = useCallback(
    (dir: number) => setIndex((cur) => (cur + dir + count) % count),
    [count]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') go(-1);
      if (e.key === 'ArrowRight') go(1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go]);

  return (
    <section id="testimonials" className="section-py bg-brand-gray">
      <div className="container-px mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Clients Say"
          description="Real results from real local businesses we have helped grow online."
        />

        <Reveal className="mt-12">
          <div className="relative overflow-hidden rounded-3xl border border-brand-navy/10 bg-white p-8 shadow-soft sm:p-12">
            <Quote className="absolute right-8 top-8 h-16 w-16 text-brand-blue/10" />

            <div className="relative">
              {testimonials.map((t, i) => (
                <figure
                  key={t.name}
                  className={cn(
                    'transition-all duration-500',
                    i === index ? 'block opacity-100' : 'hidden opacity-0'
                  )}
                >
                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, s) => (
                      <Star key={s} className="h-5 w-5 fill-brand-blue text-brand-blue" />
                    ))}
                  </div>
                  <blockquote className="mt-5 text-lg leading-relaxed text-brand-navy/80 sm:text-xl">
                    &ldquo;{t.text}&rdquo;
                  </blockquote>
                  <figcaption className="mt-7 flex items-center gap-4">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="h-14 w-14 rounded-full object-cover ring-2 ring-brand-blue/30"
                      loading="lazy"
                    />
                    <div>
                      <p className="font-heading text-base font-semibold text-brand-navy">
                        {t.name}
                      </p>
                      <p className="text-sm text-brand-blue">{t.business} · {t.role}</p>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>

            {/* Controls */}
            <div className="mt-8 flex items-center justify-between">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={cn(
                      'h-2 rounded-full transition-all duration-300',
                      i === index ? 'w-8 bg-brand-blue' : 'w-2 bg-brand-navy/20 hover:bg-brand-navy/40'
                    )}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => go(-1)}
                  aria-label="Previous testimonial"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-navy/15 text-brand-navy transition-colors hover:bg-brand-navy/5"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => go(1)}
                  aria-label="Next testimonial"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-navy/15 text-brand-navy transition-colors hover:bg-brand-navy/5"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
