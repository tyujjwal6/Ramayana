import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { Button } from '@/components/ui/button';
import Navbar from '../Navbar';

const Hero = ({ onGetTicket }) => (
  <section id="home" className="relative h-screen min-h-[600px] w-full flex flex-col items-center justify-center text-center text-white overflow-hidden">
    {/* Layer 0: Gradient Background */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#F3A381] to-[#E995A9] z-0" />

    {/* Layer 1: Farthest Mountains */}
    <Parallax
      speed={30}
      // CHANGE 1: Container is now full height
      className="absolute bottom-0 left-0 w-full h-full z-10"
    >
      <img
        src="/Mountains.jpg"
        alt="Distant mountains"
        // CHANGE 2: Image is now TALLER than the container to allow for scrolling
        className="w-full h-[150%] object-cover"
      />
    </Parallax>

    {/* Layer 2: Closer Mountains */}
    <Parallax
      speed={-20}
      // CHANGE 1: Container is now full height
      className="absolute bottom-0 left-0 w-full h-full z-20"
    >
      <img
        src="/Mountains2.png"
        alt="Closer mountains"
        // CHANGE 2: Image is also taller, but slightly less so than the background
        className="w-full h-[120%] object-cover"
      />
    </Parallax>
    
    {/* Layer 3: Content (No changes needed here) */}
    <div className="relative z-30 flex flex-col items-center px-4">
      <div className="absolute top-[-5rem] w-full">
        <Navbar />
      </div>
      <h2 className="font-display text-5xl md:text-7xl tracking-[0.2em]">SENDRATARI</h2>
      <h1 className="font-display text-7xl md:text-9xl tracking-widest text-shadow-default" style={{ WebkitTextStroke: '1px #333', textStroke: '1px #333' }}>
        RAMAYANA
      </h1>
      <p className="font-medium tracking-widest text-sm mt-2">AT PRAMBANAN TEMPLE</p>
      <Button onClick={() => onGetTicket('Sendratari Ramayana')} className="mt-8 bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg text-md tracking-wider">
        GET TICKET
      </Button>
    </div>
  </section>
);

export default Hero;