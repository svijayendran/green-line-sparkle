import { motion, useReducedMotion } from 'framer-motion';
import { Cpu, Brain, BarChart3, Factory } from 'lucide-react';

const DashboardIllustration = () => (
  <svg viewBox="0 0 520 580" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Outer screen / device frame */}
    <rect x="20" y="20" width="480" height="540" rx="24" fill="#0f172a" stroke="#1e293b" strokeWidth="2" />
    <rect x="36" y="36" width="448" height="508" rx="16" fill="#0f1e2e" />

    {/* Top bar */}
    <rect x="36" y="36" width="448" height="44" rx="16" fill="#0d2137" />
    <circle cx="64" cy="58" r="8" fill="#22c55e" opacity="0.9" />
    <rect x="82" y="52" width="90" height="12" rx="6" fill="#1e3a52" />
    <rect x="380" y="50" width="60" height="16" rx="8" fill="#22c55e" opacity="0.2" />
    <text x="395" y="62" fontSize="9" fill="#22c55e" fontFamily="monospace" fontWeight="bold">LIVE</text>

    {/* Stat cards row */}
    <rect x="50" y="96" width="130" height="72" rx="12" fill="#0d2137" stroke="#1e3a52" strokeWidth="1" />
    <text x="66" y="118" fontSize="9" fill="#64748b" fontFamily="sans-serif">Engine Units</text>
    <text x="66" y="142" fontSize="22" fill="#22c55e" fontFamily="monospace" fontWeight="bold">1,248</text>
    <text x="66" y="158" fontSize="8" fill="#22c55e" fontFamily="sans-serif">▲ 4.2% today</text>

    <rect x="194" y="96" width="130" height="72" rx="12" fill="#0d2137" stroke="#1e3a52" strokeWidth="1" />
    <text x="210" y="118" fontSize="9" fill="#64748b" fontFamily="sans-serif">Quality Rate</text>
    <text x="210" y="142" fontSize="22" fill="#06b6d4" fontFamily="monospace" fontWeight="bold">99.2%</text>
    <text x="210" y="158" fontSize="8" fill="#06b6d4" fontFamily="sans-serif">▲ 0.3% vs last</text>

    <rect x="338" y="96" width="130" height="72" rx="12" fill="#0d2137" stroke="#1e3a52" strokeWidth="1" />
    <text x="354" y="118" fontSize="9" fill="#64748b" fontFamily="sans-serif">Defect Rate</text>
    <text x="354" y="142" fontSize="22" fill="#f97316" fontFamily="monospace" fontWeight="bold">0.8%</text>
    <text x="354" y="158" fontSize="8" fill="#f97316" fontFamily="sans-serif">▼ 0.1% improved</text>

    {/* Bar chart */}
    <rect x="50" y="184" width="280" height="160" rx="12" fill="#0d2137" stroke="#1e3a52" strokeWidth="1" />
    <text x="66" y="206" fontSize="10" fill="#94a3b8" fontFamily="sans-serif" fontWeight="600">Production Output — Last 7 Days</text>
    {[
      { x: 72,  h: 60, c: '#22c55e' },
      { x: 108, h: 90, c: '#22c55e' },
      { x: 144, h: 70, c: '#22c55e' },
      { x: 180, h: 110, c: '#06b6d4' },
      { x: 216, h: 85, c: '#22c55e' },
      { x: 252, h: 100, c: '#22c55e' },
      { x: 288, h: 120, c: '#06b6d4' },
    ].map((bar, i) => (
      <g key={i}>
        <rect x={bar.x} y={310 - bar.h} width="22" height={bar.h} rx="4" fill={bar.c} opacity="0.8" />
        <rect x={bar.x} y={310 - bar.h} width="22" height="6" rx="3" fill={bar.c} />
      </g>
    ))}
    <line x1="60" y1="310" x2="310" y2="310" stroke="#1e3a52" strokeWidth="1" />

    {/* Donut chart */}
    <rect x="344" y="184" width="124" height="160" rx="12" fill="#0d2137" stroke="#1e3a52" strokeWidth="1" />
    <text x="360" y="206" fontSize="10" fill="#94a3b8" fontFamily="sans-serif" fontWeight="600">Parts Grade</text>
    <circle cx="406" cy="290" r="44" fill="none" stroke="#1e3a52" strokeWidth="12" />
    <circle cx="406" cy="290" r="44" fill="none" stroke="#22c55e" strokeWidth="12"
      strokeDasharray="193 83" strokeDashoffset="48" strokeLinecap="round" />
    <circle cx="406" cy="290" r="44" fill="none" stroke="#06b6d4" strokeWidth="12"
      strokeDasharray="55 221" strokeDashoffset="-145" strokeLinecap="round" />
    <circle cx="406" cy="290" r="44" fill="none" stroke="#f97316" strokeWidth="12"
      strokeDasharray="28 248" strokeDashoffset="-200" strokeLinecap="round" />
    <text x="406" y="285" fontSize="16" fill="white" fontFamily="monospace" fontWeight="bold" textAnchor="middle">70%</text>
    <text x="406" y="298" fontSize="8" fill="#64748b" fontFamily="sans-serif" textAnchor="middle">Grade A</text>

    {/* Notification cards */}
    <rect x="50" y="360" width="200" height="56" rx="12" fill="#0d2137" stroke="#22c55e" strokeWidth="1" />
    <circle cx="74" cy="388" r="14" fill="#022c1a" />
    <text x="74" y="393" fontSize="12" fill="#22c55e" textAnchor="middle">✓</text>
    <text x="98" y="382" fontSize="10" fill="white" fontFamily="sans-serif" fontWeight="600">Traceability Scan</text>
    <text x="98" y="398" fontSize="9" fill="#64748b" fontFamily="sans-serif">Part #EN-2024-1148 passed</text>
    <text x="220" y="369" fontSize="8" fill="#22c55e" fontFamily="monospace">PASS</text>

    <rect x="268" y="360" width="200" height="56" rx="12" fill="#0d2137" stroke="#06b6d4" strokeWidth="1" />
    <circle cx="292" cy="388" r="14" fill="#021c22" />
    <text x="292" y="393" fontSize="11" fill="#06b6d4" textAnchor="middle">⬡</text>
    <text x="316" y="382" fontSize="10" fill="white" fontFamily="sans-serif" fontWeight="600">DFQ Ingestion</text>
    <text x="316" y="398" fontSize="9" fill="#64748b" fontFamily="sans-serif">3,200 records synced</text>
    <text x="434" y="369" fontSize="8" fill="#06b6d4" fontFamily="monospace">SYNC</text>

    {/* Status bar */}
    <rect x="50" y="432" width="418" height="48" rx="12" fill="#0d2137" stroke="#1e3a52" strokeWidth="1" />
    <circle cx="78" cy="456" r="6" fill="#22c55e" />
    <text x="94" y="460" fontSize="9" fill="#94a3b8" fontFamily="sans-serif">MySQL Pipeline: Active</text>
    <rect x="220" y="448" width="1" height="16" fill="#1e3a52" />
    <circle cx="244" cy="456" r="6" fill="#06b6d4" />
    <text x="260" y="460" fontSize="9" fill="#94a3b8" fontFamily="sans-serif">SPC Monitor: Running</text>
    <rect x="380" y="448" width="1" height="16" fill="#1e3a52" />
    <circle cx="404" cy="456" r="6" fill="#f97316" />
    <text x="420" y="460" fontSize="9" fill="#94a3b8" fontFamily="sans-serif">Alerts: 2</text>
  </svg>
);

