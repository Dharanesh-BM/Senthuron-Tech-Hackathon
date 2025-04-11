import React from 'react';

const ContactForm = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-black mb-6">
              Become an Entrepreneur Today -<br />
              Grow Your Business with SPR Global
            </h2>
            <p className="text-gray-600 mb-12">
              Partner with us and unlock your potential in the thriving industries of
              food, fashion, fitness, and entertainment. SPR Global provides the
              support, resources, and proven business models you need to succeed.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-black mb-2">Corporate Office</h3>
                <p className="text-gray-600">SPR Global Headquarters</p>
                <p className="text-gray-600">[Address Line 1]</p>
                <p className="text-gray-600">[City, State, ZIP Code]</p>
              </div>
              <div>
                <h3 className="font-bold text-black mb-2">Feel Free to Contact Us</h3>
                <p className="text-gray-600">+91 8765411671</p>
                <p className="text-gray-600">sprglobal@gmail.com</p>
              </div>
            </div>
          </div>
          <div>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded border border-gray-300 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 text-black"
                />
              </div>
              <div>
                <div className="flex gap-4">
                  <select className="w-24 px-4 py-3 rounded border border-gray-300 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 text-black">
                    <option>+91</option>
                  </select>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="flex-1 px-4 py-3 rounded border border-gray-300 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 text-black"
                  />
                </div>
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded border border-gray-300 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 text-black"
                />
              </div>
              <div>
                <select className="w-full px-4 py-3 rounded border border-gray-300 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 text-black">
                  <option>Interested Brand</option>
                </select>
              </div>
              <div>
                <textarea
                  placeholder="Message (Optional)"
                  rows={4}
                  className="w-full px-4 py-3 rounded border border-gray-300 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 text-black"
                ></textarea>
              </div>
              <button className="w-full bg-black text-white py-3 rounded font-medium hover:bg-gray-900 transition-colors text-black">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;