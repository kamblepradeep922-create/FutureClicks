import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Navbar } from '@/components/site/navbar';
import { Footer } from '@/components/site/footer';
import { WhatsAppButton } from '@/components/site/whatsapp-button';
import { IndustryPage } from '@/components/site/industry-page';
import { industries, getIndustryBySlug } from '@/lib/industries';
import { agency } from '@/lib/site-data';

export const dynamicParams = false;

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const industry = getIndustryBySlug(params.slug);
  if (!industry) return {};

  const url = `https://www.futureclicks.agency/${industry.slug}`;
  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: industry.metaTitle,
      description: industry.metaDescription,
      url,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: industry.metaTitle,
      description: industry.metaDescription,
    },
  };
}

export default function IndustryRoute({ params }: { params: { slug: string } }) {
  const industry = getIndustryBySlug(params.slug);
  if (!industry) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${industry.name} Website Design`,
    description: industry.metaDescription,
    provider: {
      '@type': 'Organization',
      name: agency.name,
      url: 'https://www.futureclicks.agency',
      telephone: agency.phone,
    },
    areaServed: 'Mumbai, India',
    serviceType: `${industry.name} Website Design and Digital Marketing`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main>
        <IndustryPage industry={industry} />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
