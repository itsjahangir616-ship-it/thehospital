import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, MessageCircle } from 'lucide-react';
import { FAQS_DATA, HOSPITAL_CONTACT } from '@/src/data/hospitalData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-16 md:py-24 bg-[#F4F4F6] border-t border-[#E2E4E8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-[0.18em] uppercase text-[#C3221B] block mb-2">
            ANSWERS &amp; CLARITY
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1B1D20] tracking-tight font-['Manrope']">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Essential information regarding your consultations, surgical protocols, and patient care in Islamabad.
          </p>
        </div>

        <div className="space-y-3.5">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`bg-white rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen ? 'border-[#C3221B] shadow-sm' : 'border-[#E2E4E8]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full py-4.5 px-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-[#1B1D20] font-['Manrope']">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#FAF9F8] border border-[#E2E4E8] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#C3221B] text-white border-[#C3221B]' : 'text-slate-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Help Strip */}
        <div className="mt-10 p-5 rounded-xl bg-white border border-[#E2E4E8] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#C3221B]/10 text-[#C3221B] flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#1B1D20]">Have specific surgical inquiries?</h4>
              <p className="text-[11px] text-slate-500">Our patient coordinators in Islamabad are available to assist.</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${HOSPITAL_CONTACT.landline}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md bg-[#FAF9F8] border border-[#E2E4E8] text-xs font-semibold text-[#1B1D20] hover:border-[#C3221B] hover:text-[#C3221B] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C3221B]" />
              051-8441444
            </a>
            <a
              href={HOSPITAL_CONTACT.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md bg-[#25D366] text-white text-xs font-semibold hover:bg-[#1ebe5d] transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
