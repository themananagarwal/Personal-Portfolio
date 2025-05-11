
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const HeroBackground = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!bgRef.current) return;
    
    // Create animated gradient background
    const colors = ["#0060df", "#0071e3", "#0080ff", "#2b3bff"];
    let currentIndex = 0;
    
    const animateGradient = () => {
      if (!bgRef.current) return;
      
      const nextIndex = (currentIndex + 1) % colors.length;
      
      gsap.to(bgRef.current, {
        background: `radial-gradient(circle at ${Math.random() * 100}% ${Math.random() * 100}%, 
                    ${colors[currentIndex]} 0%, 
                    ${colors[nextIndex]} 100%)`,
        duration: 4,
        ease: "power1.inOut",
        onComplete: () => {
          currentIndex = nextIndex;
          animateGradient();
        }
      });
    };
    
    // Initial animation
    gsap.fromTo(bgRef.current, 
      { 
        opacity: 0,
        background: `radial-gradient(circle at 50% 50%, ${colors[0]} 0%, ${colors[1]} 100%)` 
      },
      { 
        opacity: 0.7, 
        duration: 1.5,
        onComplete: animateGradient
      }
    );
    
    // Create floating particles
    const particles = Array.from({ length: 20 }).map(() => {
      const particle = document.createElement('div');
      particle.className = 'absolute rounded-full bg-white opacity-20';
      
      // Random size between 5px and 15px
      const size = 5 + Math.random() * 10;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random position
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      if (bgRef.current) {
        bgRef.current.appendChild(particle);
      }
      
      return particle;
    });
    
    // Animate particles
    particles.forEach(particle => {
      gsap.to(particle, {
        x: `${-50 + Math.random() * 100}px`,
        y: `${-50 + Math.random() * 100}px`,
        duration: 5 + Math.random() * 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    });
    
    return () => {
      // Cleanup particles
      particles.forEach(particle => {
        if (bgRef.current && bgRef.current.contains(particle)) {
          bgRef.current.removeChild(particle);
        }
      });
    };
  }, []);
  
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div 
        ref={bgRef}
        className="absolute inset-0 opacity-0 transition-all duration-500"
        style={{ filter: 'blur(80px)' }}
      ></div>
      
      {/* Overlay to reduce background intensity */}
      <div className="absolute inset-0 bg-apple-black bg-opacity-60"></div>
    </div>
  );
};

export default HeroBackground;
