import React from 'react';
import { UserCheck, FileText, HeartHandshake, Building2 } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: UserCheck,
      title: 'Individualized Consultations',
      desc: 'We dedicate generous, unhurried time so you can speak frankly with your surgeon, review physical considerations, and set realistic aesthetic milestones.'
    },
    {
      icon: FileText,
      title: 'Clear Treatment Information',
      desc: 'Transparent guidance regarding procedure limitations, recovery phases, potential risks, and clinical alternatives without aggressive marketing.'
    },
    {
      icon: HeartHandshake,
      title: 'Patient-Focused Support',
      desc: 'From initial diagnostic screening through long-term post-operative healing, our specialized nursing team remains in direct communication.'
    },
    {
      icon: Building2,
      title: 'Hospital-Grade Clinical Standards',
      desc: 'Operating strictly in fully equipped, certified surgical theatres with dedicated anesthesiology, continuous monitoring, and sterile air filtration.'
    }
  ];

  return (
    <section id="philosophy" className="py-16 md:py-24 bg-[#F4F4F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-[0.18em] uppercase text-[#C3221B] block mb-2">
            THE HOSPITAL STANDARD
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1B1D20] tracking-tight font-['Manrope']">
            Care That Begins With Understanding.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Plastic and cosmetic surgery requires mutual trust, deep anatomical knowledge, and grounded patient expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 sm:p-7 border border-[#E2E4E8] flex flex-col justify-between hover:border-[#C3221B]/40 hover:shadow-md transition-all duration-300"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#C3221B]/10 text-[#C3221B] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-[#1B1D20] mb-2 font-['Manrope']">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
