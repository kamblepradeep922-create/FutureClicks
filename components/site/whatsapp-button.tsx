'use client';

import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { agency } from '@/lib/site-data';
import { cn } from '@/lib/utils';

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const href = `https://wa.me/${agency.whatsapp}?text=${encodeURIComponent(agency.whatsappMessage)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className={cn(
        'group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-[#25D366] py-3 pl-3 pr-4 text-white shadow-luxury transition-all duration-300 hover:scale-105 sm:bottom-6 sm:right-6',
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'
      )}
    >
      <span className="animate-float-pulse flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
        <MessageCircle className="h-6 w-6" fill="currentColor" />
      </span>
      <span className="hidden text-sm font-semibold sm:inline">Chat on WhatsApp</span>
    </a>
  );
}
