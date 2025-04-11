import React from 'react';
import logo from './public/SPR logo  1.png'
const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-4 gap-8">
          <div>
            {/* <div className="text-yellow-500 text-2xl font-bold mb-6">SPR</div> */}
            <div>
              <img src={logo} alt="SPR Logo" className="h-16 w-auto object-contain" />
            </div>
            <p className="text-gray-400 text-sm">
              SPR Global is a visionary company transforming
              entrepreneurial dreams into reality through
              innovative franchise solutions and diverse range of brands.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Business Opportunity</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Brands</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Ponnusamy Hotel</a></li>
              <li><a href="#" className="hover:text-white">CHEAP&BEST</a></li>
              <li><a href="#" className="hover:text-white">SultanBox</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>+1 234 567 8900</li>
              <li>info@sprglobal.com</li>
              <li>
                SPR Global Headquarters<br />
                123 Main St, Suite 100<br />
                City, State, ZIP Code
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
