import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, Navigation, ShieldCheck, Car } from 'lucide-react';
import { HOSPITAL_CONTACT } from '@/src/data/hospitalData';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-16 md:py-24 bg-[#F4F4F6] border-t border-[#E2E4E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-[0.18em] uppercase text-[#C3221B] block mb-2">
            ISLAMABAD SURGICAL CENTER
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1B1D20] tracking-tight font-['Manrope']">
            Visit The Hospital in Islamabad
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Conveniently situated in Sector G-8/4 with private patient parking and direct clinical access.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Facility Location Details */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 border border-[#E2E4E8] shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#C3221B]/10 text-[#C3221B] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1B1D20] uppercase tracking-wide">
                    Hospital Address
                  </h4>
                  <p className="text-base text-[#1B1D20] font-semibold mt-1">
                    Plot No 40, I &amp; T Center, Jehlum Rd G-8/4, Islamabad
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Federal Capital Territory, Islamabad, Pakistan
                  </p>
                </div>
              </div>

              {/* Verified Contact Lines */}
              <div className="border-t border-slate-100 pt-5 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-[#FAF9F8] p-3.5 rounded-lg border border-[#E2E4E8]">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                      Hospital Landline
                    </span>
                    <a
                      href={`tel:${HOSPITAL_CONTACT.landline}`}
                      className="text-base font-bold text-[#1B1D20] hover:text-[#C3221B] transition-colors mt-0.5 block"
                    >
                      {HOSPITAL_CONTACT.landline}
                    </a>
                  </div>

                  <div className="bg-[#FAF9F8] p-3.5 rounded-lg border border-[#E2E4E8]">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                      Cell &amp; Direct Line
                    </span>
                    <a
                      href={`tel:${HOSPITAL_CONTACT.cell}`}
                      className="text-base font-bold text-[#1B1D20] hover:text-[#C3221B] transition-colors mt-0.5 block"
                    >
                      {HOSPITAL_CONTACT.cell}
                    </a>
                  </div>
                </div>

                <div className="bg-[#25D366]/10 border border-[#25D366]/30 p-3.5 rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                    <div>
                      <span className="text-xs font-bold text-slate-800 block">
                        Official WhatsApp Coordination
                      </span>
                      <span className="text-xs text-slate-600 font-mono">
                        {HOSPITAL_CONTACT.whatsapp}
                      </span>
                    </div>
                  </div>
                  <a
                    href={HOSPITAL_CONTACT.whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-1.5 rounded-md bg-[#25D366] text-white text-xs font-semibold hover:bg-[#1ebe5d] transition-colors"
                  >
                    Open Chat
                  </a>
                </div>
              </div>

              {/* Operating Hours & Amenities */}
              <div className="border-t border-slate-100 pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-600">
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-[#C3221B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800 block">Operating Hours</strong>
                    <span>{HOSPITAL_CONTACT.hours}</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Car className="w-4 h-4 text-[#C3221B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800 block">Patient Parking</strong>
                    <span>Dedicated secure on-site parking</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={HOSPITAL_CONTACT.mapQuery}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-md bg-[#C3221B] hover:bg-[#A61C16] text-white font-semibold text-xs transition-colors shadow-xs cursor-pointer"
              >
                <Navigation className="w-4 h-4" />
                Get Directions on Google Maps
              </a>
            </div>
          </div>

          {/* Interactive Map Visual Representation */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 border border-[#E2E4E8] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1B1D20]">
                  Location Map · Sector G-8/4 Islamabad
                </span>
                <span className="text-[11px] text-[#C3221B] font-semibold">
                  Jehlum Road I &amp; T Center
                </span>
              </div>

              {/* Map Illustration Frame */}
              <div className="relative w-full h-64 sm:h-72 rounded-xl bg-slate-100 border border-[#E2E4E8] overflow-hidden flex flex-col items-center justify-center text-center p-6">
                {/* Abstract Stylized Map Grid */}
                <div className="absolute inset-0 opacity-25">
                  <div className="w-full h-full bg-[radial-gradient(#1B1D20_1px,transparent_1px)] [background-size:16px_16px]" />
                </div>

                <div className="relative z-10 space-y-3">
                  <div className="w-14 h-14 mx-auto rounded-full bg-[#18191C] text-white flex items-center justify-center shadow-lg ring-8 ring-[#C3221B]/15 animate-bounce">
                    <MapPin className="w-7 h-7 text-[#EC2920]" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#1B1D20] font-['Manrope']">
                      The Hospital
                    </h4>
                    <p className="text-xs text-slate-600 font-medium mt-0.5">
                      Plot No 40, I &amp; T Center, Jehlum Rd G-8/4, Islamabad
                    </p>
                  </div>
                  <div className="pt-2">
                    <a
                      href={HOSPITAL_CONTACT.mapQuery}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-white border border-[#E2E4E8] text-xs font-bold text-[#1B1D20] shadow-sm hover:border-[#C3221B] hover:text-[#C3221B] transition-colors"
                    >
                      Open Live Google Map <Navigation className="w-3.5 h-3.5 text-[#C3221B]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between">
              <span>Sector G-8/4 Commercial Zone</span>
              <span>Near Kashmir Highway / Zero Point Access</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
