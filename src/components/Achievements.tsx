
import portfolioData from "../data/portfolio.json";
import AnimatedSection from "./AnimatedSection";

const Achievements = () => {
  return (
    <AnimatedSection id="achievements" title="Achievements">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {portfolioData.achievements.map((achievement, index) => (
          <div 
            key={index} 
            className="card-hover bg-secondary rounded-lg p-6 border border-border flex flex-col"
          >
            <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 text-primary" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" 
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-1">{achievement.title}</h3>
            <p className="text-primary text-sm mb-2">{achievement.issuer}</p>
            <p className="text-muted-foreground text-sm mb-2">{achievement.date}</p>
            <p className="text-foreground/70 text-sm">{achievement.description}</p>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Achievements;
