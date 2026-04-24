import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Zap, ShieldCheck, Database, Factory, Cpu, Globe, Activity } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import IndusHeroSection from '@/components/industriales_Hero';
import { industriesContent } from '@/components/input_field/industries';
import industryIotImage from '@/assets/industry-iot.jpg';
import industryAiMlImage from '@/assets/industry-aiml.jpg';
import industryDataImage from '@/assets/industry-data.jpg';
import industryWebMobileImage from '@/assets/industry-webmobile.jpg';

const Industries = () => {
  const challengeCards = [
    {
      title: 'Unplanned downtime and operational blind spots',
      description: 'Teams react after failures happen because machine telemetry, alarms, and maintenance history live in disconnected systems.',
      impact: 'Downtime visibility and response speed',
      icon: Activity
    },
    {
      title: 'Manual workflows that slow decisions',
      description: 'Data handoffs between teams and tools create delays, errors, and repeated effort for high-value operations.',
      impact: 'Cycle-time reduction and throughput',
      icon: Zap
    },
    {
      title: 'Data exists but insight is delayed',
      description: 'Without unified pipelines and role-specific dashboards, strategic teams cannot act on trends in real time.',
      impact: 'Decision velocity and forecasting quality',
      icon: Database
    },
    {
      title: 'Scaling digital systems without governance risk',
      description: 'Growth introduces complexity in security, reliability, and compliance when architecture is not future-ready.',
      impact: 'Resilience, trust, and audit readiness',
      icon: ShieldCheck
    }
  ];

  const industryImages = [industryIotImage, industryAiMlImage, industryDataImage, industryWebMobileImage];
  const industryIcons = [Factory, Cpu, TrendingUp, Globe];
  const outcomes = [
    'Reduce manual intervention with intelligent automation workflows',
    'Improve response time through real-time alerts and actionable dashboards',
    'Increase solution reliability using scalable cloud-native architecture',
    'Strengthen executive visibility with KPI-driven operational reporting'
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Navigation />
      <IndusHeroSection />

      <section className="py-10 md:py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 md:mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Where transformation usually gets stuck</h2>
            <p className="mt-3 text-muted-foreground text-base md:text-lg max-w-3xl">
              We begin with operational blockers, then map each one to practical industry implementation paths.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {challengeCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.article
                  key={card.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="group rounded-2xl border border-border bg-card p-6 md:p-7 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <Icon className="h-6 w-6 text-automation-green mt-1" />
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-automation-green/80">Impact Area</span>
                  </div>
                  <h3 className="mt-4 text-xl md:text-2xl font-semibold text-card-foreground leading-snug">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{card.description}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                    {card.impact}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 md:mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">How each industry gets value</h2>
            <p className="mt-3 text-muted-foreground text-base md:text-lg max-w-3xl">
              Choose a domain and explore solution themes built around measurable outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 auto-rows-fr">
            {industriesContent.industries.map((industry, index) => {
              const Icon = industryIcons[index] ?? Factory;

              return (
                <motion.article
                  key={industry.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/70"
                >
                  <img
                    src={industryImages[index]}
                    alt={industry.title}
                    className="h-[390px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/25" />

                  <div className="absolute inset-0 p-5 text-white flex flex-col">
                    <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em]">
                      <Icon className="h-3.5 w-3.5" />
                      Focus Area
                    </div>

                    <div className="mt-auto">
                      <h3 className="text-xl font-semibold leading-tight">{industry.title}</h3>
                      <p className="mt-2 text-sm text-white/80 leading-relaxed">{industry.description}</p>
                      <ul className="mt-3 space-y-1.5 text-sm text-white/85 max-h-0 opacity-0 overflow-hidden transition-all duration-300 md:group-hover:max-h-40 md:group-hover:opacity-100">
                        {industry.features.slice(0, 3).map((feature) => (
                          <li key={feature} className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-automation-green" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto rounded-2xl border border-automation-green/20 bg-gradient-to-r from-automation-green/10 via-transparent to-automation-green/10 p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Expected outcomes across engagements</h2>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
            {outcomes.map((outcome) => (
              <div key={outcome} className="flex items-start gap-3 rounded-xl border border-border/80 bg-background/70 p-4">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-automation-green" />
                <p className="text-foreground/90 leading-relaxed">{outcome}</p>
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