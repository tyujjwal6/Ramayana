import React, { useEffect, useRef } from 'react';
import { PlayCircle } from 'lucide-react';
import { images } from '../../assets';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PerformingArtFestival = ({ onPlayVideo }) => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        }
      });

      tl.from(titleRef.current, {
        opacity: 0, y: 50, duration: 0.8, ease: 'power3.out',
      });
      tl.from(subtitleRef.current, {
        opacity: 0, y: 40, duration: 0.6, ease: 'power3.out',
      }, "-=0.6");
      tl.from(videoRef.current, {
        opacity: 0, y: 50, scale: 0.95, duration: 1, ease: 'power3.out',
      }, "-=0.5");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // --- CHANGES ARE HERE ---
  return (
    // 1. Changed to a div, added background color and rounded top corners
    <div 
      ref={sectionRef} 
      className="py-20 px-4 bg-background relative overflow-hidden rounded-t-[3rem] md:rounded-t-[4rem]"
    >
      {/* The decorative gradient - no change needed */}
      <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-red-900/20 to-transparent opacity-50"></div>
      
      {/* The rest of your component's content - no changes needed */}
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
    </div>
  );
};

export default PerformingArtFestival;