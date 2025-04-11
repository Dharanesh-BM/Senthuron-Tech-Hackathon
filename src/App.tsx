import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MissionVision from './components/MissionVision';
import OurStory from './components/OurStory';
import WhatWeOffer from './components/WhatWeOffer';
import FoundersMessage from './components/FoundersMessage';
import Team from './components/Team';
import WhyUs from './components/WhyUs';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <MissionVision />
        <OurStory />
        <WhatWeOffer />
        <FoundersMessage />
        <Team />
        <WhyUs />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;