import React from 'react';
import slamImg from "./public/Sponsers/SLAM logo blackA 1.png"
import cheapAndBestLogo from "./public/Sponsers/CHEAP & BEST.png"
import fxLogo from "./public/Sponsers/fx logo.png"
import HotelPonnusamyLogo from "./public/Sponsers/Hotel_ponnusamy.png"
import JonahsLogo from "./public/Sponsers/Jonahs.png"
import SulthansLogo from "./public/Sponsers/Sulthans_Logo.png"

const brands = [
  {
    name: 'Hotel Ponnusamy',
    description: 'A legacy of authentic Chennai cuisine.',
    logo: HotelPonnusamyLogo
  },
  {
    name: 'CHEAP&BEST',
    description: 'Affordable grooming solutions for men.',
    logo: cheapAndBestLogo
  },
  {
    name: 'SultanBox',
    description: 'Traditional wood-fired Tamil Muslim Biryani.',
    logo: SulthansLogo
  },
  {
    name: 'SLAM',
    description: 'A premium fitness destination.',
    logo: slamImg
  },
  {
    name: 'FX',
    description: 'Thrilling adventures and family fun.',
    logo: fxLogo
  },
  {
    name: 'Jonahs',
    description: 'A global culinary journey.',
    logo: JonahsLogo
  }
];

const WhatWeOffer = () => {
  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">WHAT WE OFFER</h2>
        <p className="text-gray-300 mb-12">
          At SPR Global, we bring together aspirational and premium lifestyle brands
          that redefine their respective industries.
        </p>
        <div className="grid gap-6">
          {brands.map((brand) => (
            <div key={brand.name} className="flex items-center justify-between bg-zinc-900 p-6 rounded-lg">
              <div className="flex items-center gap-6">
                {/* <span className="text-4xl">{brand.logo}</span> */}
                <img src={brand.logo} alt={`${brand.name} logo`} className="w-16 h-16 object-contain" />
                <div>
                  <h3 className="text-xl font-bold mb-2">{brand.name}</h3>
                  <p className="text-gray-300">{brand.description}</p>
                </div>
              </div>
              <button className="text-yellow-500 hover:text-yellow-400">
                KNOW MORE
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;