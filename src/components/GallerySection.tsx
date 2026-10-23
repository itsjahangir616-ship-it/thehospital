import React, { useState } from 'react';
import { Maximize2, X, ShieldAlert, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '@/src/data/hospitalData';

export const GallerySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'theatres' | 'consultation' | 'recovery' | 'academic'>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Spaces' },
    { id: 'theatres', label: 'Operating Theatres' },
    { id: 'consultation', label: 'Consultation Suites' },
    { id: 'recovery', label: 'Recovery Wings' },
    { id: 'academic', label: 'Academic & Keynotes' }
  ];

  const filteredItems =
    activeTab === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeTab);

  return (
    <section id="facility" className="py-16 md:py-24 bg-[#FAF9F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold tracking-[0.18em] uppercase text-[#C3221B] block mb-2">
            CLINICAL SUITES &amp; SURGICAL THEATRES
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1B1D20] tracking-tight font-['Manrope']">
            Authentic Hospital Setting
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Take a look inside our modern surgical theatre suites, private consultation rooms, and recovery spaces located at Plot 40, I &amp; T Center, G-8/4 Islamabad.
          </p>
        </div>

        {/* Filter controls */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {filterTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#C3221B] text-white shadow-xs'
                    : 'bg-[#F4F4F6] text-slate-600 hover:text-[#1B1D20] hover:bg-slate-200/60 border border-[#E2E4E8]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-xl overflow-hidden border border-[#E2E4E8] bg-slate-900 aspect-[4/3] cursor-pointer shadow-xs hover:shadow-lg transition-all"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              <div className="absolute bottom-3 left-4 right-4 text-white">
                <h4 className="text-sm font-bold font-['Manrope']">{item.title}</h4>
                <p className="text-[11px] text-slate-300 mt-1 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Clinical Privacy Notice */}
        <div className="mt-12 bg-[#F4F4F6] rounded-lg p-4 border border-[#E2E4E8] text-center max-w-2xl mx-auto">
          <p className="text-xs text-slate-600 leading-relaxed">
            <strong className="text-[#1B1D20]">Medical Confidentiality &amp; Case Logs:</strong> Patient photographic comparisons and surgical records are reviewed privately during doctor consultations in full compliance with healthcare privacy regulations.
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#18191C] text-white rounded-xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors z-10"
              aria-label="Close image"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="max-h-[70vh] bg-black flex items-center justify-center">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-[70vh] w-auto max-w-full object-contain"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold font-['Manrope']">{selectedImage.title}</h3>
              <p className="text-xs text-slate-300 mt-1">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
