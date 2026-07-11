'use client';

import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { SectionHeading } from '@/components/shared/section-heading';
import { StaggerGroup, StaggerItem } from '@/components/shared/motion';
import { blogPosts } from '@/lib/site-data';

export function BlogPreview() {
  return (
    <section id="blog" className="section-py bg-white">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Blog"
          title="Insights & Growth Tips"
          description="Practical advice on web design, SEO, and digital marketing to help your local business grow."
        />

        <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-3">
          {blogPosts.map((post) => (
            <StaggerItem key={post.id} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-brand-navy/10 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-luxury">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-brand-blue px-3 py-1 text-xs font-semibold text-white">
                    {post.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-3 text-xs text-brand-navy/50">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="mt-3 font-heading text-lg font-semibold text-brand-navy transition-colors group-hover:text-brand-blue">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-navy/60">
                    {post.excerpt}
                  </p>
                  <a
                    href="/#blog"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-blue"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
