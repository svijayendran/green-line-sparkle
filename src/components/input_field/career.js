import { Briefcase, Users, TrendingUp, Award, MapPin, Clock, DollarSign } from 'lucide-react';

export const careerPageData = {
  hero: {
    title: "Join Our Innovation Team",
    subtitle: "Shape the Future of Automotive Automation",
    description: "Be part of a dynamic team that's revolutionizing the automotive industry through cutting-edge IoT and AI solutions.",
    ctaText: "View Open Positions"
  },
  
  whyJoinUs: {
    title: "Why Choose GreenLine Automation?",
    subtitle: "More than just a career - it's your opportunity to drive innovation",
    benefits: [
      {
        icon: TrendingUp,
        title: "Growth Opportunities",
        description: "Continuous learning with access to latest technologies and professional development programs"
      },
      {
        icon: Users,
        title: "Collaborative Culture",
        description: "Work with passionate professionals in an environment that values creativity and teamwork"
      },
      {
        icon: Award,
        title: "Innovation Focus",
        description: "Lead projects that shape the future of automotive automation and make a real impact"
      },
      {
        icon: DollarSign,
        title: "Competitive Packages",
        description: "Attractive salary, comprehensive benefits, and performance-based incentives"
      }
    ]
  },

  openPositions: {
    title: "Open Positions",
    subtitle: "Find your perfect role in our growing team",
    jobs: [
      {
        id: 1,
        title: "Senior IoT Engineer",
        department: "Engineering",
        location: "Tech Valley, CA",
        type: "Full-time",
        experience: "5+ years",
        description: "Lead the development of IoT solutions for automotive automation systems. Design and implement sensor networks, edge computing solutions, and real-time data processing systems.",
        requirements: [
          "Bachelor's degree in Electrical/Computer Engineering",
          "5+ years experience in IoT system development",
          "Proficiency in embedded systems and sensor integration",
          "Experience with automotive industry standards"
        ]
      },
      {
        id: 2,
        title: "AI/ML Specialist",
        department: "Research & Development",
        location: "Tech Valley, CA",
        type: "Full-time",
        experience: "3+ years",
        description: "Develop and implement AI algorithms for automotive automation. Work on machine learning models for predictive maintenance, adaptive controls, and intelligent decision-making systems.",
        requirements: [
          "Master's degree in AI/ML or Computer Science",
          "3+ years experience in machine learning",
          "Strong programming skills in Python/TensorFlow",
          "Experience with automotive data analysis"
        ]
      },
      {
        id: 3,
        title: "Dashboard Developer",
        department: "Software Development",
        location: "Remote",
        type: "Full-time",
        experience: "2+ years",
        description: "Create responsive and intuitive dashboards for automotive data visualization. Develop real-time analytics interfaces and custom KPI tracking systems.",
        requirements: [
          "Bachelor's degree in Computer Science",
          "2+ years experience in frontend development",
          "Proficiency in React, JavaScript, and data visualization",
          "Experience with real-time data systems"
        ]
      },
      {
        id: 4,
        title: "Automotive Systems Analyst",
        department: "Engineering",
        location: "Tech Valley, CA",
        type: "Full-time",
        experience: "4+ years",
        description: "Analyze automotive systems and processes to identify automation opportunities. Work closely with clients to understand requirements and design custom solutions.",
        requirements: [
          "Bachelor's degree in Automotive Engineering",
          "4+ years experience in automotive industry",
          "Strong analytical and problem-solving skills",
          "Knowledge of automotive protocols and standards"
        ]
      }
    ]
  },

  applicationProcess: {
    title: "Application Process",
    subtitle: "Your journey to joining our team",
    steps: [
      {
        step: 1,
        title: "Apply Online",
        description: "Submit your application through our career portal with your resume and cover letter"
      },
      {
        step: 2,
        title: "Initial Review",
        description: "Our HR team reviews your application and conducts initial screening"
      },
      {
        step: 3,
        title: "Technical Interview",
        description: "Technical discussion with our engineering team about your skills and experience"
      },
      {
        step: 4,
        title: "Final Interview",
        description: "Meet with team leads and discuss your fit within our organization"
      },
      {
        step: 5,
        title: "Welcome Aboard",
        description: "Join our team and start your journey in automotive automation innovation"
      }
    ]
  },

  contact: {
    title: "Ready to Join Us?",
    subtitle: "Get in touch with our HR team",
    email: "careers@greenlineautomation.com",
    phone: "+1 (555) 123-4567",
    address: "123 Innovation Drive, Tech Valley, CA 94025"
  }
};