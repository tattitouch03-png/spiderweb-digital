import React from "react";
import { Phone } from "lucide-react";

export default function CallButton({
  phone = "+917564096954",
  label = "Call us",
}: {
  phone?: string;
  label?: string;
}) {
  const telUrl = `tel:${phone.replace(/\s+/g, "")}`;

  return (
    <a
      href={telUrl}
      aria-label={`Call ${phone}`}
      className="fixed bottom-2 right-6 z-50 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 group"
      rel="noopener noreferrer"
    >
      <Phone className="w-7 h-7" />
      <span className="absolute right-20 bg-gray-900 text-white px-3 py-1 rounded-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        {label}
      </span>
    </a>
  );
}