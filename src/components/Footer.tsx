import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Mail, Clock, ShieldCheck, X } from 'lucide-react';
import { TheHospitalLogo } from './TheHospitalLogo';
import { HOSPITAL_CONTACT } from '@/src/data/hospitalData';

export const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'privacy' | 'rights' | 'disclaimer' | null>(null);

  return (
    <footer id="contact" className="bg-[#141517] text-slate-300 pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Column 1: Brand */}
          <div className="lg:col-span-4 space-y-4">
            <TheHospitalLogo variant="dark" />
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-['Inter']">
              <strong>The Hospital</strong> is a specialized surgical center in Islamabad committed to patient-first plastic, cosmetic, and reconstructive surgery delivered with clinical precision and medical integrity under <strong>Dr. Humayun Mohmand (FRCS)</strong> and <strong>Dr. Shazma</strong>.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white/5 border border-white/10 text-xs text-[#FCA5A5] font-medium">
              <ShieldCheck className="w-4 h-4 text-[#EC2920]" />
              <span>Licensed Surgical Facility · Islamabad</span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-['Manrope']">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About The Hospital</a></li>
              <li><a href="#surgeons" className="hover:text-white transition-colors">Dr. Humayun Mohmand</a></li>
              <li><a href="#surgeons" className="hover:text-white transition-colors">Dr. Shazma</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Surgical Services</a></li>
              <li><a href="#facility" className="hover:text-white transition-colors">Clinical Spaces</a></li>
              <li><a href="#faqs" className="hover:text-white transition-colors">Patient FAQs</a></li>
            </ul>
          </div>

          {/* Column 3: Surgical Procedures */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-['Manrope']">
              Surgical Focus
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#services" className="hover:text-white transition-colors">Facial Plastic Surgery &amp; Rhinoplasty</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">High-Definition Body Contouring</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Aesthetic Breast Surgery</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Microsurgical Reconstruction</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Scar Revision &amp; Resurfacing</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Doctor-Administered Aesthetics</a></li>
            </ul>
          </div>

          {/* Column 4: Islamabad Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-['Manrope']">
              Hospital Contact
            </h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#EC2920] shrink-0 mt-0.5" />
                <span className="leading-snug">
                  {HOSPITAL_CONTACT.address}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#EC2920] shrink-0" />
                <span>Phone: <a href={`tel:${HOSPITAL_CONTACT.landline}`} className="text-white hover:underline font-semibold">{HOSPITAL_CONTACT.landline}</a></span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#EC2920] shrink-0" />
                <span>Cell: <a href={`tel:${HOSPITAL_CONTACT.cell}`} className="text-white hover:underline font-semibold">{HOSPITAL_CONTACT.cell}</a></span>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>WhatsApp: <a href={HOSPITAL_CONTACT.whatsappLink} target="_blank" rel="noreferrer" className="text-[#25D366] hover:underline font-semibold">{HOSPITAL_CONTACT.whatsapp}</a></span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#EC2920] shrink-0 mt-0.5" />
                <span className="leading-snug">{HOSPITAL_CONTACT.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} The Hospital — Islamabad. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-slate-400">
            <button
              onClick={() => setActiveModal('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-slate-700">·</span>
            <button
              onClick={() => setActiveModal('rights')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Patient Rights
            </button>
            <span className="text-slate-700">·</span>
            <button
              onClick={() => setActiveModal('disclaimer')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Clinical Disclaimers
            </button>
          </div>
        </div>
      </div>

      {/* Legal Information Modal */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="bg-white text-slate-800 rounded-xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-700"
            >
              <X className="w-5 h-5" />
            </button>

            {activeModal === 'privacy' && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[#1B1D20] font-['Manrope']">
                  Patient Privacy &amp; Data Protection Policy
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The Hospital adheres strictly to physician-patient confidentiality laws. All personal details, clinical consultation notes, and pre-operative photographs are stored securely on encrypted, air-gapped clinical records.
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  No photographic material or identifiable information is published or disseminated without explicit written consent from the patient.
                </p>
              </div>
            )}

            {activeModal === 'rights' && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[#1B1D20] font-['Manrope']">
                  Patient Rights &amp; Informed Consent
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Every patient at The Hospital possesses the fundamental right to full disclosure of surgical risks, alternative modalities, anticipated recovery trajectories, and detailed cost breakdowns prior to consenting to any intervention.
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  You are entitled to unhurried consultations with Dr. Humayun Mohmand or Dr. Shazma, and have the freedom to seek a second medical opinion at any stage.
                </p>
              </div>
            )}

            {activeModal === 'disclaimer' && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[#1B1D20] font-['Manrope']">
                  Clinical &amp; Medical Disclaimers
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Information presented on this website serves educational purposes and should not be substituted for direct medical diagnosis by a qualified plastic surgeon.
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Surgical outcomes vary significantly based on unique patient anatomy, skin quality, genetic factors, and post-operative adherence. Surgical procedures entail inherent risks which are thoroughly analyzed during formal consultation.
                </p>
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-slate-100 text-right">
              <button
                onClick={() => setActiveModal(null)}
                className="px-4 py-2 rounded bg-[#18191C] text-white text-xs font-semibold hover:bg-[#141517] cursor-pointer"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
