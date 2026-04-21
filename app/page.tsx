import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InvestmentThesis from "@/components/InvestmentThesis";
import CapacityTimeline from "@/components/CapacityTimeline";
import Facilities from "@/components/Facilities";
import Locations from "@/components/Locations";
import HybridPower from "@/components/HybridPower";
import WhyInvest from "@/components/WhyInvest";
import Partnership from "@/components/Partnership";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative bg-[#F8FAF8]">
      <Navbar />
      <Hero />
      <InvestmentThesis />
      <CapacityTimeline />
      <Facilities />
      <Locations />
      <HybridPower />
      <WhyInvest />
      <Partnership />
      <Leadership />
      <Contact />
    </main>
  );
}
