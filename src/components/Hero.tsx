
import React, { useEffect, useRef, useState } from 'react';
import HeroBackground from './HeroBackground';
import NebulaBackground from './NebulaBackground';
import gsap from 'gsap';

const Hero = () => {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const [isNameHovered, setIsNameHovered] = useState(false);
  
  useEffect(() => {
    const tl = gsap.timeline();
    
    // Extended Apple-inspired fade-in animation for the name with more emphasis
    tl.fromTo(nameRef.current, {
      y: 60,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 2.5,
      ease: "power4.out"
    })
    .from(titleRef.current, {
      y: 20,
      opacity: 0,
      duration: 1.0,
      ease: "power3.out"
    }, "-=1.5")
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

  const handleNameHover = () => {
    setIsNameHovered(true);
    if (nameRef.current) {
      gsap.to(nameRef.current, {
        scale: 1.05,
        textShadow: '0 0 60px rgba(255, 255, 255, 0.5), 0 0 120px rgba(0, 170, 255, 0.3)',
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  const handleNameLeave = () => {
    setIsNameHovered(false);
    if (nameRef.current) {
      gsap.to(nameRef.current, {
        scale: 1,
        textShadow: '0 0 40px rgba(255, 255, 255, 0.3), 0 0 80px rgba(255, 255, 255, 0.1)',
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-apple-black">
      <HeroBackground />
      <NebulaBackground isHovered={isNameHovered} />
      <div className="container z-10">
        <div className="max-w-4xl mx-auto text-center relative">
          <h1 
            ref={nameRef}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-2xl leading-tight cursor-pointer transition-all duration-300"
            style={{
              textShadow: '0 0 40px rgba(255, 255, 255, 0.3), 0 0 80px rgba(255, 255, 255, 0.1)',
              lineHeight: '1.1',
              paddingBottom: '0.1em'
            }}
            onMouseEnter={handleNameHover}
            onMouseLeave={handleNameLeave}
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
