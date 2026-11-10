import React from 'react';
import { ArrowRight, Brain, Heart, Activity, CheckCircle2, ShieldCheck, Sparkles, BookOpen } from 'lucide-react';
import { GoalExplorer } from '../components/GoalExplorer';
import { SITE_METADATA } from '../data/siteData';

interface WhatIsPageProps {
  onNavigate: (path: string) => void;
}

export const WhatIsMusicTherapyPage: React.FC<WhatIsPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 lg:space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      {/* Editorial Header */}
      <div className="max-w-3xl space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#5E4E8C]">
          <span className="px-2.5 py-0.5 rounded-full bg-[#F5F3F9] border border-[#E8E5F0]">
            Clinical Discipline
          </span>
          <span aria-hidden="true">·</span>
          <span>Canadian Association for Music Therapy (CAMT)</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#1E1B2E] leading-tight text-balance">
          What Is Music Therapy?
        </h1>
        <p className="text-lg text-[#4A475A] leading-relaxed">
          Music therapy is an established healthcare profession that uses evidence-informed music interventions within a therapeutic relationship to accomplish individualized clinical goals.
        </p>
      </div>

      {/* Distinction Section: Clinical Music Therapy vs Casual Listening */}
      <section className="bg-white rounded-3xl border border-[#E8E5F0] p-8 lg:p-12 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2E8CB8]">
              The Core Distinction
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E1B2E] leading-tight">
              Clinical Therapy vs. Recreational Listening
            </h2>
            <p className="text-sm text-[#4A475A] leading-relaxed">
              While listening to a favorite album or singing along with friends is inherently uplifting, clinical music therapy differs fundamentally in methodology, practitioner training, and intended clinical outcomes.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => onNavigate('clinical-music-therapy')}
                className="text-xs font-bold text-[#5E4E8C] hover:text-[#4B3E72] flex items-center gap-1.5 group"
              >
                <span>Read About Our Clinical Hospital & Facility Services</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#FAF9FC] p-6 rounded-2xl border border-[#E8E5F0] space-y-2">
              <span className="text-xs font-bold uppercase text-[#64748B]">
                Recreational Music
              </span>
              <ul className="text-xs text-[#4A475A] space-y-2 pt-2">
                <li className="flex items-start gap-2">
                  <span className="text-slate-400">•</span>
                  <span>General passive entertainment or background ambiance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400">•</span>
                  <span>Delivered by volunteers, performers, or digital playlists</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400">•</span>
                  <span>No standardized clinical assessment or healthcare goals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400">•</span>
                  <span>Outcomes are informal and temporary</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#F5F3F9] p-6 rounded-2xl border border-[#5E4E8C]/20 space-y-2">
              <span className="text-xs font-bold uppercase text-[#5E4E8C]">
                Clinical Music Therapy (Arpeggio)
              </span>
              <ul className="text-xs text-[#1E1B2E] space-y-2 pt-2 font-medium">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4E9A68] shrink-0 mt-0.5" />
                  <span>Delivered exclusively by Certified Music Therapists (MTA)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4E9A68] shrink-0 mt-0.5" />
                  <span>Structured assessment, treatment plans, and chart progress notes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4E9A68] shrink-0 mt-0.5" />
                  <span>Integrates into hospital and healthcare interdisciplinary teams</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4E9A68] shrink-0 mt-0.5" />
                  <span>Evidence-informed neural, cognitive, motor, and psychological outcomes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Science & Neurobiology of Music */}
      <section className="space-y-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#4E9A68] block mb-1">
            Neurobiology & Evidence
          </span>
          <h2 className="text-3xl font-bold text-[#1E1B2E] tracking-tight">
            How Music Accesses the Brain
          </h2>
          <p className="text-sm text-[#64748B] mt-2">
            Neuroscientists have demonstrated that processing music recruits almost every region of the human brain simultaneously.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl border border-[#E8E5F0] p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#EDF8F1] flex items-center justify-center text-[#4E9A68] font-bold text-sm">
              01
            </div>
            <h3 className="text-base font-bold text-[#1E1B2E]">
              Bypassing Damaged Pathways
            </h3>
            <p className="text-xs text-[#4A475A] leading-relaxed">
              In stroke survivors with expressive aphasia (left hemisphere language loss), music engages the right hemisphere to facilitate Melodic Intonation Therapy (MIT), enabling words to be sung when they cannot be spoken.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-[#E8E5F0] p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#E8F5FC] flex items-center justify-center text-[#2E8CB8] font-bold text-sm">
              02
            </div>
            <h3 className="text-base font-bold text-[#1E1B2E]">
              Deep Memory Retention
            </h3>
            <p className="text-xs text-[#4A475A] leading-relaxed">
              Musical memory resides deep in the medial prefrontal cortex—one of the last areas affected by Alzheimer’s disease and dementia. Familiar melodies frequently unlock lucidity, communication, and emotional recognition in non-verbal elders.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-[#E8E5F0] p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#F5F3F9] flex items-center justify-center text-[#5E4E8C] font-bold text-sm">
              03
            </div>
            <h3 className="text-base font-bold text-[#1E1B2E]">
              Auditory-Motor Entrainment
            </h3>
            <p className="text-xs text-[#4A475A] leading-relaxed">
              Rhythm triggers automatic motor responses in the brainstem and spinal cord. Certified therapists use Rhythmic Auditory Stimulation (RAS) to regulate gait, stride length, and cadence for individuals with Parkinson’s disease and cerebral palsy.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Goal & Domain Explorer */}
      <section className="space-y-6 pt-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#5E4E8C] block mb-1">
            Clinical Target Areas
          </span>
          <h2 className="text-3xl font-bold text-[#1E1B2E] tracking-tight">
            Explore the Five Clinical Domains
          </h2>
          <p className="text-sm text-[#64748B] mt-2">
            Click across the cognitive, emotional, physical, social, and spiritual domains to examine how our therapists structure measurable outcomes.
          </p>
        </div>

        <GoalExplorer onNavigateToContact={() => onNavigate('contact')} />
      </section>

      {/* Navigation Sub-Pillars Bottom Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
        <div className="bg-[#FAF9FC] rounded-2xl border border-[#E8E5F0] p-8 flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold uppercase text-[#2E8CB8] block mb-2">
              Foundations
            </span>
            <h3 className="text-xl font-bold text-[#1E1B2E] mb-2">
              Music Therapy 101
            </h3>
            <p className="text-xs text-[#4A475A] leading-relaxed mb-6">
              Learn about session structure, myths vs. facts, and how to prepare for an introductory consultation.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('music-therapy-101')}
            className="text-xs font-bold text-[#2E8CB8] flex items-center gap-1 group"
          >
            <span>Read Music Therapy 101 Guide</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="bg-[#FAF9FC] rounded-2xl border border-[#E8E5F0] p-8 flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold uppercase text-[#4E9A68] block mb-2">
              For Facilities & Care Providers
            </span>
            <h3 className="text-xl font-bold text-[#1E1B2E] mb-2">
              Consultation & Program Development
            </h3>
            <p className="text-xs text-[#4A475A] leading-relaxed mb-6">
              Empower your facility staff and optimize existing activity calendars with evidence-based music training.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('consultation-program-development')}
            className="text-xs font-bold text-[#4E9A68] flex items-center gap-1 group"
          >
            <span>Explore Consultation Options</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </section>
    </div>
  );
};
