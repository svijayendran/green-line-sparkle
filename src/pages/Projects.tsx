import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { projectsContent } from '@/components/input_field/projects';

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
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

      {/* Projects Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8">
            {projectsContent.projects.map((project, index) => (
              <div key={index} className="bg-card p-8 rounded-lg border hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{project.icon}</div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-foreground">
                        {project.title}
                      </h3>
                      <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full mt-2 md:mt-0">
                        {project.type}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;