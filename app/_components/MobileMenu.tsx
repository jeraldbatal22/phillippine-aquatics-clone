"use client";

import { X, ChevronRight, MapPin as LocationIcon, Mail, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { MenuItem, DropdownData, DropdownItem } from "../../constants/data";

interface ContactInfo {
  location: string;
  email: string;
  phone: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  menuItems: MenuItem[];
  dropdownData: DropdownData;
  activeDropdown: string | null;
  onDropdownToggle: (dropdown: string) => void;
  contactInfo: ContactInfo;
}

const MobileMenu = ({
  isOpen,
  onClose,
  menuItems,
  dropdownData,
  activeDropdown,
  onDropdownToggle,
  contactInfo
}: MobileMenuProps) => {
  const renderMenuItem = (item: MenuItem, index: number) => {
    if (item.hasDropdown && item.dropdownKey) {
      const dropdownItems = dropdownData[item.dropdownKey];
      const mobileDropdownKey = `mobile-${item.dropdownKey}`;
      
      return (
        <div key={item.name}>
          <button
            onClick={() => onDropdownToggle(mobileDropdownKey)}
            className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 hover:text-[#1e3a8a] transition-colors group"
          >
            <span className="text-lg">{item.icon}</span>
            <span className="font-medium">{item.name}</span>
            <motion.div
              animate={{ rotate: activeDropdown === mobileDropdownKey ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronRight className="w-4 h-4 ml-auto" />
            </motion.div>
          </button>
          <AnimatePresence>
            {activeDropdown === mobileDropdownKey && (
              <motion.div
                className="ml-6 space-y-1"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                {dropdownItems.map((dropdownItem: DropdownItem, dropdownIndex: number) => (
                  <motion.a
                    key={dropdownItem.name}
                    href={dropdownItem.href}
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-[#1e3a8a] hover:bg-blue-50 rounded-lg transition-colors"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: dropdownIndex * 0.05 }}
                    onClick={onClose}
                  >
                    {dropdownItem.name}
                  </motion.a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    }

    return (
      <motion.a
        key={item.name}
        href={item.href}
        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 hover:text-[#1e3a8a] transition-colors group"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }}
        onClick={onClose}
      >
        <span className="text-lg">{item.icon}</span>
        <span className="font-medium">{item.name}</span>
        <ChevronRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
      </motion.a>
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Menu Panel */}
          <motion.div 
            className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 lg:hidden"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className="p-6">
              {/* Menu Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-linear-to-br from-yellow-400 to-blue-600 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    </div>
                  </div>
                  <h2 className="text-lg font-bold text-[#1e3a8a]">Menu</h2>
                </div>
                <button 
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Menu Items */}
              <div className="space-y-2">
                {menuItems.map((item, index) => renderMenuItem(item, index))}
              </div>

              {/* Contact Info */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-sm text-gray-600">
                    <LocationIcon className="w-4 h-4" />
                    <span>{contactInfo.location}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-600">
                    <Mail className="w-4 h-4" />
                    <span>{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-600">
                    <Phone className="w-4 h-4" />
                    <span>{contactInfo.phone}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
