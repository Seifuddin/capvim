import ContactUs from '@/components/ContactUs';
import ContactsHero from '@/components/HeroContacts';
import React from 'react'

export default function Contact() {
    return (
        <main className="overflow-x-hidden">
          <ContactsHero />
          <ContactUs />
        </main>
      );
    }