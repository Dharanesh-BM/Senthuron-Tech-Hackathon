import React from 'react';
import { Menu } from 'lucide-react';
import logo from './public/SPR logo  1.png'

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div>
          <img src={logo} alt="SPR Logo" className="h-16 w-auto object-contain" />
        </div>
        <div className="flex gap-8 items-center">
          <a href="#" className="text-white hover:text-yellow-500">Home</a>
          <a href="#" className="text-white hover:text-yellow-500">About Us</a>
          <a href="#" className="text-white hover:text-yellow-500">Brands we partner</a>
          <a href="#" className="text-white hover:text-yellow-500">Business Opportunity</a>
          <button className="bg-yellow-500 text-black px-6 py-2 rounded hover:bg-yellow-400">
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;