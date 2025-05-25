
import React, { useEffect, useRef } from 'react';
import HeroBackground from './HeroBackground';
import gsap from 'gsap';

const Hero = () => {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.from(nameRef.current, {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })
    .from(titleRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.6")
    .from(subtitleRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.4")
    .from(buttonsRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.4");
    
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-apple-black">
      <HeroBackground />
      <div className="container z-10">
        <div className="max-w-4xl mx-auto text-center relative">
          <h1 
            ref={nameRef}
            className="text-5xl md:text-7xl font-bold mb-4 text-apple-text bg-gradient-to-r from-apple-blue via-white to-apple-blue bg-clip-text text-transparent animate-pulse"
          >
            Manan Agarwal
          </h1>
          <h2 
            ref={titleRef}
            className="text-3xl md:text-5xl font-semibold mb-6 text-apple-text"
          >
            Business Analytics Professional
          </h2>
          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl text-apple-darkgray mb-10"
          >
            Data-driven insights. Innovative solutions. Business impact.
          </p>
          <div 
            ref={buttonsRef}
            className="flex flex-col md:flex-row justify-center gap-4"
          >
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
