
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Achievements from "../components/Achievements";
import YouTube from "../components/YouTube";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import portfolioData from "../data/portfolio.json";

const Index = () => {
  // Update document title with user's name from JSON data
  useEffect(() => {
    document.title = `${portfolioData.header.name} | ${portfolioData.header.title}`;
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      <Header />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <YouTube />
      <Contact />
      <Footer />

      {/* Back to top button */}
      <a 
        href="#home" 
        className="fixed bottom-8 right-8 bg-primary/90 hover:bg-primary w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-colors"
        aria-label="Back to top"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-white"
        >
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </a>
    </div>
  );
};

export default Index;
