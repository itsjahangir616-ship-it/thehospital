import React, { useState, useEffect } from 'react';
import { X, Calendar, Phone, CheckCircle2, MessageCircle, Clock, MapPin, User } from 'lucide-react';
import { HOSPITAL_CONTACT, DOCTORS_DATA } from '@/src/data/hospitalData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultDoctorId?: string;
  defaultServiceName?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  defaultDoctorId = 'dr-humayun',
  defaultServiceName = 'Facial Plastic Surgery'
}) => {
  const [doctorId, setDoctorId] = useState(defaultDoctorId);
  const [serviceName, setServiceName] = useState(defaultServiceName);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('Morning (10:00 AM – 1:00 PM)');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceCode, setReferenceCode] = useState('');

  useEffect(() => {
    if (defaultDoctorId) setDoctorId(defaultDoctorId);
    if (defaultServiceName) setServiceName(defaultServiceName);
  }, [defaultDoctorId, defaultServiceName, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      setIsSubmitted(false);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = 'TH-' + Math.floor(100000 + Math.random() * 900000);
    setReferenceCode(code);
    setIsSubmitted(true);
  };

  const selectedDoctorObj = DOCTORS_DATA.find((d) => d.id === doctorId) || DOCTORS_DATA[0];

  const handleWhatsAppNotify = () => {
    const text = encodeURIComponent(
      `Hello The Hospital, I have scheduled a consultation request (Ref: ${referenceCode}) with ${selectedDoctorObj.name} for ${serviceName}. Name: ${fullName}, Phone: ${phone}. Please confirm my slot.`
    );
    window.open(`https://wa.me/923215000242?text=${text}`, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
    >
      <div
        className="relative w-full max-w-xl bg-[#FAFAF8] rounded-xl border border-[#E1E6E8] shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="bg-[#18191C] text-white px-6 py-5 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#FCA5A5]">
              The Hospital · Islamabad
            </span>
            <h3 id="modal-headline" className="text-xl font-bold font-['Manrope']">
              {isSubmitted ? 'Consultation Request Logged' : 'Arrange Private Consultation'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-md text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content body */}
        <div className="p-6 md:p-8">
          {isSubmitted ? (
            <div className="space-y-6 text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#C3221B]/15 text-[#C3221B] flex items-center justify-center">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Reference Code
                </span>
                <p className="text-2xl font-mono font-bold text-[#1B1D20] mt-0.5">
                  {referenceCode}
                </p>
                <h4 className="text-lg font-bold text-[#1B1D20] mt-2">
                  Thank You, {fullName || 'Valued Patient'}
                </h4>
                <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto leading-relaxed">
                  Your private consultation request with <strong>{selectedDoctorObj.name}</strong> for{' '}
                  <strong>{serviceName}</strong> has been logged. Our clinical coordinator will call you to confirm your slot.
                </p>
              </div>

              {/* Summary Card */}
              <div className="bg-white rounded-lg p-4 border border-[#E2E4E8] text-left text-xs space-y-2 text-slate-600">
                <div className="flex justify-between">
                  <span className="font-semibold text-slate-700">Surgeon:</span>
                  <span>{selectedDoctorObj.name} ({selectedDoctorObj.role})</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-slate-700">Procedure:</span>
                  <span>{serviceName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-slate-700">Location:</span>
                  <span>Plot 40, I &amp; T Center, G-8/4 Islamabad</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-slate-700">Clinic Coordinator:</span>
                  <span>051-8441444 / 0321-5000242</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleWhatsAppNotify}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold text-sm transition-all shadow-sm cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  Confirm via WhatsApp
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-5 py-3 rounded-md bg-[#18191C] hover:bg-[#141517] text-white font-semibold text-sm transition-all cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="bg-[#F4F4F6] p-3 rounded-md border border-[#E2E4E8] flex items-center gap-2.5 text-xs text-slate-700">
                <MapPin className="w-4 h-4 text-[#C3221B] shrink-0" />
                <span>
                  Consultations held at <strong>Plot No 40, I &amp; T Center, Jehlum Rd G-8/4, Islamabad</strong>.
                </span>
              </div>

              {/* Doctor Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1B1D20] mb-1.5">
                  Select Attending Surgeon *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {DOCTORS_DATA.map((doc) => {
                    const isSelected = doctorId === doc.id;
                    return (
                      <button
                        key={doc.id}
                        type="button"
                        onClick={() => setDoctorId(doc.id)}
                        className={`text-left p-3 rounded-lg border transition-all flex items-start gap-3 cursor-pointer ${
                          isSelected
                            ? 'border-[#C3221B] bg-white ring-2 ring-[#C3221B]/20 shadow-sm'
                            : 'border-[#E2E4E8] bg-white/70 hover:border-slate-300'
                        }`}
                      >
                        <img
                          src={doc.photo}
                          alt={doc.name}
                          className="w-12 h-12 rounded-full object-cover shrink-0 border border-slate-200"
                        />
                        <div className="min-w-0">
                          <p className="text-sm font-bold text-[#1B1D20] truncate">{doc.name}</p>
                          <p className="text-[11px] text-[#C3221B] font-medium truncate">{doc.qualifications.split(',')[0]}</p>
                          <p className="text-[11px] text-slate-500 mt-0.5">{doc.role}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Procedure */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1B1D20] mb-1.5">
                  Procedure of Interest *
                </label>
                <select
                  value={serviceName}
                  onChange={(e) => setServiceName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-md border border-[#E2E4E8] bg-white text-sm text-[#222427] focus:outline-none focus:ring-2 focus:ring-[#C3221B]/25 focus:border-[#C3221B]"
                  required
                >
                  <option value="Facial Plastic Surgery (Rhinoplasty / Facelift)">Facial Plastic Surgery (Rhinoplasty / Facelift)</option>
                  <option value="Blepharoplasty (Eyelid Rejuvenation)">Blepharoplasty (Eyelid Rejuvenation)</option>
                  <option value="High-Definition Body Contouring / Liposuction">High-Definition Body Contouring / Liposuction</option>
                  <option value="Abdominoplasty (Tummy Tuck)">Abdominoplasty (Tummy Tuck)</option>
                  <option value="Aesthetic Breast Surgery (Augmentation / Mastopexy / Reduction)">Aesthetic Breast Surgery (Augmentation / Mastopexy / Reduction)</option>
                  <option value="Reconstructive Surgery">Reconstructive Surgery</option>
                  <option value="Scar Revision & Tissue Resurfacing">Scar Revision &amp; Tissue Resurfacing</option>
                  <option value="Doctor-Administered Non-Surgical Aesthetics">Doctor-Administered Non-Surgical Aesthetics</option>
                  <option value="General Plastic Surgery Consultation">General Plastic Surgery Consultation</option>
                </select>
              </div>

              {/* Patient Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1B1D20] mb-1.5">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Ayesha Khan"
                      className="w-full pl-9 pr-3 py-2.5 rounded-md border border-[#E2E4E8] bg-white text-sm text-[#222427] focus:outline-none focus:ring-2 focus:ring-[#C3221B]/25 focus:border-[#C3221B]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1B1D20] mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="0321-XXXXXXX"
                      className="w-full pl-9 pr-3 py-2.5 rounded-md border border-[#E2E4E8] bg-white text-sm text-[#222427] focus:outline-none focus:ring-2 focus:ring-[#C3221B]/25 focus:border-[#C3221B]"
                    />
                  </div>
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1B1D20] mb-1.5">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-md border border-[#E2E4E8] bg-white text-sm text-[#222427] focus:outline-none focus:ring-2 focus:ring-[#C3221B]/25 focus:border-[#C3221B]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1B1D20] mb-1.5">
                    Preferred Time Window
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                    <select
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-md border border-[#E2E4E8] bg-white text-sm text-[#222427] focus:outline-none focus:ring-2 focus:ring-[#C3221B]/25 focus:border-[#C3221B]"
                    >
                      <option>Morning (10:00 AM – 1:00 PM)</option>
                      <option>Afternoon (1:00 PM – 4:00 PM)</option>
                      <option>Late Afternoon (4:00 PM – 6:00 PM)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1B1D20] mb-1.5">
                  Clinical Questions or Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Share any specific questions or previous surgical background..."
                  className="w-full px-3.5 py-2 rounded-md border border-[#E2E4E8] bg-white text-sm text-[#222427] focus:outline-none focus:ring-2 focus:ring-[#C3221B]/25 focus:border-[#C3221B]"
                />
              </div>

              {/* Action buttons */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-md bg-[#C3221B] hover:bg-[#A61C16] text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg cursor-pointer"
                >
                  Submit Consultation Request
                </button>
                <div className="flex items-center justify-between mt-3 text-xs text-slate-500">
                  <span>Direct Desk: <a href="tel:0518441444" className="font-semibold text-[#1B1D20] hover:underline">051-8441444</a></span>
                  <span>WhatsApp: <a href="https://wa.me/923215000242" target="_blank" rel="noreferrer" className="font-semibold text-[#25D366] hover:underline">0321-5000242</a></span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
