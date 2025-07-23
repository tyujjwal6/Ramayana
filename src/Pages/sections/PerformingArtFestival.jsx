import React, { useEffect, useRef } from 'react';
import { PlayCircle } from 'lucide-react';
import { images } from '../../assets';

// 1. Import GSAP and ScrollTrigger
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// 2. Register the plugin
gsap.registerPlugin(ScrollTrigger);

const PerformingArtFestival = ({ onPlayVideo }) => {
  // 3. Create refs for the elements we want to animate
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    // 4. Use gsap.context for proper setup and cleanup in React
    const ctx = gsap.context(() => {

      // Create a GSAP timeline for a sequenced animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%', // Start animation when 80% of the section is visible
          toggleActions: 'play none none none', // Play once on entering
        }
      });

      // Animate elements one by one using the timeline
      // We use .from() to animate FROM a state to the element's default state in the CSS
      
      // Animate the main title
      tl.from(titleRef.current, {
        opacity: 0,
        y: 50, // Start 50px below
        duration: 0.8,
        ease: 'power3.out',
      });

      // Animate the subtitle, starting slightly before the previous animation ends
      tl.from(subtitleRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.6,
        ease: 'power3.out',
      }, "-=0.6"); // The "-=0.6" overlaps animations for a smoother flow

      // Animate the video thumbnail, making it scale in for more impact
      tl.from(videoRef.current, {
        opacity: 0,
        y: 50,
        scale: 0.95, // Start slightly smaller
        duration: 1,
        ease: 'power3.out',
      }, "-=0.5"); // Overlap again for a seamless feel

    }, sectionRef); // Scope the context

    // Cleanup function
    return () => ctx.revert();
  }, []); // Run only once

  return (
    // 5. Attach the refs to the JSX elements
    <section ref={sectionRef} className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-red-900/20 to-transparent opacity-50"></div>
      <div className="container mx-auto text-center">
        <h2 ref={titleRef} className="font-display text-5xl md:text-6xl tracking-[0.2em]">PERFORMING ART FESTIVAL</h2>
        <p ref={subtitleRef} className="mt-2 text-lg text-gray-400">Sendratari Ramayana</p>
        <div 
          ref={videoRef}
          className="relative max-w-4xl mx-auto mt-12 rounded-2xl overflow-hidden cursor-pointer group"
          onClick={onPlayVideo}
        >
          <img src={images.videoThumbnail} alt="Ramayana Ballet Performance" className="w-full h-auto" />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <PlayCircle size={80} className="text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformingArtFestival;