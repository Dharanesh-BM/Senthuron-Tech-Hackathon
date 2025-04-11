import React from 'react';
import founderImage from './public/Founder.png'

const FoundersMessage = () => {
  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">FOUNDER'S MESSAGE</h2>
        <div className="grid grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-300 mb-6">
              At Excellence, we set out to create more than an entertainment space—
              we wanted to build a place where like-minded food lovers, foodies, and
              casual dining enthusiasts could gather, connect, and share their
              experiences from living proof together.
            </p>
            <p className="text-gray-300 mb-8">
              Every activity is designed to inspire joy, connection, and an active lifestyle.
              We're proud to be Chennai's premier entertainment and look forward to
              building unforgettable memories together.
            </p>
            <p className="font-bold">
              [Founder's Name]<br />
              Founder of Excellence
            </p>
          </div>
          <div>
            <img
              // src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1000"
              src={founderImage}
              alt="Founder portrait"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersMessage;