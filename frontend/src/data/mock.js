import paypanda1 from "../assets/projects/paypanda1.webp";
import paypanda2 from "../assets/projects/paypanda2.webp";
import onepip from "../assets/projects/onepip.webp";
import credo from "../assets/projects/credo.webp";
import midco from "../assets/projects/midco.webp";
import trump from "../assets/projects/trump.webp";
import hbc from "../assets/projects/hbc.webp";
import flash from "../assets/projects/flash.webp";
import skillgenix from "../assets/projects/skillgenix.webp";
import ibo from "../assets/projects/ibo.webp";

export const projectsData = {
  fintech: [
    {
      id: 1,
      name: "PayPanda",
      domain: "Fintech",
      description: "A scalable fintech platform enabling AEPS, DMT, and recharge services with secure role-based access for retailers and distributors.",
      url: "https://paypanda.in/",
      image: paypanda1,
      techStack: ["React.js", "Node.js", "GraphQL", "MongoDB", "JWT", "OAuth2"],
      impact: "Improved performance by 15% with scalable UI architecture and reduced API calls using GraphQL"
    },
    {
      id: 2,
      name: "PayPanda Admin",
      domain: "Fintech",
      description: "Advanced admin dashboard for managing PayPanda operations with role-based dashboards, multi-bank integrations, and real-time transaction tracking.",
      url: "https://admin.paypanda.in/",
      image: paypanda2,
      techStack: ["React", "Chart.js", "Node.js", "PostgreSQL"],
      impact: "Real-time monitoring of 50K+ users with secure authentication system"
    },
    {
      id: 3,
      name: "OnePip",
      domain: "Fintech",
      description: "A real-time trading platform with portfolio tracking, live market data, and WebSocket-based streaming for millisecond updates.",
      url: "https://onepip.app/",
      image: onepip,
      techStack: ["React.js", "Node.js", "MongoDB", "WebSockets", "GraphQL"],
      impact: "Reduced network calls by 40% with real-time system delivering millisecond updates"
    }
  ],
  telecom: [
    {
      id: 4,
      name: "Credo Mobile",
      domain: "Telecom",
      description: "Progressive mobile carrier platform offering ethical and sustainable wireless services with advanced plan management.",
      url: "https://www.credomobile.com/",
      image: credo,
      techStack: ["React", "Node.js", "Stripe", "Twilio API"],
      impact: "Serving 100K+ customers with automated billing system"
    },
    {
      id: 5,
      name: "Midco",
      domain: "Telecom",
      description: "Full-service telecommunications platform providing internet, TV, and phone services with self-service customer portal.",
      url: "https://midco.com/",
      image: midco,
      techStack: ["React", "TypeScript", "GraphQL", "AWS"],
      impact: "Reduced customer support calls by 40% with self-service"
    },
    {
      id: 6,
      name: "Trump Mobile",
      domain: "Telecom",
      description: "Mobile carrier platform with streamlined plan selection, account management, and payment processing.",
      url: "https://trumpmobile.com/",
      image: trump,
      techStack: ["React", "Node.js", "Express", "MySQL"],
      impact: "Optimized checkout flow increased conversions by 35%"
    },
    {
      id: 7,
      name: "HBC Mobile",
      domain: "Telecom",
      description: "Community-focused mobile service platform with family plan management and usage tracking features.",
      url: "https://mobile.hbci.com/",
      image: hbc,
      techStack: ["React", "Redux", "Node.js", "MongoDB"],
      impact: "Handles 50K+ active subscribers with real-time usage data"
    },
    {
      id: 8,
      name: "Flash Mobile",
      domain: "Telecom",
      description: "Modern mobile carrier with transparent pricing, instant plan activation, and user-friendly account management.",
      url: "https://www.flashmobile.com/plans",
      image: flash,
      techStack: ["Next.js", "Tailwind", "Node.js", "Stripe"],
      impact: "Instant plan activation with automated provisioning"
    }
  ],
  ai_enterprise: [
    {
      id: 9,
      name: "Averti System",
      domain: "AI / Enterprise",
      description: "Smart Gas & Fire Safety System that detects LPG leaks, carbon monoxide, smoke and fire - alerts you in under 2 seconds for homes, restaurants, and industries.",
      url: "https://life.avertisystems.com",
      image: null,
      techStack: ["React", "Python", "IoT", "Real-time Alerts"],
      impact: "24/7 monitoring with 4 hazard types detection and 100% wireless system"
    },
    {
      id: 10,
      name: "Client Averti",
      domain: "AI / Enterprise",
      description: "Enterprise client management platform with AI-driven analytics, reporting, and workflow automation for Averti systems.",
      url: "https://client.avertisystems.com/",
      image: null,
      techStack: ["React", "Node.js", "MongoDB", "ML Models"],
      impact: "Automated 70% of manual workflows with AI assistance"
    },
    {
      id: 11,
      name: "SkillGenix",
      domain: "AI / Enterprise",
      description: "AI-powered skill development and learning platform with personalized learning paths, progress tracking, and career growth acceleration.",
      url: "https://skillsgenix.com",
      image: skillgenix,
      techStack: ["Next.js", "AI/ML", "Node.js", "Redis"],
      impact: "Personalized learning for 10K+ users with adaptive AI"
    }
  ],
  crm: [
    {
      id: 12,
      name: "IBO Auction",
      domain: "E-Commerce",
      description: "Real-time bidding platform enabling users to participate in live auctions with secure transactions, dynamic price updates, and real-time UI updates.",
      url: "https://ibo.auction/",
      image: ibo,
      techStack: ["React.js", "Node.js", "REST APIs", "WebSockets"],
      impact: "Built real-time bidding system with improved user engagement and scalable frontend"
    }
  ]
};

