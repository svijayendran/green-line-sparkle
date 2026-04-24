import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Image imports
import projectHmiImage from '@/assets/projects-hmi.png';
import projectAnalyticsImage from '@/assets/project-analytics.jpg';
import projectAutomationImage from '@/assets/project-automation.jpg';
import projectWebMobileImage from '@/assets/project-webmobile.jpg';
import projectAiMlImage from '@/assets/project-aiml.jpg';

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: 'Human-Machine Interface (HMI) for Traction Systems',
      type: 'IoT / Embedded Systems',
      description:
        'Developed a comprehensive real-time HMI platform that revolutionizes how operators interact with traction systems. Includes live diagnostics, predictive maintenance alerts, and comprehensive system monitoring capabilities.',
      badge: 'IoT',
      badgeColor: 'bg-automation-green',
      image: projectHmiImage,
      link: '/projects#project-hmi'
    },
    {
      id: 2,
      title: 'Advanced Data Analytics Dashboard',
      type: 'Data Visualization / BI',
      description:
        'Engineered a cutting-edge real-time analytics platform transforming complex data streams into actionable intelligence. Processes over 1 million data points per hour with machine learning-powered anomaly detection.',
      badge: 'DATA VISUALIZATION / BI',
      badgeColor: 'bg-automation-green',
      image: projectAnalyticsImage,
      link: '/projects#project-analytics'
    },
    {
      id: 3,
      title: 'Intelligent Web & Document Automation Suite',
      type: 'Automation / AI',
      description:
        'Created a comprehensive automation ecosystem leveraging AI and RPA to streamline document workflows. Advanced OCR, NLP, and computer vision automatically extract and process information with 99.2% accuracy.',
      badge: 'AUTOMATION / AI',
      badgeColor: 'bg-automation-green',
      image: projectAutomationImage,
      link: '/projects#project-automation'
    },
    {
      id: 4,
      title: 'Enterprise Web & Mobile Development Portfolio',
      type: 'Full Stack / Cross-Platform',
      description:
        'Delivered scalable web and mobile applications with cloud-native architecture, strong security, and responsive user experiences across devices.',
      badge: 'FULL STACK',
      badgeColor: 'bg-automation-green',
      image: projectWebMobileImage,
      link: '/projects#project-web-mobile'
    },
    {
      id: 5,
      title: 'Advanced AI & Machine Learning Solutions',
      type: 'AI Product Development',
      description:
        'Developed sophisticated AI/ML solutions including predictive analytics with 94% accuracy, intelligent chatbots with sentiment analysis, and computer vision applications for automated inspection.',
      badge: 'AI & ML',
      badgeColor: 'bg-automation-green',
      image: projectAiMlImage,
      link: '/projects#project-ai-ml'
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <span className="inline-block px-4 py-2 bg-primary/20 text-automation-green border border-automation-green/30 rounded-full text-sm font-semibold backdrop-blur-sm">
              SHOWCASING OUR PROJECT EXCELLENCE
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
          >
            Featured Projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-slate-600 max-w-3xl mx-auto"
          >
            Explore our portfolio of successful implementations in automation, AI, and digital transformation
          </motion.p>
        </div>

        {/* Projects Hover Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 auto-rows-fr">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-black/60 shadow-xl ${
                index === 0 ? 'sm:col-span-2 xl:col-span-2' : ''
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/20" />

              <div className="absolute left-5 right-5 top-5">
                <span
                  className={`inline-flex px-3 py-1 ${project.badgeColor} text-black text-xs font-bold rounded-full`}
                >
                  {project.badge}
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70 mb-2">{project.type}</p>
                <h3 className="text-xl md:text-2xl font-bold leading-tight mb-3">{project.title}</h3>

                <p className="text-sm md:text-base text-white/85 max-w-2xl max-h-0 opacity-0 overflow-hidden transition-all duration-300 md:group-hover:max-h-40 md:group-hover:opacity-100 md:group-hover:mb-4">
                  {project.description}
                </p>

                <Link
                  to={project.link}
                  className="inline-flex items-center gap-2 text-white font-semibold transition-all duration-300 md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
                >
                  View Case Study
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
