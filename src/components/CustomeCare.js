"use client";

import { PhoneCall } from "lucide-react";

export default function CustomeCare() {
  return (
    <section
      className="relative bg-black pt-10 bg-[url('/images/how-to-start-a-publishing-company-5.png')] bg-cover bg-center"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Icon 
        <div className="mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-blue-100">
          <PhoneCall className="w-10 h-10 text-blue-900" />
        </div>
          */}
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Need any Assistance?
        </h2>
        <div className="w-24 h-1 bg-green-400 mx-auto rounded-full mb-6"></div>

        <p className="text-gray-200 text-base md:text-lg mb10 max-w-2xl mx-auto">
          In case of any assistance or any information from Capvim International Publishers, call us via our telephone number below and our
          team is ready to assist you any time, day or night.
        </p>
        <p className="text-green-400 text-base md:text-lg mb-10 max-w-2xl mx-auto">
          Tap the button below to make a call
        </p>

          {/* className="inline-block bg-green-500 text-white -900 font-serif font-semibold px-8 py-2 rounded-full shadow-lg hover:bg-blue-100 transition" */}
        {/* Call Button  */}
        <a
          href="tel:+254111608331"
        >
          <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-full bg-green-500">
          <PhoneCall className="w-7 h-7 text-white" />
        </div>
        </a>
      </div>
    </section>
  );
}
