import React, { useState } from 'react';
import { GraduationCap, Award, CheckCircle2, FileText, Download, Mail, ArrowRight, Clock, Users, Building } from 'lucide-react';
import { INTERNSHIP_DETAILS, SITE_METADATA } from '../data/siteData';

interface InternshipPageProps {
  onNavigate: (path: string) => void;
  onSelectInquiry: (initialText: string) => void;
}

export const InternshipPage: React.FC<InternshipPageProps> = ({ onNavigate, onSelectInquiry }) => {
  const [downloadRequested, setDownloadRequested] = useState(false);

  const handleApplyNow = () => {
    onSelectInquiry('I am a 4th-year Bachelor of Music Therapy (BMT) student inquiring about completing a 1,000-Hour Supervised Clinical Internship with Arpeggio Music Therapy.');
    onNavigate('contact');
  };

  return (
    <div className="space-y-16 lg:space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#5E4E8C]">
          <span className="px-2.5 py-0.5 rounded-full bg-[#F5F3F9] border border-[#E8E5F0]">
            Clinical Education
          </span>
          <span aria-hidden="true">·</span>
          <span>1,000-Hour Supervised Placement</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#1E1B2E] leading-tight text-balance">
          Internship Opportunities
        </h1>
        <p className="text-lg text-[#4A475A] leading-relaxed">
          Comprehensive, flexible clinical supervision for fourth-year Bachelor of Music Therapy (BMT) students across Canada, certified under the Canadian Association for Music Therapy (CAMT).
        </p>
      </div>

      {/* Main Internship Narrative Card */}
      <section className="bg-white rounded-3xl border border-[#E8E5F0] p-8 lg:p-12 shadow-sm space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5E4E8C]">
              CAMT Accreditation Pathway
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E1B2E] leading-tight">
              Information for Prospective Interns
            </h2>
            <p className="text-sm text-[#4A475A] leading-relaxed">
              Following four years of academic work at the undergraduate level, the <strong>Canadian Association for Music Therapy (CAMT)</strong> requires new music therapists to complete a <strong>1,000-hour supervised internship</strong> under the mentorship of an MTA (Music Therapist Accredited).
            </p>
            <p className="text-sm text-[#4A475A] leading-relaxed">
              Arpeggio Music Therapy deeply values the importance of this foundational step in the training process. As a certified internship supervisor and former CAMT President, <strong>Elizabeth Eldridge</strong> welcomes applications from fourth-year BMT students studying at recognized Canadian universities.
            </p>
            <p className="text-sm text-[#4A475A] leading-relaxed">
              Our internship positions involve contracted services primarily in <strong>Saint John, New Brunswick</strong>. Positions are highly flexible and can be tailored to meet the needs of the intern regarding preferred client populations, timelines, and specific targets for academic, clinical, and professional growth.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={handleApplyNow}
                className="px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#5E4E8C] hover:bg-[#4B3E72] shadow-sm transition-all whitespace-nowrap active:scale-95"
              >
                Inquire & Submit Application
              </button>

              <button
                type="button"
                onClick={() => setDownloadRequested(true)}
                className="px-6 py-2.5 rounded-xl text-xs font-semibold text-[#1E1B2E] bg-white border border-[#E8E5F0] hover:bg-[#F5F3F9] transition-all flex items-center gap-2 whitespace-nowrap"
              >
                <Download className="w-3.5 h-3.5 text-[#5E4E8C]" />
                <span>Internship Guide & Checklist</span>
              </button>
            </div>

            {downloadRequested && (
              <div className="p-3 bg-[#EDF8F1] rounded-xl border border-emerald-200 text-xs text-[#1E1B2E] flex items-center justify-between">
                <span>The complete internship checklist is active below. Review the required documents.</span>
                <span className="font-bold text-[#4E9A68]">Ready to apply</span>
              </div>
            )}
          </div>

          <div className="lg:col-span-5 bg-[#FAF9FC] rounded-2xl border border-[#E8E5F0] p-6 space-y-4">
            <h3 className="font-bold text-sm text-[#1E1B2E] flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#5E4E8C]" />
              <span>Placement Highlights</span>
            </h3>
            <div className="space-y-3 text-xs text-[#4A475A]">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#2E8CB8] shrink-0 mt-0.5" />
                <span><strong>1,000 Hours:</strong> Satisfies full CAMT accreditation requirements</span>
              </div>
              <div className="flex items-start gap-2">
                <Award className="w-4 h-4 text-[#4E9A68] shrink-0 mt-0.5" />
                <span><strong>Certified Supervision:</strong> Mentored directly by Elizabeth Eldridge, MTA</span>
              </div>
              <div className="flex items-start gap-2">
                <Building className="w-4 h-4 text-[#5E4E8C] shrink-0 mt-0.5" />
                <span><strong>Diverse Sites:</strong> Acute hospital units, memory care, autism centres, and outpatient groups</span>
              </div>
              <div className="flex items-start gap-2">
                <Users className="w-4 h-4 text-[#746DA5] shrink-0 mt-0.5" />
                <span><strong>Tailored Curriculum:</strong> Customized to your specific clinical specialties and career goals</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Client Populations for Interns */}
      <section className="space-y-6">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2E8CB8] block mb-1">
            Clinical Hands-On Experience
          </span>
          <h2 className="text-3xl font-bold text-[#1E1B2E] tracking-tight">
            Client Populations You Will Serve
          </h2>
          <p className="text-sm text-[#64748B] mt-2">
            Interns gain real-world clinical experience across diverse, well-supported healthcare and community settings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl border border-[#E8E5F0] p-6 space-y-3">
            <span className="text-xs font-bold text-[#2E8CB8] uppercase tracking-wider block">
              Population 01
            </span>
            <h3 className="text-base font-bold text-[#1E1B2E]">
              Children & Adults with Special Needs
            </h3>
            <p className="text-xs text-[#4A475A] leading-relaxed">
              Including Autism Spectrum Disorder, developmental delays, and sensory communication challenges. Practicums feature active music-making, communication scaffolding, and neurodiversity affirmation.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-[#E8E5F0] p-6 space-y-3">
            <span className="text-xs font-bold text-[#5E4E8C] uppercase tracking-wider block">
              Population 02
            </span>
            <h3 className="text-base font-bold text-[#1E1B2E]">
              Adolescents & Adults with Mental Illness
            </h3>
            <p className="text-xs text-[#4A475A] leading-relaxed">
              Experience in acute inpatient psychiatry, psychiatric recovery services, and community mental health programs. Interventions focus on emotional regulation, reality orientation, and lyric analysis.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-[#E8E5F0] p-6 space-y-3">
            <span className="text-xs font-bold text-[#4E9A68] uppercase tracking-wider block">
              Population 03
            </span>
            <h3 className="text-base font-bold text-[#1E1B2E]">
              Geriatrics & Psychogeriatrics
            </h3>
            <p className="text-xs text-[#4A475A] leading-relaxed">
              Long-term care facilities, Alzheimer’s disease, and dementia care wings. Interns deliver validation therapy, memory recall interventions, and calming acoustic environments.
            </p>
          </div>
        </div>
      </section>

      {/* Application Checklist Box */}
      <section className="bg-white rounded-3xl border border-[#E8E5F0] p-8 lg:p-12 shadow-sm space-y-6">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#5E4E8C] block mb-1">
            Application Submission
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1E1B2E] tracking-tight">
            Required Application Package Materials
          </h2>
          <p className="text-sm text-[#64748B] mt-1">
            Fourth-year BMT candidates should assemble the following four items prior to submission:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {INTERNSHIP_DETAILS.applicationRequirements.map((req, idx) => (
            <div key={idx} className="flex items-start gap-3 p-4 bg-[#FAF9FC] rounded-xl border border-[#E8E5F0]">
              <div className="w-6 h-6 rounded-full bg-[#EDF8F1] flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4 text-[#4E9A68]" />
              </div>
              <span className="text-xs text-[#1E1B2E] font-medium leading-relaxed">{req}</span>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-[#F0EDF5] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#64748B]">
            Submit materials directly to: <strong className="text-[#1E1B2E]">{INTERNSHIP_DETAILS.contactEmail}</strong>
          </div>
          <button
            type="button"
            onClick={handleApplyNow}
            className="px-6 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#5E4E8C] hover:bg-[#4B3E72] shadow-sm whitespace-nowrap active:scale-95"
          >
            Start Internship Inquiry
          </button>
        </div>
      </section>
    </div>
  );
};
