
import portfolioData from "../data/portfolio.json";
import AnimatedSection from "./AnimatedSection";

const YouTube = () => {
  return (
    <AnimatedSection id="youtube" title="YouTube Channels">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolioData.youtube.map((channel, index) => (
          <div 
            key={index} 
            className="card-hover bg-secondary rounded-lg overflow-hidden border border-border"
          >
            <div className="h-48 overflow-hidden relative">
              <img 
                src={channel.thumbnail} 
                alt={channel.name} 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-4 w-full">
                  <h3 className="text-xl font-semibold text-white">{channel.name}</h3>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-muted-foreground mb-4">{channel.description}</p>
              <div className="flex justify-between items-center">
                <a 
                  href={channel.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                >
                  Visit Channel
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
                <a 
                  href={channel.url + '?sub_confirmation=1'} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm transition-colors"
                >
                  Subscribe
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default YouTube;
