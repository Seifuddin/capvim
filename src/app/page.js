import Hero from "@/components/Hero";
import SubAbout from "@/components/SubAbout";
import Subservices from "@/components/SubServices";
import FAQ from "../components/Faq";
import Why from "@/components/Why";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <SubAbout />
      <Subservices />
      <FAQ />
      <Why />
    </main>
  );
}