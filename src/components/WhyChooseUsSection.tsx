import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  CheckCircle, Cog, Network, Factory, Cpu, Lightbulb, 
  Puzzle, Shield, Users, Car, Brain, BarChart3, Zap 
} from 'lucide-react';

const WhyChooseUsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const sections = [
    {
      id: 'iot-solutions',
      title: 'Automotive IoT Solutions',
      description: 'Advanced IoT-enabled automotive systems providing real-time monitoring and predictive maintenance.',
      icon: <Car className="w-8 h-8 text-automation-green" />,
      imagePrompt: 'Hyper-realistic 3D render of a connected vehicle with glowing digital sensor nodes and data streams',
      features: ['Smart Vehicle Integration', 'IoT Sensor Networks', 'Remote Diagnostics']
    },
    {
      id: 'ai-automation',
      title: 'AI-Powered Automation',
      description: 'Artificial intelligence solutions that adapt to technological trends and optimize automotive processes.',
      icon: <Brain className="w-8 h-8 text-automation-green" />,
      imagePrompt: 'Futuristic neural network glowing inside an automotive control unit, symbolizing machine learning and intelligence',
      features: ['Machine Learning Algorithms', 'Adaptive Controls', 'Intelligent Decision Making']
    },
    {
      id: 'analytics',
      title: 'Dashboard Analytics',
      description: 'Comprehensive data visualization providing real-time insights into automotive operational metrics.',
      icon: <BarChart3 className="w-8 h-8 text-automation-green" />,
      imagePrompt: 'High-tech digital dashboard with 3D charts and real-time data overlays in a modern factory setting',
      features: ['Real-time Dashboards', 'Performance Analytics', 'Custom KPI Tracking']
    },
      {
      id: 'performance',
      title: 'Lightning Fast Performance',
      description: 'Optimized algorithms and cutting-edge hardware delivering unmatched speed and microsecond response.',
      icon: <Zap className="w-8 h-8 text-automation-green" />,
      imagePrompt: 'Dynamic abstract visualization of high-speed data transmission and lightning-fast processing signals',
      features: ['Real-time Processing', 'Edge Computing', 'Microsecond Response Time']
    },
    {
      id: 'why-us',
      title: 'Why Choose Us',
      description: 'Trust and customer satisfaction are at the heart of everything we do',
      icon: <CheckCircle className="w-8 h-8" />,
      imagePrompt: 'Clean, modern illustration showing a diverse group of professionals shaking hands, symbolizing trust and customer satisfaction, in a corporate/industrial automation setting',
      features: ['Proven track record', 'Customer-first approach', 'Industry expertise']
    },
    {
      id: 'expertise',
      title: 'Expertise and Experience',
      description: 'Our engineers bring decades of combined experience in industrial automation',
      icon: <Cog className="w-8 h-8" />,
      imagePrompt: 'Flat vector illustration of engineers working on high-tech industrial automation machines, showcasing expertise and innovation',
      features: ['Certified professionals', 'Advanced technical skills', 'Continuous learning']
    },
    {
      id: 'integration',
      title: 'IT & OT Integration',
      description: 'Seamlessly connecting Information Technology with Operational Technology',
      icon: <Network className="w-8 h-8" />,
      imagePrompt: 'Modern isometric illustration of IT and OT systems connected by digital lines, symbolizing seamless integration, with factory machines and control screens',
      features: ['Unified systems', 'Real-time data flow', 'Enhanced visibility']
    },
    {
      id: 'smart-factory',
      title: 'Smart Factory Transformation',
      description: 'Leading the way to Industry 4.0 with connected, intelligent manufacturing',
      icon: <Factory className="w-8 h-8" />,
      imagePrompt: 'Animated visualization showing a traditional factory transforming into a smart, connected Industry 4.0 environment with sensors, robotics, and data dashboards',
      features: ['IoT integration', 'Predictive maintenance', 'Data-driven insights']
    },
    {
      id: 'cutting-edge',
      title: 'Cutting Edge Technology',
      description: 'Leveraging the latest in industrial automation and robotics',
      icon: <Cpu className="w-8 h-8" />,
      imagePrompt: 'Minimalist outline illustration of integrated circuits and robotic arms, symbolizing cutting-edge industrial automation and robotics',
      features: ['Latest innovations', 'Advanced robotics', 'AI-powered solutions']
    },
    {
      id: 'innovation',
      title: 'New Technology Adoption',
      description: 'Pioneering implementation of emerging industrial technologies',
      icon: <Lightbulb className="w-8 h-8" />,
      imagePrompt: 'Futuristic illustration of engineers implementing new industrial technologies inside a modern factory environment',
      features: ['Future-ready solutions', 'Innovation leadership', 'Technology partnerships']
    },
    {
      id: 'tailored',
      title: 'Tailored Solutions',
      description: 'Custom-designed systems that perfectly fit your unique business needs',
      icon: <Puzzle className="w-8 h-8" />,
      imagePrompt: 'Illustration of a custom puzzle piece fitting into a larger industrial system, symbolizing tailored solutions and ROI',
      features: ['Custom design', 'Business-specific solutions', 'Maximum ROI']
    },
    {
      id: 'quality',
      title: 'Unrivaled Quality & Service',
      description: 'Exceptional service and reliability in every project we deliver',
      icon: <Shield className="w-8 h-8" />,
      imagePrompt: 'Illustration of a checkmark and quality badge with industrial machines in the background, symbolizing exceptional service and reliability',
      features: ['Quality assurance', '24/7 support', 'Reliable performance']
    },
    {
      id: 'customer-centric',
      title: 'Customer-Centric Approach',
      description: 'Your success is our priority - focused on your growth and satisfaction',
      icon: <Users className="w-8 h-8" />,
      imagePrompt: 'Friendly illustration of support staff assisting customers in an industrial context, symbolizing customer focus and growth',
      features: ['Dedicated support', 'Partnership approach', 'Long-term relationships']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-background via-background/95 to-primary/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 text-automation-green bg-clip-text "
          >
            Why Choose Green Line Automation
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Discover our specialized automotive automation and IoT-driven excellence.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {sections.map((section) => (
            <motion.div key={section.id} variants={itemVariants}>
              <Card className="h-full group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-automation-green/30 hover:scale-105 bg-card/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-automation-green/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-automation-green/20 transition-colors">
                      <div className="text-automation-green">
                        {section.icon}
                      </div>
                    </div>
                    
                    {/* Visual Placeholder Section */}
                    <div className="w-full h-48 bg-gradient-to-br from-automation-green/10 to-transparent rounded-lg mb-4 flex items-center justify-center border border-border/30 overflow-hidden relative">
                       <div className="text-center p-4">
                        <div className="text-automation-green opacity-40 mb-2 flex justify-center">{section.icon}</div>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
                          Visual Reference
                        </p>
                        <p className="text-xs text-muted-foreground mt-1 italic line-clamp-2">
                          "{section.imagePrompt}"
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-automation-green transition-colors">
                    {section.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                    {section.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {section.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-automation-green mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={itemVariants}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-automation-green/10 via-transparent to-automation-green/10 rounded-2xl p-8 border border-automation-green/20 backdrop-blur-md">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              Ready to Transform Your Automotive Operations?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Complete your project handshake by February 20, 2026, and lead the way in Industry 4.0.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-automation-green text-white px-8 py-3 rounded-lg font-medium hover:bg-automation-green-light transition-colors shadow-lg"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get Started Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;