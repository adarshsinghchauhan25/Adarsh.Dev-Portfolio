/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import CertificateModal from './components/CertificateModal';
import { certificationsData } from './data/portfolioData';
import { CertificationItem } from './types';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  // Manage certifications
  const [certificationsList, setCertificationsList] = useState<CertificationItem[]>(() => {
    try {
      const stored = localStorage.getItem('adarsh_portfolio_certifications');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch {
      // fallback
    }
    return certificationsData;
  });

  const handleAddCertificate = (newCert: CertificationItem) => {
    const updated = [newCert, ...certificationsList];
    setCertificationsList(updated);
    try {
      localStorage.setItem('adarsh_portfolio_certifications', JSON.stringify(updated));
    } catch (e) {
      console.warn('LocalStorage error while saving certificate:', e);
    }
    setSelectedCert(newCert);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 selection:bg-[#00d2ff] selection:text-slate-950 font-sans">
      {/* Sticky Clean Navbar */}
      <Navbar onResumeClick={() => setResumeOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* Hero & About Section */}
        <Hero
          onExploreExperience={() => scrollToSection('experience')}
          onConnect={() => scrollToSection('contact')}
        />

        {/* Experience Section */}
        <Experience />

        {/* Education Section */}
        <Education />

        {/* Skills Section */}
        <Skills />

        {/* Certifications Section */}
        <Certifications
          certificationsList={certificationsList}
          onSelectCertification={(cert) => setSelectedCert(cert)}
        />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      <CertificateModal
        certification={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </div>
  );
}
