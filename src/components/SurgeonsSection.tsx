import React from 'react';
import { Award, CheckCircle2, Calendar, Phone, ArrowRight, User } from 'lucide-react';
import { DOCTORS_DATA, Doctor } from '@/src/data/hospitalData';

interface SurgeonsSectionProps {
  onSelectDoctor: (doctor: Doctor) => void;
  onBookDoctor: (doctorName: string, doctorId: string) => void;
}

export const SurgeonsSection: React.FC<SurgeonsSectionProps> = ({
  onSelectDoctor,
  onBookDoctor
}) => {
  return (
    <section id="surgeons" className="py-16 md:py-24 bg-[#F4F4F6] border-t border-[#E2E4E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-[0.18em] uppercase text-[#C3221B] block mb-2">
            SURGICAL LEADERSHIP
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1B1D20] tracking-tight font-['Manrope']">
            Meet Our Surgeons
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Consult directly with our verified, board-credentialed specialists who prioritize safety, honest counsel, and surgical finesse in Islamabad.
          </p>
        </div>

        {/* 2-Column Doctor Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {DOCTORS_DATA.map((doc) => {
            const isPrimary = doc.role === 'Primary Surgeon';
            return (
              <article
                key={doc.id}
                className={`bg-white rounded-2xl border transition-all duration-300 flex flex-col overflow-hidden shadow-sm hover:shadow-lg ${
                  isPrimary
                    ? 'border-[#C3221B]/40 ring-1 ring-[#C3221B]/20'
                    : 'border-[#E2E4E8]'
                }`}
              >
                {/* Doctor Portrait & Role Pill */}
                <div className="relative h-96 sm:h-[440px] w-full bg-slate-950 overflow-hidden">
                  <img
                    src={doc.photo}
                    alt={`${doc.name} - ${doc.title}`}
                    className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                    {doc.keynotePhoto ? (
                      <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-[#FCA5A5] border border-white/15 flex items-center gap-1.5 shadow-sm">
                        <Award className="w-3 h-3 text-[#EC2920]" />
                        <span>AAMS Keynote Speaker</span>
                      </span>
                    ) : (
                      <span />
                    )}
                    <span
                      className={`text-[11px] font-bold tracking-[0.14em] uppercase px-3 py-1.5 rounded shadow-sm text-white ${
                        isPrimary ? 'bg-[#C3221B]' : 'bg-[#1B1D20]'
                      }`}
                    >
                      {doc.role}
                    </span>
                  </div>

                  {/* Name overlay on bottom of photo */}
                  <div className="absolute bottom-4 left-5 right-5 text-white">
                    <h3 className="text-xl sm:text-2xl font-bold font-['Manrope']">
                      {doc.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 font-semibold mt-0.5">
                      {doc.qualifications}
                    </p>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow space-y-5">
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-[#C3221B] uppercase tracking-wider block">
                      {doc.title}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                      {doc.shortBio}
                    </p>
                  </div>

                  {/* Specialties List */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#1B1D20] mb-2.5">
                      Key Surgical Focus:
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {doc.specialties.slice(0, 4).map((spec, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C3221B] shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Clinic Schedule preview */}
                  <div className="bg-[#F4F4F6] p-3 rounded-lg border border-[#E2E4E8] flex items-center justify-between text-xs text-slate-600">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#C3221B]" />
                      <span>{doc.clinicHours.split('(')[0]}</span>
                    </span>
                    <span className="font-semibold text-slate-800">{doc.roomNumber.split(' ')[0]}</span>
                  </div>

                  {/* Actions */}
                  <div className="pt-2 mt-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      onClick={() => onSelectDoctor(doc)}
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-md border border-[#E2E4E8] bg-white hover:bg-slate-50 text-slate-800 font-semibold text-xs transition-colors cursor-pointer"
                    >
                      <User className="w-3.5 h-3.5 text-slate-500" />
                      View Full Profile
                    </button>
                    <button
                      onClick={() => onBookDoctor(doc.name, doc.id)}
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-md bg-[#C3221B] hover:bg-[#A61C16] text-white font-semibold text-xs transition-all shadow-xs cursor-pointer"
                    >
                      Book with {doc.name.split(' ')[1]} <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
