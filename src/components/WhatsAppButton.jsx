import React from 'react';
import { RiWhatsappLine } from 'react-icons/ri';

export default function WhatsAppButton() {
  // Replace with your actual WhatsApp business number (include country code, no + sign)
  const phoneNumber = '918450049035'; // Example: replace for +91 9876543210

  // Pre-filled message that opens in WhatsApp
  const message = 'Hello! I need help with your services.';
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl group"
      aria-label="Contact us on WhatsApp"
    >
      <RiWhatsappLine className="text-2xl group-hover:animate-pulse" />
      {/* Optional tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Chat with us on WhatsApp
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
      </div>
    </a>
  );
}
