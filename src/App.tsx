/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { WhatIsMusicTherapyPage } from './pages/WhatIsMusicTherapyPage';
import { MusicTherapy101Page } from './pages/MusicTherapy101Page';
import { ClinicalMusicTherapyPage } from './pages/ClinicalMusicTherapyPage';
import { ConsultationPage } from './pages/ConsultationPage';
import { AboutPage } from './pages/AboutPage';
import { MeetTheTeamPage } from './pages/MeetTheTeamPage';
import { ElizabethPage } from './pages/ElizabethPage';
import { CatherinePage } from './pages/CatherinePage';
import { JasminePage } from './pages/JasminePage';
import { InternshipPage } from './pages/InternshipPage';
import { ContactPage } from './pages/ContactPage';
import { SITE_METADATA } from './data/siteData';

export default function App() {
  // Normalize current path from URL or hash
  const getInitialPath = (): string => {
    const hash = window.location.hash.replace(/^#\/?/, '');
    const pathname = window.location.pathname.replace(/^\//, '');
    const target = hash || pathname || 'home';
    
    // Alias routing
    if (target === '' || target === '/') return 'home';
    if (target === 'musictherapy' || target === 'music-therapy') return 'what-is-music-therapy';
    if (target === 'clinical') return 'clinical-music-therapy';
    if (target === 'consultation') return 'consultation-program-development';
    if (target === 'about') return 'about-us';
    if (target === 'elizabeth') return 'elizabeth-eldridge';
    if (target === 'catherine') return 'catherine-kennedy';
    if (target === 'jasmine') return 'jasmine-michel';

    return target;
  };

  const [currentPath, setCurrentPath] = useState<string>(getInitialPath());
  const [initialInquiryText, setInitialInquiryText] = useState<string>('');

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(getInitialPath());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (path: string) => {
    setCurrentPath(path);
    window.history.pushState({}, '', path === 'home' ? '/' : `/#/${path}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentPath) {
      case 'home':
        return (
          <HomePage
            onNavigate={handleNavigate}
            onSelectInquiry={(text) => setInitialInquiryText(text)}
          />
        );
      case 'what-is-music-therapy':
        return <WhatIsMusicTherapyPage onNavigate={handleNavigate} />;
      case 'music-therapy-101':
        return <MusicTherapy101Page onNavigate={handleNavigate} />;
      case 'clinical-music-therapy':
        return (
          <ClinicalMusicTherapyPage
            onNavigate={handleNavigate}
            onSelectInquiry={(text) => setInitialInquiryText(text)}
          />
        );
      case 'consultation-program-development':
        return (
          <ConsultationPage
            onNavigate={handleNavigate}
            onSelectInquiry={(text) => setInitialInquiryText(text)}
          />
        );
      case 'about-us':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'meet-our-team':
        return <MeetTheTeamPage onNavigate={handleNavigate} />;
      case 'elizabeth-eldridge':
        return <ElizabethPage onNavigate={handleNavigate} />;
      case 'catherine-kennedy':
        return <CatherinePage onNavigate={handleNavigate} />;
      case 'jasmine-michel':
        return <JasminePage onNavigate={handleNavigate} />;
      case 'internship':
        return (
          <InternshipPage
            onNavigate={handleNavigate}
            onSelectInquiry={(text) => setInitialInquiryText(text)}
          />
        );
      case 'contact':
        return <ContactPage initialInquiry={initialInquiryText} />;
      default:
        return (
          <HomePage
            onNavigate={handleNavigate}
            onSelectInquiry={(text) => setInitialInquiryText(text)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FCFCFD] text-[#1E1B2E]">
      {/* Top Quiet Announcement / Contact Trust Bar */}
      <div className="w-full bg-[#1A1528] text-white py-2 px-4 text-[11px] font-medium border-b border-[#2A233D]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 truncate">
            <span className="w-1.5 h-1.5 rounded-full bg-[#66BA82] shrink-0" />
            <span className="truncate">
              New Brunswick’s Largest Clinical Music Therapy Practice · Contracts From 2 Hours/Week
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4 shrink-0 text-slate-300">
            <span>Saint John · Fredericton · Charlotte County</span>
            <span aria-hidden="true">·</span>
            <a
              href={`tel:${SITE_METADATA.phone.replace(/[^0-9+]/g, '')}`}
              className="text-[#51B8E8] hover:underline"
            >
              {SITE_METADATA.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <Navbar currentPath={currentPath} onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <main className="flex-1 pb-16">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
