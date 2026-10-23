/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import ProjectDemoModal from './components/ProjectDemoModal';
import ProjectCodeModal from './components/ProjectCodeModal';
import CertificateModal from './components/CertificateModal';
import UploadCertificateModal from './components/UploadCertificateModal';
import { certificationsData } from './data/portfolioData';
import { ProjectItem, CertificationItem } from './types';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [demoProject, setDemoProject] = useState<ProjectItem | null>(null);
  const [codeProject, setCodeProject] = useState<ProjectItem | null>(null);
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);
  const [uploadModalOpen, setUploadModalOpen] = useState(false);

  // Manage certificates with persistent custom uploads
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
      {/* Sticky Glassmorphic Navbar */}
      <Navbar onResumeClick={() => setResumeOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onExploreProjects={() => scrollToSection('projects')}
          onConnect={() => scrollToSection('contact')}
          onResumeClick={() => setResumeOpen(true)}
        />

        {/* Education Section */}
        <Education />

        {/* Experience & Internships Timeline */}
        <Experience />

        {/* Technical Skills & Badges */}
        <Skills />

        {/* Professional Certifications with Upload Capability */}
        <Certifications
          certificationsList={certificationsList}
          onSelectCertification={(cert) => setSelectedCert(cert)}
          onOpenUploadModal={() => setUploadModalOpen(true)}
        />

        {/* Featured CSE Projects */}
        <Projects
          onOpenDemo={(p) => setDemoProject(p)}
          onOpenCode={(p) => setCodeProject(p)}
        />

        {/* Contact Form & Direct Links */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      <ProjectDemoModal
        project={demoProject}
        onClose={() => setDemoProject(null)}
      />

      <ProjectCodeModal
        project={codeProject}
        onClose={() => setCodeProject(null)}
      />

      <CertificateModal
        certification={selectedCert}
        onClose={() => setSelectedCert(null)}
        onAttachProof={() => setUploadModalOpen(true)}
      />

      <UploadCertificateModal
        isOpen={uploadModalOpen}
        onClose={() => setUploadModalOpen(false)}
        onAddCertificate={handleAddCertificate}
      />
    </div>
  );
}
