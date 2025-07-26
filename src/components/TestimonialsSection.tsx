import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Manufacturing Director",
      company: "TechCorp Industries",
      content: "Green Line Automation transformed our production line completely. We've seen a 40% increase in efficiency and virtually eliminated downtime. Their team's expertise is unmatched.",
      rating: 5,
      image: "/api/placeholder/80/80"
    },
    {
      name: "Michael Chen",
      position: "Operations Manager",
      company: "Future Manufacturing",
      content: "The implementation was seamless, and the results exceeded our expectations. Our ROI was realized within 6 months, and the ongoing support has been exceptional.",
      rating: 5,
      image: "/api/placeholder/80/80"
    },
    {
      name: "Emily Rodriguez",
      position: "Plant Manager",
      company: "Innovation Works",
      content: "What impressed us most was their attention to detail and commitment to understanding our unique needs. The custom automation solution they delivered is simply outstanding.",
      rating: 5,
      image: "/api/placeholder/80/80"
    },
    {
      name: "David Thompson",
      position: "CTO",
      company: "Advanced Systems Ltd",
      content: "Working with Green Line Automation has been a game-changer. Their cutting-edge technology and professional approach helped us achieve automation goals we thought were impossible.",
      rating: 5,
      image: "/api/placeholder/80/80"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            What Our
            <span className="block bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders have to say 
            about their experience with Green Line Automation.
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <Card className="bg-gradient-card border-border/50 shadow-card relative overflow-hidden">
            <div className="absolute top-6 left-6 text-primary/20">
              <Quote size={48} />
            </div>
            <CardContent className="p-8 md:p-12 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  {/* Rating */}
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-lg md:text-xl text-foreground mb-8 leading-relaxed italic">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-lg">
                        {testimonials[currentTestimonial].name.charAt(0)}
                      </span>
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-foreground">
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonials[currentTestimonial].position}
                      </div>
                      <div className="text-sm text-primary font-medium">
                        {testimonials[currentTestimonial].company}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </CardContent>
          </Card>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center justify-center space-x-4 mb-8"
        >
          <Button
            variant="outline"
            size="sm"
            onClick={prevTestimonial}
            className="p-2 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
          >
            <ChevronLeft size={20} />
          </Button>
          
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-primary shadow-glow' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={nextTestimonial}
            className="p-2 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
          >
            <ChevronRight size={20} />
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          {[
            { number: '4.9/5', label: 'Average Rating' },
            { number: '250+', label: 'Happy Clients' },
            { number: '98%', label: 'Satisfaction Rate' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground text-sm uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;