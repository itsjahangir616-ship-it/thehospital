import React, { useState } from 'react';
import { Header } from '@/src/components/Header';
import { Hero } from '@/src/components/Hero';
import { TrustStrip } from '@/src/components/TrustStrip';
import { AboutSection } from '@/src/components/AboutSection';
import { SurgeonsSection } from '@/src/components/SurgeonsSection';
import { ServicesSection } from '@/src/components/ServicesSection';
import { WhyChooseUs } from '@/src/components/WhyChooseUs';
import { EditorialBanner } from '@/src/components/EditorialBanner';
import { GallerySection } from '@/src/components/GallerySection';
import { LocationSection } from '@/src/components/LocationSection';
import { TestimonialsSection } from '@/src/components/TestimonialsSection';
import { FAQSection } from '@/src/components/FAQSection';
import { AppointmentCTA } from '@/src/components/AppointmentCTA';
import { Footer } from '@/src/components/Footer';
import { FloatingWhatsApp } from '@/src/components/FloatingWhatsApp';
import { AppointmentModal } from '@/src/components/AppointmentModal';
import { DoctorDetailModal } from '@/src/components/DoctorDetailModal';
import { ServiceDetailModal } from '@/src/components/ServiceDetailModal';
import { Doctor, Service } from '@/src/data/hospitalData';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedDoctorId, setSelectedDoctorId] = useState('dr-humayun');
  const [selectedServiceName, setSelectedServiceName] = useState('Facial Plastic Surgery');

  const [activeDoctorModal, setActiveDoctorModal] = useState<Doctor | null>(null);
  const [activeServiceModal, setActiveServiceModal] = useState<Service | null>(null);

  const handleOpenBooking = (docName?: string, docId?: string, serviceName?: string) => {
    if (docId) setSelectedDoctorId(docId);
    if (serviceName) setSelectedServiceName(serviceName);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F8] text-[#222427] selection:bg-[#C3221B]/15 selection:text-[#C3221B]">
      {/* Navigation & Header */}
      <Header onBookClick={() => handleOpenBooking()} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 6. Hero Section */}
        <Hero onBookClick={() => handleOpenBooking()} />

        {/* 7. Trust & Introduction Strip */}
        <TrustStrip />

        {/* 8. About The Hospital */}
        <AboutSection />

        {/* 10. Meet Our Surgeons (Dr. Humayun Mohmand FRCS & Dr. Shazma) */}
        <SurgeonsSection
          onSelectDoctor={(doc) => setActiveDoctorModal(doc)}
          onBookDoctor={(docName, docId) => handleOpenBooking(docName, docId)}
        />

        {/* 9. Featured Surgical Services */}
        <ServicesSection
          onSelectService={(svc) => setActiveServiceModal(svc)}
          onBookService={(svcTitle) => handleOpenBooking(undefined, undefined, svcTitle)}
        />

        {/* 11. Why Choose The Hospital */}
        <WhyChooseUs />

        {/* 12. Editorial Banner */}
        <EditorialBanner onBookClick={() => handleOpenBooking()} />

        {/* 13. Clinical Suites & Surgical Theatres Gallery */}
        <GallerySection />

        {/* Islamabad Center & Address details */}
        <LocationSection />

        {/* 14. Patient Testimonials */}
        <TestimonialsSection />

        {/* 15. FAQs Accordion */}
        <FAQSection />

        {/* 16. Prominent Appointment CTA */}
        <AppointmentCTA onBookClick={() => handleOpenBooking()} />
      </main>

      {/* 17. Contact & Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />

      {/* Interactive Booking Modal */}
      <AppointmentModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultDoctorId={selectedDoctorId}
        defaultServiceName={selectedServiceName}
      />

      {/* Doctor Detailed Profile Modal */}
      <DoctorDetailModal
        doctor={activeDoctorModal}
        onClose={() => setActiveDoctorModal(null)}
        onBook={(docName, docId) => handleOpenBooking(docName, docId)}
      />

      {/* Service Detailed Modal */}
      <ServiceDetailModal
        service={activeServiceModal}
        onClose={() => setActiveServiceModal(null)}
        onBook={(svcTitle) => handleOpenBooking(undefined, undefined, svcTitle)}
      />
    </div>
  );
}
