import React from 'react';
import person1 from "./public/Meet People/image.png"
import person2 from "./public/Meet People/image-1.png"
import person3 from "./public/Meet People/image-2.png"
import person4 from "./public/Meet People/Rectangle 3463602-1.png"


const teamMembers = [
  {
    name: 'NAME OF THE PERSON',
    role: 'Designation',
    image: person1
  },
  {
    name: 'NAME OF THE PERSON',
    role: 'Designation',
    image: person2
  },
  {
    name: 'NAME OF THE PERSON',
    role: 'Designation',
    image: person3
  },
  {
    name: 'NAME OF THE PERSON',
    role: 'Designation',
    image: person4
  },
  {
    name: 'NAME OF THE PERSON',
    role: 'Designation',
    image: person1
  }
];

const Team = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-black mb-4">MEET THE TEAM</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Our portfolio of brands represents the pinnacle of excellence in their respective fields.
          The ultimate destination for ambitious and fun. Together, we innovate, create, and
          ensure unforgettable experiences for your brand.
        </p>
        <div className="grid grid-cols-5 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-black">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;