import {
  ProjectItem,
  EducationItem,
  ExperienceItem,
  CertificationItem,
  SkillCategory
} from '../types';

export const personalInfo = {
  name: "Adarsh Singh Chauhan",
  title: "Computer Science Student & Frontend Developer",
  shortRole: "CSE Sophomore & Web Developer",
  tagline: "Bridging the gap between technology and community growth. Crafting responsive web applications while scaling campus networks.",
  email: "adarshuitb@gmail.com",
  location: "Bhopal, Madhya Pradesh, India",
  university: "Barkatullah University (BUIT)",
  degree: "B.Tech in Computer Science and Engineering",
  graduationYear: "2029",
  currentYear: "2nd Year (Sophomore)",
  typingRoles: [
    "CSE Sophomore",
    "Frontend Developer",
    "Community Builder",
    "Tech Enthusiast"
  ],
  socialLinks: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "mailto:adarshuitb@gmail.com"
  },
  stats: [
    { label: "Class X Board", value: "94.8%", detail: "Distinction in Science & Math" },
    { label: "Class XII Board", value: "90.6%", detail: "PCM Stream Academic Merit" },
    { label: "Growth Internships", value: "2+", detail: "Gradientts & Internshala ISP" },
    { label: "Academic Standing", value: "CSE '29", detail: "Barkatullah University" }
  ]
};

