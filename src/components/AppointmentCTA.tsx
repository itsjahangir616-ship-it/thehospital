import React from 'react';
import { Calendar, Phone, MessageCircle } from 'lucide-react';
import { HOSPITAL_CONTACT } from '@/src/data/hospitalData';

interface AppointmentCTAProps {
  onBookClick: () => void;
}

export const AppointmentCTA: React.FC<AppointmentCTAProps> = ({ onBookClick }) => {
  return (
    <section className="py-20 md:py-28 bg-[#18191C] text-white text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#FCA5A5] block">
          SCHEDULE YOUR VISIT · ISLAMABAD
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Manrope'] tracking-tight">
          Let’s Talk About Your Consultation.
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-['Inter']">
          Contact <strong className="text-white font-semibold">The Hospital</strong> to discuss your goals and arrange an individualized consultation with{' '}
          <strong className="text-white font-semibold">Dr. Humayun Mohmand (FRCS)</strong> or{' '}
          <strong className="text-white font-semibold">Dr. Shazma</strong> at Plot 40, I &amp; T Center, G-8/4, Islamabad.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onBookClick}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md bg-[#C3221B] hover:bg-[#A61C16] text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg whitespace-nowrap cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            Book an Appointment
          </button>

          <a
            href={`tel:${HOSPITAL_CONTACT.landline}`}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm transition-all whitespace-nowrap"
          >
            <Phone className="w-4 h-4" />
            Call: {HOSPITAL_CONTACT.landline}
          </a>

          <a
            href={HOSPITAL_CONTACT.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold text-sm transition-all shadow-sm whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp: {HOSPITAL_CONTACT.whatsapp}
          </a>
        </div>

        <p className="text-xs text-slate-400 pt-2">
          Clinical desk operational Monday through Saturday, 9:00 AM – 6:00 PM.
        </p>
      </div>
    </section>
  );
};
