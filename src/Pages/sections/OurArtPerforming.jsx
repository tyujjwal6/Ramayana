import React, { useEffect, useRef } from 'react';
import { images } from '../../assets';

// Import GSAP and its ScrollTrigger plugin
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const OurArtPerforming = () => {
  // Create a ref for the main container to use as the animation trigger
  const sectionRef = useRef(null);
  
  // Create a ref for the image containers to animate them
  // We use querySelectorAll later, but a ref is good practice for the trigger
  const cardsRef = useRef([]);

  useEffect(() => {
    // This is a GSAP best practice for React, it helps manage animations and cleanup
    const ctx = gsap.context(() => {
      
      // Select all the card elements we want to animate
      const cards = cardsRef.current;

      // Set the initial state of the cards (before animation)
      // They will be invisible and slightly moved down
      gsap.set(cards, { opacity: 0, y: 50 });

      // Create the scroll-triggered animation
      gsap.to(cards, {
        opacity: 1, // Fade in
        y: 0,       // Slide up to their original position
        duration: 0.8,
        ease: 'power3.out',
        // 'stagger' creates the one-by-one effect with a 0.2s delay between each
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current, // Animation starts when this element enters the viewport
          start: 'top 80%',            // Starts when the top of the trigger hits 80% down from the top of the viewport
          end: 'bottom 20%',           // You can adjust this as needed
          toggleActions: 'play none none none', // Play the animation once and don't replay or reverse
        },
      });

    }, sectionRef); // Scope the context to our component

    // Cleanup function to run when the component unmounts
    return () => ctx.revert(); 
    
  }, []); // Empty dependency array ensures this runs only once on mount

  // Reset the refs array on each render before populating it
  cardsRef.current = [];
  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    // Add the ref to the main section
    <section ref={sectionRef} className="py-20 px-4 bg-background">
      <div className="container mx-auto text-center">
        <h2 className="font-display text-5xl md:text-6xl tracking-[0.2em]">OUR ART</h2>
        <h3 className="font-display text-5xl md:text-6xl tracking-[0.2em]">PERFORMING</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {[images.art1, images.art2, images.art3, images.art4].map((src, index) => (
            // Add the ref to each animated element and a class for targeting
            <div
              key={index}
              ref={addToRefs}
              className="art-card rounded-2xl overflow-hidden h-96" // Initial state is now controlled by GSAP
            >
              <img src={src} alt={`Art Performance ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurArtPerforming;