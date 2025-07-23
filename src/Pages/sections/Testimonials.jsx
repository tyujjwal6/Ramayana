import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { testimonialsData } from '../../assets';
import { Twitter, Instagram, Facebook } from 'lucide-react';

const Testimonials = ({ onGetTicket }) => {
    const [activeTestimonial, setActiveTestimonial] = useState(testimonialsData[0]);

    return (
        <section className="py-20 px-4 bg-background">
            <div className="container mx-auto text-center">
                <h2 className="font-display text-5xl md:text-6xl tracking-[0.2em]">WHAT PEOPLE SAY</h2>
                <div className="max-w-4xl mx-auto mt-12 p-8 bg-gray-900/30 rounded-3xl">
                    <div className="flex justify-center items-start gap-4 mb-8 flex-wrap">
                        {testimonialsData.map(t => (
                            <div key={t.id} className="text-center cursor-pointer" onClick={() => setActiveTestimonial(t)}>
                                <img src={t.image} alt={t.name} className={`w-20 h-20 rounded-2xl object-cover mx-auto border-4 ${activeTestimonial.id === t.id ? 'border-primary' : 'border-transparent'} transition-all`} />
                                <p className="text-xs mt-2 text-gray-400">{t.name}</p>
                            </div>
                        ))}
                         <div className="flex flex-col justify-center items-center w-20 h-20 bg-secondary rounded-2xl text-center p-2">
                             <p className="text-white font-bold text-sm">Another</p>
                             <p className="text-white font-bold text-lg">325+</p>
                             <p className="text-white text-xs">Artists</p>
                         </div>
                    </div>

                    <div className="text-center">
                        <h3 className="text-3xl font-medium">{activeTestimonial.name}</h3>
                        <div className="flex justify-center gap-4 my-3 text-gray-400">
                             <a href="#" className="hover:text-primary"><Facebook size={18} /></a>
                             <a href="#" className="hover:text-primary"><Instagram size={18} /></a>
                             <a href="#" className="hover:text-primary"><Twitter size={18} /></a>
                        </div>
                        <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
                           "{activeTestimonial.quote}"
                        </p>
                        <Button onClick={() => onGetTicket('Ramayana Ballet')} className="mt-8 bg-accent hover:bg-accent/90 text-white font-bold py-3 px-8 rounded-lg text-md tracking-wider">
                            GET TICKET
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;