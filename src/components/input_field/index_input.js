import { 
  Car, Brain, BarChart3, Zap, 
  Mail, Phone, MapPin, 
  Clock, Users, CheckCircle 
} from 'lucide-react';

// Navigation items for the header
export const navItems = [
  { name: 'Home', id: 'hero' },
  { name: 'Features', id: 'features' },
  { name: 'Testimonials', id: 'testimonials' },
  { name: 'Contact', id: 'contact' }
];

/* DEPRECATED: The automotive feature set below has been moved to 
  WhyChooseUsSection.tsx for better UI consolidation.
  
  const features = [
    {
      icon: Car,
      title: "Automotive IoT Solutions",
      description: "Advanced IoT-enabled automotive systems that provide real-time monitoring...",
      features: ["Smart Vehicle Integration", "IoT Sensor Networks", "Remote Diagnostics"]
    },
    {
      icon: Brain,
      title: "AI-Powered Automation",
      description: "Cutting-edge artificial intelligence solutions that adapt to trends...",
      features: ["Machine Learning Algorithms", "Adaptive Controls", "Intelligent Decision Making"]
    },
    {
      icon: BarChart3,
      title: "Dashboard Analytics",
      description: "Comprehensive data visualization and analytics dashboards...",
      features: ["Real-time Dashboards", "Performance Analytics", "Custom KPI Tracking"]
    },
    {
      icon: Zap,
      title: "Lightning Fast Performance",
      description: "Optimized algorithms and cutting-edge hardware deliver unmatched speed...",
      features: ["Real-time Processing", "Edge Computing", "Microsecond Response Time"]
    }
  ];
*/

// Contact Section Information
export const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    content: "info@greenlineautomations.com",
    description: "Send us an email anytime"
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+91 7904698208",
    description: "Mon-Fri from 8am to 5pm"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    content: "No. 3 / 503 A, V K V Nagar, Ashokapuram, Nggo colony, Coimbatore, Tamil Nadu 641022",
    description: "Our headquarters"
  }
];

// Active Features (Used in Contact/About sections)
export const features = [
  {
    icon: Clock,
    title: "Fast Response",
    description: "We respond to all inquiries within 2 hours during business hours"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Connect directly with our automation specialists"
  },
  {
    icon: CheckCircle,
    title: "Proven Results",
    description: "Join 500+ companies that trust our solutions"
  }
];