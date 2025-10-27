"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import type { FAQItem } from "@/constants/data";

interface MembershipSectionProps {
  faqData: FAQItem[];
}

const FAQItem = ({ faq, index, isOpen, onToggle }: { 
  faq: FAQItem; 
  index: number; 
  isOpen: boolean; 
  onToggle: () => void;
}) => (
  <motion.div 
    className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden"
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.1 }}
  >
    <button
      className="w-full p-4 text-left flex items-center justify-between hover:bg-white/20 transition-colors"
      onClick={onToggle}
    >
      <span className="text-white font-medium">{faq.question}</span>
      <ChevronRight 
        className={`w-5 h-5 text-white transition-transform ${
          isOpen ? 'rotate-90' : ''
        }`} 
      />
    </button>
    {isOpen && (
      <motion.div 
        className="px-4 pb-4 text-blue-100"
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
      >
        {faq.answer}
      </motion.div>
    )}
  </motion.div>
);

const MembershipSection = ({ faqData }: MembershipSectionProps) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleFaqToggle = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-16 bg-linear-to-br from-blue-900 to-blue-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side */}
          <div className="text-center lg:text-left">
            <p className="text-blue-200 text-sm mb-2">Athlete Registration</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 lg:mb-6">How to Join?</h2>
            <p className="text-blue-100 text-base sm:text-lg leading-relaxed">
              Interested in joining our sports programs or competitions? Here are the common 
              questions and steps to get started with training and registration at the Provincial Stadium.
            </p>
          </div>

          {/* Right Side - FAQ */}
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                index={index}
                isOpen={openFaq === index}
                onToggle={() => handleFaqToggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;
