import React from 'react';
import { Button } from '@/components/ui/button';

const ShowcaseSection = ({ title, subtitle, description, image, imageLeft = false, onGetTicket }) => (
  <section className="py-20 px-4 bg-background relative overflow-hidden">
    <div className={`container mx-auto flex flex-col md:flex-row items-center gap-12 ${imageLeft ? 'md:flex-row-reverse' : ''}`}>
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="font-display text-4xl md:text-5xl tracking-[0.15em]">{title}</h2>
        <h3 className="font-display text-4xl md:text-5xl tracking-[0.15em]">{subtitle}</h3>
        <p className="mt-6 text-gray-400 max-w-md mx-auto md:mx-0">
          {description}
        </p>
        <Button onClick={() => onGetTicket(title)} className="mt-8 bg-gradient-to-r from-[#FF7E5F] to-primary hover:opacity-90 text-white font-bold py-3 px-8 rounded-lg text-md tracking-wider">
          GET TICKET
        </Button>
      </div>
      <div className="md:w-1/2 relative flex justify-center items-center">
         <div className="absolute bg-secondary w-52 h-52 md:w-72 md:h-72 rounded-3xl -z-0"></div>
         <div className="relative z-10 w-full max-w-md rounded-2xl overflow-hidden">
            <img src={image} alt={title} className="w-full h-auto object-cover" />
         </div>
      </div>
    </div>
     <div className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-l from-red-900/20 to-transparent opacity-50"></div>
  </section>
);

export default ShowcaseSection;