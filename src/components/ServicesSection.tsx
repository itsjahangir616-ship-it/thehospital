import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SERVICES_DATA, Service } from '@/src/data/hospitalData';

interface ServicesSectionProps {
  onSelectService: (service: Service) => void;
  onBookService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onBookService
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Procedures' },
    { id: 'facial', label: 'Facial Plastic' },
    { id: 'body', label: 'Body Contouring' },
    { id: 'breast', label: 'Breast Surgery' },
    { id: 'reconstructive', label: 'Reconstructive' },
    { id: 'non-surgical', label: 'Non-Surgical' }
  ];

  const filteredServices =
    activeCategory === 'all'
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-16 md:py-24 bg-[#FAF9F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold tracking-[0.18em] uppercase text-[#C3221B] block mb-2">
            CLINICAL EXCELLENCE
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1B1D20] tracking-tight font-['Manrope']">
            Specialized Surgical Care, Tailored to You.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Every procedure at The Hospital in Islamabad is customized to your unique anatomical structure, safety requirements, and long-term aesthetic goals.
          </p>
        </div>

        {/* Category Filter Controls */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#C3221B] text-white shadow-xs'
                    : 'bg-[#F4F4F6] text-slate-600 hover:text-[#1B1D20] hover:bg-slate-200/70 border border-[#E2E4E8]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* 3-Column Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-xl border border-[#E2E4E8] overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg hover:border-[#C3221B]/40"
            >
              {/* Image Frame with Badge */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <span className="absolute top-3.5 left-3.5 bg-[#18191C]/90 backdrop-blur-xs text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded">
                  {service.badge}
                </span>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-grow space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-[#1B1D20] font-['Manrope'] group-hover:text-[#C3221B] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2 line-clamp-3">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-2 mt-auto flex items-center justify-between border-t border-[#E2E4E8]">
                  <button
                    onClick={() => onSelectService(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C3221B] hover:text-[#A61C16] transition-colors cursor-pointer"
                  >
                    Explore Procedure <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onBookService(service.title)}
                    className="text-[11px] font-semibold text-[#1B1D20] hover:text-[#C3221B] hover:underline cursor-pointer"
                  >
                    Book Consult
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
