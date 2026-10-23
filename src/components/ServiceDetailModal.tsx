import React, { useEffect } from 'react';
import { X, CheckCircle2, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { Service } from '@/src/data/hospitalData';

interface ServiceDetailModalProps {
  service: Service | null;
  onClose: () => void;
  onBook: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBook
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && service) onClose();
    };
    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-2xl bg-[#FAF9F8] rounded-xl border border-[#E2E4E8] shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image / Header */}
        <div className="relative h-48 md:h-56 bg-slate-900 shrink-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#18191C] via-[#18191C]/60 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-md bg-black/40 text-white hover:bg-black/60 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#FCA5A5]">
              {service.badge}
            </span>
            <h3 className="text-xl md:text-2xl font-bold font-['Manrope'] text-white">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-[#222427]">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1B1D20] mb-2">
              Clinical Overview
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              {service.overview}
            </p>
          </div>

          {/* Candidacy */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1B1D20] mb-2.5">
              Ideal Candidates &amp; Clinical Indications
            </h4>
            <div className="space-y-2">
              {service.candidates.map((cand, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#C3221B] shrink-0 mt-0.5" />
                  <span>{cand}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Procedural Pathway */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1B1D20] mb-2.5">
              Hospital Surgical Protocol &amp; Steps
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.procedureSteps.map((step, idx) => (
                <div key={idx} className="bg-white p-3 rounded border border-[#E2E4E8] text-xs text-slate-700">
                  <span className="font-bold text-[#C3221B] block mb-1">Phase 0{idx + 1}</span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recovery & Clinical Safety */}
          <div className="bg-[#F4F4F6] p-4 rounded-lg border border-[#E2E4E8] space-y-2 text-xs">
            <div className="flex items-start gap-2 text-slate-700">
              <Clock className="w-4 h-4 text-[#C3221B] shrink-0 mt-0.5" />
              <span><strong>Estimated Recovery:</strong> {service.recoveryDuration}</span>
            </div>
            <div className="flex items-start gap-2 text-slate-700">
              <ShieldCheck className="w-4 h-4 text-[#C3221B] shrink-0 mt-0.5" />
              <span><strong>Safety Notice:</strong> {service.consultationNote}</span>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="border-t border-[#E2E4E8] bg-white px-6 py-4 flex items-center justify-between">
          <span className="text-xs text-slate-500 hidden sm:inline">
            Direct surgical consultations in G-8/4 Islamabad
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-md border border-[#E2E4E8] text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBook(service.title);
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-md bg-[#C3221B] hover:bg-[#A61C16] text-white text-xs font-semibold transition-all shadow-sm cursor-pointer"
            >
              Book Consultation For This Procedure <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
