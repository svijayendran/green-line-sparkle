import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { ArrowLeft, BarChart3, Database, FileText, Activity, TrendingUp, CheckCircle2, Zap, Shield, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import dashboardImg from '@/assets/craftsman/screens/dashboard.png';
import dataExplorerImg from '@/assets/craftsman/screens/data-explorer.png';
import inspectionReportsImg from '@/assets/craftsman/screens/inspection-reports.png';
import spcAnalysis1Img from '@/assets/craftsman/screens/spc-analysis-1.png';
import spcAnalysis2Img from '@/assets/craftsman/screens/spc-analysis-2.png';

const ManufacturingProject = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const projectSections = [
    {
      title: "Real-Time Quality Overview Dashboard",
      summary: "A live CMM inspection dashboard connected directly to SQL Server, giving quality engineers an instant snapshot of all inspection KPIs — parts inspected, measurement rows, pass rate, out-of-tolerance counts, and fail counts — with pass/fail breakdown charts per dimension type.",
      features: [
        "Live KPI cards: Parts Inspected, DIM Blocks, Measurement Rows, Pass Rate",
        "Out-of-tolerance and fail count tracking per production run",
        "Pass/Fail bar charts segmented by dimension type (Cylindricity, Flatness, Location, etc.)",
        "Dashboard Data Slicer — filter by Dimension Type, Dimension ID, Axis Code, and Status",
        "SQL Server connected with live data sync indicator",
      ],
      technologies: ["React", "SQL Server", "REST API", "Chart.js", "Real-time Data"],
      image: dashboardImg,
      Icon: BarChart3,
    },
    {
      title: "Data Explorer",
      summary: "A tabular deep-dive interface that exposes raw CMM measurement records from SQL Server, allowing quality engineers to search, filter, and review individual axis readings, tolerance statuses, and part-level inspection histories.",
      features: [
        "Full CMM measurement record table with pagination",
        "Multi-filter: Part Number, Dimension ID, Axis Code, Status",
        "Per-row detail: Nominal, Actual, Upper/Lower Tolerance, Deviation",
        "Export to CSV for offline analysis and reporting",
        "Direct SQL Server query with 8,325+ measurement rows accessible",
      ],
      technologies: ["React", "SQL Server", "DataGrid", "Python (FastAPI)", "CSV Export"],
      image: dataExplorerImg,
      Icon: Database,
    },
    {
      title: "Quality Analysis Reports",
      summary: "Auto-generated inspection reports featuring Bar Chart Dimensional Deviations and Histogram Deviation Distribution — giving a complete statistical view of dimensional quality across the production run for any selected part and operation.",
      features: [
        "Bar Chart Dimensional Deviations with UCL/LCL control lines",
        "Histogram Deviation Distribution showing measurement spread",
        "Filter by Block, Part Number, CTQ, OPN, FINISH, and date range",
        "Generated report header with part metadata and timestamp",
        "Export-ready PDF report format for QA sign-off",
      ],
      technologies: ["React", "Recharts", "Python", "PDF Generation", "SQL Server"],
      image: inspectionReportsImg,
      Icon: FileText,
    },
    {
      title: "SPC Analysis — X̄ & R Charts",
      summary: "Statistical Process Control module that plots X-Chart (Subgroup Means) and R-Chart (Subgroup Ranges) for each eligible dimension, enabling process engineers to detect trends, shifts, and out-of-control points before they become defects.",
      features: [
        "X-Chart and R-Chart plotted per dimension with UCL, LCL, Mean lines",
        "Eligible dimensions listed with real-time Cpk, Cp, Pp, Ppk statistics",
        "Out-of-control point highlighting with process stability alerts",
        "Subgroup size and sampling window configuration",
        "Side-by-side dimension comparison for multi-CTQ analysis",
      ],
      technologies: ["React", "SPC Algorithms", "Recharts", "Python", "SQL Server"],
      image: spcAnalysis1Img,
      Icon: TrendingUp,
    },
    {
      title: "Advanced SPC — Multi-Dimension Monitoring",
      summary: "Extended SPC view covering additional critical dimensions with process capability indices and out-of-control point flagging — ensuring every CTQ characteristic stays within statistical control limits across the full production run.",
      features: [
        "Cpk, Cp, Pp, Ppk indices displayed per dimension",
        "Process instability flags with '4 out of 5 outside control limits' detection",
        "X̄ and R charts for multiple CTQ dimensions simultaneously",
        "Mean, UCL, LCL reference lines on every chart",
        "Historical trend analysis across production batches",
      ],
      technologies: ["SPC / Six Sigma", "React", "Python", "Recharts", "SQL Server"],
      image: spcAnalysis2Img,
      Icon: Activity,
    },
  ];

  const keyHighlights = [
    { Icon: Eye, title: "Live CMM Data", description: "Real-time connection to SQL Server CMM inspection records" },
    { Icon: Zap, title: "Instant KPIs", description: "Pass rate, OOT count, and fail count at a glance" },
    { Icon: Shield, title: "SPC Control", description: "X̄ & R charts with Cpk/Pp indices per dimension" },
    { Icon: BarChart3, title: "Auto Reports", description: "Generated quality analysis reports with deviation charts" },
  ];

  const impactStats = [
    { value: "8,325+", label: "Measurement Rows" },
    { value: "55.69%", label: "Live Pass Rate Tracked" },
    { value: "6", label: "Dimension Types Monitored" },
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
                AI / Smart Manufacturing
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight mb-6">
                CMM Intelligence —{' '}
                <span className="text-automation-green">Quality Inspection Platform</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                A real-time CMM inspection intelligence platform built for Craftsman Automation,
                delivering live quality dashboards, SPC analysis, and auto-generated inspection reports
                connected directly to SQL Server measurement data.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {impactStats.map((s) => (
                  <div key={s.label} className="rounded-xl border border-border bg-card px-5 py-3 text-center">
                    <p className="text-2xl font-black text-automation-green">{s.value}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="rounded-2xl overflow-hidden shadow-2xl border border-border"
            >
              <img src={dashboardImg} alt="CMM Intelligence Dashboard" className="w-full h-auto object-cover" />
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

      {/* Project Sections — alternating image/text like HMI */}
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
                {/* Text side */}
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

                {/* Image side */}
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

export default ManufacturingProject;
