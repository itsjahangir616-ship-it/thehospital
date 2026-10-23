import React from 'react';
import { CheckCircle2, ArrowRight, Phone, MessageCircle, MapPin } from 'lucide-react';
import facialSuiteImg from '@/src/assets/images/facial_surgery_suite_1792647938056.jpg';
import drHumayunKeynoteImg from '@/src/assets/images/dr_humayun_aams_keynote.jpeg';
import { HOSPITAL_CONTACT } from '@/src/data/hospitalData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#FAF9F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Authentic Hospital Facility & Keynote Photography */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-[#E2E4E8] shadow-lg aspect-[16/10] bg-slate-900">
              <img
                src={facialSuiteImg}
                alt="The Hospital Consultation Suite in Islamabad"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#FCA5A5]">
                  Clinical Atmosphere · Islamabad
                </span>
                <p className="text-sm font-semibold text-white mt-0.5">
                  Private, tranquil consultation suites designed for patient dignity and confidentiality.
                </p>
              </div>
            </div>

            {/* Academic Leadership Callout Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center bg-white p-3.5 rounded-xl border border-[#E2E4E8] shadow-sm">
              <div className="sm:col-span-4 h-24 rounded-lg overflow-hidden border border-slate-200 bg-slate-900 shrink-0">
                <img
                  src={drHumayunKeynoteImg}
                  alt="Dr. Humayun Mohmand AAMS Keynote"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
              <div className="sm:col-span-8 space-y-1">
                <div className="flex items-center gap-1.5 text-[10px] font-bold tracking-wider uppercase text-[#C3221B]">
                  <span>International Keynotes</span>
                  <span className="text-slate-300">·</span>
                  <span>AAMS 2024</span>
                </div>
                <p className="text-xs font-bold text-[#1B1D20] leading-snug">
                  Keynote Lecture by Dr. Humayun Mohmand (FRCS)
                </p>
                <p className="text-[11px] text-slate-500 leading-normal">
                  Advancing aesthetic plastic surgery standards, surgical safety, and scientific dialogue at global medical congresses.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold tracking-[0.16em] uppercase text-[#C3221B] block mb-2">
                ABOUT THE HOSPITAL
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1B1D20] tracking-tight font-['Manrope'] leading-tight">
                A Thoughtful Approach to Plastic &amp; Cosmetic Surgery.
              </h2>
            </div>

            <div className="w-12 h-0.5 bg-[#C3221B]" />

            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              <p>
                <strong>The Hospital</strong> was established on the conviction that cosmetic and reconstructive surgery should be practiced with uncompromising medical ethics, anatomical discretion, and patient empathy.
              </p>
              <p>
                Operating in Islamabad’s I &amp; T Center, G-8/4, our facility bridges the refined intimacy of a private aesthetic clinic with the robust sterile infrastructure of an accredited surgical hospital. Every patient receives attentive one-on-one counsel directly from our consultant surgeons—<strong>Dr. Humayun Mohmand (FRCS)</strong> and <strong>Dr. Shazma</strong>.
              </p>
            </div>

            {/* Checklist items */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#C3221B] shrink-0 mt-0.5" />
                <span>Modern hospital surgical suites equipped with laminar airflow sterility and monitored post-operative recovery rooms.</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#C3221B] shrink-0 mt-0.5" />
                <span>Honest, conservative aesthetic guidance that prioritizes natural anatomical harmony over exaggerated trends.</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#C3221B] shrink-0 mt-0.5" />
                <span>Comprehensive patient journey from pre-operative cardiovascular clearance to dedicated long-term surgical follow-up.</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#surgeons"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#1B1D20] hover:text-[#C3221B] transition-colors"
              >
                Discover our medical leadership <ArrowRight className="w-4 h-4" />
              </a>

              <span className="text-slate-300 hidden sm:inline">|</span>

              <a
                href={`tel:${HOSPITAL_CONTACT.landline}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-[#1B1D20]"
              >
                <Phone className="w-3.5 h-3.5 text-[#C3221B]" />
                Call Desk: 051-8441444
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
