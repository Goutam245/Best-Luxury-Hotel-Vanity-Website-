import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/home/HeroSection';
import { BrandIntroSection } from '@/components/home/BrandIntroSection';
import { RoomsPreviewSection } from '@/components/home/RoomsPreviewSection';
import { ExperiencesSection } from '@/components/home/ExperiencesSection';
import { LocationSection } from '@/components/home/LocationSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { FinalCTASection } from '@/components/home/FinalCTASection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <BrandIntroSection />
        <RoomsPreviewSection />
        <ExperiencesSection />
        <LocationSection />
        <TestimonialsSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
