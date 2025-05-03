
import { useRef, useEffect, ReactNode } from 'react';

interface AnimatedSectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

const AnimatedSection = ({ id, title, children }: AnimatedSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id={id} className="py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">{title}</h2>
        <div ref={sectionRef} className="opacity-0">
          {children}
        </div>
      </div>
    </section>
  );
};

export default AnimatedSection;
