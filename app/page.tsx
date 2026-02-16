import Hero from '@/components/Hero';
import WhyChooseUs from '@/components/WhyChooseUs';
import FeaturesCards from '@/components/FeaturesCards';
import KeyFeatures from '@/components/KeyFeatures';
import DetailedFeatures from '@/components/DetailedFeatures';
import ValueProposition from '@/components/ValueProposition';
import ContactCards from '@/components/ContactCards';
import GlobalReach from '@/components/GlobalReach';
import ServiceKeywords from '@/components/ServiceKeywords';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Trusted Attestation Services in Pakistan | MOFA & Embassy Services",
  description: "Specialized in MOFA attestation, Apostille, HEC verification, and Embassy services. Fast, secure, and nationwide pickup and delivery in Pakistan.",
};

export default function Home() {
  return (
    <main className="bg-transparent">
      <Hero />
      <WhyChooseUs />
      <FeaturesCards />
      <KeyFeatures />
      <DetailedFeatures />
      <ValueProposition />
      <ContactCards />
      <GlobalReach />
      <ServiceKeywords />
      <Footer />
    </main>
  );
}
