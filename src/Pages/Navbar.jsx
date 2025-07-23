import React from 'react';
import { Twitter, Instagram, Facebook, Youtube } from 'lucide-react';

const Navbar = ({ isFooter = false }) => {
  const navClass = isFooter ? "text-gray-400" : "text-white";
  const linkClass = "hover:text-primary transition-colors";

  return (
    <nav className="flex items-center justify-between w-full">
      <h1 className={`font-display text-2xl tracking-widest ${navClass}`}>RAMAYANA</h1>
      <div className={`hidden md:flex items-center gap-8 font-medium ${navClass}`}>
        <a href="#home" className={linkClass}>Home</a>
        <a href="#schedule" className={linkClass}>Schedule</a>
        <a href="#blog" className={linkClass}>Blog</a>
        <a href="#contact" className={linkClass}>Contact</a>
      </div>
      {isFooter && (
        <div className="flex items-center gap-4 text-gray-400">
          <a href="#" className={linkClass}><Twitter size={20} /></a>
          <a href="#" className={linkClass}><Instagram size={20} /></a>
          <a href="#" className={linkClass}><Youtube size={20} /></a>
          <a href="#" className={linkClass}><Facebook size={20} /></a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;