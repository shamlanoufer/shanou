import { Project, Service, SkillCategory, EducationItem } from "./types";

export const SERVICES: Service[] = [
  {
    num: "01",
    title: "Software Development",
    desc: "Building reliable, scalable, and efficient applications by combining problem-solving, clean code, and modern development practices."
  },
  {
    num: "02",
    title: "UI/UX Design",
    desc: "Creating intuitive, responsive, and engaging user experiences through extensive user research, design thinking, and HCI-principled wireframing."
  },
  {
    num: "03",
    title: "Business Analysis",
    desc: "Understanding business needs, analyzing complex requirements, and translating ideas into cohesive, practical technology solutions."
  },
  {
    num: "04",
    title: "Prototyping",
    desc: "Transforming concepts into interactive, high-fidelity prototypes in Figma and Flutter to validate ideas and gather rich user feedback."
  },
  {
    num: "05",
    title: "Front-End Development",
    desc: "Developing responsive, accessible, and high-performance interfaces that bring design visions to life using modern frameworks."
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    num: "01",
    title: "Frontend Stack",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React", "Tailwind CSS", "Bootstrap"]
  },
  {
    num: "02",
    title: "Backend Stack",
    skills: ["Node.js", "Express.js", "PHP", "RESTful APIs", "JWT Authentication"]
  },
  {
    num: "03",
    title: "Mobile Stack",
    skills: ["Flutter", "Dart", "Android Studio", "Room Database", "Retrofit APIs"]
  },
  {
    num: "04",
    title: "Database Stack",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Firebase Firestore", "Prisma ORM"]
  },
  {
    num: "05",
    title: "UI/UX Stack",
    skills: ["Figma", "Wireframing", "High-Fidelity Prototyping", "HCI Principles", "Design Systems", "User Research"]
  },
  {
    num: "06",
    title: "Data Analytics",
    skills: ["R", "RStudio", "ggplot2", "dplyr", "Power BI", "Data Visualization"]
  },
  {
    num: "07",
    title: "Cybersecurity",
    skills: ["Kali Linux", "Penetration Testing", "Nmap", "OWASP Top 10", "NIST CSF", "Wireshark"]
  },
  {
    num: "08",
    title: "Networking",
    skills: ["Cisco Packet Tracer", "VLAN Segmentation", "EIGRP & BGP", "Subnetting", "DHCP", "ACLs", "STP"]
  },
  {
    num: "09",
    title: "Dev & QA Tools",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Swagger", "SheetJS", "Selenium", "NetBeans"]
  }
];

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    period: "2026 – Present",
    degree: "BSc (Hons) Computer Science",
    school: "University of Bedfordshire (validated by SLIIT)",
    notes: "Final year undergraduate. Top-up degree focused on advanced software development, modern computer science concepts, and software engineering methodologies."
  },
  {
    period: "2024 – 2026",
    degree: "Higher Diploma in Information Technology",
    school: "SLIIT Kandy Uni",
    notes: "Developed a rock-solid foundation in programming fundamentals, networking, database systems, software engineering principles, and web technologies through hands-on coursework and collaborative team projects."
  },
  {
    period: "2010 – 2023",
    degree: "GCE Advanced Level",
    school: "Good Shepherd Convent, Kandy",
    notes: "Biological Science Stream. Built a strong academic foundation while developing analytical thinking, leadership skills, and the ability to collaborate effectively in diverse student committees."
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Medicare — Clinic & Pharmacy Management System",
    year: "2025 – 2026",
    cats: ["UI/UX", "Web Application", "Freelance"],
    img: "assets/medicare.jpg",
    type: "Full-Stack Web Application",
    tech: ["Figma", "React", "TypeScript", "Vite", "React Router DOM", "TanStack Query", "React Hook Form", "Zod", "Tailwind CSS", "Recharts", "Node.js", "Express.js", "Prisma ORM", "PostgreSQL", "JWT", "SheetJS", "jsPDF", "Swagger"],
    figmaLink: "https://www.figma.com/design/umRo3Ggfe7f90QPd05jkgd/Medicare?node-id=0-1&t=RQeks5rx2qIcujA3-1",
    githubLink: "https://github.com/shamlanoufer/medicare.git",
    desc: "Designed and developed a comprehensive web-based Clinic & Pharmacy Management System to streamline clinic operations, medicine inventory management, patient billing, supplier management, and secure pharmacy workflows. The system digitizes the complete medicine lifecycle from supplier inventory imports to patient billing and token-based medicine distribution while providing real-time stock monitoring, reporting, and administrative management.",
    featured: true,
    highlights: [
      "Designed the complete UI/UX in Figma, creating a modern, responsive, healthcare interface following accessibility guidelines for both Admin and Staff users.",
      "Developed a secure role-based system with JWT authentication, allowing administrators to manage staff accounts and specific access permissions.",
      "Built a comprehensive medicine inventory module featuring full CRUD operations, manual medicine entry, Excel-based bulk imports (SheetJS), supplier management, batch tracking, expiry monitoring, and automated low-stock alerts.",
      "Designed a patient consultation and billing workflow supporting optional patient details, consultation fees, additional medical service charges, automatic bill calculation, printable receipts, and unique token generation.",
      "Implemented a token-based medicine distribution process that securely verifies prescriptions and enables pharmacy staff to dispense medicines while automatically updating inventory levels.",
      "Created centralized management modules for stock control, suppliers, patient history, medicine requests, audit logs, and system-wide notifications.",
      "Designed interactive dashboards with real-time analytics, operational summaries, inventory insights, and historical data filtering using Recharts."
    ]
  },
  {
    id: 2,
    title: "Bambare — Travel Management System",
    year: "2024 – 2025",
    cats: ["Mobile App", "Ongoing", "Flutter"],
    img: "assets/bambare.jpg",
    type: "Cross-Platform Mobile Application",
    tech: ["Figma", "Flutter", "Dart", "Firebase", "Node.js", "Google Maps API", "RESTful APIs", "State Management"],
    githubLink: "https://github.com/shamlanoufer/Bambare_TMS.git",
    desc: "Designed and developed a cross-platform Travel Management System for a Sri Lankan tourism service provider, aimed at digitizing tour operations, bookings, navigation, and travel expense management through a mobile-first experience.",
    featured: true,
    highlights: [
      "Designed elegant user flows and interfaces for tour browsing, bookings, live navigation, expense tracking, and user profile management.",
      "Developed a scalable system architecture integrating Flutter mobile applications with RESTful Node.js backend services.",
      "Implemented real-time booking updates, push notifications, and interactive map-based travel experiences using Google Maps API.",
      "Created admin management dashboards for tour packages, hotels, reporting, and operational analytics.",
      "Focused heavily on usability, low-bandwidth accessibility, and seamless travel planning through modern mobile UX principles."
    ]
  },
  {
    id: 3,
    title: "QuantumForge Technologies — Security Assessment",
    year: "2024",
    cats: ["Security Assessment", "NIST", "OWASP"],
    img: "assets/security.jpg",
    type: "Enterprise Security Assessment & Remediation",
    tech: ["OWASP Top 10", "NIST CSF", "Kali Linux", "Penetration Testing", "Nmap", "WPScan", "Nikto", "Hydra", "Risk Quantification", "VLAN Segmentation"],
    pdfLink: "assets/Security_Vulnerability_Report.pdf",
    desc: "Conducted a simulated enterprise security assessment for a 22-employee software company, identifying critical infrastructure and application-level vulnerabilities and proposing a structured remediation roadmap using OWASP & NIST frameworks.",
    highlights: [
      "Identified critical vulnerabilities including weak authentication, flat network architecture, and outdated web components using Nmap, WPScan, Nikto, and Hydra.",
      "Designed a secure, segmented network architecture utilizing VLANs, subnets, and DMZ principles to protect sensitive database assets.",
      "Developed a phased remediation plan covering MFA deployment, central firewalls, automated patch management, and security awareness training.",
      "Performed detailed risk quantification using CVSS and Likelihood x Impact analysis to clearly articulate business exposure to executive stakeholders."
    ]
  },
  {
    id: 4,
    title: "VaultX — Multi-Bank Account Management",
    year: "2024",
    cats: ["UI/UX Design", "Figma", "HCI"],
    img: "assets/vaultx.jpg",
    type: "UI/UX Design & HCI Case Study",
    tech: ["Figma", "HCI Principles", "Wireframing", "High-Fidelity Prototyping", "Fitts's Law", "User Journey Mapping"],
    figmaLink: "https://www.figma.com/design/gkCOL9TMvrpwpZRLv5ShRC/VaultX",
    desc: "Designed a centralized mobile banking experience that allows users to manage multiple bank accounts securely within a single application, with a strong focus on usability, accessibility, and clear financial workflows.",
    highlights: [
      "Designed end-to-end user flows for seamless biometric login, unified financial dashboard, inter-bank transfers, bill payments, and spending analytics.",
      "Applied Human-Computer Interaction (HCI) principles to reduce cognitive load in complex transaction environments, optimizing button placements and information density.",
      "Created a robust, scalable visual design system in Figma with reusable UI components and a fully interactive micro-animated prototype."
    ]
  },
  {
    id: 6,
    title: "Aura & Co. — E-commerce Platform",
    year: "2024",
    cats: ["Web Development", "Full-Stack", "PHP"],
    img: "assets/aura.jpg",
    type: "Full-Stack Web Application",
    tech: ["HTML5", "CSS3", "JavaScript", "MySQL", "PHP", "Responsive Design", "Payment Gateway Simulation"],
    githubLink: "https://github.com/shamlanoufer/Aura-Co-frontend.git",
    desc: "Developed a full-stack e-commerce platform for a jewelry brand, focusing on responsive design, smooth product browsing, and secure user interactions.",
    highlights: [
      "Implemented a secure session-based authentication system, custom user wishlists, shopping carts, and a multi-step checkout functionality.",
      "Built beautiful responsive layouts optimized for mobile, tablet, and desktop devices using modern CSS Flexbox and Grid.",
      "Integrated a structured MySQL database with a PHP backend for dynamic product queries, order management, and administrative stock updates."
    ]
  },
  {
    id: 7,
    title: "GlowGuide — Skincare Mobile Application",
    year: "2024",
    cats: ["Mobile App", "Android", "Java"],
    img: "assets/glowguide.jpg",
    type: "Native Android Application",
    tech: ["Java", "Android Studio", "Room Database", "Retrofit APIs", "SQLite", "Material Design Components"],
    githubLink: "https://github.com/shamlanoufer/glowguide",
    desc: "An Android skincare companion app designed to help users manage routines, track products, and monitor daily skin health progress through personalized features.",
    highlights: [
      "Designed Room database schema for high-performance offline storage of user profile data and skincare routine schedules.",
      "Integrated external APIs using Retrofit for skincare routine recommendations and product ingredient details.",
      "Implemented background reminder notifications, progress trackers with image uploads, and custom material themes."
    ]
  },
  {
    id: 8,
    title: "SLIIT City University Website Redesign",
    year: "2023",
    cats: ["UI/UX Case Study", "Redesign", "Figma"],
    img: "assets/sliit_redesign.jpg",
    type: "UI/UX Redesign & Information Architecture",
    tech: ["Figma", "UI/UX Principles", "Component Systems", "Information Architecture", "User Testing"],
    githubLink: "https://github.com/shamlanoufer/SLIIT-City-Uni-Website-Redesign.git",
    desc: "Redesigned the university website to improve usability, content discoverability, and accessibility through user-centered layouts and structured information architecture.",
    highlights: [
      "Identified critical navigation pain points in the existing platform and redesigned the global information architecture to improve discoverability.",
      "Created a unified, clean, visual design system in Figma with reusable component states (hover, focus, active).",
      "Applied accessibility-focused colors and typography scales matching Web Content Accessibility Guidelines (WCAG)."
    ]
  },
  {
    id: 9,
    title: "International Museum Network Design",
    year: "2024",
    cats: ["Networking", "Cisco"],
    img: "assets/museum_network.jpg",
    type: "Enterprise Network Design & Configuration",
    tech: ["Cisco Packet Tracer", "VLANs", "EIGRP", "BGP", "Subnetting", "DHCP", "ACLs", "STP"],
    githubLink: "https://github.com/shamlanoufer/Museum-Network-Design.git",
    pdfLink: "assets/museum_network.pdf",
    link: "assets/museum_network.pkt",
    linkLabel: "Download Packet Tracer File",
    desc: "Designed an enterprise-level network infrastructure for an international museum organization with multiple geographically distributed branches.",
    highlights: [
      "Designed a resilient multi-site topology securing inter-branch connectivity across international branches.",
      "Implemented VLAN segmentation to isolate guest Wi-Fi traffic, staff workstations, and internal artifact registry servers.",
      "Configured dynamic routing protocols including EIGRP for local networks and BGP for stable, redundant WAN links."
    ]
  },
  {
    id: 10,
    title: "Fuel Efficiency Statistical Analysis",
    year: "2024",
    cats: ["Data Analysis", "RStudio", "R"],
    img: "assets/fuel_analysis.jpg",
    type: "Data Science & Statistical Analysis",
    tech: ["RStudio", "ggplot2", "dplyr", "Inferential Statistics", "Linear Regression", "Auto-MPG Dataset"],
    githubLink: "https://github.com/shamlanoufer/Statistical-Analysis-of-Factors-Influencing-Automobile-Fuel-Efficiency.git",
    pdfLink: "assets/fuel_efficiency_analysis.pdf",
    desc: "Conducted statistical analysis on the Auto-MPG dataset to identify key factors influencing automobile fuel efficiency using R and ggplot2.",
    highlights: [
      "Performed data cleaning, missing value imputation, and preprocessing using dplyr and tidyr packages.",
      "Applied descriptive statistical measures and developed multiple linear regression models to predict miles-per-gallon (MPG).",
      "Created highly descriptive data visualizations including scatter plots, correlation matrices, and residual plots using ggplot2."
    ]
  },
  {
    id: 11,
    title: "LogisticsAutomation-G3",
    year: "2024",
    cats: ["Desktop App", "Java", "SQL"],
    img: "assets/logistics.jpg",
    type: "Desktop Application",
    tech: ["Java Swing", "MySQL", "JDBC", "Object-Oriented Programming (OOP)"],
    githubLink: "https://github.com/shamlanoufer/LogisticsAutomation",
    desc: "Developed a Java-based desktop application to streamline logistics operations including order processing, delivery scheduling, and operational reporting.",
    highlights: [
      "Designed and implemented the desktop user interface using Java Swing following user-friendly administrative layout principles.",
      "Integrated JDBC database drivers to establish stable CRUD connections with a local MySQL server.",
      "Programmed customized tracking features, status reports, and bulk order scheduling workflows."
    ]
  },
  {
    id: 12,
    title: "Student Record Management System",
    year: "2024",
    cats: ["Web App", "Node.js", "MongoDB"],
    img: "assets/student_mgmt.jpg",
    type: "Web Application",
    tech: ["Node.js", "Express.js", "MongoDB", "Bootstrap", "Mongoose", "REST APIs"],
    githubLink: "https://github.com/shamlanoufer/Student-Record-Management-System.git",
    desc: "A responsive web application for managing student records efficiently using a RESTful, database-driven architecture.",
    highlights: [
      "Developed secure RESTful API endpoints using Node.js and Express.js to perform flawless CRUD operations.",
      "Integrated MongoDB for schema-flexible data storage with Mongoose validation rules.",
      "Built a responsive client dashboard with Bootstrap featuring dynamic tables, search filters, and record edit forms."
    ]
  },
  {
    id: 13,
    title: "Professional Skills Portfolio",
    year: "2024",
    cats: ["Web Development", "Portfolio", "HCI"],
    img: "assets/portfolio.jpg",
    type: "Interactive Learning Portfolio",
    tech: ["HTML5", "CSS3", "JavaScript", "Netlify", "Orbital Navigation", "HCI Principles"],
    figmaLink: "https://www.figma.com/design/ps-portfolio-figma",
    desc: "Designed and developed an interactive single-page digital portfolio to document learning journeys across the Professional Skills module, showcasing key employability, leadership, and career development concepts.",
    highlights: [
      "Built a fully responsive portfolio using HTML, CSS, and vanilla JavaScript with a heavy focus on smooth entry animations and full accessibility.",
      "Designed an animated orbital navigation system with a concentric circular menu for intuitive and experimental content exploration.",
      "Implemented interactive modules illustrating Johari Window, Tuckman's Stages of Group Development, and BATNA/ZOPA negotiation models.",
      "Optimized load times and layout fluidity to secure 100/100 scores in accessibility and performance evaluations."
    ]
  }
];
