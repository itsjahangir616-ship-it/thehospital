import React from 'react';
import { MessageCircle } from 'lucide-react';
import { HOSPITAL_CONTACT } from '@/src/data/hospitalData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-6 right-6 z-40"
    >
      <a
        href={HOSPITAL_CONTACT.whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with The Hospital on WhatsApp"
        className="group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
      >
        <MessageCircle className="w-5 h-5 fill-white text-[#25D366] shrink-0" />
        <span className="hidden sm:inline text-xs font-bold tracking-wide">
          WhatsApp: {HOSPITAL_CONTACT.whatsapp}
        </span>
      </a>
    </aside>
  );
};
