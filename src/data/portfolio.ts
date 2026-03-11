export const portfolioData = {
  personalDetails: {
    name: "Vi The Anh",
    email: "vianh1999bg@gmail.com",
    phone: "0969.468.213",
    roles: ["Fullstack Developer", "AI Integration Specialist"],
  },
  summary: `Software Engineer with over 5 years of experience in full-stack development and large-scale data scraping. Expertise in architecting robust backend systems, building intuitive frontends, and developing automated tools to extract and analyze complex data. Experienced in optimizing system performance through CI/CD pipelines and cloud-native technologies. Committed to an Agile mindset and collaborative environments.`,
  technicalSkills: {
    frontend: ["ReactJS", "Redux", "Next.js", "Angular", "React Native"],
    ui: ["Taiwind", "Shadcn UI", "Ant Design", "Material UI (MUI)", "Bootstrap", "React Native Paper"],
    backend: ["Node.js", "Bun", "NestJS", "Express.js", "Python"],
    databases: ["MongoDB", "PostgreSQL", "MySQL", "SQLite", "Redis", "IndexDb", "InfluxDB"],
    devops: ["Docker", "Azure", "Github Actions", "CI/CD Pipelines", "Microservices Architecture", "Jenkins"],
    messaging: ["Apache Kafka", "Socket.IO", "Pub/Sub", "RabbitMQ"],
    mobile: ["React Native CLI", "Expo", "React Navigation", "Reanimated", "Skia", "Native Modules"],
    ai: ["AI/LLM Integration", "RAG Systems", "AI Agents", "Automated Workflows"],
  },
  externalProjects: [
    {
      name: "R&B Mobile App",
      role: "Freelance Developer",
      description: "Developed and published the R&B mobile app to both the App Store and Google Play.",
      techStack: ["React Native", "Expo", "iOS", "Android"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "E-commerce Zalo Mini App",
      role: "Freelance Developer",
      description: "Built a fully functional e-commerce Zalo Mini App utilizing the ZMP framework.",
      techStack: ["Zalo Mini App", "ZMP Framework", "React"],
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Lead Generation Websites",
      role: "Freelance Developer",
      description: "Created lead-generation websites integrating HubSpot CRM for automated email campaigns and customer tracking.",
      techStack: ["HubSpot CRM", "Marketing Automation", "Web Design"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Custom E-commerce Sites",
      role: "Freelance Developer",
      description: "Designed and implemented custom e-commerce web architectures using WordPress.",
      techStack: ["WordPress", "PHP", "WooCommerce"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop"
    }
  ],
  experience: [
    {
      company: "FPT Corporation",
      period: "Aug 2025 - Present",
      projects: [
        {
          name: "Meup",
          role: "Fullstack Developer",
          responsibilities: [
            "Engineered a real-time data crawling system ingesting live metrics from 100+ TikTok Shop stores.",
            "Built interactive dashboards visualizing revenue, content KPIs, and KOC metrics.",
            "Implemented automatic data sync from Seller Center, P&L reports, and video/livestream performance.",
            "Designed a high-throughput data processing system handling 100K+ records daily.",
            "Integrated TikTok Shop APIs for comprehensive e-commerce data collection and management.",
            "Analyzed GMV, order metrics, and ad performance across videos and livestreams."
          ],
          techStack: ["React", "Bun", "Zustand", "TailwindCSS", "Node.js", "Redis", "TikTok Shop API", "PostgreSQL"]
        },
        {
          name: "Mobile App FPT Iviec",
          role: "Mobile Developer",
          responsibilities: [
            "Built a multi-platform recruitment app (React Native + Expo) for iOS/Android.",
            "Integrated an AI chatbot for job search, applications, and salary estimation.",
            "Developed AI-powered CV parsing to auto-generate candidate profiles.",
            "Implemented real-time CV scanning & eKYC tracking via WebSockets.",
            "Architected scalable UIs using Atomic Design and modular services.",
            "Optimized state & caching with TanStack Query and infinite scroll.",
            "Enabled real-time updates & push notifications via Socket.IO and FCM."
          ],
          techStack: ["React Native", "Expo", "TanStack Query", "Socket.IO", "FCM", "AI/LLM", "WebSocket"]
        }
      ]
    },
    {
      company: "SOTATEK",
      period: "May 2024 - Aug 2025",
      role: "Fullstack Developer",
      project: "Musinsa Radar",
      responsibilities: [
        "Built a high-throughput scraping engine (Puppeteer) to collect large-scale competitor pricing.",
        "Developed scalable REST APIs mapped to Musinsa's product inventory via similarity algorithms.",
        "Implemented real-time price comparison features to analyze market strategies.",
        "Architected event-driven data pipelines using Kafka, AWS Lambda, and SQS for async processing."
      ],
      techStack: ["React", "NestJS", "Kafka", "AWS Lambda", "AWS SQS", "Puppeteer", "MongoDB"]
    },
    {
      company: "FPT Software",
      period: "Sep 2021 - May 2024",
      role: "Fullstack Developer / Frontend Leader",
      project: "AkaAT",
      responsibilities: [
        "Led the frontend team in developing a comprehensive Test Management ecosystem.",
        "Built robust architectures handling massive verification datasets.",
        "Mentored junior developers and enforced composition patterns."
      ],
      techStack: ["React", "Node.js", "Electron", "Docker", "K8s", "MongoDB", "Redis", "PostgreSQL", "Azure"]
    },
    {
      company: "TENEOCTO TECHNOLOGIES LLC",
      period: "May 2020 - Aug 2021",
      projects: [
        {
          name: "Tene Productivity Hub",
          role: "Fullstack Developer",
          responsibilities: [
            "Developed a real-time bug tracking system with agile workflow integration.",
            "Built scalable UIs and REST APIs using React, Redux-Saga, and NodeJS."
          ],
          techStack: ["React", "NodeJS", "Redux-Saga", "MySQL", "Redis"]
        },
        {
          name: "Chatwork Desktop App",
          role: "Frontend Developer",
          responsibilities: [
            "Migrated desktop app from Electron 11 to 12 to improve real-time chat performance.",
            "Maintained features like screen sharing, file management, and system notifications."
          ],
          techStack: ["Electron", "React", "NodeJS"]
        }
      ]
    },
    {
      company: "EDUCA CORPORATION JSC",
      period: "Dec 2019 - May 2020",
      role: "Fullstack Developer - Fresher",
      project: "Education Platform",
      responsibilities: [
        "Created interactive educational games & quizzes, reaching 10,000+ weekly active users.",
        "Implemented frontend animation systems for smooth, cross-device user experiences.",
        "Integrated a Laravel backend with Angular, establishing secure role-based access control."
      ],
      techStack: ["Angular", "Laravel", "MySQL", "Redis"]
    }
  ]
};
