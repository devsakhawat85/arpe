import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote, Heart, ShieldCheck, Sparkles } from 'lucide-react';

export interface TestimonialStory {
  id: string;
  quote: string;
  author: string;
  role: string;
  setting: string;
  location: string;
  domain: string;
  clinicalImpact: string;
}

export const CLIENT_STORIES: TestimonialStory[] = [
  {
    id: 'story-dementia-care',
    quote:
      'Watching our memory care residents light up and sing every lyric with the Arpeggio team is nothing short of profound. Music therapy has dramatically reduced afternoon agitation, sparked spontaneous joy, and given visiting families back the person they love.',
    author: 'Recreation & Care Coordinator',
    role: 'Memory & Long-Term Care Services',
    setting: 'Rocmaura Nursing Home Partner Facility',
    location: 'Saint John, NB',
    domain: 'Cognitive & Emotional Domain',
    clinicalImpact: 'Reduced agitation & sustained lucidity in elder memory care'
  },
  {
    id: 'story-autism-pediatric',
    quote:
      'For our son who is largely non-verbal, music therapy became his first true bridge of communication. The therapists at Arpeggio created an affirming, safe space where he could lead with his own rhythm. He went from feeling overwhelmed to eagerly anticipating every single session.',
    author: 'Parent of Youth Participant',
    role: 'Pediatric Autism Program',
    setting: 'Dragonfly Centre for Autism Partnership',
    location: 'Saint John, NB',
    domain: 'Social & Communication Domain',
    clinicalImpact: 'Non-verbal communication scaffolding & sensory regulation'
  },
  {
    id: 'story-psychiatry-inpatient',
    quote:
      'Arpeggio’s Certified Music Therapists bring an indispensable clinical dimension to our interdisciplinary mental health team. Patients experiencing acute psychiatric crises who find verbal dialogue intimidating often open up completely through songwriting and rhythmic grounding.',
    author: 'Mental Health Team Staff',
    role: 'Unit 4D-North (Inpatient Acute Psychiatry)',
    setting: 'Saint John Regional Hospital Partner Facility',
    location: 'Saint John, NB',
    domain: 'Psychiatric Recovery Domain',
    clinicalImpact: 'Emotional regulation & safe non-verbal psychiatric processing'
  },
  {
    id: 'story-stroke-rehab',
    quote:
      'Following my mother’s stroke, speaking felt exhausting and frightening. Working with Arpeggio using melodic intonation and gentle vocal exercises helped her regain both her cadence and her confidence. The compassion shown by her therapist was extraordinary.',
    author: 'Family Caregiver',
    role: 'Neurological Rehabilitation Client',
    setting: 'In-Home Private Clinical Services',
    location: 'Charlotte County, NB',
    domain: 'Neurological & Physical Domain',
    clinicalImpact: 'Speech recovery & expressive fluency post-stroke'
  },
  {
    id: 'story-facility-consultation',
    quote:
      'The facility program audit and staff training provided by Elizabeth Eldridge completely transformed our approach to daily resident care. Our care aides now understand acoustic pacing to ease difficult transitions and create lasting calm without pharmaceuticals.',
    author: 'Director of Residential Care',
    role: 'Facility Consultation & Staff Training',
    setting: 'Regional Senior Living Facility',
    location: 'Fredericton, NB',
    domain: 'Program Consultation Domain',
    clinicalImpact: 'Staff capacity building & acoustic environmental auditing'
  }
];

export const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [fadeState, setFadeState] = useState<'in' | 'out'>('in');
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = CLIENT_STORIES.length;

  const goToSlide = (newIndex: number) => {
    setFadeState('out');
    setTimeout(() => {
      setCurrentIndex((newIndex + total) % total);
      setFadeState('in');
    }, 200);
  };

  const handleNext = () => goToSlide(currentIndex + 1);
  const handlePrev = () => goToSlide(currentIndex - 1);

  // Auto-advance every 6.5s unless hovered or user is interacting
  useEffect(() => {
    if (isHovered) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      handleNext();
    }, 6500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, isHovered]);

  const current = CLIENT_STORIES[currentIndex];

  return (
    <div
      className="relative w-full bg-white rounded-3xl border border-[#E8E5F0] p-8 lg:p-14 shadow-sm overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="region"
      aria-label="Client Success Stories Carousel"
    >
      {/* Subtle background decorative sound wave accent */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#F5F3F9] via-[#FAF9FC] to-transparent rounded-bl-full pointer-events-none -z-0 opacity-70" />

      {/* Top Header Row with Indicator & Domain Tag */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-[#F0EDF5]">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#5E4E8C]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#5E4E8C]">
            Real Impact & Clinical Success Stories
          </span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span className="text-xs font-medium text-[#64748B]">
            New Brunswick Healthcare Partners & Families
          </span>
        </div>

        {/* Carousel slide counter */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-semibold text-[#1E1B2E] tabular-nums">
            0{currentIndex + 1} <span className="text-slate-400">/</span> 0{total}
          </span>
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="p-2 rounded-lg border border-[#E8E5F0] bg-white text-[#1E1B2E] hover:bg-[#F5F3F9] hover:text-[#5E4E8C] transition-all shadow-xs active:scale-95"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next testimonial"
              className="p-2 rounded-lg border border-[#E8E5F0] bg-white text-[#1E1B2E] hover:bg-[#F5F3F9] hover:text-[#5E4E8C] transition-all shadow-xs active:scale-95"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Testimonial Body with Smooth Opacity & Transform Fade */}
      <div className="relative z-10 py-8 lg:py-10 min-h-[260px] sm:min-h-[220px] flex flex-col justify-between">
        <div
          className={`transition-all duration-300 transform ${
            fadeState === 'in'
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-2'
          }`}
        >
          {/* Quote Mark */}
          <div className="mb-4">
            <Quote className="w-10 h-10 text-[#5E4E8C]/20" />
          </div>

          {/* Testimonial Quote */}
          <blockquote className="text-lg sm:text-xl lg:text-2xl font-medium text-[#1E1B2E] leading-relaxed text-balance">
            “{current.quote}”
          </blockquote>

          {/* Attributable Meta Footer */}
          <div className="mt-8 pt-6 border-t border-[#F0EDF5] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm text-[#1E1B2E]">
                  {current.author}
                </span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span className="text-xs text-[#5E4E8C] font-semibold">
                  {current.role}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#64748B]">
                <span>{current.setting}</span>
                <span aria-hidden="true">·</span>
                <span>{current.location}</span>
              </div>
            </div>

            {/* Clinical Impact Pill */}
            <div className="sm:text-right shrink-0">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#4E9A68] block mb-0.5">
                Observed Clinical Outcome
              </span>
              <span className="text-xs font-semibold text-[#1E1B2E] block">
                {current.clinicalImpact}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Navigation Pagination Track */}
      <div className="relative z-10 pt-4 flex items-center justify-between gap-4">
        {/* Progress dots / tabs */}
        <div className="flex items-center gap-2">
          {CLIENT_STORIES.map((story, idx) => (
            <button
              key={story.id}
              type="button"
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}: ${story.setting}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? 'w-8 bg-[#5E4E8C]'
                  : 'w-2 bg-[#E8E5F0] hover:bg-[#746DA5]/40'
              }`}
            />
          ))}
        </div>

        <span className="text-[11px] text-[#64748B]">
          Evidence-informed care across acute healthcare & community settings
        </span>
      </div>
    </div>
  );
};
