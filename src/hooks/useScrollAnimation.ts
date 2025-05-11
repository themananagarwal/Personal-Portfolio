
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type AnimationOptions = {
  threshold?: number;
  delay?: number;
  duration?: number;
  y?: number;
  opacity?: number;
  ease?: string;
};

export const useScrollAnimation = (options: AnimationOptions = {}) => {
  const {
    threshold = 0.1,
    delay = 0,
    duration = 0.6,
    y = 20,
    opacity = 0,
    ease = 'power2.out',
  } = options;
  
  const elementRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    
    gsap.set(element, { y, opacity });
    
    ScrollTrigger.create({
      trigger: element,
      start: `top bottom-=${threshold * 100}%`,
      onEnter: () => {
        gsap.to(element, {
          y: 0,
          opacity: 1,
          duration,
          delay,
          ease,
        });
      },
      once: true,
    });
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [delay, duration, ease, opacity, threshold, y]);
  
  return elementRef;
};
