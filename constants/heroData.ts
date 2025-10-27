export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage: string;
  gradientFrom: string;
  gradientTo: string;
  videoId?: string;
  isVideo?: boolean;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "provincial-stadium",
    title: "Ilocos Sur Provincial Stadium",
    subtitle: "Elite Sports Facility",
    description: "Experience world-class sporting events at the Ilocos Sur Provincial Coliseum - the premier venue for basketball, volleyball, and major provincial competitions",
    buttonText: "View Schedule",
    buttonLink: "#",
    backgroundImage: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    gradientFrom: "from-blue-900",
    gradientTo: "to-blue-700",
    isVideo: false
  },
  {
    id: "sports-development",
    title: "Provincial Sports Development",
    subtitle: "Building Champions",
    description: "Join the Ilocos Sur Provincial Sports Development Office in nurturing young athletes and promoting excellence in various sports disciplines across the province",
    buttonText: "Learn More",
    buttonLink: "#",
    backgroundImage: "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    gradientFrom: "from-green-900",
    gradientTo: "to-emerald-700",
    isVideo: false
  },
  {
    id: "athlete-programs",
    title: "Athlete Development Programs",
    subtitle: "Training Excellence",
    description: "Discover our comprehensive training programs for basketball, volleyball, athletics, and other sports. Register now for the next season!",
    buttonText: "Register Now",
    buttonLink: "#",
    backgroundImage: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    gradientFrom: "from-purple-900",
    gradientTo: "to-pink-700",
    isVideo: false
  },
  {
    id: "provincial-competitions",
    title: "Provincial Championships",
    subtitle: "Victory Unites Us",
    description: "Witness the best athletes compete in the annual Provincial Games hosted at the Ilocos Sur Provincial Stadium and Coliseum",
    buttonText: "Buy Tickets",
    buttonLink: "#",
    backgroundImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    gradientFrom: "from-orange-900",
    gradientTo: "to-red-700",
    isVideo: false
  }
];
