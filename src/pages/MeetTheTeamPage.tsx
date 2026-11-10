import React from 'react';
import { ArrowRight, MapPin, Award, Music, BookOpen, ChevronRight } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/siteData';

interface MeetTheTeamProps {
  onNavigate: (path: string) => void;
}

export const MeetTheTeamPage: React.FC<MeetTheTeamProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 lg:space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#5E4E8C]">
          <span className="px-2.5 py-0.5 rounded-full bg-[#F5F3F9] border border-[#E8E5F0]">
            Our Fantastic Team
          </span>
          <span aria-hidden="true">·</span>
          <span>Certified Music Therapists (MTA)</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#1E1B2E] leading-tight text-balance">
          Meet Our Clinicians
        </h1>
        <p className="text-lg text-[#4A475A] leading-relaxed">
          Every clinical hour at Arpeggio Music Therapy is delivered by university-educated, accredited Music Therapists passionate about human connection, evidence-based care, and creative empowerment.
        </p>
      </div>

      {/* Team Cards Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TEAM_MEMBERS.map((member) => (
          <div
            key={member.id}
            onClick={() => onNavigate(member.id)}
            className="bg-white rounded-3xl border border-[#E8E5F0] overflow-hidden hover:border-[#5E4E8C]/40 hover:shadow-xl transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              {/* Photo Frame */}
              <div className="relative aspect-[4/5] bg-[#F5F3F9] overflow-hidden">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#5E4E8C] shadow-sm">
                  {member.credentials}
                </div>
              </div>

              {/* Bio & Details */}
              <div className="p-6 space-y-4">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-medium text-[#2E8CB8] mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{member.location}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#1E1B2E] group-hover:text-[#5E4E8C] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs text-[#64748B] font-semibold mt-0.5">
                    {member.role}
                  </p>
                </div>

                <p className="text-xs text-[#4A475A] leading-relaxed line-clamp-4">
                  {member.shortBio}
                </p>

                {/* Specialties tags */}
                <div className="pt-2 border-t border-[#F0EDF5]">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748B] block mb-1.5">
                    Key Clinical Areas
                  </span>
                  <div className="flex flex-wrap gap-1 text-[11px] text-[#4A475A]">
                    {member.specialties.slice(0, 3).map((spec, i) => (
                      <span key={i} className="bg-[#FAF9FC] border border-[#E8E5F0] px-2 py-0.5 rounded text-[11px]">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Card CTA */}
            <div className="px-6 pb-6 pt-2 border-t border-[#F0EDF5] flex items-center justify-between text-xs font-semibold text-[#5E4E8C] group-hover:text-[#4B3E72]">
              <span>Read Full Profile & Bio</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
            </div>
          </div>
        ))}
      </section>

      {/* Quality of Care Statement */}
      <section className="bg-[#FAF9FC] rounded-2xl border border-[#E8E5F0] p-8 text-center max-w-3xl mx-auto space-y-3">
        <h3 className="text-xl font-bold text-[#1E1B2E]">
          Highest Standard of Clinical Care in New Brunswick
        </h3>
        <p className="text-xs text-[#64748B] leading-relaxed">
          Our clinicians maintain active membership in good standing with the Canadian Association for Music Therapy (CAMT), participate in regular peer consultation, and carry continuous professional liability coverage.
        </p>
      </section>
    </div>
  );
};
