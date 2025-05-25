
import React, { useEffect, useRef } from 'react';
import HeroBackground from './HeroBackground';
import gsap from 'gsap';

const Hero = () => {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const scanLineRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const tl = gsap.timeline();
    
    // Initial setup - hide name and position scan line
    gsap.set(nameRef.current, { 
      opacity: 0.1,
      filter: "blur(2px)"
    });
    
    gsap.set(scanLineRef.current, {
      x: "-100%",
      opacity: 1
    });
    
    // Data stream reveal animation
    tl.to(scanLineRef.current, {
      x: "100%",
      duration: 2,
      ease: "power2.inOut",
      onUpdate: function() {
        // Reveal name progressively as scan line passes
        const progress = this.progress();
        if (nameRef.current) {
          gsap.to(nameRef.current, {
            opacity: 0.1 + (progress * 0.9),
            filter: `blur(${2 - (progress * 2)}px)`,
            duration: 0.1
          });
        }
      }
    })
    .to(scanLineRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.out"
    })
    .to(nameRef.current, {
      opacity: 1,
      filter: "blur(0px)",
      duration: 0.3,
      ease: "power2.out"
    })
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
    
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-apple-black">
      <HeroBackground />
      <div className="container z-10">
        <div className="max-w-4xl mx-auto text-center relative">
          {/* Data Stream Scan Line */}
          <div 
            ref={scanLineRef}
            className="absolute inset-0 pointer-events-none z-20"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 30%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.1) 70%, transparent 100%)',
              width: '100px',
              height: '100%',
              filter: 'blur(1px)',
              boxShadow: '0 0 20px rgba(255,255,255,0.3)'
            }}
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
