// hooks/useLenis.js
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const useLenis = () => {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2, // Controls the animation duration of the smooth scroll
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // A popular easing function
      smoothTouch: true, // Enable smooth scrolling on touch devices
    });

    // Sync GSAP's ScrollTrigger with Lenis's scroll event
    lenis.on('scroll', ScrollTrigger.update);

    // Set up the animation frame loop
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    // Also, sync the GSAP ticker with the RAF loop for perfect timing
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000); // Lenis expects time in milliseconds
    });
    
    gsap.ticker.lagSmoothing(0);

    requestAnimationFrame(raf);

    // Cleanup on component unmount
    return () => {
      lenis.destroy();
    };
  }, []);
};

export default useLenis;