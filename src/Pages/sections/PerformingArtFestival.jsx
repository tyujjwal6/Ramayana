import React from 'react';
import { PlayCircle } from 'lucide-react';
import { images } from '../../assets';

const PerformingArtFestival = ({ onPlayVideo }) => (
  <section className="py-20 px-4 bg-background relative">
    <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-red-900/20 to-transparent opacity-50"></div>
    <div className="container mx-auto text-center">
      <h2 className="font-display text-5xl md:text-6xl tracking-[0.2em]">PERFORMING ART FESTIVAL</h2>
      <p className="mt-2 text-lg text-gray-400">Sendratari Ramayana</p>
      <div 
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

export default PerformingArtFestival;