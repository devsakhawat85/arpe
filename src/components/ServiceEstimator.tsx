import React, { useState } from 'react';
import { Calendar, Users, Building, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface ServiceEstimatorProps {
  onSelectOption: (summary: string) => void;
}

export const ServiceEstimator: React.FC<ServiceEstimatorProps> = ({ onSelectOption }) => {
  const [serviceType, setServiceType] = useState<'clinical' | 'consultation' | 'free_session' | 'internship'>('clinical');
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(2);
  const [clientGroup, setClientGroup] = useState<string>('Older Adults & Dementia Care');
  const [location, setLocation] = useState<string>('Saint John Regional Area');

  const handleApplyToContact = () => {
    let summary = '';
    if (serviceType === 'clinical') {
      summary = `Inquiring about Clinical Music Therapy Contract (~${hoursPerWeek} hrs/week) in ${location} for ${clientGroup}.`;
    } else if (serviceType === 'consultation') {
      summary = `Inquiring about Facility Consultation & Program Development in ${location} for ${clientGroup} (staff training & music program audit).`;
    } else if (serviceType === 'free_session') {
      summary = `Requesting a FREE Music Therapy Information Session for our facility/organization in ${location}.`;
    } else {
      summary = `Inquiring about the 1,000-Hour Clinical Internship with Arpeggio Music Therapy in ${location}.`;
    }

    onSelectOption(summary);
  };

  return (
    <div className="bg-white rounded-2xl border border-[#E8E5F0] p-6 lg:p-8 shadow-sm">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#5E4E8C] mb-2">
        <Sparkles className="w-4 h-4 text-[#5E4E8C]" />
        <span>Interactive Planning Tool</span>
      </div>
      <h3 className="text-xl font-bold text-[#1E1B2E] tracking-tight mb-2">
        Plan Your Music Therapy Partnership
      </h3>
      <p className="text-xs text-[#64748B] mb-6">
        Whether you are a hospital unit director, nursing home administrator, community coordinator, or private family, configure your requirements below:
      </p>

      {/* Step 1: Service Type */}
      <div className="mb-6">
        <label className="block text-xs font-semibold text-[#1E1B2E] mb-2">
          1. Select Service Type
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <button
            type="button"
            onClick={() => setServiceType('clinical')}
            className={`p-3.5 rounded-xl text-left border transition-all ${
              serviceType === 'clinical'
                ? 'border-[#5E4E8C] bg-[#F5F3F9] text-[#1E1B2E] ring-1 ring-[#5E4E8C]'
                : 'border-[#E8E5F0] bg-white hover:bg-[#FAF9FC] text-[#4A475A]'
            }`}
          >
            <div className="font-semibold text-xs flex items-center justify-between mb-1">
              <span>Clinical Music Therapy</span>
              <span className="text-[10px] text-[#5E4E8C] font-mono">From 2 hrs/wk</span>
            </div>
            <p className="text-[11px] text-[#64748B] leading-snug">
              Accredited therapist delivering direct bedside, 1-on-1, or group clinical interventions.
            </p>
          </button>

          <button
            type="button"
            onClick={() => setServiceType('consultation')}
            className={`p-3.5 rounded-xl text-left border transition-all ${
              serviceType === 'consultation'
                ? 'border-[#5E4E8C] bg-[#F5F3F9] text-[#1E1B2E] ring-1 ring-[#5E4E8C]'
                : 'border-[#E8E5F0] bg-white hover:bg-[#FAF9FC] text-[#4A475A]'
            }`}
          >
            <div className="font-semibold text-xs flex items-center justify-between mb-1">
              <span>Consultation & Program Design</span>
              <span className="text-[10px] text-[#2E8CB8] font-mono">Facility Support</span>
            </div>
            <p className="text-[11px] text-[#64748B] leading-snug">
              Audit existing music programs, train facility staff, and design therapeutic frameworks.
            </p>
          </button>

          <button
            type="button"
            onClick={() => setServiceType('free_session')}
            className={`p-3.5 rounded-xl text-left border transition-all ${
              serviceType === 'free_session'
                ? 'border-[#5E4E8C] bg-[#F5F3F9] text-[#1E1B2E] ring-1 ring-[#5E4E8C]'
                : 'border-[#E8E5F0] bg-white hover:bg-[#FAF9FC] text-[#4A475A]'
            }`}
          >
            <div className="font-semibold text-xs flex items-center justify-between mb-1">
              <span>Free Information Session</span>
              <span className="text-[10px] text-[#4E9A68] font-bold">100% Free</span>
            </div>
            <p className="text-[11px] text-[#64748B] leading-snug">
              Introductory presentation for facilities interested in contracting our clinical services.
            </p>
          </button>

          <button
            type="button"
            onClick={() => setServiceType('internship')}
            className={`p-3.5 rounded-xl text-left border transition-all ${
              serviceType === 'internship'
                ? 'border-[#5E4E8C] bg-[#F5F3F9] text-[#1E1B2E] ring-1 ring-[#5E4E8C]'
                : 'border-[#E8E5F0] bg-white hover:bg-[#FAF9FC] text-[#4A475A]'
            }`}
          >
            <div className="font-semibold text-xs flex items-center justify-between mb-1">
              <span>1,000-Hour Clinical Internship</span>
              <span className="text-[10px] text-[#746DA5] font-mono">BMT Students</span>
            </div>
            <p className="text-[11px] text-[#64748B] leading-snug">
              Supervised placement under Elizabeth Eldridge (MTA) fulfilling CAMT requirements.
            </p>
          </button>
        </div>
      </div>

      {/* Step 2: Parameters (Hours if clinical) */}
      {serviceType === 'clinical' && (
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-semibold text-[#1E1B2E]">
              2. Contract Duration: <span className="text-[#5E4E8C] font-bold">{hoursPerWeek} Hours / Week</span>
            </label>
            <span className="text-[11px] text-[#64748B]">Contracts start at just 2 hrs/wk</span>
          </div>
          <input
            type="range"
            min="2"
            max="20"
            step="1"
            value={hoursPerWeek}
            onChange={(e) => setHoursPerWeek(parseInt(e.target.value))}
            className="w-full accent-[#5E4E8C] cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-[#64748B] mt-1">
            <span>2 hrs (Introductory)</span>
            <span>8 hrs (Half-Time Facility)</span>
            <span>20 hrs (Comprehensive)</span>
          </div>
        </div>
      )}

      {/* Step 3: Target Population & Location */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-xs font-semibold text-[#1E1B2E] mb-1.5">
            Target Client Population
          </label>
          <select
            value={clientGroup}
            onChange={(e) => setClientGroup(e.target.value)}
            className="w-full px-3 py-2 text-xs rounded-lg border border-[#E8E5F0] bg-white text-[#1E1B2E] focus:outline-none focus:border-[#5E4E8C]"
          >
            <option value="Older Adults & Dementia Care">Older Adults & Dementia Care</option>
            <option value="Autism Spectrum Disorder & Special Needs">Autism Spectrum Disorder & Special Needs</option>
            <option value="Inpatient Acute Psychiatry & Mental Health">Inpatient Acute Psychiatry & Mental Health</option>
            <option value="Neurological Rehabilitation (Stroke / ABI)">Neurological Rehabilitation (Stroke / ABI)</option>
            <option value="At-Risk Youth & Emotional Trauma">At-Risk Youth & Emotional Trauma</option>
            <option value="Perinatal, Infants & Young Parents">Perinatal, Infants & Young Parents</option>
            <option value="Palliative & End-of-Life Care">Palliative & End-of-Life Care</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#1E1B2E] mb-1.5">
            Service Region in New Brunswick
          </label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-3 py-2 text-xs rounded-lg border border-[#E8E5F0] bg-white text-[#1E1B2E] focus:outline-none focus:border-[#5E4E8C]"
          >
            <option value="Saint John & Greater Region">Saint John & Greater Region</option>
            <option value="Fredericton & Capital Region">Fredericton & Capital Region</option>
            <option value="Charlotte County (St. George, St. Stephen)">Charlotte County (St. George, St. Stephen)</option>
            <option value="Other New Brunswick Location">Other New Brunswick Location</option>
          </select>
        </div>
      </div>

      {/* Output Summary & Action */}
      <div className="bg-[#FAF9FC] rounded-xl p-4 border border-[#E8E5F0] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-left w-full sm:w-auto">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#1E1B2E]">
            <CheckCircle2 className="w-4 h-4 text-[#4E9A68] shrink-0" />
            <span>Ready to discuss scheduling & rates</span>
          </div>
          <p className="text-[11px] text-[#64748B]">
            {serviceType === 'clinical'
              ? `Contract proposal: ${hoursPerWeek} hrs/week for ${clientGroup} in ${location}`
              : serviceType === 'consultation'
              ? `Consultation & staff training in ${location} for ${clientGroup}`
              : serviceType === 'free_session'
              ? `Complimentary 45-min info session in ${location}`
              : `CAMT 1,000-hr internship application in ${location}`}
          </p>
        </div>

        <button
          type="button"
          onClick={handleApplyToContact}
          className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-white bg-[#5E4E8C] hover:bg-[#4B3E72] rounded-lg transition-all shadow-sm flex items-center justify-center gap-2 whitespace-nowrap shrink-0 active:scale-95"
        >
          <span>Continue to Inquire</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
