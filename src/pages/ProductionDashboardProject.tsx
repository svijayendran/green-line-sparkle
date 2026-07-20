import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { ArrowLeft, Monitor, ClipboardList, BarChart3, Zap, TrendingUp, Wrench, CheckCircle2, Eye, Shield, DollarSign, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

import dashboardImg from '@/assets/project-production and utility monitoring dashboard.png';
import machineStatusImg from '@/assets/production-dashboard/machine-status-v2.png';
import cellPlanningImg from '@/assets/production-dashboard/cell-planning-v2.png';
import shiftPerformanceImg from '@/assets/production-dashboard/shift-performance.png';
import maintenanceImg from '@/assets/production-dashboard/maintenance-state.png';
import settingProgressImg from '@/assets/production-dashboard/setting-progress.png';
import energyShiftImg from '@/assets/production-dashboard/energy-shift-wise.png';
import energyShiftV2Img from '@/assets/production-dashboard/energy-shift-v2.png';
import energyMonthlyImg from '@/assets/production-dashboard/energy-monthly.png';
import energyCostMarchImg from '@/assets/production-dashboard/energy-cost-march.png';
import energyCostAprMayImg from '@/assets/production-dashboard/energy-cost-apr-may.png';
import shiftPerformanceV2Img from '@/assets/production-dashboard/shift-performance-v2.png';

const ProductionDashboardProject = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const projectSections = [
    {
      title: "Machine Status",
      summary: "A live floor-level view of every machine in the C2 Impeller Cell, displayed as colour-coded tiles. Each tile shows the machine name (OP10 to OP60 + Robot-1), its current operation code, and real-time state — green for Running, yellow for Idle, and red for Breakdown. Supervisors can spot a fault instantly without walking the shop floor.",
      features: [
        "7 machine tiles: OP10 Pre Machining, OP20 Turning, OP30 Broaching, OP40 Inspection, OP50A/B Deburring, OP60 Drilling & Washing, Robot-1",
        "Colour-coded status: green = Running, yellow = Idle, red = Breakdown",
        "Operation code and part count displayed on each machine tile",
        "OP50A Deburring flagged BREAKDOWN in real time",
        "Cell name, Part Name, Shift number, and live timestamp in header",
      ],
      technologies: ["React JS", "Python", "IoT / PLC Integration", "REST API", "Real-time Polling"],
      image: machineStatusImg,
      Icon: Monitor,
    },
    {
      title: "Cell Planning & Performance",
      summary: "A structured planning panel showing all shift-level production targets and actuals for the DMS02 Impeller part. Key metrics are laid out in a card grid — Takt Time, Batch Size, Target Output per Shift, As of Now Produced, Pending, Achieved QTY, Gap QTY, and Cell Efficiency — giving production engineers an instant view of schedule adherence.",
      features: [
        "Part Name: DMS02 Impeller | Takt Time: 150 Sec | Batch Size: 750 Nos",
        "Target Output / Shift: 240 Nos | As of Now Produced: 150 Nos | Pending: 600 Nos",
        "Target Output As On Time: 150 Nos | Achieved QTY: 110 Nos (green highlight)",
        "Gap QTY: 40 Nos highlighted in red for immediate corrective action",
        "Cell Efficiency: 73% with colour-coded progress indicator",
      ],
      technologies: ["React JS", "Python", "FastAPI", "SQL Database", "REST API"],
      image: cellPlanningImg,
      Icon: ClipboardList,
    },
    {
      title: "Shift & Hour Wise Performance",
      summary: "A three-panel analytics screen combining Shift Wise Performance (ROP), Hour Wise Output, Cumulative Performance donut, and a Loss Pareto chart with a detailed loss log. Engineers can compare target vs achieved across all three shifts, drill into hour-by-hour output gaps, and trace losses to specific time windows.",
      features: [
        "Shift wise ROP bar chart: Shift I (240 target / 150 achieved / 90%), Shift II (220/130/86%), Shift III (20/20/0%)",
        "Hour wise output bar chart with Gap vs Output per hour from 8 AM to 4:30 PM",
        "Cumulative Performance donut: 200 No's at 87% achievement",
        "Loss pareto chart showing idle duration in minutes per loss event",
        "Loss log table: loss code, name, details, from/to time, and duration",
      ],
      technologies: ["React JS", "Python", "Recharts", "REST API", "SQL Database"],
      image: shiftPerformanceImg,
      Icon: BarChart3,
    },
    {
      title: "Shift Wise Performance — Updated View",
      summary: "An evolved shift performance module with a cleaner UI combining Shift Wise efficiency chart, Hour Wise Output and Gap bars, Cumulative Performance donut, Loss Pareto, and a detailed loss table with machine names and timestamps. Built to support root-cause analysis and shift handover reporting.",
      features: [
        "Shift Wise Performance: Shift I 80.03% efficiency, Shift II 65% efficiency",
        "Hour Wise Output and Gap: stacked bars per hour slot from 06:00 to 13:00",
        "Cumulative Performance donut: 210 achieved / 580 target = 73.4%",
        "Loss pareto: LC101 (35 min), LC102 (25 min) with cumulative % line",
        "Loss table: machine name, loss details (motor failure / scheduled maintenance), from/to time, duration",
      ],
      technologies: ["React JS", "Python", "FastAPI", "Recharts", "SQL Database"],
      image: shiftPerformanceV2Img,
      Icon: Activity,
    },
    {
      title: "Maintenance Undertaken",
      summary: "A dedicated screen that automatically displays when a machine enters a maintenance state. Instead of showing blank or error tiles, the dashboard switches context to inform operators and supervisors that planned or unplanned maintenance is underway — keeping everyone on the floor aligned without needing verbal communication.",
      features: [
        "Triggered automatically when a machine state changes to BREAKDOWN or maintenance",
        "Full-screen contextual notification replacing the standard machine view",
        "Shows cell name, part name, shift, and timestamp for accountability",
        "Prevents confusion by clearly communicating non-production state",
        "Seamlessly returns to normal dashboard view once maintenance is resolved",
      ],
      technologies: ["React JS", "Python", "IoT / PLC Integration", "State Machine Logic", "REST API"],
      image: maintenanceImg,
      Icon: Wrench,
    },
    {
      title: "Setting Under Progress",
      summary: "A changeover state screen shown when a machine or cell is undergoing a setup or tooling change. The dashboard displays 'Setting under progress' with contextual shop floor photos, giving supervisors live awareness of changeover activity without interrupting the setting process.",
      features: [
        "Automatically triggered on machine changeover or tooling setup events",
        "Displays actual shop floor imagery alongside the setting status message",
        "Cell name, part name, shift, and timestamp maintained in the header",
        "Distinguishes clearly between Breakdown, Maintenance, and Setting states",
        "Resumes live machine status tiles once the setting is complete",
      ],
      technologies: ["React JS", "Python", "PLC State Detection", "REST API", "Real-time Events"],
      image: settingProgressImg,
      Icon: Eye,
    },
    {
      title: "Smart Energy Monitoring — Shift Wise (v1)",
      summary: "A shift-level energy breakdown showing Power, Air, and Water consumption through donut charts. Power is segmented by source — Motor, Compressor, Lighting, ACC, and AC — while Air and Water totals are tracked per shift with a legend table mapping each data stream to its machine.",
      features: [
        "Power Consumption / Shift: Total 17.00 KWh — Motor 31.2%, Compressor 20.6%, Lighting 13.5%, ACC 11.8%, AC 8.24%",
        "Air Consumption / Shift: Total 420 m³ split across data I (28.6%), II (23.8%), III (47.6%)",
        "Water Consumption / Shift: Total 62 Litres with date and status breakdown",
        "Legend table mapping sensor identifiers to machine names",
        "Live shift refresh with colour-coded donut segments per utility",
      ],
      technologies: ["React JS", "Python", "IoT Sensors", "REST API", "Recharts"],
      image: energyShiftImg,
      Icon: Zap,
    },
    {
      title: "Smart Energy Monitoring — Shift Wise (v2)",
      summary: "An updated energy monitoring view with a refined dark-theme UI. Tracks the same Power, Air, and Water metrics per shift with improved donut chart visuals and a cleaner machine legend table mapping. The updated interface supports more machines and data streams as the cell scales.",
      features: [
        "Power Consumption / Shift: Total 10.90 KWh — Motor 48.6%, Compressor 22.1%, Lighting 19.3%",
        "Air Consumption / Shift: Total 421 m³ with data I/II/III distribution",
        "Water Consumption / Shift: Total 62 Litres with consumption breakdown",
        "Expanded legend table with val1–val7 mapped to data1–data7 machines",
        "Dark-themed UI with improved contrast and readability for shift operators",
      ],
      technologies: ["React JS", "Python", "IoT Sensors", "REST API", "Recharts"],
      image: energyShiftV2Img,
      Icon: Zap,
    },
    {
      title: "Month-Wise Energy Consumption",
      summary: "Day-wise bar charts tracking Power (kWh), Air (CFM), and Water (Litres) consumption across the month, alongside a Monthly Summary panel. Engineers use this view to spot consumption spikes, compare day-over-day trends, and validate against efficiency targets.",
      features: [
        "Power Consumption: day-wise kWh bar chart across 8 days (range 22–68 kWh)",
        "Air Energy (CFM): day-wise bar chart with on-target vs over-target colour coding",
        "Water Energy (Litre): day-wise consumption comparison bar chart",
        "Monthly Summary panel: Air 4500 m³ | Water 3200 L | Power 12000 kWh",
        "Green = within target, Red = exceeding target per day bar",
      ],
      technologies: ["React JS", "Python", "Recharts", "REST API", "SQL Database"],
      image: energyMonthlyImg,
      Icon: TrendingUp,
    },
    {
      title: "Energy Cost per Component — March Trend",
      summary: "A multi-shift energy cost trend view plotting Power, Air, and Water cost per component across all three shifts for the month of March. An efficiency threshold line (7 Rs target) is overlaid on the trend to flag shifts exceeding acceptable cost per unit produced.",
      features: [
        "Energy Cost / Component Trend line chart across S1-S3 for March 12–16",
        "Stacked bars showing Power, Air, and Water cost per shift per day",
        "Efficiency Threshold line at 7 Rs — over-threshold shifts highlighted",
        "Power Cost / Component bar charts broken down per shift (S1–S3 per day)",
        "Cost range: 1.4–4.5 Rs per component across shifts",
      ],
      technologies: ["React JS", "Python", "Recharts", "FastAPI", "SQL Database"],
      image: energyCostMarchImg,
      Icon: DollarSign,
    },
    {
      title: "Energy Cost per Component — Apr / May Trend",
      summary: "An extended energy cost analysis view covering April and May, showing Power, Air, and Water cost per component with individual cost-per-utility bar charts and threshold lines. Enables management to track energy spend trends across months and identify high-cost shifts for corrective action.",
      features: [
        "Energy Cost / Component Trend: S1-Apr through S2-May with Power, Air, Water bars",
        "Power Cost / Component: target line 3 Rs — S3-Apr and S1-May exceeded at 3.6/3.7 Rs",
        "Air Cost / Component: target line 2 Rs — all shifts within range (1.1–1.4 Rs)",
        "Water Cost / Component: target line 3 Rs — S1-Apr at 2.0 Rs, others within range",
        "Side-by-side three-chart layout for quick cross-utility cost comparison",
      ],
      technologies: ["React JS", "Python", "Recharts", "FastAPI", "SQL Database"],
      image: energyCostAprMayImg,
      Icon: DollarSign,
    },
  ];

  const keyHighlights = [
    { Icon: Monitor, title: "Live Machine Status", description: "Real-time floor view with colour-coded Running / Idle / Breakdown tiles" },
    { Icon: Zap, title: "Smart Energy Monitoring", description: "Shift-wise Power, Air, and Water consumption with donut breakdowns" },
    { Icon: BarChart3, title: "Shift & Loss Analytics", description: "ROP charts, hour-wise output, and loss pareto with full log table" },
    { Icon: Shield, title: "Cell Efficiency Tracking", description: "Takt Time, Gap QTY, and Cell Efficiency updated every shift" },
  ];

  const impactStats = [
    { value: "11", label: "Dashboard Screens" },
    { value: "3", label: "Utilities Monitored" },
    { value: "73%", label: "Cell Efficiency Tracked" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-24 pb-10 md:pt-28 md:pb-20 px-4 overflow-hidden">
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
                Production / Utility Monitoring
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight mb-6">
                Production & Utility{' '}
                <span className="text-automation-green">Monitoring Dashboard</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                A comprehensive IoT-powered monitoring platform built for Aqua Groups (AquaPump Industries),
                delivering live machine status, shift production analytics, smart energy consumption tracking,
                and loss analysis — all in one unified operator dashboard.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {impactStats.map((s) => (
                  <div key={s.label} className="rounded-xl border border-border bg-card px-5 py-3 text-center">
                    <p className="text-2xl font-black text-automation-green">{s.value}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {['React JS', 'Python', 'FastAPI', 'IoT / PLC', 'REST API', 'Real-time Data'].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs rounded-lg border border-border bg-muted text-foreground/80 font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="rounded-2xl overflow-hidden shadow-2xl border border-border"
            >
              <img src={dashboardImg} alt="Production and Utility Monitoring Dashboard" className="w-full h-auto object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Highlights bar */}
      <section className="border-y border-border bg-muted/30 py-10 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {keyHighlights.map(({ Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col items-center text-center gap-2 md:gap-3 p-2 md:p-4"
            >
              <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl bg-automation-green/10">
                <Icon className="h-5 w-5 md:h-6 md:w-6 text-automation-green" />
              </div>
              <h3 className="font-semibold text-foreground text-xs md:text-sm">{title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Project Sections */}
      <section className="py-12 md:py-24 px-4">
        <div className="max-w-7xl mx-auto space-y-16 lg:space-y-28">
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
                className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-14`}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl md:text-6xl font-black text-foreground/8 leading-none select-none">
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

                <motion.div
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                  className="flex-1 min-w-0"
                >
                  <div className="rounded-2xl overflow-hidden shadow-2xl border border-border">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductionDashboardProject;
