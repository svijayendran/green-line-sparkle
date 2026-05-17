import { useState } from 'react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { contactConfig } from '@/components/input_field/contact';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import { sendContactEmail } from '@/lib/emailService';

const Contact = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { hero, contactInfo, form, services } = contactConfig;
  const headquarters = contactInfo.locations?.[0];
  const { toast } = useToast();
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name || formData.name.trim().length < 2)
      newErrors.name = 'Please enter your full name (at least 2 characters).';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email))
      newErrors.email = 'Please enter a valid email address (e.g. example@company.com).';

    if (formData.phone) {
      const digitsOnly = formData.phone.replace(/[\s\-\(\)]/g, '');
      const intlFormat = /^\+\d{1,3}\d{6,14}$/;
      const localFormat = /^\d{7,15}$/;
      if (!intlFormat.test(digitsOnly) && !localFormat.test(digitsOnly))
        newErrors.phone = 'Enter a valid phone number (e.g. +91 9876543210 or 9876543210).';
    }


    return newErrors;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setIsSubmitting(true);

    try {
      await sendContactEmail({
        name: formData.name || '',
        email: formData.email || '',
        phone: formData.phone || '',
        company: formData.company || '',
        subject: formData.subject || '',
        message: formData.message || '',
      });

      toast({
        title: 'Message sent successfully!',
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({});
      setErrors({});
    } catch (error) {
      toast({
        title: 'Message failed',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <AnimatedBackground variant="particles" />
      <Navigation />

      {/* Hero Section */}
      <section id="contact" className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <motion.div
            className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-automation-green/10 blur-3xl"
            animate={{ x: [0, 70, 0], y: [0, 40, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute top-10 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl"
            animate={{ x: [0, -60, 0], y: [0, 28, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 items-end">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="text-left"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-automation-green/15 text-automation-green border border-automation-green/30 text-sm font-semibold uppercase tracking-[0.16em] mb-5">
                Get in touch
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight mb-5">
                {hero.title}
                <span className="block text-automation-green">Let's build your next automation win.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-700 mb-4 max-w-3xl leading-relaxed">
                {hero.subtitle}
              </p>
              <p className="text-base md:text-lg text-slate-600 max-w-3xl leading-relaxed">
                {hero.description}
              </p>
              <motion.div
                className="mt-7 h-[3px] w-48 rounded-full bg-gradient-to-r from-automation-green via-cyan-400 to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.25 }}
                style={{ transformOrigin: 'left' }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3"
            >
              {[
                { label: 'Average response', value: '< 24 hrs' },
                { label: 'Support cadence', value: 'Mon-Sat' },
                { label: 'Delivery focus', value: 'Outcome-first' }
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-slate-200 bg-white/95 px-4 py-4 shadow-sm">
                  <p className="text-xl font-bold text-black">{item.value}</p>
                  <p className="text-xs uppercase tracking-[0.12em] text-slate-500 mt-1">{item.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-white border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3 text-black">
                    <Send className="w-6 h-6 text-automation-green" />
                    {form.title}
                  </CardTitle>
                  <p className="text-slate-600">{form.description}</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {form.fields.map((field) => (
                      <div key={field.name} className="space-y-2">
                        <Label htmlFor={field.name} className="text-black font-semibold">
                          {field.label}
                          {field.required && <span className="text-red-500 ml-1">*</span>}
                        </Label>
                        {field.type === 'textarea' ? (
                          <Textarea
                            id={field.name}
                            name={field.name}
                            placeholder={field.placeholder}
                            value={formData[field.name] || ''}
                            onChange={handleInputChange}
                            rows={4}
                            className={`text-black placeholder:text-slate-400 ${errors[field.name] ? 'border-red-500' : ''}`}
                          />
                        ) : (
                          <Input
                            id={field.name}
                            name={field.name}
                            type={field.type}
                            placeholder={field.placeholder}
                            value={formData[field.name] || ''}
                            onChange={handleInputChange}
                            className={`text-black placeholder:text-slate-400 ${errors[field.name] ? 'border-red-500' : ''}`}
                          />
                        )}
                        {errors[field.name] && (
                          <p className="text-red-500 text-xs mt-1">{errors[field.name]}</p>
                        )}
                      </div>
                    ))}

                    <Button
                      type="submit"
                      className="w-full bg-automation-green hover:bg-automation-green/90 text-black font-semibold"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Business Headquarters */}
              {headquarters && (
                <Card className="bg-white border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl text-automation-green">Business Headquarters</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-automation-green mt-0.5" />
                      <span className="text-slate-700">{headquarters.address}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-automation-green" />
                      <span className="text-slate-700">{headquarters.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-automation-green" />
                      <span className="text-slate-700">{headquarters.email}</span>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Services */}
              <Card className="bg-white border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-black">{services.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-2">
                    {services.options.map((option, index) => (
                      <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-100 transition-colors">
                        <div className="w-2 h-2 bg-automation-green rounded-full" />
                        <span className="text-slate-700">{option}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;