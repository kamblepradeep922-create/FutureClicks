'use client';

import { motion } from 'framer-motion';
import {
  Sofa, Calculator, Zap, Wrench, Sparkles, Shirt, Scissors, Dumbbell,
  FlaskConical, GraduationCap, PartyPopper, Printer, Factory,
  ArrowRight, CheckCircle2, AlertTriangle, Lightbulb, Star, Quote,
  type LucideIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/shared/section-heading';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/shared/motion';
import { IndustryContactForm } from '@/components/site/industry-contact-form';
import type { Industry } from '@/lib/industries';
import { Faq } from '@/components/site/faq';

const iconMap: Record<string, LucideIcon> = {
  Sofa, Calculator, Zap, Wrench, Sparkles, Shirt, Scissors, Dumbbell,
  FlaskConical, GraduationCap, PartyPopper, Printer, Factory,
};

const easeOut = [0.16, 1, 0.3, 1] as const;

export function IndustryPage({ industry }: { industry: Industry }) {
  const Icon = iconMap[industry.iconName] ?? Sofa;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-gray via-white to-white pt-28 md:pt-32">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="animate-blob absolute -left-20 top-10 h-72 w-72 rounded-full bg-brand-blue/20 blur-3xl" />
          <div className="animate-blob absolute right-0 top-40 h-80 w-80 rounded-full bg-brand-cyan/20 blur-3xl" style={{ animationDelay: '4s' }} />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />

        <div className="container-px relative z-10 mx-auto max-w-7xl pb-20 pt-8 md:pb-28">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easeOut }}
              className="inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-brand-blue/5 px-4 py-1.5 text-xs font-semibold text-brand-blue"
            >
              <Icon className="h-4 w-4" />
              {industry.name}
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeOut, delay: 0.08 }}
              className="mt-5 font-heading text-4xl font-bold leading-[1.1] text-brand-navy text-balance sm:text-5xl"
            >
              {industry.tagline}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeOut, delay: 0.16 }}
              className="mt-6 text-base leading-relaxed text-brand-navy/70 sm:text-lg"
            >
              {industry.overview}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeOut, delay: 0.24 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Button asChild size="lg" className="group rounded-full bg-brand-blue px-7 text-base font-semibold text-white shadow-luxury hover:bg-brand-blue-dark">
                <a href="#contact">
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-brand-navy/20 bg-white px-7 text-base font-semibold text-brand-navy hover:bg-brand-navy/5">
                <a href="#portfolio">View Our Work</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Challenges"
            title={`Challenges Faced by ${industry.name}`}
            description="We understand the unique obstacles your industry faces online. Here is what we commonly see."
          />
          <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industry.challenges.map((c, i) => (
              <StaggerItem key={i}>
                <div className="flex h-full gap-4 rounded-2xl border border-brand-navy/10 bg-brand-gray p-6">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-500">
                    <AlertTriangle className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-semibold text-brand-navy">{c.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-brand-navy/60">{c.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Solutions */}
      <section className="section-py bg-brand-gray">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Solutions"
            title="How Our Websites Solve These Challenges"
            description="We build solutions tailored to the specific needs of your industry."
          />
          <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industry.solutions.map((s, i) => (
              <StaggerItem key={i}>
                <div className="flex h-full gap-4 rounded-2xl border border-brand-navy/10 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-luxury">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                    <Lightbulb className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-semibold text-brand-navy">{s.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-brand-navy/60">{s.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Features */}
      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Features"
            title="Website Features We Recommend"
            description="The key features we include in every website we build for your industry."
          />
          <Reveal className="mx-auto mt-14 max-w-3xl">
            <div className="grid gap-3 sm:grid-cols-2">
              {industry.features.map((f, i) => (
                <div key={i} className="flex items-center gap-3 rounded-xl border border-brand-navy/10 bg-brand-gray p-4">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-blue" />
                  <span className="text-sm font-medium text-brand-navy/80">{f}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Portfolio */}
      {industry.portfolio.length > 0 && (
        <section id="portfolio" className="section-py bg-brand-gray">
          <div className="container-px mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Portfolio"
              title={`Our ${industry.shortName} Work`}
              description="See the results we have delivered for businesses like yours."
            />
            <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2">
              {industry.portfolio.map((p, i) => (
                <StaggerItem key={i}>
                  <article className="group overflow-hidden rounded-2xl bg-white shadow-soft transition-all duration-300 hover:shadow-luxury">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent" />
                      <span className="absolute right-4 top-4 rounded-full bg-green-500/90 px-3 py-1 text-xs font-semibold text-white">{p.result}</span>
                    </div>
                    <div className="p-5">
                      <h3 className="font-heading text-lg font-semibold text-brand-navy">{p.title}</h3>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>
      )}

      {/* Testimonials */}
      {industry.testimonials.length > 0 && (
        <section className="section-py bg-white">
          <div className="container-px mx-auto max-w-5xl">
            <SectionHeading eyebrow="Testimonials" title="What Clients Say" />
            <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2">
              {industry.testimonials.map((t, i) => (
                <StaggerItem key={i}>
                  <figure className="rounded-2xl border border-brand-navy/10 bg-brand-gray p-6">
                    <Quote className="h-8 w-8 text-brand-blue/20" />
                    <div className="mt-3 flex gap-1">
                      {Array.from({ length: t.rating }).map((_, s) => (
                        <Star key={s} className="h-4 w-4 fill-brand-blue text-brand-blue" />
                      ))}
                    </div>
                    <blockquote className="mt-3 text-sm leading-relaxed text-brand-navy/70">&ldquo;{t.text}&rdquo;</blockquote>
                    <figcaption className="mt-5 flex items-center gap-3">
                      <img src={t.image} alt={t.name} className="h-11 w-11 rounded-full object-cover" loading="lazy" />
                      <div>
                        <p className="font-heading text-sm font-semibold text-brand-navy">{t.name}</p>
                        <p className="text-xs text-brand-blue">{t.business}</p>
                      </div>
                    </figcaption>
                  </figure>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>
      )}

      {/* FAQ */}
      <Faq
        faqs={industry.faqs}
        eyebrow="FAQ"
        title={`${industry.shortName} Website FAQs`}
        description="Common questions about websites for your industry."
      />

      {/* Contact */}
      <section id="contact" className="section-py bg-brand-gray">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Get Started"
            title={`Ready to Grow Your ${industry.shortName} Business?`}
            description="Book a free consultation and let us show you how a high-converting website can transform your business."
          />
          <div className="mx-auto mt-12 max-w-2xl">
            <IndustryContactForm industryName={industry.shortName} />
          </div>
        </div>
      </section>
    </>
  );
}
