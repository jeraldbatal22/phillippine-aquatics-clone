import { FAQ_DATA } from "../constants/data";
import { ContactSection, Footer, Header, HeroSection, MembershipSection, Navigation, NewsSection, RankingsSection } from "./_components";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation />
      <HeroSection />
      <NewsSection />
      <RankingsSection />
      <MembershipSection faqData={FAQ_DATA} />
      <ContactSection />
      <Footer />
    </div>
  );
}
