import React from 'react';
import peopleWalking from './public/people_walking.png'
const Hero = () => {
  return (
    <section className="bg-black pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 gap-12 mb-12">
          <div>
            <h1 className="text-6xl font-bold mb-6">
              WELCOME TO<br />SPR GLOBAL
            </h1>
          </div>
          <div>
            <p className="text-gray-300 text-lg">
              At SPR Global, we are passionate about transforming dreams into reality. As
              a dynamic company, we empower entrepreneurs by providing franchise
              opportunities in thriving industries like food, fashion, fitness, and
              entertainment. Our journey is fueled by innovation, dedication, and the
              vision to create exceptional experiences that enrich lives and communities.
            </p>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden">
          <img
            // src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2850"
            src={peopleWalking}
            alt="Business people silhouettes against window with sunset"
            className="w-full h-[500px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;