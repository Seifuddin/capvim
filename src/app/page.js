import Hero from "@/components/Hero";
import ProductCarousel from "@/components/Products";
import SubAbout from "@/components/SubAbout";
import Subservices from "@/components/SubServices";
import TestimonialSlider from "@/components/Testimonials";
import FAQ from "../components/Faq";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <SubAbout />
      <Subservices />
      <FAQ />
    </main>
  );
}