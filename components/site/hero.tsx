'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Star, TrendingUp, Eye, MousePointerClick, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const easeOut = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-gray via-white to-white pt-20 md:pt-24">
      {/* Animated blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-blob absolute -left-20 top-10 h-72 w-72 rounded-full bg-brand-blue/20 blur-3xl" />
        <div className="animate-blob absolute right-0 top-40 h-80 w-80 rounded-full bg-brand-cyan/20 blur-3xl" style={{ animationDelay: '4s' }} />
        <div className="animate-blob absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-brand-blue/10 blur-3xl" style={{ animationDelay: '8s' }} />
      </div>

      {/* Grid pattern */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />

      <div className="container-px relative z-10 mx-auto max-w-7xl pb-20 pt-12 md:pb-28 md:pt-16">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left: Content */}
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easeOut }}
              className="inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-brand-blue/5 px-4 py-1.5 text-xs font-semibold text-brand-blue"
            >
              <span className="flex h-2 w-2 rounded-full bg-brand-blue animate-pulse" />
              Trusted by 50+ local businesses
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeOut, delay: 0.08 }}
              className="mt-5 font-heading text-4xl font-bold leading-[1.1] text-brand-navy text-balance sm:text-5xl lg:text-[3.5rem]"
            >
              Grow Your Local Business with{' '}
              <span className="text-gradient">High-Converting Websites</span> & Digital Marketing
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeOut, delay: 0.16 }}
              className="mt-6 text-base leading-relaxed text-brand-navy/70 sm:text-lg"
            >
              We help local businesses generate more leads, rank higher on Google, and convert more visitors into customers through stunning websites and proven digital marketing strategies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeOut, delay: 0.24 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button
                asChild
                size="lg"
                className="group rounded-full bg-brand-blue px-7 text-base font-semibold text-white shadow-luxury hover:bg-brand-blue-dark"
              >
                <a href="/#contact">
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="group rounded-full border-brand-navy/20 bg-white px-7 text-base font-semibold text-brand-navy hover:bg-brand-navy/5"
              >
                <a href="/#portfolio">View Portfolio</a>
              </Button>
            </motion.div>

            {/* Mini stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-brand-navy/60"
            >
              <span className="flex items-center gap-1.5">
                <Star className="h-4 w-4 fill-brand-blue text-brand-blue" />
                4.9/5 rating
              </span>
              <span className="flex items-center gap-1.5">
                <TrendingUp className="h-4 w-4 text-brand-blue" />
                100+ projects delivered
              </span>
              <span className="flex items-center gap-1.5">
                <Search className="h-4 w-4 text-brand-blue" />
                #1 on Google
              </span>
            </motion.div>
          </div>

          {/* Right: Animated mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: easeOut, delay: 0.2 }}
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
          >
            <BrowserMockup />

            {/* Floating analytics card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: easeOut }}
              className="absolute -left-4 top-1/3 z-20 hidden rounded-2xl border border-brand-navy/10 bg-white p-4 shadow-luxury sm:block"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                  <Eye className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs text-brand-navy/60">Monthly Visitors</p>
                  <p className="font-heading text-lg font-bold text-brand-navy">12,450</p>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-1 text-xs font-medium text-green-600">
                <TrendingUp className="h-3 w-3" />
                +34% this month
              </div>
            </motion.div>

            {/* Floating SEO ranking card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: easeOut }}
              className="absolute -right-4 bottom-12 z-20 hidden rounded-2xl border border-brand-navy/10 bg-white p-4 shadow-luxury sm:block"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-cyan/10 text-brand-cyan">
                  <Search className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs text-brand-navy/60">Google Ranking</p>
                  <p className="font-heading text-lg font-bold text-brand-navy">#1</p>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-1 text-xs font-medium text-green-600">
                <TrendingUp className="h-3 w-3" />
                Up 12 positions
              </div>
            </motion.div>

            {/* Floating conversion card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1, ease: easeOut }}
              className="absolute -bottom-4 left-1/4 z-20 hidden rounded-2xl border border-brand-navy/10 bg-white p-4 shadow-luxury md:block"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/10 text-green-600">
                  <MousePointerClick className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs text-brand-navy/60">Conversion Rate</p>
                  <p className="font-heading text-lg font-bold text-brand-navy">8.2%</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function BrowserMockup() {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      className="relative overflow-hidden rounded-2xl border border-brand-navy/10 bg-white shadow-luxury"
    >
      {/* Browser bar */}
      <div className="flex items-center gap-2 border-b border-brand-navy/10 bg-brand-gray px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
        </div>
        <div className="ml-3 flex-1">
          <div className="h-7 rounded-md bg-white px-3 py-1.5 text-xs text-brand-navy/40">
            https://yourbusiness.com
          </div>
        </div>
      </div>

      {/* Website content */}
      <div className="relative aspect-[4/3] bg-gradient-to-br from-brand-blue/5 to-brand-cyan/5 p-5">
        {/* Hero area */}
        <div className="space-y-3">
          <div className="h-3 w-20 rounded-full bg-brand-blue/30" />
          <div className="h-6 w-3/4 rounded-md bg-brand-navy/15" />
          <div className="h-6 w-2/3 rounded-md bg-brand-navy/10" />
          <div className="h-3 w-full rounded bg-brand-navy/8" />
          <div className="h-3 w-5/6 rounded bg-brand-navy/8" />
        </div>

        {/* CTA button */}
        <motion.div
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="mt-4 h-9 w-32 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan"
        />

        {/* Cards row */}
        <div className="mt-5 grid grid-cols-3 gap-3">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
              className="rounded-xl border border-brand-navy/10 bg-white p-3"
            >
              <div className="h-8 w-8 rounded-lg bg-brand-blue/15" />
              <div className="mt-2 h-2 w-full rounded bg-brand-navy/10" />
              <div className="mt-1.5 h-2 w-3/4 rounded bg-brand-navy/8" />
            </motion.div>
          ))}
        </div>

        {/* Animated chart */}
        <div className="mt-4 rounded-xl border border-brand-navy/10 bg-white p-3">
          <div className="mb-2 h-2 w-16 rounded bg-brand-navy/15" />
          <div className="flex h-16 items-end gap-1.5">
            {[40, 55, 45, 70, 60, 85, 75, 95].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.8, delay: 0.5 + i * 0.08, ease: easeOut }}
                className="flex-1 rounded-t bg-gradient-to-t from-brand-blue to-brand-cyan"
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
