import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Award, TrendingUp, Globe, Clock, Target } from 'lucide-react';

// Parses "90%", "3x", "24/7", "99.2%" and counts up to the number prefix
const AnimatedCounter = ({ raw }: { raw: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!isInView) return;
    const match = raw.match(/^(\d+\.?\d*)(.*)/);
    if (!match) { setDisplay(raw); return; }
    const target = parseFloat(match[1]);
    const suffix = match[2];
    const isDecimal = raw.includes('.');
    const steps = 40;
    const intervalMs = 1200 / steps;
    const increment = target / steps;
    let current = 0;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      current = step >= steps ? target : current + increment;
      setDisplay(
        step >= steps
          ? raw
          : isDecimal
          ? `${current.toFixed(1)}${suffix}`
          : `${Math.floor(current)}${suffix}`
      );
      if (step >= steps) clearInterval(timer);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [isInView, raw]);

  return <span ref={ref}>{display}</span>;
};

const StatisticsSection = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-automation-green" />,
      value: "3x",
      label: "Faster Deployment with Automation",
      description: "Accelerated implementation and delivery timelines"
    },
    {
      icon: <Award className="w-8 h-8 text-automation-green" />,
      value: "90%",
      label: "Reusable Codebase Efficiency",
      description: "Maximized code reusability across projects"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-automation-green" />,
      value: "85%",
      label: "Efficiency Increase",
      description: "Average improvement in client operations"
    },
    {
      icon: <Globe className="w-8 h-8 text-automation-green" />,
      value: "100%",
      label: "Commitment to Innovation",
      description: "Delivering breakthrough automation solutions with full dedication"
    },
    {
      icon: <Clock className="w-8 h-8 text-automation-green" />,
      value: "24/7",
      label: "Support Available",
      description: "Round-the-clock technical assistance"
    },
    {
      icon: <Target className="w-8 h-8 text-automation-green" />,
      value: "99.2%",
      label: "Accuracy Rate",
      description: "In our AI and automation solutions"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-automation-dark via-automation-dark/95 to-automation-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-automation-green/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <span className="inline-block px-4 py-2 bg-primary/20 text-automation-green border border-automation-green/30 rounded-full text-sm font-semibold backdrop-blur-sm">
              OUR IMPACT IN NUMBERS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Driving Results That Matter
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-300 max-w-3xl mx-auto"
          >
            Our track record speaks for itself. Here's how we've transformed businesses across industries.
          </motion.p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-automation-green/10 rounded-lg group-hover:bg-automation-green/20 transition-colors duration-300">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-1">
                    <AnimatedCounter raw={stat.value} />
                  </div>
                  <div className="text-lg font-semibold text-automation-green">
                    {stat.label}
                  </div>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
      </div>
    </section>
  );
};

export default StatisticsSection;