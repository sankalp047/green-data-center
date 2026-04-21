import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InvestmentThesis from "@/components/InvestmentThesis";
import CapacityTimeline from "@/components/CapacityTimeline";
import Facilities from "@/components/Facilities";
import Locations from "@/components/Locations";
import HybridPower from "@/components/HybridPower";
import India from "@/components/India";
import WhyInvest from "@/components/WhyInvest";
import Partnership from "@/components/Partnership";
import Requirements from "@/components/Requirements";
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
      <India />
      <WhyInvest />
      <Partnership />
      <Requirements />
      <Leadership />
      <Contact />
    </main>
  );
}
