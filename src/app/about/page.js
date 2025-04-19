import AboutHero from '@/components/HeroAbout';
import Location from '@/components/Location';
import SubAboutUs from '@/components/SubaboutUs';
import React from 'react'

export default function About() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
          <AboutHero />
          <SubAboutUs />
          <Location />
        </main>
      );
    }