const ServicesSection = () => {
  const prefersReducedMotion = useReducedMotion();

  const features = [
    {
      icon: <Cpu className="w-6 h-6 text-white" />,
      bg: 'from-blue-500 to-cyan-500',
      title: 'IoT & Embedded Systems',
      description: 'Advanced IoT-enabled automotive systems providing real-time monitoring and predictive maintenance.',
    },
    {
      icon: <Brain className="w-6 h-6 text-white" />,
      bg: 'from-purple-500 to-pink-500',
      title: 'AI & Machine Learning',
      description: 'Artificial intelligence solutions that adapt to trends and optimize automotive processes.',
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-white" />,
      bg: 'from-green-500 to-emerald-500',
      title: 'Data Analytics & BI',
      description: 'Real-time insights into operational metrics through comprehensive data visualization.',
    },
    {
      icon: <Factory className="w-6 h-6 text-white" />,
      bg: 'from-orange-500 to-red-500',
      title: 'Smart Manufacturing',
      description: 'Leading the way to Industry 4.0 with connected, intelligent manufacturing solutions.',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
  };

  return (
    <motion.section
      initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="py-24 px-4 bg-slate-50 relative z-10 overflow-hidden"
    >

      {/* Subtle background accent blobs */}
      <motion.div
        aria-hidden="true"
        animate={prefersReducedMotion ? undefined : { x: [0, 16, 0], y: [0, -12, 0], opacity: [0.3, 0.45, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-24 -left-24 w-72 h-72 bg-emerald-100 rounded-full blur-3xl opacity-40 pointer-events-none"
      />
      <motion.div
        aria-hidden="true"
        animate={prefersReducedMotion ? undefined : { x: [0, -16, 0], y: [0, 12, 0], opacity: [0.3, 0.45, 0.3] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
        className="absolute -bottom-24 -right-24 w-72 h-72 bg-cyan-100 rounded-full blur-3xl opacity-40 pointer-events-none"
      />

      <div className="container mx-auto max-w-7xl relative">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">

          {/* Left: Text + feature cards */}
          <motion.div
            className="w-full lg:w-1/2 min-w-0"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.p variants={fadeUp} className="text-slate-500 text-base mb-4 leading-relaxed">
              Our automation platform is built on years of real-world industrial deployments and integrates seamlessly with existing factory systems.
            </motion.p>

            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Why industry leaders choose{' '}
              <span className="text-automation-green">our solutions.</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="text-slate-500 text-base mb-10 leading-relaxed">
              From IoT integration to AI-powered automation, we deliver end-to-end solutions that transform your production line operations.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20, scale: 0.98 }}
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
                  whileHover={prefersReducedMotion ? undefined : { y: -6, boxShadow: '0 16px 40px -8px rgba(0,0,0,0.12)' }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 cursor-default"
                >
                  <motion.div
                    whileHover={prefersReducedMotion ? undefined : { scale: 1.15, rotate: 6 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                    className={`w-11 h-11 rounded-xl bg-gradient-to-br ${f.bg} flex items-center justify-center mb-4`}
                  >
                    {f.icon}
                  </motion.div>
                  <h3 className="text-slate-900 font-semibold text-base mb-2">{f.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{f.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Dashboard illustration — floats gently */}
          <motion.div
            initial={prefersReducedMotion ? undefined : { opacity: 0, x: 60, scale: 0.96 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className="w-full lg:w-1/2 min-w-0 drop-shadow-2xl lg:mt-28"
          >
            <DashboardIllustration />
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;
