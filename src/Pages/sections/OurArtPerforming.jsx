import React from 'react';
import { images } from '../../assets';

const OurArtPerforming = () => (
  <section className="py-20 px-4 bg-background">
    <div className="container mx-auto text-center">
      <h2 className="font-display text-5xl md:text-6xl tracking-[0.2em]">OUR ART</h2>
      <h3 className="font-display text-5xl md:text-6xl tracking-[0.2em]">PERFORMING</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {[images.art1, images.art2, images.art3, images.art4].map((src, index) => (
          <div key={index} className="rounded-2xl overflow-hidden h-96">
            <img src={src} alt={`Art Performance ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OurArtPerforming;