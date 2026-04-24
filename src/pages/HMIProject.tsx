import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { ArrowLeft, Monitor, Settings, Wrench, Clock, BarChart3, Users, Shield, Zap, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import loginScreen from '@/assets/hmi/login-screen.jpg';
import dashboardOverview from '@/assets/hmi/dashboard-overview.jpg';
import machineControl from '@/assets/hmi/machine-control.jpg';
import setupMode from '@/assets/hmi/setup-mode.jpg';
import reasonTracking from '@/assets/hmi/reason-tracking.jpg';
import toolManagement from '@/assets/hmi/tool-management.jpg';

const HMIProject = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const projectSections = [
    {
      title: "Employee Login & Authentication",
      summary: "Secure role-based access control system for operators and supervisors with personalized greetings and session management.",
      features: [
        "Secure employee authentication with unique credentials",
        "Role-based access control (Operator, Supervisor, Admin)",
        "Personalized welcome messages and shift-based greetings",
        "Session tracking and automatic timeout",
        "Multi-operator login support for shared workstations",
      ],
      technologies: ["React.js", "Node.js", "JWT Authentication", "PostgreSQL", "LDAP Integration"],
      image: loginScreen,
      Icon: Users,
    },
    {
      title: "Real-Time Machine Dashboard",
      summary: "Comprehensive overview of all machines in the production cell with live status indicators showing running, idle, breakdown, and waiting states.",
      features: [
        "Live machine status monitoring (Running, Idle, Breakdown, Waiting)",
        "Color-coded status indicators for quick visual assessment",
        "Part name and program number display",
        "Multi-machine cell overview with grid layout",
        "Real-time server synchronization with timestamp display",
      ],
      technologies: ["WebSocket", "React.js", "Real-time Data Streaming", "Modbus TCP/IP", "OPC UA"],
      image: dashboardOverview,
      Icon: Monitor,
    },
    {
      title: "Machine Control Interface",
      summary: "Detailed machine-level control panel with program selection, operator management, and operational mode settings for Setup, Maintenance, and Rework.",
      features: [
        "Program number and vendor code management",
        "Part name and operation tracking",
        "Dual operator assignment capability",
        "Setup, Maintenance, and Rework mode toggles",
        "Tool life monitoring with real-time countdown",
        "On-screen virtual keyboard for touch input",
      ],
      technologies: ["PLC Integration", "Modbus RTU", "Touch Screen UI", "Industrial Protocols", "HMI Runtime"],
      image: machineControl,
      Icon: Settings,
    },
    {
      title: "Setup Mode Management",
      summary: "Dedicated setup mode with confirmation dialogs and program selection interface for changeover operations and machine configuration.",
      features: [
        "Setup mode activation with confirmation alerts",
        "Program number selection interface",
        "Setup time tracking and logging",
        "Part name and operation verification",
        "Operator authentication for mode changes",
      ],
      technologies: ["State Management", "Industrial HMI", "Database Logging", "Event Tracking"],
      image: setupMode,
      Icon: Wrench,
    },
    {
      title: "Reason Tracking System",
      summary: "Comprehensive downtime reason tracking with categorized loss categories including energy loss, breakdown, speed loss, PM, and more.",
      features: [
        "Pre-defined reason categories (Non-valid activity, Energy loss, Breakdown, PM, etc.)",
        "Custom reason creation with admin authentication",
        "Ideal time setting per reason type",
        "Reason group and sub-reason selection",
        "Downtime analysis and reporting integration",
      ],
      technologies: ["OEE Calculation", "Data Analytics", "SQL Server", "Power BI Integration", "REST APIs"],
      image: reasonTracking,
      Icon: Clock,
    },
    {
      title: "Tool Life Management",
      summary: "Advanced tool life tracking system with warning limits, stop limits, edge management, and automated tool change notifications.",
      features: [
        "Tool number and name registry",
        "Actual vs. planned production count tracking",
        "Warning and stop limit configuration",
        "Multi-edge tool management",
        "Tool change reason logging",
        "Automated alerts for tool replacement",
      ],
      technologies: ["Predictive Maintenance", "Machine Learning", "IoT Sensors", "MQTT", "InfluxDB"],
      image: toolManagement,
      Icon: BarChart3,
    },
  ];

  const keyHighlights = [
    { Icon: Shield, title: "Industry 4.0 Ready", description: "Full compliance with smart manufacturing standards" },
    { Icon: Zap, title: "Real-Time Sync", description: "Sub-second data synchronization across all terminals" },
    { Icon: Monitor, title: "Touch Optimized", description: "Industrial-grade touch screen interface design" },
    { Icon: BarChart3, title: "OEE Tracking", description: "Complete Overall Equipment Effectiveness monitoring" },
  ];

  const impactStats = [
    { value: "35%", label: "Downtime Reduction" },
    { value: "22%", label: "OEE Improvement" },
    { value: "100+", label: "Machines Connected" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* ── Hero ── */}
      <section className="relative pt-28 pb-20 px-4 overflow-hidden">
        {/* background blobs */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-automation-green/10 blur-3xl" />
          <div className="absolute top-10 right-0 w-96 h-96 rounded-full bg-cyan-400/10 blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Link to="/projects" className="inline-flex items-center gap-2 text-automation-green hover:text-automation-green/80 mb-10 text-sm font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <span className="inline-block mb-5 px-4 py-1.5 rounded-full bg-automation-green/10 border border-automation-green/25 text-automation-green text-xs font-semibold uppercase tracking-widest">
                IoT / Embedded Systems
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight mb-6">
                Human-Machine Interface{' '}
                <span className="text-automation-green">(HMI)</span>{' '}
                for Industrial Automation
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                A comprehensive Industry 4.0 compliant HMI solution developed for Aqua Group's manufacturing operations,
                featuring real-time machine monitoring, operator management, tool life tracking, and advanced downtime analysis.
              </p>

              {/* impact pills */}
              <div className="mt-8 flex flex-wrap gap-3">
                {impactStats.map((s) => (
                  <div key={s.label} className="rounded-xl border border-border bg-card px-5 py-3 text-center">
                    <p className="text-2xl font-black text-automation-green">{s.value}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* hero image — first section screenshot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="rounded-2xl overflow-hidden shadow-2xl border border-border"
            >
              <img src={dashboardOverview} alt="HMI Dashboard" className="w-full h-auto object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Key Highlights bar ── */}
      <section className="border-y border-border bg-muted/30 py-10 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {keyHighlights.map(({ Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col items-center text-center gap-3 p-4"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-automation-green/10">
                <Icon className="h-6 w-6 text-automation-green" />
              </div>
              <h3 className="font-semibold text-foreground text-sm">{title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Project Sections ── */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto space-y-28">
          {projectSections.map((section, index) => {
            const isEven = index % 2 === 1;
            const { Icon } = section;
            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-14`}
              >
                {/* ── Text side ── */}
                <div className="flex-1 min-w-0">
                  {/* step number + icon */}
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-6xl font-black text-foreground/8 leading-none select-none">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-automation-green/10 shrink-0">
                      <Icon className="h-6 w-6 text-automation-green" />
                    </div>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-snug">
                    {section.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{section.summary}</p>

                  {/* features */}
                  <div className="mb-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-automation-green mb-3">Key Features</p>
                    <ul className="space-y-2.5">
                      {section.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm text-foreground/85">
                          <CheckCircle2 className="h-4 w-4 text-automation-green mt-0.5 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* tech tags */}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-automation-green mb-3">Technologies Used</p>
                    <div className="flex flex-wrap gap-2">
                      {section.technologies.map((t) => (
                        <span key={t} className="px-3 py-1 text-xs rounded-lg border border-border bg-muted text-foreground/80 font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* ── Image side ── */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="flex-1 min-w-0 w-full rounded-2xl overflow-hidden shadow-2xl border border-border"
                >
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── Impact Banner ── */}
      <section className="py-20 px-4 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 left-1/4 w-96 h-96 rounded-full bg-automation-green/15 blur-3xl" />
          <div className="absolute -bottom-24 right-1/4 w-80 h-80 rounded-full bg-cyan-400/10 blur-3xl" />
        </div>
        <div className="max-w-5xl mx-auto relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-base font-semibold uppercase tracking-[0.22em] text-automation-green mb-4">Project Impact</p>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
              Deployed. Measured. Proven.
            </h2>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto mb-12 leading-relaxed">
              This HMI solution has been successfully deployed across multiple production cells,
              enabling real-time visibility into manufacturing operations, reducing unplanned downtime,
              and improving overall equipment effectiveness.
            </p>

            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              {impactStats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm py-8 px-4"
                >
                  <p className="text-4xl md:text-5xl font-black text-automation-green mb-2">{s.value}</p>
                  <p className="text-slate-300 text-sm">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HMIProject;
