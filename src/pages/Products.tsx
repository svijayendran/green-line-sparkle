import { motion } from 'framer-motion';
import { CheckCircle, ShieldCheck, BarChart3, Database, Zap } from 'lucide-react';
import { productscontent } from '@/components/input_field/products.js';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import productsHeroImage from '@/assets/products-hero1.png';

const steps = [
  { label: 'Machine Signal', icon: '⚙️', desc: 'PLC / sensor data captured live' },
  { label: 'Data Pipeline', icon: '🔗', desc: 'MySQL ingestion & DFQ conversion' },
  { label: 'Quality Check', icon: '✅', desc: 'Automated grading & verification' },
  { label: 'Dashboard', icon: '📊', desc: 'Real-time KPIs & run charts' },
  { label: 'Action', icon: '🚀', desc: 'Alerts, reports & sticker print' },
];

const AutomationFlowAnimation = () => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.7 }}
    className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 md:p-12 border border-slate-700/50"
  >
    {/* background blobs */}
    <motion.div aria-hidden="true"
      className="pointer-events-none absolute -top-28 -left-28 h-80 w-80 rounded-full bg-automation-green/15 blur-3xl"
      animate={{ x: [0, 40, 0], y: [0, 25, 0] }}
      transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div aria-hidden="true"
      className="pointer-events-none absolute -bottom-20 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"
      animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
      transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
    />

    <div className="relative z-10">
      {/* heading */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
        <div>
          <p className="text-xl font-semibold uppercase tracking-[0.22em] text-automation-green mb-3">How it works</p>
          <h3 className="text-2xl md:text-4xl font-black text-white leading-tight">
            From machine signal to
            <span className="text-automation-green"> actionable insight</span>
          </h3>
        </div>
        <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-sm">
          Raw sensor data flows through our pipelines and surfaces as clean, decision-ready intelligence.
        </p>
      </div>

      {/* ── Flow steps: cards + arrows on same row ── */}
      <div className="flex flex-col md:flex-row items-stretch gap-3 md:gap-0">
        {steps.map((step, i) => (
          <div key={step.label} className="flex md:flex-row items-center flex-1 min-w-0">
            {/* arrow connector (only between cards) */}
            {i > 0 && (
              <div className="hidden md:flex items-center shrink-0 w-6">
                <motion.div
                  className="h-px w-full bg-gradient-to-r from-cyan-500/70 to-cyan-400/30"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.14 }}
                  style={{ transformOrigin: 'left' }}
                />
                <div className="w-0 h-0 border-t-[5px] border-b-[5px] border-l-[8px] border-t-transparent border-b-transparent border-l-cyan-400/60 shrink-0 -ml-px" />
              </div>
            )}

            {/* card */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="flex-1 min-w-0 flex flex-col items-center text-center rounded-2xl border border-slate-600/50 bg-slate-800/60 hover:border-cyan-400/50 hover:bg-slate-700/60 px-4 py-6 transition-all duration-300 shadow-lg"
            >
              {/* step number badge */}
              <span className="mb-3 inline-flex items-center justify-center h-6 w-6 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-[10px] font-bold text-cyan-300">
                {i + 1}
              </span>
              <div className="text-3xl mb-3">{step.icon}</div>
              <p className="text-white font-semibold text-sm mb-1.5 leading-snug">{step.label}</p>
              <p className="text-slate-400 text-xs leading-relaxed">{step.desc}</p>
              <div className="mt-4 w-8 h-0.5 rounded-full bg-gradient-to-r from-automation-green/80 to-cyan-400/60" />
            </motion.div>
          </div>
        ))}
      </div>

      {/* animated data-flow bar */}
      <div className="mt-8 relative h-9 rounded-xl bg-slate-800/80 border border-slate-700/60 overflow-hidden">
        <div className="absolute inset-y-0 left-5 right-5 flex items-center">
          <div className="w-full h-px bg-slate-600/40" />
        </div>
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]"
            animate={{ left: ['3%', '95%'], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'linear', delay: i * 1.05 }}
          />
        ))}
        <div className="absolute left-5 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-automation-green animate-pulse" />
          <span className="text-[10px] text-automation-green/80 font-mono tracking-widest">DATA FLOWING</span>
        </div>
        <span className="absolute right-5 top-1/2 -translate-y-1/2 text-[10px] text-cyan-400/70 font-mono tracking-widest">LIVE</span>
      </div>
    </div>
  </motion.div>
);

