
import { useState, useEffect } from "react";
import portfolioData from "../data/portfolio.json";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-2 bg-background/90 backdrop-blur-sm shadow-lg" : "py-4"
      }`}
    >
      <div className="container max-w-6xl mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold tracking-tight">
          <span className="gradient-text">{portfolioData.header.name}</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="nav-link text-sm font-medium hover:text-primary transition-colors">
            Home
          </a>
          <a href="#skills" className="nav-link text-sm font-medium hover:text-primary transition-colors">
            Skills
          </a>
          <a href="#experience" className="nav-link text-sm font-medium hover:text-primary transition-colors">
            Experience
          </a>
          <a href="#projects" className="nav-link text-sm font-medium hover:text-primary transition-colors">
            Projects
          </a>
          <a href="#achievements" className="nav-link text-sm font-medium hover:text-primary transition-colors">
            Achievements
          </a>
          <a href="#youtube" className="nav-link text-sm font-medium hover:text-primary transition-colors">
            YouTube
          </a>
          <a href="#contact" className="nav-link text-sm font-medium hover:text-primary transition-colors">
            Contact
          </a>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 rounded-md text-foreground hover:bg-secondary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm shadow-lg absolute left-0 right-0 transition-all animate-fade-in">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
            <a 
              href="#home" 
              className="py-2 px-4 hover:bg-secondary rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#skills" 
              className="py-2 px-4 hover:bg-secondary rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Skills
            </a>
            <a 
              href="#experience" 
              className="py-2 px-4 hover:bg-secondary rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Experience
            </a>
            <a 
              href="#projects" 
              className="py-2 px-4 hover:bg-secondary rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#achievements" 
              className="py-2 px-4 hover:bg-secondary rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Achievements
            </a>
            <a 
              href="#youtube" 
              className="py-2 px-4 hover:bg-secondary rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              YouTube
            </a>
            <a 
              href="#contact" 
              className="py-2 px-4 hover:bg-secondary rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
