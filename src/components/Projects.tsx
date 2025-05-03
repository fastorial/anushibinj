
import portfolioData from "../data/portfolio.json";
import AnimatedSection from "./AnimatedSection";

const Projects = () => {
  return (
    <AnimatedSection id="projects" title="Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolioData.projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </AnimatedSection>
  );
};

interface ProjectProps {
  project: {
    title: string;
    description: string;
    technologies: string[];
    image: string;
    link: string;
  };
  index: number;
}

const ProjectCard = ({ project }: ProjectProps) => {
  return (
    <div 
      className="card-hover bg-secondary rounded-lg overflow-hidden border border-border flex flex-col"
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, idx) => (
            <span 
              key={idx} 
              className="px-2 py-1 bg-background text-xs rounded-md border border-border"
            >
              {tech}
            </span>
          ))}
        </div>
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
        >
          View Project
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 ml-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Projects;
