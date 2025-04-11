import React from 'react';
import peopleImage from "./public/People_standing.png"
const OurStory = () => {
  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 gap-12 items-center">
          <div>
            <img
              // src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1000"
              src={peopleImage}
              alt="Team of professionals"
              className="rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6">OUR STORY</h2>
            <p className="text-gray-300 mb-4">
              SPR Global was founded with a simple yet powerful vision to create 
              opportunities for aspiring entrepreneurs. Through years of experience in 
              franchise operations and consulting, we have grown to become a trusted 
              name in the industry, known for our commitment to excellence and innovation.
            </p>
            <p className="text-gray-300">
              Through our brands - each with a unique identity - we strive to meet the 
              needs of modern consumers while maintaining our commitment to quality, 
              authenticity, and innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;