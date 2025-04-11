import React from 'react';
import img1 from './public/Why SPR/image.png'
import img2 from './public/Why SPR/image-1.png'
import img3 from './public/Why SPR/image-2.png'

const WhyUs = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-black text-center mb-12">
          WHY SPR GLOBAL?
        </h2>
        <div className="grid grid-cols-3 gap-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              // src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800"
              src={img1}
              alt="Entrepreneurial Support"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-black mb-2">
                Entrepreneurial Support
              </h3>
              <p className="text-gray-600">
                Comprehensive training, resources, and tools to set you up for success.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              // src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800"
              src={img2}
              alt="Diverse Opportunities"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-black mb-2">
                Diverse Opportunities
              </h3>
              <p className="text-gray-600">
                A range of industries to choose from, each with proven business models.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              // src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=800"
              src={img3}
              alt="Commitment to Excellence"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-black mb-2">
                Commitment to Excellence
              </h3>
              <p className="text-gray-600">
                Delivering unmatched quality in all our services and partnerships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;