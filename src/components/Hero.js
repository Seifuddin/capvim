'use client';
import Image from 'next/image';
import Subhero from './Subhero';
import Countup from './countup';

export default function Hero() {
  return (
    <div className="pt-28 px-5 text-white items-center justify-center relative bg-cover bg-center" style={{ backgroundImage: "url('/images/1000_F_248500652_ODdXTJo565M5YO8wO7nvawB1li0uLtOZ.jpg')" }}>
  {/* Adding background image */}
  {/* Glassmorphic Card */}
    <div className="grid md:grid-cols-2 gap-8 items-center">
      {/* Text Content */}
      <div className="space-y-5">
        <h1 className="text-5xl md:text-5xl font-extrabold leading-tight">
          Empowering Educators<span className="text-blue-600"> To Shape </span>
           The <span className="text-white"> Future</span>
        </h1>
        <p className="text-gray-200 text-lg">
         Innovative solution for today's teaching challenges
        </p>
        <div className="flex gap-2">
        <button className="p-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition-all">
          Explore Workshop
        </button>

        <button className="p-2 text-sm font-semibold text-white bg-green-600 hover:bg-blue-700 rounded-lg shadow-md transition-all">
          Explore Workshop
        </button>
        </div>
        <Countup />
      </div>

      {/* Hero Image */}
      
    </div>
    <div className='w-full'>
        <Subhero />
    </div>
</div>
  );
}