import React from "react";
import HeroBackground from "./HeroBackground";
import ParticleName from "./ParticleName";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-apple-black">
      <HeroBackground />
      <div className="container z-10">
        <div className="max-w-4xl mx-auto text-center relative">
          <ParticleName />
          <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-apple-text">
            Business Analytics Professional
          </h2>
          <p className="text-xl md:text-2xl text-apple-darkgray mb-10">
            Data-driven insights. Innovative solutions. Business impact.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href="#contact"
              className="apple-button hover:scale-105 transition-transform"
            >
              Get in touch
            </a>
            <a
              href="#projects"
              className="apple-button-secondary hover:scale-105 transition-transform"
            >
              View projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
