import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { ArrowLeft, Users, BarChart3, UtensilsCrossed, CalendarDays, FileText, ShieldCheck, CheckCircle2, Database, ClipboardList } from 'lucide-react';
import { Link } from 'react-router-dom';
import projectHrImage from '@/assets/project-hr.png';
import hrLogin from '@/assets/hr/screens/image1.png';
import hrOverview from '@/assets/hr/screens/image2.png';
import hrEmployeeMaster from '@/assets/hr/screens/image3.png';
import hrAttendance from '@/assets/hr/screens/image4.png';
import hrAttendanceChart from '@/assets/hr/screens/image6.png';
import hrPayroll from '@/assets/hr/screens/image7.png';
import hrLeave from '@/assets/hr/screens/image9.png';
import hrMealReports from '@/assets/hr/screens/image10.png';
import hrShiftAllocation from '@/assets/hr/screens/image11.png';
import hrSalaryReports from '@/assets/hr/screens/image14.png';
import hrEmployeePortal from '@/assets/hr/screens/image15.png';
import hrLeaveRequest from '@/assets/hr/screens/image16.png';

const HRProject = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const projectSections = [
    {
      title: "Login & Role-Based Access",
      summary: "A unified login page that routes users to either the HR Admin Portal or the Employee Portal based on their role, with Green Line Automation branding.",
      features: [
        "Dual-portal login — HR Admin and Employee roles",
        "Employee ID based authentication",
        "Secure session management with logout",
        "Green Line Automation branded interface",
        "Responsive layout for desktop and tablet use",
      ],
      technologies: ["React", "Python (Flask)", "SSMS", "JWT Auth", "Session Management"],
      image: hrLogin,
      Icon: ShieldCheck,
    },
    {
      title: "HR Command Center — Overview",
      summary: "The HR admin's central dashboard showing real-time workforce KPIs: total employees, present today, pending approvals, and quick-action shortcuts.",
      features: [
        "Live headcount: Total Employees, Present Today, Active Employees",
        "Pending approvals alert with direct action link",
        "Quick HR Actions: Approve Leaves, Manage Payroll, Employee DB, Attendance Trends",
        "Full navigation across all HR modules",
        "Designed for complete oversight and administration",
      ],
      technologies: ["React", "Python", "SSMS", "REST API", "Real-time Data"],
      image: hrOverview,
      Icon: BarChart3,
    },
    {
      title: "Employee Master — Workforce Management",
      summary: "A comprehensive employee database with 775 employees, supporting search, filter by department/division/designation, add/edit/deactivate, and CSV export.",
      features: [
        "775 employee records with Active/Inactive status tracking",
        "Search by name or employee ID with multi-filter dropdowns",
        "Add Employee form and inline edit/deactivate actions",
        "Export employee data to CSV/Excel",
        "Department, Division, and Designation-wise filtering",
      ],
      technologies: ["React", "Python (Flask)", "SSMS", "Data Tables", "Export Module"],
      image: hrEmployeeMaster,
      Icon: Users,
    },
    {
      title: "Company Attendance — Biometric Integration",
      summary: "Real-time attendance dashboard pulling punch data from biometric devices with OT tracking, showing 778 employees across present, absent, late, and OT categories.",
      features: [
        "Real-time biometric punch-in/punch-out data sync",
        "Attendance stats: Present 90, Absent 688, Late 45, OT Employees 73",
        "Total OT Hours tracked (407.71h shown)",
        "Date-range and department/division filtering",
        "Export attendance records to CSV",
      ],
      technologies: ["React", "Python", "SSMS", "Biometric API", "OT Calculation"],
      image: hrAttendance,
      Icon: ClipboardList,
    },
    {
      title: "Attendance Analytics & Visualizations",
      summary: "Visual breakdowns of attendance data including a donut chart (Present/Absent/Late), top OT employees bar chart, and department-wise attendance comparison.",
      features: [
        "Donut chart: Present 11%, Absent 84%, Late 5% distribution",
        "Top OT Employees horizontal bar chart",
        "Department-wise attendance bar graph",
        "Shift-wise and division-wise breakdown",
        "Interactive charts with drill-down capability",
      ],
      technologies: ["React", "Chart.js", "Python", "SSMS", "Data Aggregation"],
      image: hrAttendanceChart,
      Icon: BarChart3,
    },
    {
      title: "Payroll Management",
      summary: "Full payroll module that syncs punch data for accurate OT calculation, showing gross pay, PF, ESI, PT deductions, and net payroll across 193 employees for April 2026.",
      features: [
        "Monthly payroll computation with eHR sync",
        "OT calculation via Sync Punch & OT feature",
        "Salary breakdown: Basic ₹3,798,210 | OT ₹381,752 | Net ₹2,136,069",
        "Per-employee view: Days, Gross, PF, ESI, PT, Total Deductions",
        "Salary Configuration panel for base salary management",
      ],
      technologies: ["React", "Python", "SSMS", "eHR Integration", "Payroll Engine"],
      image: hrPayroll,
      Icon: FileText,
    },
    {
      title: "Leave Approval Center",
      summary: "HR-side leave management with pending approval queue, filter by status (Pending/Approved/Rejected), and visible leave policy rules (EL, LOP).",
      features: [
        "Pending approvals queue with one-click approve/reject",
        "Filter by Pending, Approved, Rejected, All",
        "Leave Policy display: EL (12/year), LOP, half-day rules",
        "Carry-forward leave tracking with expiry alerts",
        "Leave request history per employee",
      ],
      technologies: ["React", "Python (Flask)", "SSMS", "Email Notifications", "Leave Engine"],
      image: hrLeave,
      Icon: CalendarDays,
    },
    {
      title: "Daily Meal Reports — Canteen Module",
      summary: "Canteen management dashboard tracking daily meals served per shift (Breakfast, Lunch, Dinner), total meal cost, OT meals, and approved vs rejected breakdown.",
      features: [
        "Daily meal tracking: Breakfast, Lunch, Dinner per shift",
        "Total Approved Meals and Meal Cost calculation",
        "OT Meal count tracking separately",
        "Approved vs Rejected meal report with chart",
        "Meal type breakdown for payable amount reporting",
      ],
      technologies: ["React", "Python", "SSMS", "Canteen Integration", "Report Generation"],
      image: hrMealReports,
      Icon: UtensilsCrossed,
    },
    {
      title: "Shift Allocation Management",
      summary: "Bulk shift assignment tool for 500 employees across departments, with OT threshold configuration per worker and category-based filtering.",
      features: [
        "500 employees listed with current shift and OT threshold",
        "Bulk Select All and Bulk Assign for mass shift changes",
        "Filter by Department, Division, and Category",
        "Per-employee shift assignment with OT threshold config",
        "10 active shifts managed simultaneously",
      ],
      technologies: ["React", "Python", "SSMS", "Shift Engine", "Bulk Operations"],
      image: hrShiftAllocation,
      Icon: ClipboardList,
    },
    {
      title: "Salary Reports",
      summary: "Detailed salary report module with NAPS, NAPS OT, Salary, OT Salary, Staff Salary, On Roll Worker tabs — exportable to CSV for payroll processing.",
      features: [
        "Multi-tab salary reports: NAPS, Salary, OT, Staff, On-Roll Worker",
        "Monthly report selection with record count display",
        "Per-employee breakdown: Fixed Salary, BA & DA, HRA, OA, LOP Days",
        "Export to CSV for payroll integration",
        "April 2026 salary data with 6 records shown",
      ],
      technologies: ["React", "Python", "SSMS", "CSV Export", "Salary Computation"],
      image: hrSalaryReports,
      Icon: FileText,
    },
    {
      title: "Employee Self-Service Portal",
      summary: "A separate employee-facing portal where staff can view their attendance, leave balance, meal schedule, and raise leave/document/custom requests.",
      features: [
        "Personalized welcome dashboard per employee",
        "Category, monthly presence days, leave balance, meal today at a glance",
        "Quick Actions: Request Leave, Upload Document, Custom Request",
        "Track Attendance and Leave History views",
        "Self-service reduces HR admin load significantly",
      ],
      technologies: ["React", "Python (Flask)", "SSMS", "Employee Auth", "Self-Service Module"],
      image: hrEmployeePortal,
      Icon: Users,
    },
    {
      title: "Leave Request — Employee Side",
      summary: "Employee leave submission form with Earned Leave balance (27 days), carry-forward tracking (15 days expiring 2027), half-day option, and request history.",
      features: [
        "Earned Leave balance with used/available breakdown",
        "Carry Forward Leave with expiry date alert",
        "Half-day leave option with 0.5 day deduction",
        "Start Date / End Date picker with reason field",
        "My Leave Requests history panel on the same page",
      ],
      technologies: ["React", "Python", "SSMS", "Leave Policy Engine", "Form Validation"],
      image: hrLeaveRequest,
      Icon: CalendarDays,
    },
  ];

  const keyHighlights = [
    { Icon: Users, title: "Dual Portal", description: "Separate HR Admin and Employee self-service portals" },
    { Icon: UtensilsCrossed, title: "Canteen Module", description: "Daily meal tracking with shift-wise reports" },
    { Icon: Database, title: "SQL Server (SSMS)", description: "Enterprise-grade database for 775+ employees" },
    { Icon: ShieldCheck, title: "Role-Based Access", description: "Secure routing for HR admins and employees" },
  ];

  const impactStats = [
    { value: "775+", label: "Employees Managed" },
    { value: "12", label: "Modules Delivered" },
    { value: "100%", label: "Payroll Accuracy" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* ── Hero ── */}
      <section className="relative pt-28 pb-20 px-4 overflow-hidden">
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
                Full Stack / HR Tech
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight mb-6">
                HR & Employee{' '}
                <span className="text-automation-green">Management System</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                A full-stack HR platform — "People App" — built with React, Python, and SQL Server (SSMS).
                Features a dual-portal system: an HR Admin Portal with 12 modules covering attendance,
                payroll, leave, canteen, and shift management; and an Employee Self-Service Portal
                for 775+ staff members.
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
              <img src={projectHrImage} alt="HR System" className="w-full h-auto object-cover" />
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
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-14`}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-6xl font-black text-foreground/8 leading-none select-none">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-automation-green/10 shrink-0">
                      <Icon className="h-6 w-6 text-automation-green" />
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-snug">{section.title}</h2>
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
                        <span key={t} className="px-3 py-1 text-xs rounded-lg border border-border bg-muted text-foreground/80 font-medium">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="flex-1 min-w-0 w-full rounded-2xl overflow-hidden shadow-2xl border border-border"
                >
                  <img src={section.image} alt={section.title} className="w-full h-auto object-cover" />
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
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-xl font-semibold uppercase tracking-[0.22em] text-automation-green mb-4">Project Impact</p>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">Built. Deployed. Trusted.</h2>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto mb-12 leading-relaxed">
              People App replaced manual spreadsheets and fragmented HR tools with a single unified platform —
              managing 775+ employees across attendance, payroll, leaves, canteen, and shift operations
              with full accuracy and zero manual overhead.
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

export default HRProject;
