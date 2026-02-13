"use client";

import Image from "next/image";
import Link from "next/link";

export default function WhatsAppButton() {
  // WhatsApp link (no prefilled message)
  const whatsappNumber = "+254728240931";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <Link
      href={whatsappLink}
      target="_blank"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 left-5 z-50 bg-[#25D366] p-3 rounded-lg shadow-lg hover:scale-110 transition-transform duration-200"
    >
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        width={30}
        height={30}
      />
    </Link>
  );
}
