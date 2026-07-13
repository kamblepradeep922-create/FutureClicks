import { Navbar } from '@/components/site/navbar';
import { Hero } from '@/components/site/hero';
import { TrustedBy } from '@/components/site/trusted-by';
import { Services } from '@/components/site/services';
import { Industries } from '@/components/site/industries';
import { Portfolio } from '@/components/site/portfolio';
import { WhyChooseUs } from '@/components/site/why-choose-us';
import { Process } from '@/components/site/process';
import { Testimonials } from '@/components/site/testimonials';
import { Pricing } from '@/components/site/pricing';
import { Faq } from '@/components/site/faq';
import { BlogPreview } from '@/components/site/blog-preview';
import { Contact } from '@/components/site/contact';
import { Footer } from '@/components/site/footer';
import { WhatsAppButton } from '@/components/site/whatsapp-button';
import { agency } from '@/lib/site-data';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: agency.name,
  description: agency.tagline,
  url: 'https://www.https://www.futureclicks.in',
  telephone: agency.phone,
  email: agency.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: agency.address,
    addressLocality: 'Mumbai',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '50',
  },
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Services />
        <Industries />
        <Portfolio />
        <WhyChooseUs />
        <Process />
        <Testimonials />
        <Pricing />
        <Faq />
        <BlogPreview />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
