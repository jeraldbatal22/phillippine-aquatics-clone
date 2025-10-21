"use client";

import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useScroll } from "../../hooks/useScroll";
import { useDropdown } from "../../hooks/useDropdown";
import { useMobileMenu } from "../../hooks/useMobileMenu";
import {
  DROPDOWN_DATA,
  MOBILE_MENU_ITEMS,
  CONTACT_INFO,
} from "../../constants/data";
import DropdownMenu from "./DropdownMenu";
import MobileMenu from "./MobileMenu";

const Navigation = () => {
  const isScrolled = useScroll();
  const { activeDropdown, handleDropdownToggle } = useDropdown();
  const { isMenuOpen, toggleMenu, closeMenu } = useMobileMenu();

  return (
    <nav
      className={`bg-white shadow-lg sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-xl" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-3 lg:py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2 lg:space-x-3">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-linear-to-br from-yellow-400 to-blue-600 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 lg:w-8 lg:h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-3 h-3 lg:w-4 lg:h-4 bg-blue-600 rounded-full"></div>
              </div>
            </div>
            <div>
              <h1 className="text-lg lg:text-xl font-bold text-[#1e3a8a] leading-tight">
                <span className="hidden sm:inline">PHILIPPINE AQUATICS</span>
                <span className="sm:hidden">PAI</span>
              </h1>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-[#1e3a8a] font-medium transition-colors"
            >
              Home
            </a>

            <DropdownMenu
              title="About PAI"
              items={DROPDOWN_DATA.about}
              isActive={activeDropdown === "about"}
              onToggle={() => handleDropdownToggle("about")}
            />

            <DropdownMenu
              title="Rankings"
              items={DROPDOWN_DATA.rankings}
              isActive={activeDropdown === "rankings"}
              onToggle={() => handleDropdownToggle("rankings")}
            />

            <a
              href="#"
              className="text-gray-700 hover:text-[#1e3a8a] font-medium transition-colors"
            >
              Athletes
            </a>

            <DropdownMenu
              title="Resources"
              items={DROPDOWN_DATA.resources}
              isActive={activeDropdown === "resources"}
              onToggle={() => handleDropdownToggle("resources")}
            />

            <DropdownMenu
              title="PAI Membership"
              items={DROPDOWN_DATA.membership}
              isActive={activeDropdown === "membership"}
              onToggle={() => handleDropdownToggle("membership")}
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.div>
          </button>
        </div>

        {/* Mobile Menu */}
        <MobileMenu
          isOpen={isMenuOpen}
          onClose={closeMenu}
          menuItems={MOBILE_MENU_ITEMS}
          dropdownData={DROPDOWN_DATA}
          activeDropdown={activeDropdown}
          onDropdownToggle={handleDropdownToggle}
          contactInfo={CONTACT_INFO}
        />
      </div>
    </nav>
  );
};

export default Navigation;
