import Hero from "@/components/Hero";
import ProductCarousel from "@/components/Products";
import SubAbout from "@/components/SubAbout";
import TestimonialSlider from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <SubAbout />
      <TestimonialSlider />
    </main>
  );
}