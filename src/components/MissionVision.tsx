import React from 'react';
import { Target, Eye } from 'lucide-react';

const MissionVision = () => {
  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 gap-8">
        <div className="bg-zinc-900 p-8 rounded-lg">
          <Target className="text-yellow-500 w-12 h-12 mb-4" />
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="text-gray-300">
            To empower aspiring entrepreneurs, equipping them with the tools, training, and business solutions for success while fostering growth and innovation in a supportive through our global network.
          </p>
        </div>
        <div className="bg-zinc-900 p-8 rounded-lg">
          <Eye className="text-yellow-500 w-12 h-12 mb-4" />
          <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
          <p className="text-gray-300">
            To be the world's leading franchise consulting platform that helps aspiring entrepreneurs achieve their entrepreneurial dreams while fostering innovation across food, fashion, fitness and lifestyle industries.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;