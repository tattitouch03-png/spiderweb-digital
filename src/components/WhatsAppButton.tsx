import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '7564096954';
  const message = 'Hi, I am interested in your services!';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center space-x-3"
      aria-label="Contact on WhatsApp"
    >
      {/* Tooltip / Text */}
      <span className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap">
        Chat on WhatsApp
      </span>

      {/* WhatsApp Icon */}
      <div className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110">
        <MessageCircle className="w-7 h-7" />
      </div>
    </a>
  );
}
