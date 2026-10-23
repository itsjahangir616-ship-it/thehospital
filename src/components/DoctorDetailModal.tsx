import React, { useEffect } from 'react';
import { X, CheckCircle2, Award, Calendar, MapPin, Phone, MessageCircle } from 'lucide-react';
import { Doctor, HOSPITAL_CONTACT } from '@/src/data/hospitalData';

interface DoctorDetailModalProps {
  doctor: Doctor | null;
  onClose: () => void;
  onBook: (doctorName: string, doctorId: string) => void;
}

export const DoctorDetailModal: React.FC<DoctorDetailModalProps> = ({
  doctor,
  onClose,
  onBook
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && doctor) onClose();
    };
    if (doctor) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [doctor, onClose]);

  if (!doctor) return null;

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
        {/* Header */}
        <div className="bg-[#18191C] text-white p-6 flex items-start justify-between">
          <div className="flex items-center gap-4">
            <img
              src={doctor.photo}
              alt={doctor.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-white/20 shadow-md"
            />
            <div>
              <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#FCA5A5]">
                {doctor.role} · The Hospital Islamabad
              </span>
              <h3 className="text-xl md:text-2xl font-bold font-['Manrope'] text-white">
                {doctor.name}
              </h3>
              <p className="text-xs text-slate-300 font-medium mt-0.5">
                {doctor.qualifications}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-md text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-[#222427]">
          {/* Clinical Designation & Schedule */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-[#F4F4F6] p-4 rounded-lg border border-[#E2E4E8] text-xs">
            <div className="flex items-center gap-2 text-slate-700">
              <Calendar className="w-4 h-4 text-[#C3221B] shrink-0" />
              <span><strong>Consultation Hours:</strong> {doctor.clinicHours}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <MapPin className="w-4 h-4 text-[#C3221B] shrink-0" />
              <span><strong>Location:</strong> {doctor.roomNumber}, G-8/4 Islamabad</span>
            </div>
          </div>

          {/* Full Bio */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1B1D20] mb-3">
              Professional Biography
            </h4>
            <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
              {doctor.fullBio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Key Areas of Specialization */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1B1D20] mb-3">
              Surgical Specializations &amp; Focus
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {doctor.specialties.map((spec, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-700 bg-white p-2.5 rounded border border-[#E2E4E8]">
                  <CheckCircle2 className="w-4 h-4 text-[#C3221B] shrink-0" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Credentials */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1B1D20] mb-3">
              Verified Qualifications &amp; Fellowships
            </h4>
            <div className="space-y-2">
              {doctor.education.map((edu, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-600">
                  <Award className="w-4 h-4 text-[#C3221B] shrink-0" />
                  <span>{edu}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Keynote & Academic Lectures if present */}
          {doctor.keynotePhoto && (
            <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 text-white shadow-sm">
              <div className="aspect-[16/9] w-full relative">
                <img
                  src={doctor.keynotePhoto}
                  alt={`${doctor.name} Keynote Lecture`}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-[#FCA5A5]">
                    AAMS 2024 International Congress
                  </span>
                  <p className="text-xs font-semibold text-white mt-0.5">
                    Dr. Humayun Mohmand delivering keynote address at the Academy of Aesthetic Medicine &amp; Surgery.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="border-t border-[#E2E4E8] bg-white px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-4 text-xs text-slate-600">
            <span className="flex items-center gap-1.5 font-medium">
              <Phone className="w-3.5 h-3.5 text-[#C3221B]" />
              051-8441444
            </span>
            <span className="flex items-center gap-1.5 font-medium text-[#25D366]">
              <MessageCircle className="w-3.5 h-3.5" />
              0321-5000242
            </span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-md border border-[#E2E4E8] text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Back
            </button>
            <button
              onClick={() => {
                onClose();
                onBook(doctor.name, doctor.id);
              }}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-md bg-[#C3221B] hover:bg-[#A61C16] text-white text-xs font-semibold transition-all shadow-sm cursor-pointer"
            >
              Consult with {doctor.name}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
