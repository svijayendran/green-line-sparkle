import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
//import FeaturesSection from '@/components/FeaturesSection';
import StatisticsSection from '@/components/StatisticsSection';
import FeaturedProjects from '@/components/FeaturedProjects';
import ServicesSection from '@/components/ServicesSection';
//import WhyChooseUsSection from '@/components/WhyChooseUsSection';
//import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground variant="default" />
      <Navigation />
      <HeroSection />
      <StatisticsSection />
      {/* <FeaturesSection /> */}
      <FeaturedProjects />
      <ServicesSection />
      {/* <WhyChooseUsSection /> */}
      {/* <TestimonialsSection /> */}
      <Footer />
    </div>
  );
};

export default Index;
