import AboutHero from '@/components/HeroAbout';
import Location from '@/components/Location';
import SubAboutUs from '@/components/SubaboutUs';
import TheTeam from '@/components/Team';
import React from 'react'

export default function About() {
    return (
        <main className="w-full overflow-x-hidden bg-gradient-to-br from-blue-50 to-gray-100">
          <AboutHero />
          <SubAboutUs />
          <TheTeam />
          <Location />
        </main>
      );
    }