export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  category: string;
  highlights: string[];
  mockupType: 'community' | 'algorithm' | 'workspace';
  githubUrl: string;
  liveDemoUrl: string;
  implementationDetails: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  boardOrUniversity: string;
  duration: string;
  score: string;
  scoreLabel: string;
  location: string;
  status: 'In Progress' | 'Completed';
  highlights: string[];
  coursework?: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  duration: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  skillsApplied: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: {
    name: string;
    level: number; // 1-100
    category: 'core' | 'tools' | 'growth';
    tag: string;
  }[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issuedDate: string;
  credentialId: string;
  skillsCovered: string[];
  summary: string;
  category: 'technical' | 'management';
  credentialUrl?: string;
  proofImage?: string;
  verifiedBy?: string;
}
