import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface NebulaBackgroundProps {
  isHovered: boolean;
}

const NebulaBackground = ({ isHovered }: NebulaBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<HTMLElement[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create particles
    const particleElements: HTMLElement[] = [];
    const particleCount = 80;

    // Clear any existing particles
    containerRef.current.innerHTML = '';

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute rounded-full pointer-events-none';
      
      // Random size between 2px and 8px
      const size = 2 + Math.random() * 6;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random color from sci-fi palette
      const colors = [
        'rgba(0, 170, 255, 0.8)',  // Blue
        'rgba(0, 255, 255, 0.6)',  // Cyan
        'rgba(255, 255, 255, 0.4)', // White
        'rgba(100, 200, 255, 0.7)', // Light blue
        'rgba(0, 200, 200, 0.5)'   // Teal
      ];
      const color = colors[Math.floor(Math.random() * colors.length)];
      particle.style.backgroundColor = color;
      particle.style.boxShadow = `0 0 ${size * 2}px ${color}`;
      
      // Initial position (center)
      particle.style.left = '50%';
      particle.style.top = '50%';
      particle.style.transform = 'translate(-50%, -50%)';
      particle.style.opacity = '0';
      
      containerRef.current.appendChild(particle);
      particleElements.push(particle);
    }

    setParticles(particleElements);

    // Burst animation
    const tl = gsap.timeline();

    // Initial burst - particles explode outward
    tl.to(particleElements, {
      duration: 1.5,
      opacity: 1,
      x: () => (Math.random() - 0.5) * 800,
      y: () => (Math.random() - 0.5) * 600,
      scale: () => 0.5 + Math.random() * 1.5,
      ease: "power3.out",
      stagger: {
        amount: 0.3,
        from: "center"
      }
    })
    // Settle into nebula formation
    .to(particleElements, {
      duration: 1,
      x: () => (Math.random() - 0.5) * 400,
      y: () => (Math.random() - 0.5) * 300,
      scale: 1,
      ease: "power2.inOut",
      stagger: 0.02
    }, "-=0.5")
    // Continuous floating animation
    .to(particleElements, {
      duration: 8,
      x: "+=20",
      y: "+=15",
      rotation: 360,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      stagger: {
        amount: 2,
        from: "random"
      }
    });

    // Add subtle pulsing
    gsap.to(particleElements, {
      duration: 3,
      opacity: 0.3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: {
        amount: 1,
        from: "random"
      }
    });

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  // Hover effect
  useEffect(() => {
    if (!particles.length) return;

    if (isHovered) {
      // Ripple effect on hover
      gsap.to(particles, {
        duration: 0.5,
        scale: 1.5,
        opacity: 1,
        ease: "power2.out",
        stagger: {
          amount: 0.3,
          from: "center"
        }
      });
      
      // Add swirl motion
      gsap.to(particles, {
        duration: 2,
        rotation: "+=180",
        x: () => (Math.random() - 0.5) * 100,
        y: () => (Math.random() - 0.5) * 100,
        ease: "power1.inOut",
        stagger: 0.05
      });
    } else {
      // Return to normal state
      gsap.to(particles, {
        duration: 0.8,
        scale: 1,
        opacity: 0.6,
        ease: "power2.out",
        stagger: 0.02
      });
    }
  }, [isHovered, particles]);

  return (
    <div className="absolute inset-0 -z-5 overflow-hidden pointer-events-none">
      {/* Main nebula container */}
      <div 
        ref={containerRef}
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, rgba(0, 170, 255, 0.1) 0%, transparent 70%)'
        }}
      />
      
      {/* Additional glow layers */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: 'radial-gradient(circle at 45% 55%, rgba(0, 255, 255, 0.15) 0%, transparent 60%)',
          animation: 'pulse 4s ease-in-out infinite'
        }}
      />
      
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at 55% 45%, rgba(100, 200, 255, 0.1) 0%, transparent 50%)',
          animation: 'pulse 6s ease-in-out infinite reverse'
        }}
      />
    </div>
  );
};

export default NebulaBackground;