import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Heart, Users, Brain, Calendar, ChevronRight } from 'lucide-react';
import { SITE_METADATA, TEAM_MEMBERS, WHO_WE_SERVE_POPULATIONS } from '../data/siteData';
import { SoundWaveHero } from '../components/SoundWaveHero';
import { ServiceEstimator } from '../components/ServiceEstimator';
import { PartnerFacilities } from '../components/PartnerFacilities';
import { TestimonialCarousel } from '../components/TestimonialCarousel';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onSelectInquiry: (initialText: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectInquiry }) => {
  return (
    <div className="space-y-20 lg:space-y-28">
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 lg:pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Text & Value Proposition */}
            <div className="lg:col-span-7 space-y-6">
              {/* Trust Badge / Origin Kicker */}
              <div className="flex items-center gap-2 text-xs font-semibold text-[#5E4E8C]">
                <span className="px-2.5 py-0.5 rounded-full bg-[#F5F3F9] border border-[#E8E5F0]">
                  Est. 2008 in Charlotte County, NB
                </span>
                <span aria-hidden="true">·</span>
                <span className="text-[#64748B]">New Brunswick’s Largest Practice</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1E1B2E] leading-[1.1] text-balance">
                A New Direction in <span className="text-[#5E4E8C]">Health Care</span>.
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-[#4A475A] leading-relaxed max-w-2xl">
                Arpeggio Music Therapy delivers evidence-informed clinical music therapy, healthcare facility consultation, and accredited training throughout New Brunswick. Directed by Certified Music Therapist Elizabeth Eldridge, our team transforms sound and human connection into clinical healing.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('what-is-music-therapy')}
                  className="px-6 py-3 rounded-xl text-sm font-semibold text-white bg-[#5E4E8C] hover:bg-[#4B3E72] active:scale-95 transition-all shadow-sm flex items-center gap-2 group whitespace-nowrap"
                >
                  <span>Learn About Music Therapy</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3 rounded-xl text-sm font-semibold text-[#1E1B2E] bg-white border border-[#E8E5F0] hover:bg-[#F5F3F9] hover:border-[#5E4E8C]/30 active:scale-95 transition-all shadow-sm whitespace-nowrap"
                >
                  Contact Arpeggio
                </button>
              </div>

              {/* Real Trust Proof Stats Bar */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#F0EDF5]">
                <div>
                  <div className="text-2xl lg:text-3xl font-extrabold text-[#5E4E8C] font-mono tabular-nums">
                    2008
                  </div>
                  <div className="text-xs text-[#64748B] mt-0.5">Founded in New Brunswick</div>
                </div>
                <div>
                  <div className="text-2xl lg:text-3xl font-extrabold text-[#2E8CB8] font-mono tabular-nums">
                    1,000+
                  </div>
                  <div className="text-xs text-[#64748B] mt-0.5">Clinical Hours Supervised</div>
                </div>
                <div>
                  <div className="text-2xl lg:text-3xl font-extrabold text-[#4E9A68] font-mono tabular-nums">
                    100%
                  </div>
                  <div className="text-xs text-[#64748B] mt-0.5">MTA / CAMT Certified</div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Asset & Identity */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative subtle backdrop halo */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-[#5E4E8C]/15 via-[#2E8CB8]/10 to-[#4E9A68]/15 rounded-3xl blur-xl -z-10" />

                {/* Main Card with Elizabeth Eldridge by the piano */}
                <div className="bg-white rounded-3xl border border-[#E8E5F0] overflow-hidden shadow-lg p-2">
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#F5F3F9]">
                    <img
                      src="/assets/team_about_1.jpg"
                      alt="Elizabeth Eldridge, Certified Music Therapist and Founder seated by the clinical piano"
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E1B2E]/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                      <span className="text-[11px] font-semibold text-[#51B8E8] uppercase tracking-wider">
                        Founder & Director
                      </span>
                      <h3 className="text-xl font-bold text-white">
                        Elizabeth Eldridge
                      </h3>
                      <p className="text-xs text-slate-200 mt-1">
                        BMT, MTA, RMT · Certified Music Therapist & Speaker
                      </p>
                    </div>
                  </div>

                  {/* Quote underneath photo */}
                  <div className="p-4 bg-[#FAF9FC] rounded-xl mt-2 flex items-center justify-between text-xs text-[#4A475A]">
                    <span className="italic">“A chord of three notes creating harmony.”</span>
                    <button
                      type="button"
                      onClick={() => onNavigate('elizabeth-eldridge')}
                      className="font-semibold text-[#5E4E8C] hover:underline whitespace-nowrap ml-2"
                    >
                      Read Bio →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ACOUSTIC HARMONICS INTERACTIVE WAVEFORM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SoundWaveHero />
      </section>

      {/* 3. INTRODUCTION / VALUE PROPOSITION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white rounded-3xl border border-[#E8E5F0] p-8 lg:p-12 shadow-sm">
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5E4E8C]">
              What We Stand For
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E1B2E] tracking-tight leading-tight">
              Music is more than entertainment. In professional hands, it is restorative clinical medicine.
            </h2>
            <div className="w-12 h-1 bg-[#5E4E8C] rounded-full mt-2" />
          </div>

          <div className="lg:col-span-7 space-y-4 text-sm text-[#4A475A] leading-relaxed">
            <p>
              In music, an <strong className="text-[#1E1B2E] font-semibold">arpeggio</strong> is a chord made of three notes played in succession to create a beautiful, cohesive sound. Founded in St. George in 2008 by Certified Music Therapist Elizabeth Eldridge, Arpeggio Music Therapy brings harmony to individuals, care facilities, and families across New Brunswick.
            </p>
            <p>
              Today, Arpeggio is the province’s largest music therapy service provider, delivering personalized clinical care within acute hospitals, autism centres, memory care homes, and private residences. Clients, residents, families, and staff witness the transformative benefits of our accredited team every single week.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-[#1E1B2E] font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#4E9A68]" />
                Evidence-Based Practice
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#4E9A68]" />
                Person-Centred Goals
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#4E9A68]" />
                Zero Musical Experience Required
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THREE CORE PILLARS / SERVICES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2E8CB8] block mb-1">
            Our Core Pathways
          </span>
          <h2 className="text-3xl font-bold text-[#1E1B2E] tracking-tight">
            How Arpeggio Serves Our Community
          </h2>
          <p className="text-sm text-[#64748B] mt-2">
            Structured healthcare delivery, educational foundations, and organizational consultation tailored for individuals and institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Music Therapy 101 */}
          <div className="bg-white rounded-2xl border border-[#E8E5F0] p-8 hover:border-[#2E8CB8]/40 hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#E8F5FC] text-[#2E8CB8] flex items-center justify-center font-bold text-lg mb-6 border border-[#2E8CB8]/20 group-hover:scale-105 transition-transform">
                101
              </div>
              <span className="text-xs font-semibold text-[#2E8CB8] uppercase tracking-wider">
                Education & Demystification
              </span>
              <h3 className="text-xl font-bold text-[#1E1B2E] mt-1 mb-3">
                Music Therapy 101
              </h3>
              <p className="text-sm text-[#4A475A] leading-relaxed mb-6">
                What actually is music therapy, and how does it work? We dispel misconceptions, clarify how music alters neurology and physiology, and explain who benefits.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('music-therapy-101')}
              className="pt-4 border-t border-[#F0EDF5] text-xs font-bold text-[#2E8CB8] flex items-center justify-between group-hover:text-[#1E7098] transition-colors"
            >
              <span>Explore Fundamentals</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Card 2: Clinical Music Therapy */}
          <div className="bg-white rounded-2xl border border-[#E8E5F0] p-8 hover:border-[#5E4E8C]/40 hover:shadow-md transition-all flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#F5F3F9] rounded-bl-full -z-0 opacity-50" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-[#F5F3F9] text-[#5E4E8C] flex items-center justify-center font-bold text-lg mb-6 border border-[#5E4E8C]/20 group-hover:scale-105 transition-transform">
                <Heart className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold text-[#5E4E8C] uppercase tracking-wider">
                Direct Healthcare Service
              </span>
              <h3 className="text-xl font-bold text-[#1E1B2E] mt-1 mb-3">
                Clinical Music Therapy
              </h3>
              <p className="text-sm text-[#4A475A] leading-relaxed mb-6">
                Contracted clinical services starting at just two hours per week for facilities, hospitals, and private clients. Assessment, individualized treatment planning, and tangible functional outcomes.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('clinical-music-therapy')}
              className="pt-4 border-t border-[#F0EDF5] text-xs font-bold text-[#5E4E8C] flex items-center justify-between group-hover:text-[#4B3E72] transition-colors relative z-10"
            >
              <span>View Clinical Contracts</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Card 3: Consultation & Program Development */}
          <div className="bg-white rounded-2xl border border-[#E8E5F0] p-8 hover:border-[#4E9A68]/40 hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#EDF8F1] text-[#4E9A68] flex items-center justify-center font-bold text-lg mb-6 border border-[#4E9A68]/20 group-hover:scale-105 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold text-[#4E9A68] uppercase tracking-wider">
                Organizational Support
              </span>
              <h3 className="text-xl font-bold text-[#1E1B2E] mt-1 mb-3">
                Consultation & Programs
              </h3>
              <p className="text-sm text-[#4A475A] leading-relaxed mb-6">
                For facilities aiming to develop music programming, audit existing activities for therapeutic safety, or train internal staff on how to effectively execute music-based care.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('consultation-program-development')}
              className="pt-4 border-t border-[#F0EDF5] text-xs font-bold text-[#4E9A68] flex items-center justify-between group-hover:text-[#3B7B50] transition-colors"
            >
              <span>Consultation Services</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. WHO WE SERVE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF9FC] rounded-3xl border border-[#E8E5F0] p-8 lg:p-12">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5E4E8C] block mb-1">
              Diverse Client Populations
            </span>
            <h2 className="text-3xl font-bold text-[#1E1B2E] tracking-tight">
              Who We Serve Across the Lifespan
            </h2>
            <p className="text-sm text-[#64748B] mt-2">
              Our Certified Music Therapists work in both one-on-one and group settings, tailoring every intervention to the developmental and medical profile of each participant.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHO_WE_SERVE_POPULATIONS.map((pop, idx) => (
              <div
                key={pop.title}
                className="bg-white rounded-xl border border-[#E8E5F0] p-5 hover:border-[#5E4E8C]/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-mono text-[#5E4E8C] font-semibold block mb-1">
                    0{idx + 1}
                  </span>
                  <h3 className="text-sm font-bold text-[#1E1B2E] mb-2 leading-snug">
                    {pop.title}
                  </h3>
                  <p className="text-xs text-[#4A475A] leading-relaxed mb-4">
                    {pop.desc}
                  </p>
                </div>
                <div className="pt-2 border-t border-[#F0EDF5] text-[10px] text-[#64748B]">
                  <span className="font-semibold text-[#5E4E8C]">Setting:</span> {pop.context}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-[#E8E5F0] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#64748B] text-center sm:text-left">
              Have questions about a specific diagnosis or client requirement?
            </p>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="text-xs font-semibold text-[#5E4E8C] hover:text-[#4B3E72] flex items-center gap-1 group"
            >
              <span>Speak with a Certified Therapist</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 6. MEET THE TEAM TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#5E4E8C] block mb-1">
              Accredited Clinical Practitioners
            </span>
            <h2 className="text-3xl font-bold text-[#1E1B2E] tracking-tight">
              Meet Our Certified Therapists
            </h2>
            <p className="text-sm text-[#64748B] mt-1 max-w-xl">
              All of Arpeggio Music Therapy’s clinical services are delivered by university-trained, credentialed Music Therapists (MTA).
            </p>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('meet-our-team')}
            className="text-xs font-bold text-[#5E4E8C] hover:text-[#4B3E72] flex items-center gap-1.5 group shrink-0"
          >
            <span>View All Profiles & Credentials</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              onClick={() => onNavigate(member.id)}
              className="bg-white rounded-2xl border border-[#E8E5F0] overflow-hidden hover:border-[#5E4E8C]/40 hover:shadow-lg transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[4/5] bg-[#F5F3F9] overflow-hidden">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-[#5E4E8C] shadow-sm">
                    {member.credentials}
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-[11px] font-semibold text-[#2E8CB8] block mb-1">
                    {member.location}
                  </span>
                  <h3 className="text-xl font-bold text-[#1E1B2E] group-hover:text-[#5E4E8C] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs text-[#64748B] font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-xs text-[#4A475A] leading-relaxed line-clamp-3">
                    {member.shortBio}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-[#F0EDF5] flex items-center justify-between text-xs font-semibold text-[#5E4E8C]">
                <span>Read Full Biography</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. PARTNER FACILITIES SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PartnerFacilities onBookInfoSession={() => onNavigate('contact')} />
      </section>

      {/* 8. CLIENT & FACILITY SUCCESS STORIES (FADING CAROUSEL) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TestimonialCarousel />
      </section>

      {/* 9. INTERACTIVE SERVICE ESTIMATOR / INQUIRY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServiceEstimator
          onSelectOption={(text) => {
            onSelectInquiry(text);
            onNavigate('contact');
          }}
        />
      </section>

      {/* 9. BOTTOM CONVERSION CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-tr from-[#1A1528] via-[#2A233D] to-[#1E1B2E] text-white rounded-3xl p-8 lg:p-14 text-center relative overflow-hidden shadow-xl">
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#51B8E8]">
              Join the Movement in Health Care
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Ready to introduce music therapy to your facility or loved one?
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Contracts start at just two hours per week. Get in touch with Elizabeth Eldridge and our certified clinical team for scheduling, consultation, and pricing details.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="px-6 py-3 rounded-xl text-xs font-bold text-white bg-[#5E4E8C] hover:bg-[#746DA5] transition-all shadow-md active:scale-95 whitespace-nowrap"
              >
                Request Consultation / Info Session
              </button>
              <a
                href={`tel:${SITE_METADATA.phone.replace(/[^0-9+]/g, '')}`}
                className="px-6 py-3 rounded-xl text-xs font-semibold text-white bg-white/10 hover:bg-white/20 transition-all border border-white/20 whitespace-nowrap"
              >
                Call: {SITE_METADATA.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