const Products = () => {
  const { hero, categories, productList } = productscontent;
  const valuePillars = [
    {
      title: 'Quality Assurance',
      description: 'Automated grading and verification systems ensuring 100% part compliance.',
      Icon: ShieldCheck,
      accent: 'from-automation-green/20 to-automation-green/5',
    },
    {
      title: 'Live Analytics',
      description: 'Real-time KPI tracking and dashboard visualization for factory floor stakeholders.',
      Icon: BarChart3,
      accent: 'from-cyan-500/20 to-cyan-400/5',
    },
    {
      title: 'Data Integrity',
      description: 'Robust MySQL-based pipelines for CMM, Lab, and DFQ data ingestion.',
      Icon: Database,
      accent: 'from-emerald-500/20 to-teal-400/5',
    },
    {
      title: 'Speed & Scale',
      description: 'Accelerated deployment with reusable codebase efficiency and automation.',
      Icon: Zap,
      accent: 'from-lime-400/20 to-emerald-400/5',
    },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Navigation />

      {/* ── Hero ── */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${productsHeroImage})` }} />
          <div className="absolute inset-0 bg-gradient-hero opacity-90" />
          <div className="absolute inset-0 bg-automation-dark/20" />
        </div>
        <div className="absolute inset-0 z-10">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-automation-green rounded-full opacity-60"
              style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
              animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
            />
          ))}
        </div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mb-6">
              <span className="inline-block px-4 py-2 bg-automation-green/20 text-automation-green border border-automation-green/30 rounded-full text-sm font-medium backdrop-blur-sm">
                Precision Engineered Solutions
              </span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Precision Automation for
              <span className="block mt-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent pb-4">
                Industrial Excellence
              </span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="text-xl md:text-2xl text-gray-300 mt-8 mb-10 max-w-3xl mx-auto leading-relaxed">
              {hero.description}
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.0 }} className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              {[{ number: '100%', label: 'Traceability Focus' }, { number: '99%', label: 'Efficiency Rate' }, { number: 'Industry', label: '4.0 Ready' }].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-white text-sm uppercase tracking-widest font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:block">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-1 h-3 bg-automation-green rounded-full mt-2" />
          </div>
        </div>
      </section>

      {/* ── Intro strip ── */}
      <section className="py-16 px-4 border-b border-border/60 relative overflow-hidden">
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -top-20 -left-16 h-56 w-56 rounded-full bg-automation-green/10 blur-3xl"
          animate={{ x: [0, 36, 0], y: [0, 20, 0], opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, -18, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
        />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-xl font-semibold uppercase tracking-[0.22em] text-automation-green mb-3">What we deliver</p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
              {productList.length} precision-built modules<br className="hidden md:block" /> deployed on factory floors.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-base md:text-lg leading-relaxed">
            Each module solves a specific production challenge — from raw data ingestion to printable quality records — with zero manual overhead.
          </p>
        </div>
      </section>

      {/* ── Automation flow animation strip ── */}
      <section className="px-4 py-6 md:py-10">
        <div className="max-w-7xl mx-auto">
          <AutomationFlowAnimation />
        </div>
      </section>

      {/* ── Numbered product spotlights ── */}
      <section id="product-list" className="py-8 px-4 relative">
        <div className="max-w-7xl mx-auto divide-y divide-border/50">
          {productList.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="group relative grid grid-cols-1 lg:grid-cols-[120px_1fr_1fr] gap-6 lg:gap-10 py-12 md:py-14"
            >
              <motion.div
                className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-automation-green/60 to-transparent"
                initial={{ scaleX: 0.2, opacity: 0.4 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: index * 0.04 }}
              />

              {/* Number */}
              <div className="flex items-start">
                <motion.span
                  whileHover={{ scale: 1.06 }}
                  className="text-[4rem] md:text-[5rem] font-black leading-none text-foreground/10 group-hover:text-automation-green/25 transition-colors duration-500 select-none"
                >
                  {String(index + 1).padStart(2, '0')}
                </motion.span>
              </div>

              {/* Left: title + description */}
              <div className="flex flex-col justify-center gap-4">
                <span className="inline-flex w-fit px-3 py-1 rounded-full border border-automation-green/30 bg-automation-green/10 text-automation-green text-xs font-semibold uppercase tracking-wider">
                  {product.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-snug">{product.name}</h3>
                <p className="text-muted-foreground leading-relaxed max-w-md">{product.description}</p>
              </div>

              {/* Right: feature pills */}
              <div className="flex flex-col justify-center gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/50 mb-1">Core capabilities</p>
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature) => (
                    <motion.span
                      key={feature}
                      whileHover={{ y: -2 }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-muted/60 text-sm text-foreground/80 font-medium"
                    >
                      <CheckCircle className="h-3.5 w-3.5 text-automation-green flex-shrink-0" />
                      {feature}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>


      {/* ── Capabilities bar ── */}
      <section className="py-14 px-4 bg-muted/30 border-t border-border/60">
        <div className="max-w-7xl mx-auto">
          <p className="text-xl font-semibold uppercase tracking-[0.22em] text-automation-green mb-8">Built-in capabilities across all modules</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {categories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -6 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-background p-5 hover:border-automation-green/40 transition-all duration-300 hover:shadow-lg hover:shadow-automation-green/10"
                >
                  <motion.div
                    whileHover={{ rotate: 6, scale: 1.08 }}
                    transition={{ type: 'spring', stiffness: 280, damping: 15 }}
                    className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-automation-green/10"
                  >
                    <Icon className="h-5 w-5 text-automation-green" />
                  </motion.div>
                  <div>
                    <p className="font-semibold text-foreground">{cat.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground leading-snug">{cat.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
