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
    id: "swimming-championships",
    title: "Ilocos Sur",
    subtitle: "United by Water",
    description: "Watch our latest swimming competitions and water polo matches featuring the best athletes from the Ilocos Surs",
    buttonText: "Watch Now",
    buttonLink: "#",
    backgroundImage: "https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    gradientFrom: "from-blue-900",
    gradientTo: "to-blue-700",
    videoId: "dQw4w9WgXcQ",
    isVideo: true
  },
  {
    id: "water-polo-team",
    title: "Water Polo Champions",
    subtitle: "Silver Medal Achievement",
    description: "Celebrate our women's water polo team's incredible silver medal victory at the international championships",
    buttonText: "Learn More",
    buttonLink: "#",
    backgroundImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    gradientFrom: "from-purple-900",
    gradientTo: "to-pink-700",
    isVideo: false
  },
  {
    id: "swimming-tryouts",
    title: "Open Water Swimming",
    subtitle: "Tryouts 2025",
    description: "Join us for the upcoming tryouts on August 30-31, 2025. Multiple distances available: 10KM, 5KM, and 3KM categories",
    buttonText: "Register Now",
    buttonLink: "#",
    backgroundImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    gradientFrom: "from-cyan-900",
    gradientTo: "to-blue-700",
    isVideo: false
  },
  {
    id: "diving-competition",
    title: "Elite Diving Team",
    subtitle: "Olympic Preparation",
    description: "Follow our elite diving team as they prepare for the upcoming Olympic Games with world-class training facilities",
    buttonText: "Follow Journey",
    buttonLink: "#",
    backgroundImage: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    gradientFrom: "from-emerald-900",
    gradientTo: "to-teal-700",
    isVideo: false
  }
];
