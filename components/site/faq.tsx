'use client';

import { Plus } from 'lucide-react';
import { SectionHeading } from '@/components/shared/section-heading';
import { Reveal } from '@/components/shared/motion';
import { faqs as defaultFaqs } from '@/lib/site-data';

type FaqProps = {
  faqs?: typeof defaultFaqs;
  title?: string;
  description?: string;
  eyebrow?: string;
};

export function Faq({ faqs = defaultFaqs, title, description, eyebrow }: FaqProps) {
  return (
    <section id="faq" className="section-py bg-brand-gray">
      <div className="container-px mx-auto max-w-3xl">
        <SectionHeading
          eyebrow={eyebrow ?? 'FAQ'}
          title={title ?? 'Frequently Asked Questions'}
          description={description ?? 'Everything you need to know before getting started. Still have questions? Reach out and we will help.'}
        />

        <Reveal className="mt-10 flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FaqItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group rounded-2xl border border-brand-navy/10 bg-white p-5 shadow-soft transition-all duration-300 hover:border-brand-blue/30 hover:shadow-luxury sm:p-6 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
        <span className="font-heading text-base font-semibold text-brand-navy sm:text-lg">
          {question}
        </span>
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-blue/5 text-brand-blue transition-all duration-300 group-open:rotate-45 group-open:bg-brand-blue group-open:text-white">
          <Plus className="h-5 w-5" />
        </span>
      </summary>
      <p className="mt-4 text-sm leading-relaxed text-brand-navy/65 sm:text-base">
        {answer}
      </p>
    </details>
  );
}
