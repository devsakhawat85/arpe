import React from 'react';
import { ShieldCheck, Heart, Hospital, Users, CheckCircle, ArrowRight, Clock, MapPin, Calendar } from 'lucide-react';
import { PartnerFacilities } from '../components/PartnerFacilities';
import { SITE_METADATA } from '../data/siteData';

interface ClinicalPageProps {
  onNavigate: (path: string) => void;
  onSelectInquiry: (initialText: string) => void;
}

export const ClinicalMusicTherapyPage: React.FC<ClinicalPageProps> = ({ onNavigate, onSelectInquiry }) => {
  return (
    <div className="space-y-16 lg:space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#5E4E8C]">
          <span className="px-2.5 py-0.5 rounded-full bg-[#F5F3F9] border border-[#E8E5F0]">
            Facility & Clinical Practice
          </span>
          <span aria-hidden="true">·</span>
          <span>Contracts From 2 Hours / Week</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#1E1B2E] leading-tight text-balance">
          Clinical Music Therapy
        </h1>
        <p className="text-lg text-[#4A475A] leading-relaxed">
          High-quality, evidence-informed clinical music therapy services delivered directly within hospitals, nursing homes, specialized centers, and community programs throughout New Brunswick.
        </p>
      </div>

      {/* Overview Card with Editorial Layout */}
      <section className="bg-white rounded-3xl border border-[#E8E5F0] p-8 lg:p-12 shadow-sm space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5E4E8C]">
              Join the Movement
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E1B2E] leading-tight">
              Forward-Thinking Facilities Choose Arpeggio
            </h2>
            <p className="text-sm text-[#4A475A] leading-relaxed">
              Arpeggio Music Therapy is fortunate to have forged lasting clinical partnerships with a host of wonderfully supportive, forward-thinking organizations across New Brunswick. Clients, residents, families, and healthcare staff are witnessing the profound clinical benefits of employing our professional, personable, and highly trained Accredited Music Therapists.
            </p>
            <p className="text-sm text-[#4A475A] leading-relaxed">
              We pride ourselves on providing our contractors with the highest quality services. Contracts start at <strong className="text-[#5E4E8C] font-semibold">just two hours per week</strong> for your facility’s convenience, scaling to full-day or multi-day programs as your resident or client needs dictate.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => {
                  onSelectInquiry('Inquiring about Clinical Music Therapy Contract for our facility.');
                  onNavigate('contact');
                }}
                className="px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#5E4E8C] hover:bg-[#4B3E72] shadow-sm transition-all whitespace-nowrap active:scale-95"
              >
                Inquire About Facility Contracts
              </button>

              <button
                type="button"
                onClick={() => {
                  onSelectInquiry('Requesting a FREE Music Therapy Information Session for our facility staff.');
                  onNavigate('contact');
                }}
                className="px-6 py-2.5 rounded-xl text-xs font-semibold text-[#1E1B2E] bg-white border border-[#E8E5F0] hover:bg-[#F5F3F9] transition-all whitespace-nowrap"
              >
                Book Free Information Session
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#FAF9FC] rounded-2xl border border-[#E8E5F0] p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#2E8CB8]" />
              <h3 className="font-bold text-sm text-[#1E1B2E]">Flexible Contract Models</h3>
            </div>
            <ul className="text-xs text-[#4A475A] space-y-2.5">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#4E9A68] shrink-0 mt-0.5" />
                <span><strong>Introductory:</strong> 2 to 4 hours weekly for specialized units or memory care wings</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#4E9A68] shrink-0 mt-0.5" />
                <span><strong>Comprehensive:</strong> Half-day or full-day clinical coverage integrating group & individual sessions</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#4E9A68] shrink-0 mt-0.5" />
                <span><strong>Interdisciplinary Charting:</strong> Documenting functional milestones directly into patient health records</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#4E9A68] shrink-0 mt-0.5" />
                <span><strong>Private Individual Care:</strong> Bedside and in-home sessions for clients across New Brunswick</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Facilities Where We're Working */}
      <section className="space-y-6">
        <PartnerFacilities onBookInfoSession={() => onNavigate('contact')} />
      </section>

      {/* Clinical Standards Box */}
      <section className="bg-gradient-to-r from-[#F5F3F9] to-[#FAF9FC] rounded-3xl border border-[#E8E5F0] p-8 lg:p-12 space-y-6">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#5E4E8C] block mb-1">
            Clinical Governance & Rigor
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1E1B2E] tracking-tight">
            Certified Music Therapists (MTA)
          </h2>
          <p className="text-sm text-[#64748B] mt-2">
            Every clinical hour delivered through Arpeggio Music Therapy is led by certified professionals who meet national standards of competence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="bg-white p-5 rounded-2xl border border-[#E8E5F0] space-y-2">
            <span className="text-xs font-bold text-[#5E4E8C] block">MTA Credential</span>
            <p className="text-xs text-[#4A475A] leading-relaxed">
              Signifies completion of an academic Bachelor of Music Therapy degree, 1,000 hours of supervised clinical internship, and the standardized Board Certification exam.
            </p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-[#E8E5F0] space-y-2">
            <span className="text-xs font-bold text-[#2E8CB8] block">CAMT Membership</span>
            <p className="text-xs text-[#4A475A] leading-relaxed">
              Maintains active good standing with the Canadian Association for Music Therapists, ongoing continuing education, and adherence to ethical guidelines.
            </p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-[#E8E5F0] space-y-2">
            <span className="text-xs font-bold text-[#4E9A68] block">Full Liability Coverage</span>
            <p className="text-xs text-[#4A475A] leading-relaxed">
              Comprehensive professional liability insurance maintained continuously for complete institutional confidence.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
