import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '@/src/data/hospitalData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#FAF9F8] border-t border-[#E2E4E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-[0.18em] uppercase text-[#C3221B] block mb-2">
            PATIENT EXPERIENCES
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1B1D20] tracking-tight font-['Manrope']">
            Words From Those We Have Cared For
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Reflective feedback from patients who entrusted their plastic and aesthetic care to our surgeons in Islamabad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-7 border border-[#E2E4E8] flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
            >
              <div>
                <Quote className="w-8 h-8 text-[#C3221B]/30 mb-4" />
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic font-['Inter']">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E2E4E8] flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-[#1B1D20] font-['Manrope']">{t.patient}</h4>
                  <p className="text-[11px] text-[#C3221B] font-medium mt-0.5">{t.procedure}</p>
                </div>
                <span className="text-[10px] text-slate-400 font-medium">{t.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
