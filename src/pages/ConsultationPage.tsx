import React from 'react';
import { Building, ClipboardCheck, GraduationCap, Sparkles, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { SITE_METADATA } from '../data/siteData';

interface ConsultationPageProps {
  onNavigate: (path: string) => void;
  onSelectInquiry: (initialText: string) => void;
}

export const ConsultationPage: React.FC<ConsultationPageProps> = ({ onNavigate, onSelectInquiry }) => {
  const consultationPillars = [
    {
      icon: <ClipboardCheck className="w-6 h-6 text-[#2E8CB8]" />,
      title: 'Current Music Program Audits',
      desc: 'Many care homes and facilities already play music or host sing-alongs, but do not realize certain practices may inadvertently induce agitation, sensory over-stimulation, or distress in sensitive residents.',
      features: [
        'Comprehensive audit of existing activity schedules and musical choices',
        'Sound environment and acoustic decibel evaluation',
        'Recommendations to maximize therapeutic benefit and emotional safety'
      ]
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#5E4E8C]" />,
      title: 'Custom Program Development',
      desc: 'We collaborate closely with your administrative and recreation teams to design structured, population-specific music programming frameworks tailored to your residents’ unique needs.',
      features: [
        'Customized daily and weekly music-based activity blueprints',
        'Playlist and receptive listening toolkits for dementia care wings',
        'Rhythmic exercise and motor activation routines for recreation staff'
      ]
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-[#4E9A68]" />,
      title: 'Staff Education & Training',
      desc: 'Equip your frontline healthcare aides, nurses, and activities coordinators with evidence-based strategies to safely integrate music into daily care routines.',
      features: [
        'Techniques to reduce resistance to care during bathing and transitions',
        'Using soothing acoustic pacing to alleviate sundowning and evening anxiety',
        'Interactive, hands-on staff workshops with practical guidance'
      ]
    }
  ];

  return (
    <div className="space-y-16 lg:space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#4E9A68]">
          <span className="px-2.5 py-0.5 rounded-full bg-[#EDF8F1] border border-[#4E9A68]/20">
            Institutional Solutions
          </span>
          <span aria-hidden="true">·</span>
          <span>Program Audits, Custom Design & Staff Training</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#1E1B2E] leading-tight text-balance">
          Consultation & Program Development
        </h1>
        <p className="text-lg text-[#4A475A] leading-relaxed">
          Empowering healthcare facilities, schools, and community organizations to optimize music-based care through professional expertise and evidence-based design.
        </p>
      </div>

      {/* Main Narrative Split Box */}
      <section className="bg-white rounded-3xl border border-[#E8E5F0] p-8 lg:p-12 shadow-sm space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5E4E8C]">
              Bridging the Clinical Gap
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E1B2E] leading-tight">
              Is your facility interested in music therapy, but not presently able to commit to contracting a therapist?
            </h2>
            <p className="text-sm text-[#4A475A] leading-relaxed">
              We understand that full clinical contracts may not always match every organization’s immediate staffing model or budget. That is why Arpeggio Music Therapy provides professional consultation services for facilities aiming to develop music-based programming, audit current music programs to ensure optimal therapeutic benefit, and train staff on how to effectively execute these programs.
            </p>
            <p className="text-sm text-[#4A475A] leading-relaxed">
              Our Certified Music Therapists lend over a decade of specialized clinical experience to help your organization maximize safety, dignity, and engagement for those in your care.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => {
                  onSelectInquiry('Requesting a Quote for Facility Consultation & Program Development.');
                  onNavigate('contact');
                }}
                className="px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#5E4E8C] hover:bg-[#4B3E72] shadow-sm transition-all whitespace-nowrap active:scale-95"
              >
                Request a Consultation Quote
              </button>

              <button
                type="button"
                onClick={() => onNavigate('music-therapy-101')}
                className="px-6 py-2.5 rounded-xl text-xs font-semibold text-[#1E1B2E] bg-white border border-[#E8E5F0] hover:bg-[#F5F3F9] transition-all whitespace-nowrap"
              >
                Review Music Therapy 101
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#FAF9FC] rounded-2xl border border-[#E8E5F0] p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Building className="w-5 h-5 text-[#5E4E8C]" />
              <h3 className="font-bold text-sm text-[#1E1B2E]">Ideal For Organizations Such As</h3>
            </div>
            <ul className="text-xs text-[#4A475A] space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#4E9A68]" />
                <span>Long-Term Care & Nursing Homes</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#4E9A68]" />
                <span>Memory Care & Assisted Living Facilities</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#4E9A68]" />
                <span>Special Education Schools & Autism Centers</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#4E9A68]" />
                <span>Community Day Centers & Senior Hubs</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#4E9A68]" />
                <span>Rehabilitation & Mental Health Residences</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Three Detailed Pillars */}
      <section className="space-y-6">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2E8CB8] block mb-1">
            Consultation Scope
          </span>
          <h2 className="text-3xl font-bold text-[#1E1B2E] tracking-tight">
            How We Partner With Your Leadership Team
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {consultationPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-white rounded-2xl border border-[#E8E5F0] p-8 flex flex-col justify-between hover:border-[#5E4E8C]/30 hover:shadow-sm transition-all"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FAF9FC] border border-[#E8E5F0] flex items-center justify-center mb-6">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold text-[#1E1B2E] mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#4A475A] leading-relaxed mb-6">
                  {pillar.desc}
                </p>

                <div className="space-y-2 pt-4 border-t border-[#F0EDF5]">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748B] block">
                    Key Deliverables
                  </span>
                  {pillar.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#1E1B2E]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#4E9A68] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
