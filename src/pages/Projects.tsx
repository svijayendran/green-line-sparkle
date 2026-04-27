import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProjectHeroSection from '@/components/project_Hero';
import { projectsContent } from '@/components/input_field/projects';

import projectHmiImage from '@/assets/projects-hmi.png';
import projectHrImage from '@/assets/project-hr.png';
import projectAnalyticsImage from '@/assets/project-analytics.jpg';
import projectAutomationImage from '@/assets/project-automation.jpg';
import projectWebMobileImage from '@/assets/project-webmobile.jpg';
import projectAiMlImage from '@/assets/project-aiml.jpg';

const projectImages = [
  projectHmiImage,
  projectHrImage,
  projectAnalyticsImage,
  projectAutomationImage,
  projectWebMobileImage,
  projectAiMlImage
];

const projectAnchorIds = [
  'project-hmi',
  'project-hr',
  'project-analytics',
  'project-automation',
  'project-web-mobile',
  'project-ai-ml'
];

const projectHighlights = [
  [
    'Live diagnostics and operator-first control workflows',
    'Predictive maintenance alerts for faster intervention',
    'Safer traction system performance with real-time monitoring'
  ],
  [
    'Centralized employee data and attendance management',
    'Automated canteen meal tracking and allowance deductions',
    'Streamlined leave workflows and payroll processing'
  ],
  [
    'Unified KPI visibility from distributed plant systems',
    'Anomaly detection and trend forecasts in real time',
    'Decision-ready dashboards for operations and leadership'
  ],
  [
    'OCR + NLP powered document and form processing',
    'Automated validation, routing, and compliance checks',
    'High accuracy extraction with major manual effort reduction'
  ],
  [
    'Cross-platform architecture for web and mobile users',
    'Scalable backend services with secure integrations',
    'Enterprise-grade UX focused on operational speed'
  ],
  [
    'Predictive and conversational AI across workflows',
    'Computer vision modules for automated inspection',
    'Continuous model monitoring and optimization support'
  ]
];

const Projects = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { clientData, projects, heroSubtitle } = projectsContent;

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
      return;
    }

    const targetId = location.hash.replace('#', '');
    const timeoutId = window.setTimeout(() => {
      const target = document.getElementById(targetId);

      if (!target) {
        window.scrollTo(0, 0);
        return;
      }

      const offset = 120;
      const y = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }, 80);

    return () => window.clearTimeout(timeoutId);
  }, [location.pathname, location.hash]);

  const tickerData = clientData ? [...clientData, ...clientData] : [];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Navigation />

      <ProjectHeroSection />

      <section className="pt-20 pb-10 px-4 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none -z-10">
          <motion.div
            className="absolute -top-20 -left-16 w-80 h-80 rounded-full bg-automation-green/10 blur-3xl"
            animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute top-24 right-0 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl"
            animate={{ x: [0, -70, 0], y: [0, 30, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 items-end">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="space-y-4"
            >
              <p className="text-base font-semibold uppercase tracking-[0.22em] text-automation-green">
                Startup-style project stories
              </p>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Proof of delivery,
                <span className="block text-automation-green">not just promises.</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                {heroSubtitle}
              </p>
              <motion.div
                className="h-[3px] w-44 rounded-full bg-gradient-to-r from-automation-green via-cyan-400 to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ transformOrigin: 'left' }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3"
            >
              {[
                { label: 'Projects Delivered', value: String(projects.length).padStart(2, '0') },
                { label: 'Execution Domains', value: '05' },
                { label: 'Support Window', value: '24/7' }
              ].map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -4 }}
                  className="rounded-xl border border-border bg-card px-4 py-4 text-center shadow-sm"
                >
                  <p className="text-2xl font-bold text-foreground">{item.value}</p>
                  <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground mt-1">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {tickerData.length > 0 && (
            <div className="relative py-4 bg-automation-dark/5 border-y border-automation-green/10 overflow-hidden my-10 rounded-lg">
              <style>{`
                @keyframes ticker-scroll {
                  0%   { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
                .ticker-track {
                  display: flex;
                  width: max-content;
                  white-space: nowrap;
                  animation: ticker-scroll 18s linear infinite;
                }
                .ticker-track:hover {
                  animation-play-state: paused;
                }
              `}</style>
              <div className="ticker-track">
                {tickerData.map((client, index) => (
                  <a
                    key={index}
                    href={client.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-10 text-2xl font-mono font-bold text-black hover:text-automation-green transition-colors duration-300 cursor-pointer tracking-tight"
                  >
                    {client.name.toUpperCase()}
                  </a>
                ))}
              </div>
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            </div>
          )}
        </div>
      </section>

      <section className="pb-20 px-4 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-7">
          {projects.map((project, index) => {
            const imageSrc = projectImages[index] ?? projectHmiImage;
            const anchorId = projectAnchorIds[index] ?? `project-${index + 1}`;
            const highlights = projectHighlights[index] ?? [];

            return (
              <motion.article
                key={project.title}
                id={anchorId}
                initial={{ opacity: 0, x: index % 2 === 0 ? -32 : 32, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.04 }}
                whileHover={{ y: -8 }}
                className={`group scroll-mt-32 rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-2xl hover:border-automation-green/40 transition-all duration-300 ${index === 0 || index === 1 ? 'cursor-pointer' : ''}`}
                onClick={() => {
                  if (index === 0) navigate('/projects/hmi');
                  if (index === 1) navigate('/projects/hr');
                }}
                onKeyDown={(event) => {
                  if ((index === 0 || index === 1) && (event.key === 'Enter' || event.key === ' ')) {
                    event.preventDefault();
                    if (index === 0) navigate('/projects/hmi');
                    if (index === 1) navigate('/projects/hr');
                  }
                }}
                role={index === 0 || index === 1 ? 'button' : undefined}
                tabIndex={index === 0 || index === 1 ? 0 : -1}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={imageSrc}
                    alt={project.title}
                    className="w-full aspect-[16/9] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <motion.div
                    className="absolute -inset-x-16 top-0 h-24 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                    animate={{ x: ['-120%', '120%'] }}
                    transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: index * 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
                  <span className="absolute left-4 top-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/92 text-automation-green text-xs font-semibold uppercase tracking-wider">
                    {project.icon}
                    {project.type}
                  </span>
                  {(index === 0 || index === 1) && (
                    <div className="absolute bottom-5 left-6">
                      <span className="inline-flex items-center gap-2 text-white font-semibold text-sm transition-all duration-300 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                        View Case Study
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6 md:p-7">
                  <h3 className="text-2xl font-bold text-foreground leading-snug mb-3">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed line-clamp-4 mb-5">{project.description}</p>

                  <div className="space-y-2.5">
                    {highlights.map((item, itemIndex) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: 0.08 * itemIndex }}
                        className="flex items-start gap-2.5 text-sm text-foreground/90"
                      >
                        <CheckCircle2 className="h-4 w-4 text-automation-green mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </motion.div>
                    ))}
                  </div>

                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;