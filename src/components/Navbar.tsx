
import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
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

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      gsap.fromTo(
        '.mobile-menu', 
        { opacity: 0, y: -20 }, 
        { opacity: 1, y: 0, duration: 0.3, stagger: 0.1 }
      );
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-apple-black/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="text-xl font-semibold text-apple-text hover:text-apple-blue transition-colors">
          Manan Agarwal
        </a>
        
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <a 
              key={index}
              href={item.href}
              className="text-sm font-medium text-apple-text hover:text-apple-blue transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        
        <div className="md:hidden">
          <button 
            className="p-2 text-apple-text hover:text-apple-blue transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-apple-black/95 backdrop-blur-md z-40 flex flex-col items-center justify-center">
          <nav className="flex flex-col items-center space-y-8 p-8">
            {navItems.map((item, index) => (
              <a 
                key={index}
                href={item.href}
                className="mobile-menu text-2xl font-medium text-apple-text hover:text-apple-blue transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
