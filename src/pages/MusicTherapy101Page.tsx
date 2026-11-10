import React, { useState } from 'react';
import { HelpCircle, Check, X, ArrowRight, Sparkles, BookOpen, ChevronDown } from 'lucide-react';

interface MusicTherapy101Props {
  onNavigate: (path: string) => void;
}

export const MusicTherapy101Page: React.FC<MusicTherapy101Props> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const myths = [
    {
      myth: '“I don’t play any instruments or sing well, so music therapy won’t work for me.”',
      fact: 'Zero musical background or talent is required. The Certified Music Therapist provides the musical framework. Clients can simply tap a drum, hum, choose lyrics, or listen receptively. The focus is on therapeutic growth and human connection, not aesthetic performance.'
    },
    {
      myth: '“Music therapy is basically just having someone perform songs in the lounge.”',
      fact: 'Music therapy is a credentialed clinical health service—not musical entertainment. Certified Music Therapists (MTA) conduct thorough assessments, formulate measurable goals (e.g. reducing agitation, rehabilitating speech, increasing range of motion), and document progress in clinical charts.'
    },
    {
      myth: '“Playing a pre-recorded relaxation playlist is the same thing.”',
      fact: 'Pre-recorded music is static. A live therapist dynamically shifts tempo, key, volume, and phrasing in real-time response to the client’s breathing, neurological state, and emotional cues. The clinical relationship is the core vehicle of healing.'
    },
    {
      myth: '“Music therapy is only for children with autism or elderly dementia patients.”',
      fact: 'While Arpeggio provides extensive care in autism and geriatrics, our team also works across acute inpatient psychiatry (e.g., Saint John Regional Hospital), stroke neuro-rehabilitation, at-risk youth, perinatal mental health, and end-of-life palliative care.'
    }
  ];

  const sessionSteps = [
    {
      step: '01',
      title: 'Initial Assessment & Intake',
      desc: 'The Certified Music Therapist assesses the client’s medical history, motor capabilities, cognitive processing, communication style, and musical preferences.'
    },
    {
      step: '02',
      title: 'Collaborative Goal Formulation',
      desc: 'Clear, individualized clinical goals are defined in collaboration with the client, family, or healthcare interdisciplinary team (physicians, nurses, occupational therapists).'
    },
    {
      step: '03',
      title: 'Active & Receptive Interventions',
      desc: 'Sessions combine active instrument exploration, singing, movement to rhythm, songwriting, or guided music listening tailored to that day’s physical and emotional status.'
    },
    {
      step: '04',
      title: 'Documentation & Ongoing Evaluation',
      desc: 'Therapists document session notes, evaluate progress toward functional goals, and adapt treatment plans on an ongoing basis.'
    }
  ];

  const faqs = [
    {
      q: 'Where do music therapy sessions take place?',
      a: 'Arpeggio delivers clinical services directly within healthcare facilities, hospitals, nursing homes, schools, community centres, and in private homes throughout southern and central New Brunswick.'
    },
    {
      q: 'How long is a typical music therapy session?',
      a: 'Sessions typically range from 30 to 60 minutes depending on the client’s endurance, developmental stage, and attention span. Facility contracts start at as little as two hours per week.'
    },
    {
      q: 'What credentials does an Arpeggio therapist hold?',
      a: 'All therapists hold the MTA (Music Therapist Accredited) credential, which requires a minimum four-year Bachelor of Music Therapy (BMT), a 1,000-hour supervised clinical internship, passing the standardized Board Certification exam, and strict adherence to the CAMT Code of Ethics.'
    },
    {
      q: 'Is music therapy covered by health insurance in Canada?',
      a: 'Many extended health care plans, employee benefit programs, and specialized government funding sources (e.g. disability support services, Jordan’s Principle, or auto injury compensation) cover clinical music therapy delivered by an MTA. We provide detailed receipts for reimbursement.'
    }
  ];

  return (
    <div className="space-y-16 lg:space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#2E8CB8]">
          <span className="px-2.5 py-0.5 rounded-full bg-[#E8F5FC] border border-[#2E8CB8]/20">
            Foundations & Essentials
          </span>
          <span aria-hidden="true">·</span>
          <span>Demystifying Clinical Care</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#1E1B2E] leading-tight text-balance">
          Music Therapy 101
        </h1>
        <p className="text-lg text-[#4A475A] leading-relaxed">
          Everything you need to understand how clinical music therapy functions, common misconceptions debunked, and what to expect during a session.
        </p>
      </div>

      {/* Myths vs Facts Section */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#5E4E8C] block mb-1">
            Setting the Record Straight
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1E1B2E] tracking-tight">
            Common Misconceptions vs. Clinical Reality
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {myths.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#E8E5F0] p-6 space-y-4 shadow-sm hover:border-[#5E4E8C]/30 transition-all"
            >
              <div className="flex items-start gap-3 p-3 bg-[#FFF5F5] rounded-xl border border-red-100 text-xs text-red-900">
                <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span className="font-semibold">{item.myth}</span>
              </div>

              <div className="flex items-start gap-3 p-3 bg-[#EDF8F1] rounded-xl border border-emerald-100 text-xs text-[#1E1B2E]">
                <Check className="w-4 h-4 text-[#4E9A68] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{item.fact}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What Happens in a Clinical Session */}
      <section className="bg-white rounded-3xl border border-[#E8E5F0] p-8 lg:p-12 shadow-sm space-y-10">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2E8CB8] block mb-1">
            The Clinical Process
          </span>
          <h2 className="text-3xl font-bold text-[#1E1B2E] tracking-tight">
            How a Music Therapy Program Unfolds
          </h2>
          <p className="text-sm text-[#64748B] mt-2">
            From the initial consultation to measurable clinical milestones, our structured four-step methodology ensures dignified, evidence-informed care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sessionSteps.map((step) => (
            <div
              key={step.step}
              className="bg-[#FAF9FC] rounded-2xl border border-[#E8E5F0] p-6 space-y-3 relative flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl font-extrabold text-[#5E4E8C] font-mono block mb-2">
                  {step.step}
                </span>
                <h3 className="text-base font-bold text-[#1E1B2E] leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-[#4A475A] leading-relaxed mt-2">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="space-y-6 max-w-3xl mx-auto">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#5E4E8C] block mb-1">
            Questions & Answers
          </span>
          <h2 className="text-3xl font-bold text-[#1E1B2E] tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3 pt-4">
          {faqs.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div
                key={i}
                className="bg-white rounded-xl border border-[#E8E5F0] overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-semibold text-sm text-[#1E1B2E] hover:text-[#5E4E8C]"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#64748B] transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-[#5E4E8C]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-xs text-[#4A475A] leading-relaxed border-t border-[#F0EDF5] pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Next Step CTA */}
      <section className="bg-[#FAF9FC] rounded-2xl border border-[#E8E5F0] p-8 text-center space-y-4">
        <h3 className="text-2xl font-bold text-[#1E1B2E]">
          Ready to See Music Therapy in Action?
        </h3>
        <p className="text-sm text-[#64748B] max-w-xl mx-auto">
          We invite healthcare facilities, care teams, and families to schedule a complimentary phone consultation or free information session.
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => onNavigate('clinical-music-therapy')}
            className="px-6 py-2.5 rounded-lg text-xs font-bold text-white bg-[#5E4E8C] hover:bg-[#4B3E72] shadow-sm whitespace-nowrap"
          >
            Explore Clinical Contracts
          </button>
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="px-6 py-2.5 rounded-lg text-xs font-semibold text-[#1E1B2E] bg-white border border-[#E8E5F0] hover:bg-[#F5F3F9] whitespace-nowrap"
          >
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
};
