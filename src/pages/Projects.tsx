import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { projectsContent } from '@/components/input_field/projects';
import ProjectHeroSection from '@/components/project_Hero';
import projectHmiImage from '@/assets/project-hmi.jpg';
import projectAnalyticsImage from '@/assets/project-analytics.jpg';
import projectAutomationImage from '@/assets/project-automation.jpg';
import projectWebMobileImage from '@/assets/project-webmobile.jpg';
import projectAiMlImage from '@/assets/project-aiml.jpg';
const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ProjectHeroSection />
      
      
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            {projectsContent.heroTitle}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
            {projectsContent.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Projects Alternating Layout */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-24">
          {projectsContent.projects.map((project, index) => {
            const projectImages = [
              projectHmiImage,
              projectAnalyticsImage,
              projectAutomationImage,
              projectWebMobileImage,
              projectAiMlImage
            ];
            
            const isEven = index % 2 === 1;
            
            return (
              <div key={index} className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{project.icon}</div>
                    <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full">
                      {project.type}
                    </span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                {/* Image */}
                <div className="flex-1">
                  <div className="relative overflow-hidden rounded-xl shadow-2xl">
                    <img
                      src={projectImages[index]}
                      alt={project.title}
                      className="w-full h-[300px] lg:h-[400px] object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;