import ServicesHero from "@/components/HeroServices";
import OurServices from "@/components/Services";
import React from "react";

export default function Services() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      <ServicesHero />
      <OurServices />
    </main>
  );
}