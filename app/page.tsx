import ContactSection from "@/components/contact";
import Features from "@/components/features-1";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Portofolio from "@/components/portofolio";
import TeamSection from "@/components/team";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <Portofolio />
      <TeamSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
