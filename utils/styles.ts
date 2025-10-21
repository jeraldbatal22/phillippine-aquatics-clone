// Common CSS classes and style utilities
export const COMMON_STYLES = {
  // Gradients
  gradients: {
    primary: "bg-gradient-to-br from-blue-900 to-blue-700",
    secondary: "bg-gradient-to-br from-yellow-400 to-blue-600",
    water: "bg-gradient-to-br from-cyan-500 to-blue-600",
    pink: "bg-gradient-to-br from-pink-400 to-purple-600",
  },
  
  // Colors
  colors: {
    primary: "#1e3a8a",
    primaryHover: "#1e40af",
    secondary: "#3b82f6",
    accent: "#f59e0b",
  },
  
  // Animations
  animations: {
    fadeIn: "transition-opacity duration-300",
    slideUp: "transition-transform duration-300",
    hover: "hover:scale-105 transition-transform duration-200",
  },
  
  // Layout
  layout: {
    container: "max-w-7xl mx-auto px-4",
    section: "py-12 sm:py-16",
    card: "bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300",
  },
  
  // Typography
  typography: {
    heading: "text-2xl sm:text-3xl lg:text-4xl font-bold",
    subheading: "text-xl sm:text-2xl font-bold",
    body: "text-sm sm:text-base",
    small: "text-xs sm:text-sm",
  },
  
  // Buttons
  buttons: {
    primary: "bg-[#1e3a8a] text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors",
    secondary: "bg-white text-[#1e3a8a] px-4 py-2 rounded-lg border border-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white transition-colors",
    icon: "p-2 rounded-lg hover:bg-gray-100 transition-colors",
  },
  
  // Forms
  forms: {
    input: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base",
    textarea: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none text-sm sm:text-base",
  },
} as const;

// Animation variants for Framer Motion
export const ANIMATION_VARIANTS = {
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
  slideIn: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  },
  stagger: {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
} as const;
