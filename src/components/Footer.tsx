import React from 'react';
import { Phone, Mail, MapPin, Heart, ShieldCheck, ExternalLink } from 'lucide-react';
import { SITE_METADATA } from '../data/siteData';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#1A1528] text-white border-t border-[#2A233D] pt-16 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#2A233D]">
          {/* Column 1 & 2: Brand Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={SITE_METADATA.logoColour}
                alt="Arpeggio Music Therapy"
                className="w-10 h-10 object-contain brightness-110"
              />
              <div>
                <span className="text-xl font-bold tracking-tight text-white block">
                  Arpeggio Music Therapy
                </span>
                <span className="text-xs font-medium text-[#51B8E8] tracking-wide">
                  A New Direction in Health Care
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Founded in 2008 by Elizabeth Eldridge, Arpeggio Music Therapy is New Brunswick’s largest provider of evidence-informed clinical music therapy, facility consultation, and accredited internship supervision across the lifespan.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-[#66BA82] shrink-0" />
              <span>Certified MTA Professionals · Accredited CAMT Standards</span>
            </div>
          </div>

          {/* Column 3: Clinical Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#51B8E8]">
              Clinical Services
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('what-is-music-therapy')}
                  className="hover:text-white transition-colors text-left"
                >
                  What Is Music Therapy?
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('music-therapy-101')}
                  className="hover:text-white transition-colors text-left"
                >
                  Music Therapy 101
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('clinical-music-therapy')}
                  className="hover:text-white transition-colors text-left"
                >
                  Clinical Facility Care
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('consultation-program-development')}
                  className="hover:text-white transition-colors text-left"
                >
                  Consultation & Program Design
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('internship')}
                  className="hover:text-white transition-colors text-left"
                >
                  1,000-Hour Internships
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Team & Organization */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#746DA5]">
              About & Team
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('about-us')}
                  className="hover:text-white transition-colors text-left"
                >
                  About Arpeggio (Est. 2008)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('meet-our-team')}
                  className="hover:text-white transition-colors text-left"
                >
                  Meet Our Therapists
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('elizabeth-eldridge')}
                  className="hover:text-white transition-colors text-left"
                >
                  Elizabeth Eldridge, BMT, MTA
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('catherine-kennedy')}
                  className="hover:text-white transition-colors text-left"
                >
                  Catherine Kennedy, BMT
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('jasmine-michel')}
                  className="hover:text-white transition-colors text-left"
                >
                  Jasmine Michel, BMT, MTA
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Direct Contact & Regions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#66BA82]">
              Let’s Connect
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <a
                href={`tel:${SITE_METADATA.phone.replace(/[^0-9+]/g, '')}`}
                className="flex items-start gap-2 hover:text-[#51B8E8] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#66BA82] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block">{SITE_METADATA.phone}</span>
                  <span className="text-[10px] text-slate-400">Confidential Voicemail</span>
                </div>
              </a>

              <a
                href={`mailto:${SITE_METADATA.email}`}
                className="flex items-start gap-2 hover:text-[#51B8E8] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#51B8E8] shrink-0 mt-0.5" />
                <span className="break-all">{SITE_METADATA.email}</span>
              </a>

              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-[#746DA5] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium">Charlotte County & Across NB</span>
                  <span className="text-[10px] text-slate-400">Saint John · Fredericton · Regional Care</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => handleNav('contact')}
                className="w-full py-2 px-3 text-xs font-semibold text-center text-white bg-[#5E4E8C] hover:bg-[#746DA5] rounded-lg transition-colors shadow-sm"
              >
                Send Clinical Inquiry
              </button>
            </div>
          </div>
        </div>

        {/* Sister Venture & Affiliation note */}
        <div className="py-6 border-b border-[#2A233D] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span>Also founded by Elizabeth Eldridge:</span>
            <span className="font-medium text-slate-200">Arpeggio Health Services</span>
            <span aria-hidden="true">·</span>
            <span>Mental Health First Aid & Workplace Mental Health Training</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span>Serving Southern & Central New Brunswick</span>
            <span aria-hidden="true">·</span>
            <span>CAMT Recognized</span>
          </div>
        </div>

        {/* Bottom Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Arpeggio Music Therapy. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Evidence-Informed Healthcare</span>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => handleNav('contact')}
              className="hover:text-white transition-colors"
            >
              Privacy & Inquiries
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
