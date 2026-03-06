import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TickerSection } from "@/components/TickerSection";
import { MarketSection } from "@/components/MarketSection";
import { StandSection } from "@/components/StandSection";
import { WhySection } from "@/components/WhySection";
import { TiersSection } from "@/components/TiersSection";
import { ProofSection } from "@/components/ProofSection";
import { NuuvemSection } from "@/components/NuuvemSection";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TickerSection />
      <MarketSection />
      <StandSection />
      <WhySection />
      <TiersSection />
      <ProofSection />
      <NuuvemSection />
      <CtaSection />
      <Footer />
    </>
  );
};

export default Index;
