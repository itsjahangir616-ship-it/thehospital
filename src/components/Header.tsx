import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, MapPin, Menu, X, Calendar } from 'lucide-react';
import { TheHospitalLogo } from './TheHospitalLogo';
import { HOSPITAL_CONTACT } from '@/src/data/hospitalData';

interface HeaderProps {
  onBookClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onBookClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Quick Contact Bar */}
      <div className="bg-[#18191C] text-slate-300 text-xs py-2 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-[#EC2920]" />
            <span>Plot No 40, I &amp; T Center, Jehlum Rd G-8/4, Islamabad</span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={`tel:${HOSPITAL_CONTACT.landline}`}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#EC2920]" />
              <span>{HOSPITAL_CONTACT.landline}</span>
            </a>
            <span className="text-white/20">|</span>
            <a
              href={`tel:${HOSPITAL_CONTACT.cell}`}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#EC2920]" />
              <span>{HOSPITAL_CONTACT.cell}</span>
            </a>
            <span className="text-white/20">|</span>
            <a
              href={HOSPITAL_CONTACT.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-[#25D366] hover:text-[#38e67a] font-medium transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp: {HOSPITAL_CONTACT.whatsapp}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#FAF9F8]/95 backdrop-blur-md shadow-sm border-b border-[#E2E4E8] py-3.5'
            : 'bg-[#FAF9F8] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a href="#" className="flex items-center shrink-0">
            <TheHospitalLogo />
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-700">
            <a href="#about" className="hover:text-[#C3221B] transition-colors whitespace-nowrap">
              About
            </a>
            <a href="#surgeons" className="hover:text-[#C3221B] transition-colors whitespace-nowrap">
              Our Surgeons
            </a>
            <a href="#services" className="hover:text-[#C3221B] transition-colors whitespace-nowrap">
              Surgical Services
            </a>
            <a href="#facility" className="hover:text-[#C3221B] transition-colors whitespace-nowrap">
              Clinical Spaces
            </a>
            <a href="#location" className="hover:text-[#C3221B] transition-colors whitespace-nowrap">
              Islamabad Center
            </a>
            <a href="#faqs" className="hover:text-[#C3221B] transition-colors whitespace-nowrap">
              FAQs
            </a>
          </nav>

          {/* Zone 3: Primary Action & Mobile Menu Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onBookClick}
              className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-[#C3221B] hover:bg-[#A61C16] text-white text-xs md:text-sm font-semibold transition-all shadow-sm hover:shadow-md whitespace-nowrap cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              Book Consultation
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-slate-700 hover:bg-slate-200/50 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF9F8] border-b border-[#E2E4E8] px-4 pt-3 pb-6 shadow-xl space-y-3">
            <nav className="flex flex-col gap-2.5 text-base font-medium text-slate-800">
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 px-2 rounded hover:bg-slate-100 hover:text-[#C3221B]"
              >
                About The Hospital
              </a>
              <a
                href="#surgeons"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 px-2 rounded hover:bg-slate-100 hover:text-[#C3221B]"
              >
                Our Surgeons (Dr. Humayun &amp; Dr. Shazma)
              </a>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 px-2 rounded hover:bg-slate-100 hover:text-[#C3221B]"
              >
                Surgical Services
              </a>
              <a
                href="#facility"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 px-2 rounded hover:bg-slate-100 hover:text-[#C3221B]"
              >
                Clinical Spaces &amp; Suites
              </a>
              <a
                href="#location"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 px-2 rounded hover:bg-slate-100 hover:text-[#C3221B]"
              >
                Islamabad Location (Plot 40, G-8/4)
              </a>
              <a
                href="#faqs"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 px-2 rounded hover:bg-slate-100 hover:text-[#C3221B]"
              >
                Patient FAQs
              </a>
            </nav>

            <div className="pt-3 border-t border-[#E2E4E8] space-y-2.5 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C3221B]" />
                <span>Plot 40, I &amp; T Center, G-8/4 Islamabad</span>
              </div>
              <div className="flex items-center gap-4">
                <a href={`tel:${HOSPITAL_CONTACT.landline}`} className="font-semibold text-[#1B1D20]">
                  Call: 051-8441444
                </a>
                <a href={HOSPITAL_CONTACT.whatsappLink} className="font-semibold text-[#25D366]">
                  WhatsApp: 0321-5000242
                </a>
              </div>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full mt-2 py-3 rounded-md bg-[#C3221B] hover:bg-[#A61C16] text-white text-sm font-semibold transition-colors"
            >
              Book a Consultation
            </button>
          </div>
        )}
      </header>
    </>
  );
};
