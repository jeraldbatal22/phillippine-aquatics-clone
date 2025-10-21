"use client";

import { MapPin, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { CONTACT_INFO } from "../../constants/data";

const Header = () => {
  return (
    <div className="bg-[#1e3a8a] text-white py-2">
      <div className="max-w-7xl mx-auto px-4">
        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>{CONTACT_INFO.location}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>{CONTACT_INFO.email}</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <Facebook className="w-4 h-4 hover:text-blue-300 cursor-pointer transition-colors" />
              <Twitter className="w-4 h-4 hover:text-blue-300 cursor-pointer transition-colors" />
              <Linkedin className="w-4 h-4 hover:text-blue-300 cursor-pointer transition-colors" />
              <Instagram className="w-4 h-4 hover:text-blue-300 cursor-pointer transition-colors" />
            </div>
            <span className="text-xs font-medium">UNITED BY WATER</span>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex justify-between items-center text-xs">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              <MapPin className="w-3 h-3" />
              <span>Manila, PH</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="w-3 h-3" />
              <span className="hidden sm:inline">{CONTACT_INFO.email}</span>
              <span className="sm:hidden">Contact</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <Facebook className="w-3 h-3 hover:text-blue-300 cursor-pointer transition-colors" />
              <Twitter className="w-3 h-3 hover:text-blue-300 cursor-pointer transition-colors" />
              <Linkedin className="w-3 h-3 hover:text-blue-300 cursor-pointer transition-colors" />
              <Instagram className="w-3 h-3 hover:text-blue-300 cursor-pointer transition-colors" />
            </div>
            <span className="text-xs font-medium hidden sm:inline">UNITED BY WATER</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
