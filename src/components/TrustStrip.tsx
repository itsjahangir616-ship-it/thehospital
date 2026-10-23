import React from 'react';
import { UserCheck, Sparkles, ShieldCheck, PhoneCall } from 'lucide-react';
import { HOSPITAL_CONTACT } from '@/src/data/hospitalData';

export const TrustStrip: React.FC = () => {
  return (
    <section className="bg-[#F4F4F6] border-y border-[#E2E4E8] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-white border border-[#E2E4E8] text-[#C3221B] flex items-center justify-center shrink-0 shadow-xs">
              <UserCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#1B1D20]">Specialist Consultations</h4>
              <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                Direct evaluations with Dr. Humayun Mohmand (FRCS) &amp; Dr. Shazma.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-white border border-[#E2E4E8] text-[#C3221B] flex items-center justify-center shrink-0 shadow-xs">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#1B1D20]">Personalized Treatment</h4>
              <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                Tailored surgical strategies honoring individual anatomy and aesthetics.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-white border border-[#E2E4E8] text-[#C3221B] flex items-center justify-center shrink-0 shadow-xs">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#1B1D20]">Hospital-Grade Suites</h4>
              <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                State-of-the-art sterile surgical rooms with certified anesthesia care.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-white border border-[#E2E4E8] text-[#C3221B] flex items-center justify-center shrink-0 shadow-xs">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#1B1D20]">Islamabad Patient Desk</h4>
              <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                Phone: {HOSPITAL_CONTACT.landline} · WhatsApp: {HOSPITAL_CONTACT.whatsapp}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
