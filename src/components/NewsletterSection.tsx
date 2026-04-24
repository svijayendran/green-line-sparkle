import { motion } from 'framer-motion';
import { Mail, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      // Here you would typically send the email to your backend
    }
  };

  const benefits = [
    "Latest insights on automation trends",
    "Case studies and success stories",
    "Exclusive access to whitepapers",
    "Industry news and updates"
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-automation-dark to-automation-dark/90 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-automation-green/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary/20 text-automation-green border border-automation-green/30 rounded-full text-sm font-semibold backdrop-blur-sm">
                STAY CONNECTED
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get the Latest Insights
            </h2>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Join our newsletter to receive cutting-edge insights on automation, AI, and digital transformation trends that are shaping the future of industry.
            </p>

            {/* Benefits */}
            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-automation-green flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Newsletter Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              {!isSubscribed ? (
                <>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-automation-green/10 rounded-lg">
                      <Mail className="w-6 h-6 text-automation-green" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      Subscribe to Our Newsletter
                    </h3>
                  </div>

                  <form onSubmit={handleSubscribe} className="space-y-4">
                    <div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-automation-green focus:ring-1 focus:ring-automation-green transition-all duration-300"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-automation-green hover:bg-automation-green/90 text-black font-semibold py-3 rounded-lg flex items-center justify-center gap-2 group transition-all duration-300"
                    >
                      Subscribe Now
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>

                  <p className="text-xs text-gray-400 mt-4 text-center">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-automation-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-300">
                    You've been successfully subscribed to our newsletter.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;