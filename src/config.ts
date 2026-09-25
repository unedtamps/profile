export const siteConfig = {
  name: "Unedo Tampubolon",
  title: "Junior Software Engineer",
  description: "Portfolio website of Unedo Tampubolon",
  accentColor: "#1d4ed8",
  social: {
    email: "unedo.tampubolon@gmail.com",
    linkedin: "https://www.linkedin.com/in/unedo-tampubolon/",
    twitter: "https://x.com/unedotamps",
    github: "https://github.com/unedtamps/",
  },
  aboutMe:
    "I'm a passionate and results-driven Junior Software Engineer with a strong foundation in full-stack development. I thrive on building innovative solutions and have hands-on experience with a diverse range of technologies including Golang, TypeScript, and Python. My project portfolio showcases my ability to develop everything from scalable backend services to dynamic user interfaces. I am particularly interested in the application of AI and have experience building intelligent systems with Deep Learning and Large Language Models. I am a quick learner, a collaborative team player",
  skills: [
    "Typescript",
    "React",
    "Laravel PHP",
    "Golang",
    "Python",
    "RESTful APIs Design",
    "Database Management",
    "Cloud Computing",
    "Docker & Kubernetes",
  ],
  projects: [
    {
      name: "TicketSaas",
      description:
        "Microservices ticketing platform built with Go, Kafka, Redis, PostgreSQL, and Next.js: event approval, seat reservations guarded by pessimistic locking in PostgreSQL, and payments coordinated through a transactional outbox.",
      source: "https://github.com/unedtamps/ticketbus",
      skills: ["Go", "Kafka", "Redis", "PostgreSQL", "Next JS"],
      preview: "/ticket.png",
    },
    {
      name: "OrbitSearch",
      description:
        "REST API gateway to search movies, books, and TV shows through a Jackett instance, built with the go-jackett library.",
      link: "https://orbit.unedotampubolon.com/",
      dateRange: "Jan 2026 - Feb 2026",
      source: "https://github.com/unedtamps/orbit",
      contributors: "1",
      skills: ["Go", "HTML", "CSS", "Torrent", "Javascript"],
      preview: "/orbit.png",
    },
    {
      name: "CS App",
      description:
        "Spring Boot backend for real-time chat with JWT auth, STOMP-over-WebSocket private messaging via RabbitMQ, MongoDB message history, PostgreSQL users, and OpenAPI documentation.",
      source: "https://github.com/unedtamps/csapp",
      skills: ["Java", "Spring Boot", "Websocket", "PostgreSQL", "MongoDB"],
      preview: "/CSApp.png",
    },
    {
      name: "CineVibe",
      description:
        "Real-time Clubhouse-style audio app for movie discussions: themed rooms from TMDB, WebRTC voice via LiveKit, role-based moderation; Golang backend, Next.js frontend.",
      dateRange: "May 2026 - June 2026",
      contributors: "1",
      link: "https://cinevibe.unedotampubolon.com",
      source: "https://github.com/unedtamps/cinevibe",
      skills: ["Next JS", "Typescript", "Websocket", "WebRTC", "Golang"],
      preview: "/cinevibe.png",
    },
    {
      name: "Tunara",
      description:
        "Android app that identifies traditional Indonesian musical instruments from a camera photo using a YOLO model I co-built with Roboflow.",
      dateRange: "Jun 2025 - Jul 2025",
      contributors: "3",
      link: "https://drive.google.com/file/d/1grFAot_kDKyrm6FWmdI4hICE3luQzDlQ/view",
      source: "https://github.com/unedtamps/tunara",
      skills: ["Android", "XML", "Java", "Deep Learning", "YOLO"],
      preview: "/tunara.png",
    },
    {
      name: "Lensboxd",
      description:
        "Personalized movie recommendations from your Letterboxd username or a list of seed movies.",
      dateRange: "Dec 2025 - Jan 2026",
      contributors: "1",
      link: "https://lensboxd.site",
      source: "https://github.com/unedtamps/lensboxd",
      skills: ["React JS", "Typescript", "Zustand"],
      preview: "/muse.png",
    },
    {
      name: "Lensboxd API",
      description:
        "API that scrapes Letterboxd profiles, diaries, and reviews, then serves them plus film recommendations through structured REST endpoints.",
      dateRange: "Dec 2025 - Jan 2026",
      contributors: "1",
      source: "https://github.com/unedtamps/lensboxd-api",
      link: "https://api.lensboxd.site/apidocs",
      skills: [
        "Python",
        "Flask",
        "Collaborative Filtering ALS",
        "Playwright",
        "Beautiful Soup",
      ],
      preview: "/api_muse.png",
    },
    {
      name: "NST",
      description:
        "Image-to-image translation using DRIT++ and CycleGAN to move artistic styles across domains; I built part of the DRIT++ implementation.",
      dateRange: "Feb 2025 - May 2025",
      contributors: "2",
      source: "https://github.com/unedtamps/neural-style-transfer.git",
      skills: ["CycleGAN", "DRIT++", "DeepLearning", "Pytorch"],
      preview: "/nst.png",
    },

    {
      name: "SPOM",
      description:
        "Meme site from a campus web-dev course: users post memes with their origin/context, and an admin issues a verdict on each origin.",
      dateRange: "Jul 2025 - Oct 2025",
      contributors: "2",
      source: "https://github.com/unedtamps/spom",
      skills: ["Laravel", "PHP", "Livewire", "Blade"],
      preview: "/spom.png",
    },
    {
      name: "Memori",
      description:
        "Redis-like in-memory cache server in Go with a binary TCP protocol, a pooled client for high throughput, TTL expiration, and a CLI; benchmarked head to head against Redis.",
      source: "https://github.com/unedtamps/memori",
      skills: ["Go", "Caching", "TCP Protocol", "Client Pool", "CLI"],
    },
    {
      name: "Blue Check Hider",
      description:
        "Cross-browser extension that hides tweets from blue-check verified users on X/Twitter with soft or hard hide modes and a live counter, shipping builds for Chrome, Edge, and Firefox.",
      source: "https://github.com/unedtamps/blue-check-hide",
      skills: ["Javascript", "WebExtension", "Chrome MV3", "Firefox MV2", "DOM"],
    },
  ],
  experience: [
    {
      company: "PT. Telkomsel",
      title: "Full-Stack Developer Intern",
      dateRange: "Jul 2025 - Sep 2025",
      bullets: [
        "Built an internal coverage and network-performance dashboard for Surabaya-Madura operations using React, TypeScript, and Golang Gin, integrating 15+ data sources and APIs",
        "Developed an AI data-query agent with LangChain, LangGraph, and MCP, enabling natural-language access to coverage data and reducing manual lookup",
      ],
    },
    {
      company: "Beta U Software House",
      title: "Backend Developer",
      dateRange: "Jun 2024 - Jun 2025",
      bullets: [
        "Led three backend engineers from architecture through production launch of a tutoring and scholarship consultation platform",
        "Built an Express JS backend for JWT authentication, RBAC, and Midtrans/Xendit payments; coordinated backend-frontend integration across 25+ features and deployed the platform to a VPS",
      ],
    },
    {
      company: "Ini Lho ITS",
      title: "Backend Developer",
      dateRange: "Oct 2023 - Feb 2024",
      bullets: [
        "Developed and deployed 20+ REST endpoints with TypeScript and Express.js for an ITS open-campus site used by 75,000+ visitors",
        "Designed 10+ relational tables to support reliable data flows across 20+ core modules",
      ],
    },
    {
      company: "Schematics ITS",
      title: "Backend Developer",
      dateRange: "Mar 2023 - Dec 2023",
      bullets: [
        "Built 30+ REST endpoints with PHP and Laravel for a production platform handling 50,000+ requests with 99% uptime",
        "Reduced API response time by 50% through query optimization and caching; delivered 20+ sprints with an eight-engineer cross-functional team",
      ],
    },
  ],
  education: [
    {
      school: "Sepuluh Nopember Institute of Technology (ITS)",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2022 - 2026",
      achievements: [
        "GPA: 3.78/4.00",
        "Relevant Coursework: Data Structures, Algorithms, Software Engineer, Database Systems, Cloud Computing, Deep Learning",
      ],
    },
  ],
};
