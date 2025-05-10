
import React from 'react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-apple-black">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-semibold mb-6 animate-fade-in text-apple-text">
            Business Analytics Professional
          </h1>
          <p className="text-xl md:text-2xl text-apple-darkgray mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Data-driven insights. Innovative solutions. Business impact.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a href="#contact" className="apple-button">
              Get in touch
            </a>
            <a href="#projects" className="apple-button-secondary">
              View projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