export const educationData: EducationItem[] = [
  {
    id: "buit-btech",
    institution: "Barkatullah University Institute of Technology (BUIT)",
    degree: "B.Tech in Computer Science and Engineering",
    boardOrUniversity: "Barkatullah University, Bhopal",
    duration: "2025 – 2029",
    score: "2nd Year (Sophomore)",
    scoreLabel: "Current Standing",
    location: "Bhopal, Madhya Pradesh",
    status: "In Progress",
    highlights: [
      "Currently advancing core theoretical and applied foundations in computer systems and algorithms.",
      "Active participant in technical symposiums, hackathons, and departmental open-source workshops.",
      "Serving as student catalyst bridging university peers with technical opportunities and internships."
    ],
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (C++/Java)",
      "Database Management Systems",
      "Web Technologies & Frontend Design",
      "Computer Organization & Architecture",
      "Discrete Mathematics"
    ]
  },
  {
    id: "class-xii",
    institution: "Senior Secondary School",
    degree: "Higher Secondary Certificate (Class XII)",
    boardOrUniversity: "Madhya Pradesh Board of Secondary Education (MPBSE)",
    duration: "Completed in 2025",
    score: "90.6%",
    scoreLabel: "Aggregate Percentage",
    location: "Madhya Pradesh",
    status: "Completed",
    highlights: [
      "Graduated with distinction scoring an impressive 90.6% aggregate in the Science stream (PCM).",
      "Demonstrated rigorous analytical problem-solving in Physics and Advanced Mathematics.",
      "Recognized among top academic achievers in the regional secondary cohort."
    ],
    coursework: [
      "Physics",
      "Mathematics",
      "Chemistry",
      "English Core",
      "Computer Science Fundamentals"
    ]
  },
  {
    id: "class-x",
    institution: "Secondary High School",
    degree: "Secondary School Certificate (Class X)",
    boardOrUniversity: "Madhya Pradesh Board of Secondary Education (MPBSE)",
    duration: "Completed in 2023",
    score: "94.8%",
    scoreLabel: "Aggregate Percentage",
    location: "Madhya Pradesh",
    status: "Completed",
    highlights: [
      "Achieved an outstanding 94.8% aggregate score with subject distinctions across the board.",
      "Secured top percentile standing in Mathematics and Science examinations.",
      "Active participation in science olympiads, debate clubs, and youth leadership forums."
    ],
    coursework: [
      "Advanced Science",
      "General Mathematics",
      "Social Sciences",
      "Language & Literature",
      "Information Technology"
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "gradientts-intern",
    role: "Campus Growth Associate Intern",
    company: "Gradientts",
    duration: "September 2026 – December 2026",
    location: "Bhopal / Remote",
    type: "Internship",
    description: "Spearheaded user acquisition strategies, student engagement initiatives, and tech event management across engineering campuses.",
    achievements: [
      "Orchestrated campus adoption drives scaling platform user registration across multiple engineering departments.",
      "Planned and executed interactive technology orientation workshops and coding challenges for 300+ university students.",
      "Established peer ambassador channels, collecting qualitative product feedback to guide sprint iterations for the core web platform.",
      "Coordinated with cross-functional leadership to align brand communication with student engineering communities."
    ],
    skillsApplied: [
      "Campus Community Growth",
      "Event Management",
      "Brand Advocacy",
      "Stakeholder Communication",
      "User Adoption Analytics"
    ]
  },
  {
    id: "internshala-isp",
    role: "Internshala Student Partner (ISP)",
    company: "BUIT, Bhopal",
    duration: "September 2026 – October 2026",
    location: "BUIT Campus, Bhopal",
    type: "Student Leadership",
    description: "Acted as the vital strategic bridge between university students and national career, internship, and skill-building opportunities.",
    achievements: [
      "Served as the official university liaison, connecting undergraduate cohorts directly with verified internships and training programs.",
      "Mentored and guided 150+ peer candidates through profile optimization, resume structuring, and tech internship discovery.",
      "Executed targeted social media and on-campus awareness drives, increasing active student registrations by 45%.",
      "Awarded commendation for leadership efficacy, punctual reporting, and impactful community outreach."
    ],
    skillsApplied: [
      "Peer Mentorship",
      "Career Development",
      "Strategic Outreach",
      "Public Speaking",
      "Social Media Marketing"
    ]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: "core-languages",
    title: "Core Languages & Frontend",
    description: "Building responsive, modern, and high-performance user interfaces with clean architecture.",
    skills: [
      { name: "HTML5 & Semantic Markup", level: 92, category: "core", tag: "Markup & Accessibility" },
      { name: "CSS3 & Modern Layouts", level: 90, category: "core", tag: "Flexbox, Grid, Animations" },
      { name: "JavaScript (ES6+)", level: 86, category: "core", tag: "Async, DOM, Modern Syntax" },
      { name: "React.js", level: 82, category: "core", tag: "Hooks, State, Components" },
      { name: "Tailwind CSS", level: 90, category: "core", tag: "Utility-First, Responsive" },
      { name: "TypeScript Basics", level: 75, category: "core", tag: "Type Safety & Interfaces" }
    ]
  },
  {
    id: "tools-dev",
    title: "Developer Tools & Environment",
    description: "Industry-standard development workflows, version control, and rapid build pipelines.",
    skills: [
      { name: "Git & GitHub", level: 85, category: "tools", tag: "Version Control & PRs" },
      { name: "Vite & Modern Bundlers", level: 80, category: "tools", tag: "Fast Builds & Dev Server" },
      { name: "Responsive UI/UX Design", level: 88, category: "tools", tag: "Mobile-First & Breakpoints" },
      { name: "REST APIs & Fetch/Axios", level: 82, category: "tools", tag: "Client-Server Data Flow" },
      { name: "VS Code & DevTools", level: 90, category: "tools", tag: "Debugging & Extensions" }
    ]
  },
  {
    id: "leadership-growth",
    title: "Leadership & Growth",
    description: "Catalyzing community engagement, cross-functional collaboration, and strategic marketing.",
    skills: [
      { name: "Brand Management", level: 88, category: "growth", tag: "Brand Identity & Positioning" },
      { name: "Effective Leadership", level: 90, category: "growth", tag: "Team Motivation & Execution" },
      { name: "Social Media Marketing", level: 85, category: "growth", tag: "Campaigns & Growth Hacking" },
      { name: "Event Management", level: 87, category: "growth", tag: "Workshops & Hackathon Drives" },
      { name: "Campus Community Building", level: 92, category: "growth", tag: "Peer Networks & Onboarding" }
    ]
  }
];