export const skills = [
  // Frontend
  { name: "React.js", category: "Frontend", level: "Expert" },
  { name: "Next.js", category: "Frontend", level: "Expert" },
  { name: "TypeScript", category: "Frontend", level: "Advanced" },
  { name: "JavaScript (ES6+)", category: "Frontend", level: "Expert" },
  { name: "Tailwind CSS", category: "Frontend", level: "Expert" },
  { name: "Redux/Context API", category: "Frontend", level: "Advanced" },
  
  // Backend
  { name: "Node.js", category: "Backend", level: "Expert" },
  { name: "Express.js", category: "Backend", level: "Expert" },
  { name: "Python", category: "Backend", level: "Advanced" },
  { name: "GraphQL", category: "Backend", level: "Advanced" },
  { name: "REST APIs", category: "Backend", level: "Expert" },
  
  // Real-time Technologies
  { name: "Socket.io", category: "Real-time", level: "Expert" },
  { name: "WebSockets", category: "Real-time", level: "Expert" },
  { name: "WebRTC", category: "Real-time", level: "Advanced" },
  { name: "Real-time Data Streaming", category: "Real-time", level: "Expert" },
  
  // AI/ML
  { name: "LangChain", category: "AI/ML", level: "Advanced" },
  { name: "OpenAI Integration", category: "AI/ML", level: "Advanced" },
  { name: "AI Chatbots", category: "AI/ML", level: "Advanced" },
  { name: "Machine Learning", category: "AI/ML", level: "Intermediate" },
  
  // Database
  { name: "MongoDB", category: "Database", level: "Expert" },
  { name: "PostgreSQL", category: "Database", level: "Advanced" },
  { name: "Redis", category: "Database", level: "Advanced" },
  { name: "MySQL", category: "Database", level: "Advanced" },
  
  // DevOps & Cloud
  { name: "AWS", category: "DevOps", level: "Advanced" },
  { name: "Docker", category: "DevOps", level: "Advanced" },
  { name: "CI/CD", category: "DevOps", level: "Intermediate" },
  { name: "Nginx", category: "DevOps", level: "Intermediate" },
  
  // Other
  { name: "Git/GitHub", category: "Tools", level: "Expert" },
  { name: "Agile/Scrum", category: "Tools", level: "Advanced" },
  { name: "Video/Audio Calls", category: "Specialty", level: "Advanced" },
  { name: "Payment Integration", category: "Specialty", level: "Expert" }
];

export const experience = [
  {
    company: "Vcare",
    role: "Frontend Developer",
    range: "Oct 2025 — Present",
    tags: ["Telecom & Payment"],
    bullets: [
      "Developing scalable React.js frontend applications for telecom and VoIP-based platforms serving real-time usage data.",
      "Integrating telecom and payment APIs, handling real-time data rendering across customer-facing dashboards.",
      "Collaborating with backend and business teams to translate requirements into responsive, high-performance UI."
    ]
  },
  {
    company: "Microhub Technology",
    role: "Full Stack Developer",
    range: "Dec 2024 — Oct 2025",
    tags: ["Telecom"],
    bullets: [
      "Built and enhanced frontend applications using React.js and modern JavaScript for telecom and service-based platforms.",
      "Translated business requirements into functional UI components, integrating REST APIs and optimizing frontend performance.",
      "Contributed to solution design in cross-functional team discussions, supporting full delivery lifecycle from requirements to deployment."
    ]
  },
  {
    company: "PayPanda",
    role: "React Developer",
    range: "Jun 2024 — Nov 2024",
    tags: ["Fintech"],
    bullets: [
      "Developed fintech dashboards using React.js and Redux for payment systems including AEPS, DMT, and wallet services.",
      "Integrated APIs for real-time transaction data, improving UI performance and overall user experience.",
      "Collaborated with cross-functional teams in an Agile environment to deliver payment platform features on schedule."
    ]
  },
  {
    company: "Tech Aura Private Limited",
    role: "React Developer",
    range: "Apr 2022 — Jun 2024",
    tags: ["CRM & Telecom"],
    bullets: [
      "Built reusable UI components using React.js, HTML, CSS, and JavaScript for CRM and telecom-based applications.",
      "Implemented responsive, user-friendly designs and collaborated with backend teams on API integration.",
      "Enhanced application usability and performance across mobile, tablet, and desktop devices."
    ]
  }
];

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/parimaldhruv7", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/parimalsrivastav", icon: "linkedin" },
  { name: "Email", url: "mailto:parimaldhruv7@gmail.com", icon: "mail" }
];

export const personalInfo = {
  name: "Parimal Srivastav",
  title: "Full Stack Developer",
  tagline: "Building scalable fintech, telecom, and AI platforms",
  email: "parimaldhruv7@gmail.com",
  phone: "+91 7985724785",
  location: "Noida, India",
  resumeUrl: "/resume.pdf"
};