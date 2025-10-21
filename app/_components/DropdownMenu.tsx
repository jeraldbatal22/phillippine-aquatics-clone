"use client";

import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { DropdownItem } from "../../constants/data";

interface DropdownMenuProps {
  title: string;
  items: DropdownItem[];
  isActive: boolean;
  onToggle: () => void;
}

const DropdownMenu = ({ title, items, isActive, onToggle }: DropdownMenuProps) => {
  return (
    <div className="relative dropdown-container">
      <button 
        onClick={onToggle}
        className="cursor-pointer text-gray-700 hover:text-[#1e3a8a] font-medium transition-colors flex items-center"
      >
        {title}
        <motion.div
          animate={{ rotate: isActive ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-4 h-4 ml-1" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isActive && (
          <motion.div
            className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {items.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#1e3a8a] transition-colors"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropdownMenu;
