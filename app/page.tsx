import Hero from '@/components/Hero';
import WhyChooseUs from '@/components/WhyChooseUs';
import FeaturesCards from '@/components/FeaturesCards';
import KeyFeatures from '@/components/KeyFeatures';
import DetailedFeatures from '@/components/DetailedFeatures';
import ValueProposition from '@/components/ValueProposition';
import ContactCards from '@/components/ContactCards';
import GlobalReach from '@/components/GlobalReach';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <WhyChooseUs />
      <FeaturesCards />
      <KeyFeatures />
      <DetailedFeatures />
      <ValueProposition />
      <ContactCards />
      <GlobalReach />
      <Footer />
    </main>
  );
}
