import { Database, ShieldCheck, BarChart3, Zap } from 'lucide-react';

export const productscontent = {
  hero: {
    title: "Precision Automation for Industrial Excellence",
    subtitle: "Precision Engineered Solutions",
    description: "From real-time traceability to automated data pipelines, we provide the specialized modules to optimize your 1.2L & 2L engine block production lines.",
  },
  
  categories: [
    {
      icon: ShieldCheck,
      title: "Quality Assurance",
      description: "Automated grading and verification systems ensuring 100% part compliance."
    },
    {
      icon: BarChart3,
      title: "Live Analytics",
      description: "Real-time KPI tracking and dashboard visualization for factory floor stakeholders."
    },
    {
      icon: Database,
      title: "Data Integrity",
      description: "Robust MySQL-based pipelines for CMM, Lab, and DFQ data ingestion."
    },
    {
      icon: Zap,
      title: "Speed & Scale",
      description: "Accelerated deployment with reusable codebase efficiency and automation."
    }
  ],

  productList: [
    {
      id: 1,
      name: "Part Traceability Module",
      category: "Traceability",
      description: "End-to-end monitoring of engine heads and blocks using automated serial number mapping.",
      features: [
        "DFQ File Conversion (CSV)",
        "Automated MySQL Ingestion",
        "Historical Traceability Logs",
        "Part-wise Measurement Summary"
      ]
    },
    {
      id: 2,
      name: "Quality Dashboard Application",
      category: "Dashboard",
      description: "Centralized visualization platform for real-time and historical quality metrics.",
      features: [
        "Interactive Slicers & Filters",
        "Run Chart Screen Integration",
        "SPC-related Value Masking",
        "Custom Automated Email Module"
      ]
    },
    {
      id: 3,
      name: "Grading Sticker Generator",
      category: "Automation",
      description: "UI-based generator for Pallet and Part stickers post-inspection.",
      features: [
        "Automatic Serial Number Linking",
        "Print-ready PDF Formats",
        "Grading Result Mapping",
        "High-Speed Label Rendering"
      ]
    },
    {
      id: 4,
      name: "Endoscopy Integration Module",
      category: "Inspection",
      description: "Visual record capture and storage for internal inspection results.",
      features: [
        "Image Capture Interface",
        "Part Serial Number Linking",
        "Historical Inspection Retrieval",
        "High-Resolution Image Storage"
      ]
    }
  ],

  
};
