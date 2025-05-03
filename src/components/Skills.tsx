
import { useRef, useEffect } from "react";
import portfolioData from "../data/portfolio.json";
import AnimatedSection from "./AnimatedSection";

const Skills = () => {
  return (
    <AnimatedSection id="skills" title="Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioData.skills.map((skillCategory, index) => (
          <SkillCategory 
            key={index} 
            category={skillCategory.category} 
            skills={skillCategory.items} 
          />
        ))}
      </div>
    </AnimatedSection>
  );
};

interface SkillCategoryProps {
  category: string;
  skills: string[];
}

const SkillCategory = ({ category, skills }: SkillCategoryProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillItems = entry.target.querySelectorAll('.skill-item');
            skillItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animate-scale-in');
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="bg-secondary rounded-lg p-6 border border-border hover:border-primary/50 transition-colors"
    >
      <h3 className="text-xl font-semibold mb-4 text-center">{category}</h3>
      <div className="flex flex-wrap gap-2 justify-center">
        {skills.map((skill, index) => (
          <span 
            key={index} 
            className="skill-item opacity-0 px-3 py-1 bg-background rounded-full text-sm border border-border hover:border-primary transition-colors hover:shadow-sm hover:shadow-primary/20"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
