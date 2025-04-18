import Hero from "@/components/Hero";
import ProductCarousel from "@/components/Products";
import SubAbout from "@/components/SubAbout";
import Subservices from "@/components/SubServices";
import FAQ from "../components/Faq";
import Why from "@/components/Why";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <SubAbout />
      <Subservices />
      <FAQ />
      <Why />
      <Footer />
    </main>
  );
}