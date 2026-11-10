import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
import { SITE_METADATA } from '../data/siteData';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isWhatIsActive = ['what-is-music-therapy', 'music-therapy-101', 'clinical-music-therapy', 'consultation-program-development'].includes(currentPath);
  const isAboutActive = ['about-us', 'meet-our-team', 'elizabeth-eldridge', 'catherine-kennedy', 'jasmine-michel'].includes(currentPath);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E8E5F0] py-3.5'
            : 'bg-[#FCFCFD] border-b border-[#F0EDF5] py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Mark & Single-element Wordmark */}
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left whitespace-nowrap shrink-0 group focus:outline-none"
          >
            <img
              src={SITE_METADATA.logoColour}
              alt="Arpeggio Music Therapy logo"
              className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-lg lg:text-xl font-bold tracking-tight text-[#1E1B2E] group-hover:text-[#5E4E8C] transition-colors leading-tight">
                Arpeggio
              </span>
              <span className="text-[11px] font-semibold tracking-wider uppercase text-[#5E4E8C] leading-none">
                Music Therapy
              </span>
            </div>
          </button>

          {/* Zone 2: 5 Clean Single-Line Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#1E1B2E]">
            {/* Home */}
            <button
              type="button"
              onClick={() => handleNavClick('home')}
              className={`whitespace-nowrap transition-colors relative py-1 hover:text-[#5E4E8C] ${
                currentPath === 'home' ? 'text-[#5E4E8C] font-semibold' : 'text-[#4A475A]'
              }`}
            >
              Home
              {currentPath === 'home' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#5E4E8C] rounded-full" />
              )}
            </button>

            {/* What Is Music Therapy? dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('therapy')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                onClick={() => handleNavClick('what-is-music-therapy')}
                className={`flex items-center gap-1 whitespace-nowrap transition-colors relative py-1 hover:text-[#5E4E8C] ${
                  isWhatIsActive ? 'text-[#5E4E8C] font-semibold' : 'text-[#4A475A]'
                }`}
              >
                <span>What Is Music Therapy?</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#64748B]" />
                {isWhatIsActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#5E4E8C] rounded-full" />
                )}
              </button>

              {activeDropdown === 'therapy' && (
                <div className="absolute top-full left-0 w-64 pt-2 z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-[#E8E5F0] p-2 flex flex-col gap-1 animate-in fade-in slide-in-from-top-2 duration-150">
                    <button
                      type="button"
                      onClick={() => handleNavClick('what-is-music-therapy')}
                      className="text-left px-3 py-2 rounded-lg text-xs font-semibold text-[#1E1B2E] hover:bg-[#F5F3F9] hover:text-[#5E4E8C] transition-colors"
                    >
                      Overview & Evidence Base
                    </button>
                    <button
                      type="button"
                      onClick={() => handleNavClick('music-therapy-101')}
                      className="text-left px-3 py-2 rounded-lg text-xs font-medium text-[#4A475A] hover:bg-[#F5F3F9] hover:text-[#5E4E8C] transition-colors"
                    >
                      Music Therapy 101 (Foundations)
                    </button>
                    <button
                      type="button"
                      onClick={() => handleNavClick('clinical-music-therapy')}
                      className="text-left px-3 py-2 rounded-lg text-xs font-medium text-[#4A475A] hover:bg-[#F5F3F9] hover:text-[#5E4E8C] transition-colors"
                    >
                      Clinical Music Therapy (Facility Care)
                    </button>
                    <button
                      type="button"
                      onClick={() => handleNavClick('consultation-program-development')}
                      className="text-left px-3 py-2 rounded-lg text-xs font-medium text-[#4A475A] hover:bg-[#F5F3F9] hover:text-[#5E4E8C] transition-colors"
                    >
                      Consultation & Program Development
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* About Us dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                onClick={() => handleNavClick('about-us')}
                className={`flex items-center gap-1 whitespace-nowrap transition-colors relative py-1 hover:text-[#5E4E8C] ${
                  isAboutActive ? 'text-[#5E4E8C] font-semibold' : 'text-[#4A475A]'
                }`}
              >
                <span>About Us</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#64748B]" />
                {isAboutActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#5E4E8C] rounded-full" />
                )}
              </button>

              {activeDropdown === 'about' && (
                <div className="absolute top-full left-0 w-64 pt-2 z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-[#E8E5F0] p-2 flex flex-col gap-1 animate-in fade-in slide-in-from-top-2 duration-150">
                    <button
                      type="button"
                      onClick={() => handleNavClick('about-us')}
                      className="text-left px-3 py-2 rounded-lg text-xs font-semibold text-[#1E1B2E] hover:bg-[#F5F3F9] hover:text-[#5E4E8C] transition-colors"
                    >
                      Our Story & Mission (Est. 2008)
                    </button>
                    <button
                      type="button"
                      onClick={() => handleNavClick('meet-our-team')}
                      className="text-left px-3 py-2 rounded-lg text-xs font-medium text-[#4A475A] hover:bg-[#F5F3F9] hover:text-[#5E4E8C] transition-colors"
                    >
                      Meet Our Certified Therapists
                    </button>
                    <div className="my-1 border-t border-[#F0EDF5]" />
                    <button
                      type="button"
                      onClick={() => handleNavClick('elizabeth-eldridge')}
                      className="text-left px-3 py-1.5 rounded-lg text-xs text-[#4A475A] hover:bg-[#F5F3F9] hover:text-[#5E4E8C] transition-colors flex items-center justify-between"
                    >
                      <span>Elizabeth Eldridge</span>
                      <span className="text-[10px] text-[#64748B]">BMT, MTA</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleNavClick('catherine-kennedy')}
                      className="text-left px-3 py-1.5 rounded-lg text-xs text-[#4A475A] hover:bg-[#F5F3F9] hover:text-[#5E4E8C] transition-colors flex items-center justify-between"
                    >
                      <span>Catherine Kennedy</span>
                      <span className="text-[10px] text-[#64748B]">BMT</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleNavClick('jasmine-michel')}
                      className="text-left px-3 py-1.5 rounded-lg text-xs text-[#4A475A] hover:bg-[#F5F3F9] hover:text-[#5E4E8C] transition-colors flex items-center justify-between"
                    >
                      <span>Jasmine Michel</span>
                      <span className="text-[10px] text-[#64748B]">BMT, MTA</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Internship */}
            <button
              type="button"
              onClick={() => handleNavClick('internship')}
              className={`whitespace-nowrap transition-colors relative py-1 hover:text-[#5E4E8C] ${
                currentPath === 'internship' ? 'text-[#5E4E8C] font-semibold' : 'text-[#4A475A]'
              }`}
            >
              Internship Opportunities
              {currentPath === 'internship' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#5E4E8C] rounded-full" />
              )}
            </button>

            {/* Contact */}
            <button
              type="button"
              onClick={() => handleNavClick('contact')}
              className={`whitespace-nowrap transition-colors relative py-1 hover:text-[#5E4E8C] ${
                currentPath === 'contact' ? 'text-[#5E4E8C] font-semibold' : 'text-[#4A475A]'
              }`}
            >
              Contact
              {currentPath === 'contact' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#5E4E8C] rounded-full" />
              )}
            </button>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => handleNavClick('contact')}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-[#5E4E8C] rounded-lg hover:bg-[#4B3E72] active:scale-95 transition-all shadow-sm whitespace-nowrap shrink-0"
            >
              Get in Touch
            </button>

            {/* Mobile menu toggle button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[#1E1B2E] hover:bg-[#F5F3F9] transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Full height, high accessibility) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-[#1E1B2E]/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl flex flex-col justify-between p-6 overflow-y-auto">
            <div>
              {/* Drawer header */}
              <div className="flex items-center justify-between pb-6 border-b border-[#F0EDF5]">
                <div className="flex items-center gap-2.5">
                  <img src={SITE_METADATA.logoColour} alt="Logo" className="w-8 h-8 object-contain" />
                  <span className="font-bold text-[#1E1B2E]">Arpeggio MT</span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-[#64748B] hover:bg-[#F5F3F9]"
                  aria-label="Close navigation"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Navigation Links */}
              <div className="py-6 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => handleNavClick('home')}
                  className={`text-left px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                    currentPath === 'home' ? 'bg-[#F5F3F9] text-[#5E4E8C]' : 'text-[#1E1B2E]'
                  }`}
                >
                  Home
                </button>

                {/* What is music therapy */}
                <div className="py-2">
                  <div className="px-3 text-xs font-bold uppercase tracking-wider text-[#64748B] mb-1">
                    Music Therapy
                  </div>
                  <button
                    type="button"
                    onClick={() => handleNavClick('what-is-music-therapy')}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm text-[#1E1B2E] hover:bg-[#F5F3F9]"
                  >
                    What Is Music Therapy? Overview
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNavClick('music-therapy-101')}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm text-[#4A475A] hover:bg-[#F5F3F9]"
                  >
                    Music Therapy 101
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNavClick('clinical-music-therapy')}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm text-[#4A475A] hover:bg-[#F5F3F9]"
                  >
                    Clinical Music Therapy
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNavClick('consultation-program-development')}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm text-[#4A475A] hover:bg-[#F5F3F9]"
                  >
                    Consultation & Program Development
                  </button>
                </div>

                {/* About & Team */}
                <div className="py-2 border-t border-[#F0EDF5]">
                  <div className="px-3 text-xs font-bold uppercase tracking-wider text-[#64748B] mb-1">
                    About & Team
                  </div>
                  <button
                    type="button"
                    onClick={() => handleNavClick('about-us')}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm text-[#1E1B2E] hover:bg-[#F5F3F9]"
                  >
                    About Arpeggio (Est. 2008)
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNavClick('meet-our-team')}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm text-[#4A475A] hover:bg-[#F5F3F9]"
                  >
                    Meet the Team
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNavClick('elizabeth-eldridge')}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm text-[#4A475A] hover:bg-[#F5F3F9]"
                  >
                    Elizabeth Eldridge, BMT, MTA
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNavClick('catherine-kennedy')}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm text-[#4A475A] hover:bg-[#F5F3F9]"
                  >
                    Catherine Kennedy, BMT
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNavClick('jasmine-michel')}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm text-[#4A475A] hover:bg-[#F5F3F9]"
                  >
                    Jasmine Michel, BMT, MTA
                  </button>
                </div>

                {/* Internship & Contact */}
                <div className="pt-2 border-t border-[#F0EDF5] flex flex-col gap-1">
                  <button
                    type="button"
                    onClick={() => handleNavClick('internship')}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm font-semibold text-[#1E1B2E] hover:bg-[#F5F3F9]"
                  >
                    Internship Opportunities
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNavClick('contact')}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm font-semibold text-[#1E1B2E] hover:bg-[#F5F3F9]"
                  >
                    Contact
                  </button>
                </div>
              </div>
            </div>

            {/* Drawer footer info */}
            <div className="pt-6 border-t border-[#F0EDF5] space-y-3">
              <a
                href={`tel:${SITE_METADATA.phone.replace(/[^0-9+]/g, '')}`}
                className="flex items-center gap-2.5 text-xs text-[#4A475A] hover:text-[#5E4E8C]"
              >
                <Phone className="w-4 h-4 text-[#5E4E8C]" />
                <span>{SITE_METADATA.phone}</span>
              </a>
              <a
                href={`mailto:${SITE_METADATA.email}`}
                className="flex items-center gap-2.5 text-xs text-[#4A475A] hover:text-[#5E4E8C]"
              >
                <Mail className="w-4 h-4 text-[#5E4E8C]" />
                <span>{SITE_METADATA.email}</span>
              </a>

              <button
                type="button"
                onClick={() => handleNavClick('contact')}
                className="w-full py-2.5 text-xs font-semibold text-center text-white bg-[#5E4E8C] rounded-lg shadow-sm hover:bg-[#4B3E72]"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
