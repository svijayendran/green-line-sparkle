import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { industriesContent } from '@/components/input_field/industries';

const Industries = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
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

      {/* Industries Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {industriesContent.industries.map((industry, index) => (
              <div key={index} className="bg-card p-8 rounded-lg border hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {industry.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {industry.description}
                </p>
                <ul className="space-y-2">
                  {industry.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Industries;