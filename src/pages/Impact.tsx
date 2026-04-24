import Navigation from '@/components/Navigation';
import StatisticsSection from '@/components/StatisticsSection';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';

const Impact = () => {
  return (
    <div className="min-h-screen relative bg-background">
      <AnimatedBackground variant="default" />
      <Navigation />
      <main className="pt-24">
        <StatisticsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Impact;
