'use client';

import { useEffect, useState } from 'react';
import { Menu, X, Phone, MessageCircle, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { navLinks, agency } from '@/lib/site-data';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const whatsappHref = `https://wa.me/${agency.whatsapp}?text=${encodeURIComponent(agency.whatsappMessage)}`;

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'glass border-b border-brand-navy/10 shadow-soft'
          : 'bg-transparent'
      )}
    >
      <nav className="container-px mx-auto flex h-16 max-w-7xl items-center justify-between md:h-20">
        {/* Logo */}
        <a href="/" className="group flex items-center gap-2.5" aria-label={`${agency.name} home`}>
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-blue to-brand-cyan text-white transition-transform duration-300 group-hover:scale-105 md:h-10 md:w-10">
            <span className="font-heading text-lg font-bold md:text-xl">F</span>
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-heading text-sm font-bold tracking-wide text-brand-navy md:text-base">
              {agency.name}
            </span>
            <span className="font-heading text-[10px] font-medium tracking-[0.15em] text-brand-blue md:text-xs">
              DIGITAL AGENCY
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative px-3.5 py-2 text-sm font-medium text-brand-navy/70 transition-colors hover:text-brand-navy"
              >
                {link.label}
                <span className="absolute inset-x-3.5 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-brand-blue transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-2.5 lg:flex">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366]/10 text-[#1a8d4d] transition-colors hover:bg-[#25D366]/20"
            aria-label="WhatsApp"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
          <Button
            asChild
            className="rounded-full bg-brand-blue px-5 text-white hover:bg-brand-blue-dark"
          >
            <a href="/#contact">Book Consultation</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-brand-navy transition-colors hover:bg-brand-navy/5 lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-brand-navy/10 bg-white lg:hidden"
          >
            <div className="container-px mx-auto flex max-w-7xl flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between rounded-lg px-4 py-3 text-base font-medium text-brand-navy/80 transition-colors hover:bg-brand-blue/5 hover:text-brand-navy"
                >
                  {link.label}
                  <ChevronRight className="h-4 w-4 text-brand-navy/30 transition-transform group-hover:translate-x-0.5" />
                </a>
              ))}
              <div className="mt-3 flex flex-col gap-3 border-t border-brand-navy/10 pt-4">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-[#25D366]/10 py-3 text-sm font-semibold text-[#1a8d4d]"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </a>
                <Button
                  asChild
                  className="rounded-full bg-brand-blue px-5 text-white hover:bg-brand-blue-dark"
                >
                  <a href="/#contact" onClick={() => setOpen(false)}>
                    Book Consultation
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
