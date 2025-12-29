import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { ArrowLeft, Monitor, Settings, Wrench, Clock, BarChart3, Users, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import loginScreen from '@/assets/hmi/login-screen.jpg';
import dashboardOverview from '@/assets/hmi/dashboard-overview.jpg';
import machineControl from '@/assets/hmi/machine-control.jpg';
import setupMode from '@/assets/hmi/setup-mode.jpg';
import reasonTracking from '@/assets/hmi/reason-tracking.jpg';
import toolManagement from '@/assets/hmi/tool-management.jpg';

const HMIProject = () => {
  const projectSections = [
    {
      title: "Employee Login & Authentication",
      summary: "Secure role-based access control system for operators and supervisors with personalized greetings and session management.",
      features: [
        "Secure employee authentication with unique credentials",
        "Role-based access control (Operator, Supervisor, Admin)",
        "Personalized welcome messages and shift-based greetings",
        "Session tracking and automatic timeout",
        "Multi-operator login support for shared workstations"
      ],
      technologies: ["React.js", "Node.js", "JWT Authentication", "PostgreSQL", "LDAP Integration"],
      image: loginScreen,
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Real-Time Machine Dashboard",
      summary: "Comprehensive overview of all machines in the production cell with live status indicators showing running, idle, breakdown, and waiting states.",
      features: [
        "Live machine status monitoring (Running, Idle, Breakdown, Waiting)",
        "Color-coded status indicators for quick visual assessment",
        "Part name and program number display",
        "Multi-machine cell overview with grid layout",
        "Real-time server synchronization with timestamp display"
      ],
      technologies: ["WebSocket", "React.js", "Real-time Data Streaming", "Modbus TCP/IP", "OPC UA"],
      image: dashboardOverview,
      icon: <Monitor className="w-8 h-8" />
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
        "On-screen virtual keyboard for touch input"
      ],
      technologies: ["PLC Integration", "Modbus RTU", "Touch Screen UI", "Industrial Protocols", "HMI Runtime"],
      image: machineControl,
      icon: <Settings className="w-8 h-8" />
    },
    {
      title: "Setup Mode Management",
      summary: "Dedicated setup mode with confirmation dialogs and program selection interface for changeover operations and machine configuration.",
      features: [
        "Setup mode activation with confirmation alerts",
        "Program number selection interface",
        "Setup time tracking and logging",
        "Part name and operation verification",
        "Operator authentication for mode changes"
      ],
      technologies: ["State Management", "Industrial HMI", "Database Logging", "Event Tracking"],
      image: setupMode,
      icon: <Wrench className="w-8 h-8" />
    },
    {
      title: "Reason Tracking System",
      summary: "Comprehensive downtime reason tracking with categorized loss categories including energy loss, breakdown, speed loss, PM, and more.",
      features: [
        "Pre-defined reason categories (Non-valid activity, Energy loss, Breakdown, PM, etc.)",
        "Custom reason creation with admin authentication",
        "Ideal time setting per reason type",
        "Reason group and sub-reason selection",
        "Downtime analysis and reporting integration"
      ],
      technologies: ["OEE Calculation", "Data Analytics", "SQL Server", "Power BI Integration", "REST APIs"],
      image: reasonTracking,
      icon: <Clock className="w-8 h-8" />
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
        "Automated alerts for tool replacement"
      ],
      technologies: ["Predictive Maintenance", "Machine Learning", "IoT Sensors", "MQTT", "InfluxDB"],
      image: toolManagement,
      icon: <BarChart3 className="w-8 h-8" />
    }
  ];

  const keyHighlights = [
    { icon: <Shield className="w-6 h-6" />, title: "Industry 4.0 Ready", description: "Full compliance with smart manufacturing standards" },
    { icon: <Zap className="w-6 h-6" />, title: "Real-Time Sync", description: "Sub-second data synchronization across all terminals" },
    { icon: <Monitor className="w-6 h-6" />, title: "Touch Optimized", description: "Industrial-grade touch screen interface design" },
    { icon: <BarChart3 className="w-6 h-6" />, title: "OEE Tracking", description: "Complete Overall Equipment Effectiveness monitoring" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-6xl mx-auto">
          <Link to="/projects" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full">
              IoT / Embedded Systems
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mt-6 mb-6">
              Human-Machine Interface (HMI) for Industrial Automation
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl">
              A comprehensive Industry 4.0 compliant HMI solution developed for Aqua Group's manufacturing operations, 
              featuring real-time machine monitoring, operator management, tool life tracking, and advanced downtime analysis.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-12 px-4 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {keyHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center p-4"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-3">
                  {highlight.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-1">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Sections */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto space-y-32">
          {projectSections.map((section, index) => {
            const isEven = index % 2 === 1;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-start gap-12`}
              >
                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      {section.icon}
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                      {section.title}
                    </h2>
                  </div>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {section.summary}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {section.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2 text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {section.technologies.map((tech, tIndex) => (
                        <span
                          key={tIndex}
                          className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Image */}
                <div className="flex-1 w-full">
                  <div className="relative overflow-hidden rounded-xl shadow-2xl border border-border">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Project Summary */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Project Impact
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              This HMI solution has been successfully deployed across multiple production cells, 
              enabling real-time visibility into manufacturing operations, reducing unplanned downtime by 35%, 
              and improving overall equipment effectiveness (OEE) by 22%.
            </p>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-primary">35%</div>
                <div className="text-muted-foreground">Downtime Reduction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary">22%</div>
                <div className="text-muted-foreground">OEE Improvement</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary">100+</div>
                <div className="text-muted-foreground">Machines Connected</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HMIProject;
