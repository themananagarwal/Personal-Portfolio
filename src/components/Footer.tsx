
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white py-12">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-apple-darkgray">
                &copy; {currentYear} Manan Agarwal. All rights reserved.
              </p>
            </div>
            
            <div className="flex space-x-8">
              <a href="#about" className="text-sm text-apple-darkgray hover:text-apple-text">
                About
              </a>
              <a href="#experience" className="text-sm text-apple-darkgray hover:text-apple-text">
                Experience
              </a>
              <a href="#projects" className="text-sm text-apple-darkgray hover:text-apple-text">
                Projects
              </a>
              <a href="#contact" className="text-sm text-apple-darkgray hover:text-apple-text">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
