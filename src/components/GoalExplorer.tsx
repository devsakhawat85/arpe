import React, { useState } from 'react';
import { Brain, Heart, Activity, Users, Sparkles, Check, ArrowRight } from 'lucide-react';
import { CLINICAL_DOMAINS, INTERVENTION_TECHNIQUES } from '../data/siteData';

export const GoalExplorer: React.FC<{ onNavigateToContact: () => void }> = ({ onNavigateToContact }) => {
  const [selectedDomain, setSelectedDomain] = useState<number>(0);
  const [selectedTechnique, setSelectedTechnique] = useState<number>(0);

  const getDomainIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain':
        return <Brain className="w-5 h-5 text-[#2E8CB8]" />;
      case 'Heart':
        return <Heart className="w-5 h-5 text-[#E11D48]" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-[#4E9A68]" />;
      case 'Users':
        return <Users className="w-5 h-5 text-[#5E4E8C]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#746DA5]" />;
    }
  };

  const domain = CLINICAL_DOMAINS[selectedDomain];

  return (
    <div className="w-full space-y-8">
      {/* Domain Navigation Tabs */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#F5F3F9] rounded-xl border border-[#E8E5F0]">
        {CLINICAL_DOMAINS.map((d, index) => {
          const isActive = selectedDomain === index;
          return (
            <button
              key={d.name}
              type="button"
              onClick={() => setSelectedDomain(index)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                isActive
                  ? 'bg-white text-[#1E1B2E] shadow-sm border border-[#E8E5F0]'
                  : 'text-[#64748B] hover:text-[#1E1B2E] hover:bg-white/50'
              }`}
            >
              <span>{d.name.replace(' Domain', '')}</span>
            </button>
          );
        })}
      </div>

      {/* Domain Detail Box */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-white rounded-2xl border border-[#E8E5F0] p-6 lg:p-8 shadow-sm">
        <div className="lg:col-span-5 space-y-4">
          <div className="w-12 h-12 rounded-xl bg-[#F5F3F9] flex items-center justify-center border border-[#E8E5F0]">
            {getDomainIcon(domain.icon)}
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#1E1B2E] tracking-tight mb-2">
              {domain.name}
            </h3>
            <p className="text-sm text-[#4A475A] leading-relaxed">
              {domain.description}
            </p>
          </div>

          <div className="pt-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5E4E8C] block mb-2">
              Clinical Assessment & Goal Setting
            </span>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Our Certified Music Therapists conduct comprehensive initial assessments and continuous re-evaluations to tailor functional outcomes for every client or group.
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 bg-[#FAF9FC] rounded-xl p-6 border border-[#E8E5F0] space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
            Measurable Clinical Goals in this Domain
          </h4>
          <ul className="space-y-3">
            {domain.goals.map((goal, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-[#1E1B2E]">
                <div className="w-5 h-5 rounded-full bg-[#EDF8F1] border border-[#66BA82]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-[#4E9A68]" />
                </div>
                <span className="font-medium">{goal}</span>
              </li>
            ))}
          </ul>

          <div className="pt-4 border-t border-[#E8E5F0] flex items-center justify-between">
            <span className="text-xs text-[#64748B]">Ready to discuss clinical targets?</span>
            <button
              type="button"
              onClick={onNavigateToContact}
              className="text-xs font-semibold text-[#5E4E8C] hover:text-[#4B3E72] flex items-center gap-1 group"
            >
              <span>Consult with our therapists</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Intervention Techniques Grid */}
      <div className="pt-4">
        <div className="mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2E8CB8] block mb-1">
            Clinical Methodologies
          </span>
          <h3 className="text-2xl font-bold text-[#1E1B2E] tracking-tight">
            What Actually Happens in a Session?
          </h3>
          <p className="text-sm text-[#64748B] mt-1 max-w-2xl">
            Because music therapy is individualized, techniques are adapted dynamically to each client’s unique strengths, physical tolerance, and cognitive profile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INTERVENTION_TECHNIQUES.map((tech, idx) => (
            <div
              key={tech.title}
              className="bg-white rounded-xl border border-[#E8E5F0] p-5 hover:border-[#5E4E8C]/40 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-mono text-[#5E4E8C] font-semibold block mb-1">
                  0{idx + 1}
                </span>
                <h4 className="text-base font-bold text-[#1E1B2E] mb-2 leading-snug">
                  {tech.title}
                </h4>
                <p className="text-xs text-[#4A475A] leading-relaxed mb-4">
                  {tech.description}
                </p>
              </div>
              <div className="pt-3 border-t border-[#F0EDF5]">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#4E9A68] block mb-0.5">
                  Clinical Therapeutic Benefit
                </span>
                <p className="text-[11px] text-[#64748B] italic">
                  {tech.clinicalImpact}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
