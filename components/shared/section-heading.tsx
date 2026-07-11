'use client';

import { Reveal } from '@/components/shared/motion';
import { cn } from '@/lib/utils';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        'max-w-2xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            'inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em]',
            dark
              ? 'bg-brand-blue/15 text-brand-cyan'
              : 'bg-brand-blue/10 text-brand-blue'
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'mt-5 font-heading text-3xl font-bold leading-tight text-balance sm:text-4xl md:text-[2.75rem]',
          dark ? 'text-white' : 'text-brand-navy'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-5 text-base leading-relaxed sm:text-lg',
            dark ? 'text-white/70' : 'text-brand-navy/70'
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
