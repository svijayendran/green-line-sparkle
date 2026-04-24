import { motion } from 'framer-motion';
import { aboutConfig } from '@/components/input_field/about';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AbtHeroSection from '@/components/about_Hero';
import { Users, Target, Eye, Award, Crown, Database, Cpu, BarChart2, Palette, LineChart, Lightbulb, ShieldCheck, Handshake, Leaf } from 'lucide-react';

const sectionVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const About = () => {
  const { hero, mission, vision, values, team, stats } = aboutConfig;

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Navigation />
      <AbtHeroSection />

      <section className="pt-20 pb-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <motion.div
            className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-automation-green/10 blur-3xl"
            animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute top-10 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl"
            animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
            transition={{ duration: 17, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
            className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 items-end"
          >
            <div>
              <p className="text-base uppercase tracking-[0.22em] font-semibold text-automation-green mb-3">Who we are</p>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight mb-5">
                Building industrial intelligence
                <span className="block text-automation-green">with product-level precision.</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                {hero.description}
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <p className="text-base uppercase tracking-[0.22em] text-automation-green font-semibold mb-3">Why clients stay</p>
              <div className="space-y-3 text-sm text-foreground/90">
                <p>Founder-led delivery with strong execution ownership.</p>
                <p>Production-first engineering across AI, IoT, and analytics.</p>
                <p>Transparent delivery cadence with measurable outcomes.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="relative overflow-hidden rounded-xl border border-border bg-card px-4 py-5 text-center"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-automation-green/10 to-transparent"
                  animate={{ x: ['-130%', '130%'] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: index * 0.25 }}
                />
                <div className="relative">
                  <p className="text-3xl md:text-4xl font-bold text-foreground">{stat.number}</p>
                  <p className="text-xs md:text-sm uppercase tracking-wider text-muted-foreground mt-1">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
          {[
            { icon: Target, title: mission.title, desc: mission.description },
            { icon: Eye, title: vision.title, desc: vision.description }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, x: index === 0 ? -22 : 22 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55 }}
                className="group rounded-2xl border border-border bg-card p-7 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-automation-green/10">
                  <Icon className="h-6 w-6 text-automation-green" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{item.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="py-14 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
            className="mb-10"
          >
            <p className="text-base uppercase tracking-[0.22em] font-semibold text-automation-green mb-3">Principles</p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">How we think while building</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {values.map((value, index) => {
              const valueIconMap = {
                'Innovation': Lightbulb,
                'Quality': ShieldCheck,
                'Reliability': Handshake,
                'Sustainability': Leaf,
              };
              const ValueIcon = valueIconMap[value.title] ?? Award;
              return (
                <motion.article
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                  whileHover={{ y: -6 }}
                  className="rounded-2xl border border-border bg-background p-6 shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-automation-green/10">
                    <ValueIcon className="h-5 w-5 text-automation-green" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
            className="mb-10 text-center"
          >
            <p className="text-base uppercase tracking-[0.22em] font-semibold text-automation-green mb-3">Team</p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">{team.title}</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">{team.description}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {team.members.map((member, index) => {
              const roleIconMap = {
                'Chief Executive Officer': Crown,
                'Data Engineer & Deliverables Manager': Database,
                'Lead Automation Specialist & Control Systems Engineer': Cpu,
                'Data Analyst & Market Research Analyst': BarChart2,
                'Business Analyst & UX/UI Designer': Palette,
                'Business Intelligence Developer': LineChart,
              };
              const RoleIcon = roleIconMap[member.position] ?? Users;

              return (
                <motion.article
                  key={member.name}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6"
                >
                  <motion.div
                    className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-automation-green via-cyan-400 to-automation-green"
                    initial={{ x: '-100%' }}
                    whileInView={{ x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: index * 0.05 }}
                  />
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-automation-green/10 shrink-0">
                      <RoleIcon className="h-6 w-6 text-automation-green" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                      <p className="text-sm font-medium text-automation-green mt-1">{member.position}</p>
                      {member.experience && (
                        <p className="text-sm text-muted-foreground mt-2">{member.experience}</p>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;