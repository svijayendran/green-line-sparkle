/*import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Car, 
  Brain, 
  Zap, 
  BarChart3,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';*/

const FeaturesSection = () => {
  {/*    Data moved to WhyChooseUsSection.tsx
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Car,
      title: "Automotive IoT Solutions",
      description: "Advanced IoT-enabled automotive systems that provide real-time monitoring, predictive maintenance, and enhanced vehicle performance.",
      features: ["Smart Vehicle Integration", "IoT Sensor Networks", "Remote Diagnostics"]
    },
    {
      icon: Brain,
      title: "AI-Powered Automation",
      description: "Cutting-edge artificial intelligence solutions that adapt to new technological trends and optimize automotive automation processes.",
      features: ["Machine Learning Algorithms", "Adaptive Controls", "Intelligent Decision Making"]
    },
    {
      icon: BarChart3,
      title: "Dashboard Analytics",
      description: "Comprehensive data visualization and analytics dashboards providing real-time insights into automotive performance and operational metrics.",
      features: ["Real-time Dashboards", "Performance Analytics", "Custom KPI Tracking"]
    },
    {
      icon: Zap,
      title: "Lightning Fast Performance",
      description: "Optimized algorithms and cutting-edge hardware deliver unmatched speed and efficiency in automotive automation processes.",
      features: ["Real-time Processing", "Edge Computing", "Microsecond Response Time"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  };

  return (
    <section id="features" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}{/* 
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium mb-4">
            Our Features
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose
            <span className="block bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Green Line Automation
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our specialized automotive automation solutions that integrate IoT and AI 
            technologies to drive innovation in the automotive industry.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group h-full bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-card hover:transform hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:animate-glow-pulse transition-all duration-300">
                        <feature.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {feature.description}
                      </p>
                      <ul className="space-y-2">
                        {feature.features.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center space-x-3">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-foreground text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                      {/*<div className="mt-6">
                        <button className="inline-flex items-center text-primary hover:text-primary-glow transition-colors duration-300 font-medium group/link">
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                        </button>
                      </div>*/}{/* 
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Card className="bg-gradient-primary p-8 border-0 shadow-elegant">
            <CardContent className="p-0">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Ready to Transform Your Operations?
              </h3>
              <p className="text-primary-foreground/90 mb-6 text-lg">
                Join hundreds of companies already benefiting from our automation solutions.
              </p>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Your Journey
              </button>
            </CardContent>
          </Card>
        </motion.div> */}{/* 
      </div>
    </section>
  );
  */}
  return null;
};

export default FeaturesSection;