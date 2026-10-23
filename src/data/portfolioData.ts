import {
  EducationItem,
  ExperienceItem,
  CertificationItem,
} from '../types';

export const personalInfo = {
  name: "Adarsh Singh Chauhan",
  title: "B.Tech. in Computer Science and Engineering Student",
  degree: "Bachelor of Technology in Computer Science and Engineering",
  institution: "Barkatullah University Institute of Technology, Bhopal",
  graduationYear: "2029",
  email: "adarshuitb@gmail.com",
  phone: "+918815965336",
  location: "Bhopal, Madhya Pradesh, India",
  summary:
    "I am Adarsh Singh Chauhan, a B.Tech./B.E. Engineering student specializing in Computer Science and Engineering, with an expected graduation year of 2029. My current academic focus is Computer Science and Engineering, and I am pursuing my degree as a college student. I look forward to developing my knowledge and exploring meaningful opportunities in the technology domain.",
  typingRoles: [
    "CSE Undergraduate",
    "Campus Growth Associate",
    "Campus Ambassador",
    "Tech Enthusiast"
  ],
  stats: [
    { label: "High School (2023)", value: "94.8%", detail: "Sarvodaya Vidya Mandir, Sidhi" },
    { label: "10+2 Higher Secondary", value: "90.6%", detail: "School of Excellence, Sidhi" },
    { label: "Active Roles", value: "3", detail: "Gradietts, Air India & Internshala" },
    { label: "Graduation Year", value: "2029", detail: "Barkatullah Univ. Inst. of Tech." }
  ]
};

export const educationData: EducationItem[] = [
  {
    id: "buit-btech",
    institution: "Barkatullah University Institute of Technology, Bhopal",
    degree: "Undergraduate, Bachelor of Technology in Computer Science and Engineering",
    boardOrUniversity: "Barkatullah University",
    duration: "2025 – 2029",
    score: "Undergraduate",
    scoreLabel: "Current Standing",
    location: "Bhopal, M.P.",
    status: "In Progress",
    highlights: [
      "Specializing in Computer Science and Engineering with graduation expected in 2029.",
      "Developing foundational academic knowledge and technical capabilities in computer science."
    ]
  },
  {
    id: "school-of-excellence",
    institution: "School of Excellence, Sidhi (M.P.)",
    degree: "10+2 Higher Secondary",
    boardOrUniversity: "Madhya Pradesh Board",
    duration: "2023 – 2025",
    score: "90.6%",
    scoreLabel: "Percentage",
    location: "Sidhi (M.P.)",
    status: "Completed",
    highlights: [
      "Completed 10+2 Higher Secondary with 90.6% aggregate percentage."
    ]
  },
  {
    id: "sarvodaya-vidya-mandir",
    institution: "Sarvodaya Vidya Mandir, Sidhi (M.P.)",
    degree: "High School",
    boardOrUniversity: "Madhya Pradesh Board",
    duration: "Ending 2023",
    score: "94.8%",
    scoreLabel: "Percentage",
    location: "Sidhi (M.P.)",
    status: "Completed",
    highlights: [
      "Completed High School with an outstanding 94.8% aggregate percentage."
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "gradietts-intern",
    role: "Campus Growth Associate Intern",
    company: "Gradietts",
    duration: "Sep 2026 – PRESENT",
    location: "Bhopal / Remote",
    type: "Internship",
    description: "Driving campus growth initiatives, user engagement, and community development across student networks.",
    achievements: [
      "Scaling student user adoption and campus engagement for Gradietts.",
      "Coordinating campus outreach and event initiatives."
    ],
    skillsApplied: ["Brand Management", "Social Media Marketing", "Effective leadership"]
  },
  {
    id: "air-india-ambassador",
    role: "Campus Ambassador",
    company: "Air India Limited",
    duration: "Oct 2026 – PRESENT",
    location: "Campus / Remote",
    type: "Campus Ambassador",
    description: "Serving as official campus liaison representing Air India Limited student engagement initiatives.",
    achievements: [
      "Facilitating brand advocacy and awareness across university cohorts.",
      "Connecting students with corporate initiatives and programs."
    ],
    skillsApplied: ["Brand Management", "Effective leadership", "Communication"]
  },
  {
    id: "internshala-isp",
    role: "Internshala Student Partner",
    company: "Internshala",
    duration: "Sep 2026 – Oct 2026",
    location: "Campus",
    type: "Student Partner",
    description: "Acted as student partner bridging college peers with career and internship opportunities.",
    achievements: [
      "Represented Internshala on campus to guide students toward internships.",
      "Promoted skill development drives and student career programs."
    ],
    skillsApplied: ["Social Media Marketing", "Effective leadership"]
  }
];

export const skillsList: string[] = [
  "HTML",
  "CSS",
  "Social Media Marketing",
  "Brand Management",
  "Effective leadership"
];

export const certificationsData: CertificationItem[] = [
  {
    id: "cert-html-ai",
    title: "HTML with AI",
    issuer: "Certified Platform",
    issuedDate: "Verified",
    credentialId: "CERT-HTML-AI-01",
    skillsCovered: ["HTML", "AI Integrations", "Web Structure"],
    summary: "Professional certification covering HTML fundamentals integrated with modern AI tooling.",
    category: "technical"
  },
  {
    id: "cert-css3",
    title: "Cascading Style Sheets (CSS3)",
    issuer: "Certified Platform",
    issuedDate: "Verified",
    credentialId: "CERT-CSS3-02",
    skillsCovered: ["CSS3", "Styling", "Layout Design"],
    summary: "Certification covering Cascading Style Sheets (CSS3) layout, formatting, and responsive styling.",
    category: "technical"
  },
  {
    id: "cert-cloud",
    title: "Cloud Computing",
    issuer: "Certified Platform",
    issuedDate: "Verified",
    credentialId: "CERT-CLOUD-03",
    skillsCovered: ["Cloud Computing", "Infrastructure Basics", "Virtualization"],
    summary: "Foundational certification covering cloud architecture, computing models, and distributed systems.",
    category: "technical"
  },
  {
    id: "cert-smm",
    title: "Social Media Marketing",
    issuer: "Certified Platform",
    issuedDate: "Verified",
    credentialId: "CERT-SMM-04",
    skillsCovered: ["Social Media Marketing", "Audience Engagement", "Campaigns"],
    summary: "Certification in digital outreach, audience communication, and social media marketing strategies.",
    category: "management"
  },
  {
    id: "cert-bm",
    title: "Brand Management",
    issuer: "Certified Platform",
    issuedDate: "Verified",
    credentialId: "CERT-BM-05",
    skillsCovered: ["Brand Management", "Brand Identity", "Strategic Outreach"],
    summary: "Certification focused on brand development, market positioning, and strategic brand equity.",
    category: "management"
  },
  {
    id: "cert-el",
    title: "Effective leadership",
    issuer: "Certified Platform",
    issuedDate: "Verified",
    credentialId: "CERT-EL-06",
    skillsCovered: ["Effective leadership", "Team Collaboration", "Decision Making"],
    summary: "Certification in leadership principles, team motivation, and organizational effectiveness.",
    category: "management"
  }
];
