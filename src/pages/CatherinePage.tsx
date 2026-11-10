import React from 'react';
import { ArrowLeft, Award, GraduationCap, MapPin, Music, Heart, ArrowRight, CheckCircle2 } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/siteData';

interface CatherinePageProps {
  onNavigate: (path: string) => void;
}

export const CatherinePage: React.FC<CatherinePageProps> = ({ onNavigate }) => {
  const member = TEAM_MEMBERS.find((m) => m.id === 'catherine-kennedy')!;

  return (
    <div className="space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
      {/* Back button */}
      <div>
        <button
          type="button"
          onClick={() => onNavigate('meet-our-team')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5E4E8C] hover:text-[#4B3E72] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Clinicians</span>
        </button>
      </div>

      {/* Main Profile Editorial Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Authentic Portrait & Quick Facts */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl border border-[#E8E5F0] overflow-hidden shadow-sm p-3">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[#F5F3F9]">
              <img
                src={member.photo}
                alt={member.name}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-4 space-y-1">
              <span className="text-xs font-semibold text-[#2E8CB8] uppercase tracking-wider block">
                Primary Clinician
              </span>
              <h2 className="text-xl font-bold text-[#1E1B2E]">
                {member.name}
              </h2>
              <p className="text-xs text-[#64748B]">
                {member.credentials} · Saint John Provider
              </p>
            </div>
          </div>

          <div className="bg-[#FAF9FC] rounded-2xl border border-[#E8E5F0] p-6 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
              Education & Clinical Practicum
            </h4>
            <div className="space-y-3 text-xs text-[#4A475A]">
              <div className="flex items-start gap-2.5">
                <GraduationCap className="w-4 h-4 text-[#5E4E8C] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-[#1E1B2E]">Bachelor of Music Therapy (BMT)</span>
                  <span className="text-slate-500">Acadia University (2019)</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Award className="w-4 h-4 text-[#2E8CB8] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-[#1E1B2E]">Clinical Internship</span>
                  <span className="text-slate-500">Arpeggio Music Therapy (Saint John, NB)</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Music className="w-4 h-4 text-[#4E9A68] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-[#1E1B2E]">Singer-Songwriter & Performer</span>
                  <span className="text-slate-500">Acoustic Guitar, Voice & Community Song</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Full In-Depth Biography */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#2E8CB8] mb-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>{member.location}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E1B2E] tracking-tight">
              {member.name}, <span className="text-[#2E8CB8] text-2xl sm:text-3xl font-bold">{member.credentials}</span>
            </h1>
            <p className="text-sm font-semibold text-[#64748B] mt-1">
              {member.role}
            </p>
          </div>

          {member.quote && (
            <div className="p-5 rounded-2xl bg-[#E8F5FC] border border-[#2E8CB8]/20 text-[#2E8CB8] text-sm italic font-medium leading-relaxed">
              “{member.quote}”
            </div>
          )}

          <div className="space-y-4 text-sm text-[#4A475A] leading-relaxed">
            {member.fullBioParagraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div className="space-y-3 pt-4 border-t border-[#F0EDF5]">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1E1B2E]">
              Specialties & Clinical Populations
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {member.specialties.map((spec, i) => (
                <div key={i} className="flex items-center gap-2 p-2.5 rounded-lg bg-[#FAF9FC] border border-[#E8E5F0] text-[#1E1B2E]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4E9A68] shrink-0" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-r from-[#FAF9FC] to-[#E8F5FC] border border-[#E8E5F0] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-[#2E8CB8] block">Saint John Service Inquiries</span>
              <p className="text-xs text-[#64748B]">Schedule clinical music therapy with Catherine</p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#5E4E8C] hover:bg-[#4B3E72] shadow-sm whitespace-nowrap active:scale-95"
            >
              Contact Saint John Office
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
