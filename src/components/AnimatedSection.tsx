
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

const AnimatedSection = ({ id, title, children }: AnimatedSectionProps) => {
  return (
    <section id={id} className="py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">{title}</h2>
        <div>
          {children}
        </div>
      </div>
    </section>
  );
};

export default AnimatedSection;
