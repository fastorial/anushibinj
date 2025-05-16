
import portfolioData from "../data/portfolio.json";
import AnimatedSection from "./AnimatedSection";

function calculateDuration(startStr: string, endStr: string) {
  const monthMap = {
    Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
    Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
  };

  function parseDate(str) {
    if (!str || str.toLowerCase() === 'present' || str.toLowerCase() === 'current') {
      const now = new Date();
      return { year: now.getFullYear(), month: now.getMonth() };
    }
    const [mon, yr] = str.split(' ');
    return { year: parseInt(yr), month: monthMap[mon] };
  }

  const start = parseDate(startStr);
  const end = parseDate(endStr);

  let totalMonths = (end.year - start.year) * 12 + (end.month - start.month);
  if (totalMonths < 0) return 'Invalid date range';

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years === 0) {
    return `${months} mos`;
  } else if (months === 0) {
    return `${years} yr${years > 1 ? 's' : ''}`;
  } else {
    return `${years} yr${years > 1 ? 's' : ''} ${months} mos`;
  }
}

const Experience = () => {
  return (
    <AnimatedSection id="experience" title={`Industry Experience (${calculateDuration(portfolioData.experience[portfolioData.experience.length - 1].duration.from, portfolioData.experience[0].duration.to)})`}>
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
              <span className="text-muted-foreground mt-2 md:mt-0">{`${job.duration.from} - ${job.duration.to} (${calculateDuration(job.duration.from, job.duration.to)})`}</span>
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
