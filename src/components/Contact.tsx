
import { Github, Mail, Link } from "lucide-react";
import portfolioData from "../data/portfolio.json";
import AnimatedSection from "./AnimatedSection";

const Contact = () => {
  const { email, linkedin, github, blog } = portfolioData.social;

  return (
    <AnimatedSection id="contact" title="Contact">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-muted-foreground mb-8">
          I'm currently open to new opportunities and collaborations. Feel free to reach out through any of the following channels:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a 
            href={`mailto:${email}`} 
            className="card-hover bg-secondary rounded-lg p-6 border border-border flex items-center justify-center gap-3"
          >
            <Mail className="h-5 w-5 text-primary" />
            <span>Email Me</span>
          </a>
          <a 
            href={linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="card-hover bg-secondary rounded-lg p-6 border border-border flex items-center justify-center gap-3"
          >
            <svg 
              className="h-5 w-5 text-primary" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M6 9H2V21H6V9Z" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            <span>LinkedIn</span>
          </a>
          <a 
            href={github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="card-hover bg-secondary rounded-lg p-6 border border-border flex items-center justify-center gap-3"
          >
            <Github className="h-5 w-5 text-primary" />
            <span>GitHub</span>
          </a>
          <a 
            href={blog} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="card-hover bg-secondary rounded-lg p-6 border border-border flex items-center justify-center gap-3"
          >
            <Link className="h-5 w-5 text-primary" />
            <span>Blog</span>
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
