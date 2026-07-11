'use client';

import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const highlights = [
  'Innovative, space-optimised design',
  'Premium, verified materials',
  'Expert in-house craftsmanship',
  'Tailored to your lifestyle',
];

export function About() {
  return (
    <section id="about" className="section-py relative overflow-hidden bg-studio-bg">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Images */}
          <div className="reveal relative order-2 lg:order-1">
            <div className="relative grid grid-cols-2 gap-4">
              <div className="mt-8 overflow-hidden rounded-2xl shadow-luxury">
                <img
                  src="https://images.pexels.com/photos/6492403/pexels-photo-6492403.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Custom modular wardrobe interior"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-luxury">
                <img
                  src="https://images.pexels.com/photos/5967468/pexels-photo-5967468.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Premium modular kitchen"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 left-1/2 z-10 w-[85%] -translate-x-1/2 rounded-2xl border border-studio-charcoal/10 bg-white p-5 shadow-luxury sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-heading text-3xl font-bold text-studio-charcoal sm:text-4xl">
                    500<span className="text-studio-gold">+</span>
                  </p>
                  <p className="mt-1 text-xs font-medium text-studio-charcoal/60 sm:text-sm">
                    Projects delivered across Mumbai
                  </p>
                </div>
                <div className="hidden h-12 w-px bg-studio-charcoal/10 sm:block" />
                <div className="hidden sm:block">
                  <p className="font-heading text-3xl font-bold text-studio-charcoal sm:text-4xl">
                    10<span className="text-studio-gold">+</span>
                  </p>
                  <p className="mt-1 text-xs font-medium text-studio-charcoal/60">
                    Years of craftsmanship
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="reveal reveal-delay-1 order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-studio-gold/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-studio-wood">
              About Us
            </span>
            <h2 className="mt-5 font-heading text-3xl font-bold leading-tight text-studio-charcoal text-balance sm:text-4xl md:text-[2.75rem]">
              Creating Beautiful Spaces That Reflect Your Lifestyle
            </h2>
            <p className="mt-5 text-base leading-relaxed text-studio-charcoal/70 sm:text-lg">
              Modular Studio Mulund specialises in modular kitchens, wardrobes,
              home interiors, office interiors, and custom furniture. We combine
              innovative design, premium materials, and expert craftsmanship to
              deliver stylish and functional spaces tailored to each client&apos;s
              needs.
            </p>

            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-studio-gold" />
                  <span className="text-sm font-medium text-studio-charcoal/80 sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-9">
              <Button
                asChild
                size="lg"
                className="group rounded-full bg-studio-charcoal px-7 text-studio-bg hover:bg-studio-charcoal/90"
              >
                <a href="#portfolio">
                  Explore Our Work
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
