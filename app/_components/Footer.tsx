"use client";

import { PARTNER_ORGANIZATIONS } from "../../constants/data";

const Footer = () => {
  return (
    <footer className="bg-[#1e3a8a] py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 items-center justify-items-center">
          {PARTNER_ORGANIZATIONS.map((organization, index) => (
            <div 
              key={index}
              className="text-white text-xs sm:text-sm font-medium text-center"
            >
              {organization}
            </div>
          ))}
        </div>
        
        {/* Mobile Copyright */}
        <div className="mt-6 pt-4 border-t border-blue-800 text-center lg:hidden">
          <p className="text-blue-200 text-xs">© 2025 Provincial Sports Development Office - Ilocos Sur. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
