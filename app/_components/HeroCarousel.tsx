"use client";

import React, { useState } from "react";
import { Play, Volume2, Share2, Clock, Pause } from "lucide-react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { HERO_SLIDES, HeroSlide } from "../constants/heroData";
import Autoplay from "embla-carousel-autoplay";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [api, setApi] = useState<any>(null);

  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrentSlide(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    onSelect(); // Call once to set initial state

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const HeroSlide = ({ slide }: { slide: HeroSlide; index: number }) => (
    <div className="relative h-[60vh] sm:h-[70vh] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${slide.backgroundImage})` }}
      />

      {/* Gradient Overlay */}
      <div
        className={`absolute inset-0 bg-linear-to-br ${slide.gradientFrom} ${slide.gradientTo} opacity-80`}
      />

      {/* Water Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <motion.div
          className="text-center text-white max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Title */}
          <div className="mb-6">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-2">
              {slide.title}
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-blue-200 font-medium">
              {slide.subtitle}
            </p>
          </div>

          {/* Description */}
          <div className="mb-8">
            <p className="text-base sm:text-lg lg:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              {slide.description}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {slide.isVideo ? (
              <motion.button
                className="w-16 h-16 sm:w-20 sm:h-20 bg-red-600 rounded-full flex items-center justify-center shadow-2xl hover:bg-red-700 transition-colors group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={togglePlayPause}
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                ) : (
                  <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1" />
                )}
              </motion.button>
            ) : (
              <Button
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
              >
                {slide.buttonText}
              </Button>
            )}

            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg font-semibold"
            >
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Video Controls (only for video slides) */}
      {slide.isVideo && (
        <div className="absolute bottom-4 right-4 flex items-center space-x-2 sm:space-x-4 text-white">
          <div className="flex items-center space-x-1 sm:space-x-2 bg-black/50 px-2 py-1 sm:px-3 rounded-full">
            <Volume2 className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-xs hidden sm:inline">YouTube</span>
          </div>
          <div className="flex items-center space-x-1 sm:space-x-2">
            <button className="bg-black/50 p-1.5 sm:p-2 rounded-full hover:bg-black/70 transition-colors">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>
            <button className="bg-black/50 p-1.5 sm:p-2 rounded-full hover:bg-black/70 transition-colors">
              <Share2 className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <section className="relative">
      <Carousel
        className="w-full"
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {HERO_SLIDES.map((slide, index) => (
            <CarouselItem key={slide.id} className="w-full">
              <HeroSlide slide={slide} index={index} />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Custom Navigation */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex space-x-2">
            {HERO_SLIDES.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-white scale-125"
                    : "bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Custom Arrow Navigation */}
        <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 border-white/30 text-white" />
        <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 border-white/30 text-white" />
      </Carousel>

      {/* Slide Counter */}
      <div className="absolute top-6 right-6 z-20 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
        {currentSlide + 1} / {HERO_SLIDES.length}
      </div>
    </section>
  );
};

export default HeroCarousel;
