"use client";

import { motion } from "framer-motion";

interface RankingItem {
  id: string;
  title: string;
  gradientFrom: string;
  gradientTo: string;
  iconColor: string;
  description: string;
}

const rankingItems: RankingItem[] = [
  {
    id: "national",
    title: "National Rankings",
    gradientFrom: "from-red-500",
    gradientTo: "to-yellow-500",
    iconColor: "bg-red-600",
    description: "NATIONAL RANKING OF SWIMMERS"
  },
  {
    id: "regional",
    title: "Regional Rankings",
    gradientFrom: "from-green-500",
    gradientTo: "to-blue-500",
    iconColor: "bg-green-600",
    description: "REGIONAL RANKING OF SWIMMERS"
  },
  {
    id: "competitions",
    title: "PAI Competitions",
    gradientFrom: "from-purple-500",
    gradientTo: "to-pink-500",
    iconColor: "bg-purple-600",
    description: "COMPETITIONS & EVENT RESULTS"
  }
];

const RankingCard = ({ item }: { item: RankingItem }) => (
  <motion.div 
    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    whileHover={{ y: -5 }}
  >
    <div className={`h-48 bg-linear-to-br ${item.gradientFrom} ${item.gradientTo} relative`}>
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <div className={`w-8 h-8 ${item.iconColor} rounded-full`}></div>
            </div>
          </div>
          <p className="text-sm font-medium">{item.description}</p>
        </div>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
    </div>
  </motion.div>
);

const RankingsSection = () => {
  return (
    <section className="py-12 sm:py-16 bg-[#1e3a8a] relative overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M50 0c27.614 0 50 22.386 50 50s-22.386 50-50 50S0 77.614 0 50 22.386 0 50 0zm0 10c22.091 0 40 17.909 40 40s-17.909 40-40 40S10 72.091 10 50 27.909 10 50 10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-blue-200 text-sm mb-2">Ilocos Sur, Inc</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Meet Results and Rankings</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {rankingItems.map((item) => (
            <RankingCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RankingsSection;
