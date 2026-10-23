import React from 'react';
import { ShieldCheck, MessageCircle, ArrowRight, MapPin, Award } from 'lucide-react';
import hospitalInteriorImg from '@/src/assets/images/hospital_facade_interior_1792647937873.jpg';
import drHumayunImg from '@/src/assets/images/dr_humayun_studio_crop.jpg';
import drShazmaImg from '@/src/assets/images/dr_shazma_portrait_1792647937358.jpg';
import { HOSPITAL_CONTACT } from '@/src/data/hospitalData';

interface HeroProps {
  onBookClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  return (
    <section className="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and Actions */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] uppercase text-[#C3221B]">
              <span>PLASTIC &amp; COSMETIC SURGERY</span>
              <span className="text-slate-400">·</span>
              <span>ISLAMABAD</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B1D20] tracking-tight leading-[1.15] font-['Manrope']" style={{ textWrap: 'balance' }}>
              Expert Care. Refined Results.{' '}
              <span className="text-[#C3221B] block sm:inline">Confidence in Every Step.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-['Inter']">
              Discover personalized plastic and cosmetic surgery consultations at{' '}
              <strong className="text-[#1B1D20] font-semibold">The Hospital</strong> in Islamabad.
              Led by consultant plastic surgeons{' '}
              <strong className="text-[#1B1D20] font-semibold">Dr. Humayun Mohmand (FRCS)</strong> and{' '}
              <strong className="text-[#1B1D20] font-semibold">Dr. Shazma</strong>, our practice provides
              ethical counsel and hospital-grade surgical precision.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={onBookClick}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-md bg-[#C3221B] hover:bg-[#A61C16] text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg whitespace-nowrap cursor-pointer"
              >
                Book a Consultation
              </button>

              <a
                href="#surgeons"
                className="inline-flex items-center justify-center px-5 py-3.5 rounded-md border border-[#E2E4E8] bg-white hover:border-[#1B1D20] text-[#1B1D20] font-semibold text-sm transition-all whitespace-nowrap"
              >
                Meet Our Surgeons
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

            {/* Zero-Pill Unboxed Metadata Proof */}
            <div className="pt-4 border-t border-[#E2E4E8] flex flex-wrap items-center gap-3 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-1.5 text-slate-700">
                <MapPin className="w-3.5 h-3.5 text-[#C3221B]" />
                <span>Plot 40, I &amp; T Center, G-8/4 Islamabad</span>
              </div>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <div className="flex items-center gap-1.5 text-slate-700">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C3221B]" />
                <span>Hospital Surgical Suites</span>
              </div>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <div className="flex items-center gap-1.5 text-slate-700">
                <Award className="w-3.5 h-3.5 text-[#C3221B]" />
                <span>FRCS Credentialed Leadership</span>
              </div>
            </div>
          </div>

          {/* Right Column: High Quality Photographic Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#E2E4E8] shadow-xl bg-white aspect-[4/3] lg:aspect-[1/1] max-h-[520px]">
              <img
                src={hospitalInteriorImg}
                alt="The Hospital Executive Reception and Visitor Services Islamabad"
                className="w-full h-full object-cover"
                loading="eager"
              />

              {/* Doctors Badge Overlay */}
              <div className="absolute top-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3 border border-white/40 shadow-lg flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex -space-x-2">
                    <img
                      src={drHumayunImg}
                      alt="Dr. Humayun Mohmand FRCS"
                      className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                    />
                    <img
                      src={drShazmaImg}
                      alt="Dr. Shazma Consultant Plastic Surgeon"
                      className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#1B1D20] leading-snug">
                      Dr. Humayun Mohmand &amp; Dr. Shazma
                    </p>
                    <p className="text-[11px] text-[#6D6E71] font-medium">
                      Consultant Plastic &amp; Aesthetic Surgeons
                    </p>
                  </div>
                </div>
                <a
                  href="#surgeons"
                  className="shrink-0 p-1.5 rounded-md hover:bg-slate-100 text-slate-500 hover:text-[#C3221B] transition-colors"
                  aria-label="View doctor profiles"
                >
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Floating Facility Credential Box */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#18191C]/95 backdrop-blur-md text-white rounded-xl p-4 border border-white/10 shadow-lg">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#C3221B]/20 text-[#EC2920] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold tracking-wide uppercase text-[#FCA5A5]">
                      State-of-the-Art Facility
                    </p>
                    <p className="text-xs text-slate-200 mt-0.5 leading-snug">
                      Sterile hospital operating suites, private consultation rooms &amp; post-op recovery care.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
