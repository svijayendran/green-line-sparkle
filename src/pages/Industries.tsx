import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { industriesContent } from '@/components/input_field/industries';
import IndusHeroSection from '@/components/industriales_Hero';
import industryIotImage from '@/assets/industry-iot.jpg';
import industryAiMlImage from '@/assets/industry-aiml.jpg';
import industryDataImage from '@/assets/industry-data.jpg';
import industryWebMobileImage from '@/assets/industry-webmobile.jpg';

const Industries = () => {
  return (


    <div className="min-h-screen bg-background relative">
      <Navigation />
      <IndusHeroSection />
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            {industriesContent.heroTitle}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
            {industriesContent.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Industries Alternating Layout */} 
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-24">
          {industriesContent.industries.map((industry, index) => {
            const industryImages = [
              industryIotImage,
              industryAiMlImage,
              industryDataImage,
              industryWebMobileImage
            ];
            
            const isEven = index % 2 === 1;
            
            return (
              <div key={index} className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
                {/* Content */}
                <div className="flex-1 space-y-6">
                  <h3 className="text-3xl lg:text-4xl font-bold text-foreground">
                    {industry.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {industry.description}
                  </p>
                  <div className="space-y-3">
                    {industry.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-foreground">
                        <span className="w-3 h-3 bg-primary rounded-full mr-4 flex-shrink-0"></span>
                        <span className="text-base">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Image */}
                <div className="flex-1">
                  <div className="relative overflow-hidden rounded-xl shadow-2xl">
                    <img
                      src={industryImages[index]}
                      alt={industry.title}
                      className="w-full h-[300px] lg:h-[400px] object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Industries;