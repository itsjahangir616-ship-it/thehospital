import React from 'react';
import { Calendar, Phone, MessageCircle } from 'lucide-react';
import hospitalInteriorImg from '@/src/assets/images/hospital_facade_interior_1792647937873.jpg';
import { HOSPITAL_CONTACT } from '@/src/data/hospitalData';

interface EditorialBannerProps {
  onBookClick: () => void;
}

export const EditorialBanner: React.FC<EditorialBannerProps> = ({ onBookClick }) => {
  return (
    <section className="py-12 md:py-20 bg-[#FAF9F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden border border-[#E2E4E8] shadow-xl text-center py-16 px-6 sm:px-12 lg:px-20">
          {/* Background Image with Scrim */}
          <img
            src={hospitalInteriorImg}
            alt="The Hospital Facility in Islamabad"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#18191C]/95 via-[#18191C]/90 to-[#18191C]/95" />

          {/* Foreground Content */}
          <div className="relative z-10 max-w-3xl mx-auto space-y-6 text-white">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#FCA5A5] block">
              PATIENT JOURNEY · ISLAMABAD
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-['Manrope'] tracking-tight leading-tight">
              Your Consultation Is the First Step.
            </h2>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl mx-auto font-['Inter']">
              Every surgical pathway at The Hospital begins with an honest, unhurried dialogue.
              Discuss your aesthetic aspirations in private consultation with{' '}
              <strong>Dr. Humayun Mohmand (FRCS)</strong> or <strong>Dr. Shazma</strong> at Plot 40,
              I &amp; T Center, G-8/4, Islamabad.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onBookClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-[#C3221B] hover:bg-[#A61C16] text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg whitespace-nowrap cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                Schedule Your Private Session
              </button>

              <a
                href={`tel:${HOSPITAL_CONTACT.landline}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-md bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm transition-all whitespace-nowrap"
              >
                <Phone className="w-4 h-4" />
                Call Desk: {HOSPITAL_CONTACT.landline}
              </a>

              <a
                href={HOSPITAL_CONTACT.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-md bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold text-sm transition-all shadow-sm whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp: 0321-5000242
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
