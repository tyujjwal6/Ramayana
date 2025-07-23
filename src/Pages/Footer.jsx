import React from 'react';
import Navbar from './Navbar';

const Footer = () => (
    <footer className="py-12 bg-[#121212]">
      <div className="container mx-auto px-4">
        <Navbar isFooter={true} />
        <hr className="my-8 border-gray-700"/>
        <p className="text-center text-gray-500 text-sm">© {new Date().getFullYear()} Ramayana Prambanan. All Rights Reserved.</p>
      </div>
    </footer>
);

export default Footer;