export const certificationsData: CertificationItem[] = [
  {
    id: "cert-cloud",
    title: "Cloud Computing",
    issuer: "Leading Tech Education Initiative",
    issuedDate: "2026",
    credentialId: "CC-CSE-2026-8941",
    skillsCovered: [
      "Virtualization & Cloud Architectures",
      "IaaS, PaaS & SaaS Paradigms",
      "Cloud Security & Storage Systems",
      "Serverless & Scalable Deployments"
    ],
    summary: "Comprehensive exploration of cloud fundamentals, architectural best practices, elasticity, and distributed microservices deployment.",
    category: "technical"
  },
  {
    id: "cert-html-css",
    title: "HTML & CSS Fundamentals",
    issuer: "Web Engineering Certification Board",
    issuedDate: "2026",
    credentialId: "HC-DEV-2026-3329",
    skillsCovered: [
      "Semantic HTML5 Architecture",
      "Responsive Flexbox & CSS Grid Systems",
      "Cross-Browser Compatibility",
      "Modern CSS Animations & Transitions"
    ],
    summary: "Mastery of modern web document structuring, accessibility compliance (WCAG), responsive mobile-first styling, and CSS variables.",
    category: "technical"
  },
  {
    id: "cert-brand-leadership",
    title: "Brand Management & Effective Leadership",
    issuer: "Executive Leadership & Growth Academy",
    issuedDate: "2026",
    credentialId: "BL-MGT-2026-6104",
    skillsCovered: [
      "Strategic Brand Positioning",
      "Organizational Decision Making",
      "Conflict Resolution & Delegation",
      "Public Speaking & Persuasive Communication"
    ],
    summary: "Professional training focusing on establishing resonant organizational identities, driving team alignment, and orchestrating high-trust peer culture.",
    category: "management"
  },
  {
    id: "cert-social-marketing",
    title: "Social Media Marketing",
    issuer: "Digital Marketing Institute",
    issuedDate: "2026",
    credentialId: "SM-MKT-2026-1188",
    skillsCovered: [
      "Audience Segmentation & Persona Mapping",
      "Campaign Performance Metrics & KPI Tracking",
      "Content Calendar Scheduling",
      "Organic Growth & Funnel Optimization"
    ],
    summary: "Practical training in designing organic digital campaigns, optimizing conversion funnels, and cultivating high-retention student brand advocacy.",
    category: "management"
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: "devpulse",
    title: "DevPulse - Campus Tech Community Portal",
    subtitle: "Collaborative Student Developer Hub & Event Portal",
    description: "An upcoming modern full-stack web application tailored for college developers to share coding resources, showcase side projects, form hackathon teams, and track campus tech workshops in real-time.",
    tags: ["React", "TailwindCSS", "JavaScript", "REST APIs"],
    category: "Web Application",
    mockupType: "community",
    highlights: [
      "Real-time event RSVP board with calendar integration for university technical workshops.",
      "Interactive peer collaboration lounge with project tag filtering and team matching.",
      "Responsive dark-first dashboard with glassmorphism cards and cyan accent highlights."
    ],
    githubUrl: "https://github.com/adarshsinghchauhan/devpulse-campus-hub",
    liveDemoUrl: "#live-demo-devpulse",
    implementationDetails: "Engineered using React functional components, custom hooks for state management, Tailwind CSS utility classes, and dynamic client-side filtering."
  },
  {
    id: "algoviz",
    title: "AlgoViz - Algorithm & Graph Visualizer",
    subtitle: "Interactive Data Structure & Sorting Engine",
    description: "An interactive, web-based visualizer designed for CSE students to visually step through sorting algorithms (Merge, Quick, Bubble) and graph traversals (BFS, DFS) with customizable array speeds.",
    tags: ["React", "JavaScript", "TailwindCSS", "HTML5 Canvas"],
    category: "Educational CS Tool",
    mockupType: "algorithm",
    highlights: [
      "Live interactive sorting visualizer with bar-height animations, comparisons, and swap counters.",
      "Graph node pathfinding simulations highlighting visited states and shortest path traces.",
      "Configurable execution delay slider and custom array randomized generators."
    ],
    githubUrl: "https://github.com/adarshsinghchauhan/algoviz-visualizer",
    liveDemoUrl: "#live-demo-algoviz",
    implementationDetails: "Built using React state loops, async sleep dispatchers for frame synchronization, and modular algorithm generators implementing time & space complexity monitors."
  },
  {
    id: "omnidesk",
    title: "OmniDesk - Academic Workflow & Note Hub",
    subtitle: "Student Productivity & Assignment Tracker",
    description: "A streamlined, all-in-one productivity suite for engineering undergraduates featuring live markdown lecture note-taking, assignment deadline kanban, and semester SGPA/CGPA projection calculators.",
    tags: ["React", "TailwindCSS", "JavaScript", "LocalStorage API"],
    category: "Productivity Suite",
    mockupType: "workspace",
    highlights: [
      "Split-pane markdown previewer with syntax highlighting for technical code snippets.",
      "Assignment deadline tracker with urgency badges, status categories, and completion analytics.",
      "Offline-first persistence utilizing browser storage for uninterrupted library study sessions."
    ],
    githubUrl: "https://github.com/adarshsinghchauhan/omnidesk-student-hub",
    liveDemoUrl: "#live-demo-omnidesk",
    implementationDetails: "Utilizes React 19 memoized state handlers, custom storage synchronization hooks, and a clean keyboard-accessible tab navigation model."
  }
];
