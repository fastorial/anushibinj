
import portfolioData from "../data/portfolio.json";
import AnimatedSection from "./AnimatedSection";

const Experience = () => {
  return (
    <AnimatedSection id="experience" title="Experience">
      <div className="space-y-8">
        {portfolioData.experience.map((job, index) => (
          <div 
            key={index} 
            className="card-hover bg-secondary rounded-lg p-6 border border-border"
          >
            <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
              <div>
                <h3 className="text-xl font-semibold">{job.role}</h3>
                <p className="text-primary font-medium">{job.company}</p>
              </div>
              <span className="text-muted-foreground mt-2 md:mt-0">{job.duration}</span>
            </div>
            <p className="text-muted-foreground mb-4">{job.description}</p>
            <ul className="space-y-2 list-disc pl-5 text-foreground/80">
              {job.responsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Experience;
