"use client";

import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface NewsItem {
  id: string;
  title: string;
  description: string;
  buttonText: string;
  gradientFrom: string;
  gradientTo: string;
  iconColor: string;
}

const newsItems: NewsItem[] = [
  {
    id: "water-polo-championships",
    title: "66th Malaysia Open Water Polo Championships",
    description: "The Ilocos Sur men's water polo team showcased exceptional performance, demonstrating skill and determination throughout the competition.",
    buttonText: "Read More",
    gradientFrom: "from-blue-500",
    gradientTo: "to-blue-700",
    iconColor: "bg-blue-600"
  },
  {
    id: "women-water-polo",
    title: "Congratulations to the Ilocos Sur Women's Open Water Polo Team!",
    description: "Our women's team secured a silver medal, showcasing incredible teamwork and dedication in the international competition.",
    buttonText: "Read More",
    gradientFrom: "from-pink-500",
    gradientTo: "to-purple-700",
    iconColor: "bg-pink-600"
  },
  {
    id: "swimming-tryouts",
    title: "Ilocos Sur Open Water Swimming Tryouts 2025",
    description: "Join us for the upcoming tryouts on August 30-31, 2025. Multiple distances available: 10KM, 5KM, and 3KM categories.",
    buttonText: "Register Now",
    gradientFrom: "from-cyan-500",
    gradientTo: "to-blue-600",
    iconColor: "bg-cyan-600"
  }
];

const NewsCard = ({ item }: { item: NewsItem }) => (
  <motion.div 
    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    whileHover={{ y: -5 }}
  >
    <div className={`h-48 bg-linear-to-br ${item.gradientFrom} ${item.gradientTo} relative`}>
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute bottom-4 left-4 text-white">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <div className={`w-4 h-4 ${item.iconColor} rounded-full`}></div>
          </div>
        </div>
      </div>
    </div>
    <div className="p-4 sm:p-6">
      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 leading-tight">{item.title}</h3>
      <p className="text-gray-600 mb-4 text-sm sm:text-base">{item.description}</p>
      <button className="w-full sm:w-auto bg-[#1e3a8a] text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors flex items-center justify-center space-x-2 text-sm">
        <span>{item.buttonText}</span>
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  </motion.div>
);

const NewsSection = () => {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title for Mobile */}
        <div className="text-center mb-8 lg:hidden">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Latest News & Events</h2>
          <p className="text-gray-600">Stay updated with Ilocos Sur  </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {newsItems.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
