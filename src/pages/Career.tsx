import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { careerPageData } from '@/components/input_field/career.js';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Career = () => {
  const { hero, whyJoinUs, openPositions, applicationProcess, contact } = careerPageData;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground variant="tech" />
      <Navigation />
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-automation-dark/60 z-10"></div>
        <div className="container mx-auto px-4 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-automation-green-light bg-clip-text text-transparent">
              {hero.title}
            </h1>
            <h2 className="text-2xl md:text-3xl mb-8 text-automation-green-light">
              {hero.subtitle}
            </h2>
            <p className="text-xl mb-10 text-gray-200 max-w-2xl mx-auto">
              {hero.description}
            </p>
            <Button 
              size="lg" 
              onClick={() => scrollToSection('positions')}
              className="bg-automation-green hover:bg-automation-green-light text-white px-8 py-4 text-lg shadow-glow hover:shadow-elegant transition-all duration-300"
            >
              {hero.ctaText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section id="why-join" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {whyJoinUs.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {whyJoinUs.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyJoinUs.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Card className="h-full hover:shadow-card transition-all duration-300 bg-gradient-card border-automation-green/20">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 bg-automation-green/10 rounded-full w-fit group-hover:bg-automation-green/20 transition-colors">
                      <benefit.icon className="h-8 w-8 text-automation-green" />
                    </div>
                    <CardTitle className="text-xl text-foreground">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="positions" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {openPositions.title}
            </h2>
            <p className="text-xl text-muted-foreground">
              {openPositions.subtitle}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {openPositions.jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-card transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <CardTitle className="text-2xl text-foreground">{job.title}</CardTitle>
                        <CardDescription className="text-lg text-automation-green font-medium">
                          {job.department}
                        </CardDescription>
                      </div>
                      <Badge variant="secondary" className="bg-automation-green/10 text-automation-green">
                        {job.type}
                      </Badge>
                    </div>
                    <div className="flex gap-2 text-sm text-muted-foreground">
                      <span>📍 {job.location}</span>
                      <span>⏱️ {job.experience}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{job.description}</p>
                    <Separator className="my-4" />
                    <div>
                      <h4 className="font-semibold mb-2 text-foreground">Requirements:</h4>
                      <ul className="space-y-1">
                        {job.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-automation-green mt-0.5 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-automation-green hover:bg-automation-green-light">
                      Apply Now
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section id="process" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {applicationProcess.title}
            </h2>
            <p className="text-xl text-muted-foreground">
              {applicationProcess.subtitle}
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {applicationProcess.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-6 mb-8 last:mb-0"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-automation-green rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-careers" className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{contact.title}</h2>
            <p className="text-xl mb-8">{contact.subtitle}</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-lg">
              <div>
                <strong>Email:</strong> {contact.email}
              </div>
              <div>
                <strong>Phone:</strong> {contact.phone}
              </div>
            </div>
            <p className="mt-6 text-automation-green-light">{contact.address}</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Career;