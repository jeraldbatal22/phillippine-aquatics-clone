"use client";

import { Send } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section className="py-12 sm:py-16 bg-linear-to-br from-blue-900 to-blue-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Swimmer Image */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <motion.div 
              className="relative inline-block"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-64 h-80 sm:w-80 sm:h-96 bg-linear-to-br from-pink-400 to-purple-600 rounded-lg mx-auto lg:mx-0 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 bg-pink-600 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Contact Form */}
          <motion.div 
            className="bg-white rounded-lg shadow-2xl p-6 sm:p-8 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Feel Free to Contact Us</h3>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">Get in touch with the Provincial Sports Development Office. We&apos;re here to assist you with facility bookings, athlete registration, and sports program inquiries.</p>
            
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none text-sm sm:text-base"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-[#1e3a8a] text-white py-3 rounded-lg hover:bg-blue-800 transition-colors flex items-center justify-center space-x-2 font-medium text-sm sm:text-base"
              >
                <span>REQUEST FOR SUBMIT</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
