import React from 'react';
import { ShieldCheck, Heart, Award, Users, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { SITE_METADATA, CERTIFICATION_REQUIREMENTS, TEAM_MEMBERS } from '../data/siteData';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 lg:space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      {/* Editorial Header */}
      <div className="max-w-3xl space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#5E4E8C]">
          <span className="px-2.5 py-0.5 rounded-full bg-[#F5F3F9] border border-[#E8E5F0]">
            Our Story & Standards
          </span>
          <span aria-hidden="true">·</span>
          <span>Founded 2008 in Charlotte County, NB</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#1E1B2E] leading-tight text-balance">
          About Arpeggio Music Therapy
        </h1>
        <p className="text-lg text-[#4A475A] leading-relaxed">
          In music, an arpeggio is a chord made up of three notes played in succession to create a beautiful sound. We bring that same harmony to healthcare.
        </p>
      </div>

      {/* Origin Story Split Section */}
      <section className="bg-white rounded-3xl border border-[#E8E5F0] p-8 lg:p-12 shadow-sm space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5E4E8C]">
              The Meaning of Arpeggio
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E1B2E] leading-tight">
              From Rural St. George to New Brunswick’s Largest Music Therapy Provider
            </h2>
            <p className="text-sm text-[#4A475A] leading-relaxed">
              Arpeggio Music Therapy was founded in 2008 by Elizabeth Eldridge, a Certified Music Therapist based in St. George, a rural town in southern New Brunswick, Canada. Following her Bachelor degree at Acadia University and intensive clinical internship in Mental Health Recovery Services at St. Joseph’s Hospital in Hamilton, Ontario, Elizabeth returned home with a vision: to make clinical music therapy accessible across New Brunswick.
            </p>
            <p className="text-sm text-[#4A475A] leading-relaxed">
              Today, Arpeggio is the province’s largest music therapy service provider, delivering quality clinical care to private clients and within facilities throughout New Brunswick. Our expanding team of Certified Music Therapists delivers consultations, educational opportunities, and clinical services across the lifespan—from infancy through end-of-life palliative care.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate('meet-our-team')}
                className="px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#5E4E8C] hover:bg-[#4B3E72] shadow-sm transition-all whitespace-nowrap"
              >
                Meet Our Certified Team
              </button>
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="px-6 py-2.5 rounded-xl text-xs font-semibold text-[#1E1B2E] bg-white border border-[#E8E5F0] hover:bg-[#F5F3F9] whitespace-nowrap"
              >
                Contact Us
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#F5F3F9] border border-[#E8E5F0] shadow-sm">
              <img
                src="/assets/team_about_2.jpg"
                alt="Music therapist with acoustic guitar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-3 p-3 bg-[#FAF9FC] rounded-xl border border-[#E8E5F0] text-xs text-[#64748B]">
              Authentic Arpeggio clinician engaging clients through person-centred acoustic connection.
            </div>
          </div>
        </div>
      </section>

      {/* MTA Standards & Accreditation Criteria */}
      <section className="space-y-6">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2E8CB8] block mb-1">
            Professional Governance
          </span>
          <h2 className="text-3xl font-bold text-[#1E1B2E] tracking-tight">
            What Defines a Certified Music Therapist (MTA)?
          </h2>
          <p className="text-sm text-[#64748B] mt-2">
            All of Arpeggio Music Therapy’s clinical services are delivered exclusively by Certified Music Therapists who fulfill rigorous national requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATION_REQUIREMENTS.map((req, idx) => (
            <div
              key={req.title}
              className="bg-white rounded-2xl border border-[#E8E5F0] p-6 space-y-3 flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-mono font-bold text-[#5E4E8C] block mb-1">
                  Standard 0{idx + 1}
                </span>
                <h3 className="text-base font-bold text-[#1E1B2E]">
                  {req.title}
                </h3>
                <p className="text-xs text-[#4A475A] leading-relaxed mt-2">
                  {req.detail}
                </p>
              </div>
              <div className="pt-3 border-t border-[#F0EDF5] flex items-center gap-1.5 text-[11px] text-[#4E9A68] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Qualification</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sister Venture Box: Arpeggio Health Services */}
      <section className="bg-gradient-to-r from-[#FAF9FC] via-[#F5F3F9] to-[#FAF9FC] rounded-3xl border border-[#E8E5F0] p-8 lg:p-12 space-y-4">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#746DA5]">
            Corporate Education & Advocacy
          </span>
          <h3 className="text-2xl font-bold text-[#1E1B2E]">
            Arpeggio Health Services (Est. 2012)
          </h3>
          <p className="text-sm text-[#4A475A] leading-relaxed">
            In addition to directing Arpeggio Music Therapy, Elizabeth Eldridge founded <strong>Arpeggio Health Services</strong> in 2012. As a Certified Psychological Health & Safety Advisor, Elizabeth provides workplace mental health training, leadership consulting, and suicide alertness programs across Eastern Canada. She has personally trained over 4,000 participants in the Mental Health Commission of Canada’s Mental Health First Aid program.
          </p>
        </div>
      </section>

      {/* Team Teaser */}
      <section className="bg-white rounded-2xl border border-[#E8E5F0] p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-[#1E1B2E]">
            Ready to meet our clinicians?
          </h3>
          <p className="text-xs text-[#64748B] mt-1">
            Learn more about Elizabeth Eldridge, Catherine Kennedy, and Jasmine Michel.
          </p>
        </div>
        <button
          type="button"
          onClick={() => onNavigate('meet-our-team')}
          className="px-6 py-2.5 rounded-lg text-xs font-bold text-white bg-[#5E4E8C] hover:bg-[#4B3E72] shadow-sm whitespace-nowrap active:scale-95"
        >
          View Team Profiles
        </button>
      </section>
    </div>
  );
};
