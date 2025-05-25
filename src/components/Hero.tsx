
import React, { useEffect, useRef } from 'react';
import HeroBackground from './HeroBackground';
import gsap from 'gsap';

const Hero = () => {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const dataPointsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const tl = gsap.timeline();
    
    // Initial setup - hide the actual name text
    gsap.set(nameRef.current, { 
      opacity: 0
    });
    
    // Create data points for each letter
    const createDataPoints = () => {
      if (!dataPointsRef.current) return;
      
      const nameText = "MANAN AGARWAL";
      const letterSpacing = 60; // Approximate spacing between letters
      const startX = -((nameText.length - 1) * letterSpacing) / 2; // Center the text
      
      nameText.split('').forEach((char, index) => {
        if (char === ' ') return; // Skip spaces
        
        // Create multiple data points per letter (4-6 points)
        const pointsPerLetter = 5;
        for (let i = 0; i < pointsPerLetter; i++) {
          const point = document.createElement('div');
          point.className = 'absolute rounded-full bg-white opacity-70';
          point.style.width = '4px';
          point.style.height = '4px';
          
          // Random starting position (scattered)
          const randomX = (Math.random() - 0.5) * 800;
          const randomY = (Math.random() - 0.5) * 400;
          point.style.left = `calc(50% + ${randomX}px)`;
          point.style.top = `calc(50% + ${randomY}px)`;
          
          // Target position (forming the letter)
          const targetX = startX + (index * letterSpacing) + (Math.random() - 0.5) * 40;
          const targetY = (Math.random() - 0.5) * 60;
          
          point.setAttribute('data-target-x', targetX.toString());
          point.setAttribute('data-target-y', targetY.toString());
          
          dataPointsRef.current.appendChild(point);
        }
      });
    };
    
    createDataPoints();
    
    // Animate data points into formation
    const points = dataPointsRef.current?.children;
    if (points) {
      Array.from(points).forEach((point, index) => {
        const targetX = parseFloat(point.getAttribute('data-target-x') || '0');
        const targetY = parseFloat(point.getAttribute('data-target-y') || '0');
        
        tl.to(point, {
          x: targetX,
          y: targetY,
          duration: 1.5,
          ease: "power2.out",
          delay: index * 0.02 // Slight stagger for organic feel
        }, 0);
      });
    }
    
    // Fade out data points and reveal actual text
    tl.to(points, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.out"
    }, "+=0.3")
    .to(nameRef.current, {
      opacity: 1,
      duration: 0.5,
      ease: "power2.out"
    }, "-=0.2")
    .from(titleRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.2")
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
    
    // Cleanup function
    return () => {
      if (dataPointsRef.current) {
        dataPointsRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-apple-black">
      <HeroBackground />
      <div className="container z-10">
        <div className="max-w-4xl mx-auto text-center relative">
          {/* Data Points Container */}
          <div 
            ref={dataPointsRef}
            className="absolute inset-0 pointer-events-none z-20"
          />
          
          <h1 
            ref={nameRef}
            className="text-5xl md:text-7xl font-bold mb-4 text-apple-text bg-gradient-to-r from-apple-blue via-white to-apple-blue bg-clip-text text-transparent relative z-10"
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
