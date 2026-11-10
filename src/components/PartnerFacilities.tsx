import React, { useState } from 'react';
import { Building2, MapPin, CheckCircle, Hospital, HeartHandshake, Shield } from 'lucide-react';
import { PARTNER_FACILITIES } from '../data/siteData';

export const PartnerFacilities: React.FC<{ onBookInfoSession: () => void }> = ({ onBookInfoSession }) => {
  const [filterType, setFilterType] = useState<string>('All');

  const types = ['All', 'Hospital', 'Autism Centre', 'Long-Term Care', 'Mental Health'];

  const filtered = filterType === 'All'
    ? PARTNER_FACILITIES
    : PARTNER_FACILITIES.filter((f) => f.type === filterType || (filterType === 'Long-Term Care' && f.type === 'Senior Living'));

  return (
    <div className="w-full space-y-6">
      {/* Intro strip */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#5E4E8C] block mb-1">
            Proven Clinical Partnerships
          </span>
          <h3 className="text-2xl font-bold text-[#1E1B2E] tracking-tight">
            Where We’re Working Across New Brunswick
          </h3>
          <p className="text-sm text-[#64748B] mt-1 max-w-2xl">
            Arpeggio Music Therapy is proud to maintain lasting clinical partnerships with forward-thinking hospitals, specialized centres, and senior residential communities.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#F5F3F9] rounded-xl border border-[#E8E5F0]">
          {types.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setFilterType(t)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                filterType === t
                  ? 'bg-white text-[#1E1B2E] shadow-sm font-semibold'
                  : 'text-[#64748B] hover:text-[#1E1B2E]'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Partner Facilities */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((facility) => (
          <div
            key={facility.name}
            className="bg-white rounded-2xl border border-[#E8E5F0] p-6 hover:border-[#5E4E8C]/40 hover:shadow-sm transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[11px] font-semibold text-[#5E4E8C] bg-[#F5F3F9] px-2.5 py-0.5 rounded-full">
                  {facility.type}
                </span>
                <span className="flex items-center gap-1 text-[11px] text-[#64748B]">
                  <MapPin className="w-3.5 h-3.5 text-[#2E8CB8]" />
                  <span>{facility.city}</span>
                </span>
              </div>

              <h4 className="text-lg font-bold text-[#1E1B2E] mb-1">
                {facility.name}
              </h4>

              {facility.department && (
                <p className="text-xs font-semibold text-[#2E8CB8] mb-2">
                  {facility.department}
                </p>
              )}

              {facility.address && (
                <p className="text-[11px] text-[#64748B] mb-3">
                  {facility.address}
                </p>
              )}

              <p className="text-xs text-[#4A475A] leading-relaxed">
                {facility.description}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-[#F0EDF5] flex items-center gap-1.5 text-[11px] text-[#4E9A68] font-medium">
              <CheckCircle className="w-3.5 h-3.5 shrink-0" />
              <span>Contracted MTA Clinical Service Delivery</span>
            </div>
          </div>
        ))}
      </div>

      {/* Free Information Session Banner */}
      <div className="bg-gradient-to-r from-[#F5F3F9] via-[#FAF9FC] to-[#EDF8F1] rounded-2xl border border-[#E8E5F0] p-6 lg:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-[#4E9A68]">
            For Healthcare Directors & Care Coordinators
          </span>
          <h4 className="text-xl font-bold text-[#1E1B2E]">
            Request a Free Music Therapy Information Session
          </h4>
          <p className="text-xs text-[#64748B] max-w-xl">
            Not sure how music therapy integrates into your facility’s care routine or interdisciplinary team? We offer complimentary 45-minute on-site or virtual presentations for administration and clinical staff.
          </p>
        </div>

        <button
          type="button"
          onClick={onBookInfoSession}
          className="px-5 py-2.5 text-xs font-semibold text-white bg-[#5E4E8C] hover:bg-[#4B3E72] rounded-lg transition-all shadow-sm shrink-0 whitespace-nowrap active:scale-95"
        >
          Book Free Info Session
        </button>
      </div>
    </div>
  );
};
