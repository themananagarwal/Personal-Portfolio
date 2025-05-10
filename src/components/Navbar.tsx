
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/90 backdrop-blur-md border-b border-border' : 'bg-transparent'}`}>
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="text-xl font-semibold text-apple-text">
          Manan Agarwal
        </a>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-sm font-medium text-apple-text hover:text-apple-blue transition-colors">
            About
          </a>
          <a href="#experience" className="text-sm font-medium text-apple-text hover:text-apple-blue transition-colors">
            Experience
          </a>
          <a href="#projects" className="text-sm font-medium text-apple-text hover:text-apple-blue transition-colors">
            Projects
          </a>
          <a href="#skills" className="text-sm font-medium text-apple-text hover:text-apple-blue transition-colors">
            Skills
          </a>
          <a href="#education" className="text-sm font-medium text-apple-text hover:text-apple-blue transition-colors">
            Education
          </a>
          <a href="#contact" className="text-sm font-medium text-apple-text hover:text-apple-blue transition-colors">
            Contact
          </a>
        </nav>
        
        <div className="md:hidden">
          <button className="p-2 text-apple-text">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
