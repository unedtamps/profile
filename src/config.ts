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
    "I'm a passionate and results-driven Junior Software Engineer with a strong foundation in full-stack development. I thrive on building innovative solutions and have hands-on experience with a diverse range of technologies including Golang, TypeScript, and Python. My project portfolio showcases my ability to develop everything from scalable backend services to dynamic user interfaces. I am particularly interested in the application of AI and have experience building intelligent systems with Deep Learning and Large Language Models. I am a quick learner, a collaborative team player, and I am eager to contribute my skills to a challenging and growth-oriented role.",
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
      name: "Raihasa",
      dateRange: "Jul 2024 - Oct 2024",
      contributors: "5",
      description:
        "This project aims to provide students with opportunities to connect with scholarship awardees, access peer teaching, and obtain information about scholarships and the application process. My primary contribution was in developing the server-side and backend services, deploying the application for optimal performance, and managing the database to ensure data security and integrity.",
      link: "https://www.raihasa.id/",
      skills: ["Next JS", "Typescript", "Node JS", "Express Js"],
      preview: "/raihasa.png",
    },
    {
      name: "Canopy",
      description:
        "Fullstack Developer responsible for building internal web applications to support network operations at Telkomsel Surabaya. Developed frontend using React with integrated map providers to visualize network coverage and performance metrics through interactive maps and graphs, while designing and implementing backend services in Golang for data processing and API integration. Integrate Gemini API to create support chatbot, I contributed to the Golang backend, Gemini chatbot integration, and React JS initialization.",
      dateRange: "Jul 2025 - Oct 2025",
      contributors: "2",
      source: "https://github.com/unedtamps/kp-nop-telkomsel",
      skills: ["Golang", "React JS", "LLM", "LangGraph", "Mapbox"],
      preview: "/canopy.png",
    },
    {
      name: "CineVibe",
      description:
        "A real-time voice-based social platform for film enthusiasts, built as a Clubhouse-style audio app for live movie discussions. Users create themed rooms with movies sourced from TMDB, invite participants, and hold moderated voice conversations. Features include WebSocket-based signaling for hand raises and mic control, WebRTC audio via LiveKit Cloud, a role-based moderation system (master/speaker/listener), Google OAuth authentication with Redis session management, and a real-time presence system. The backend is built with Golang using Gin and gorilla/websocket, backed by PostgreSQL and Redis, while the frontend uses Next.js with TypeScript, Tailwind CSS, and shadcn/ui.",
      dateRange: "May 2026 - June 2026",
      contributors: "1",
      link: "https://cinevibe.unedotampubolon.com",
      source: "https://github.com/unedtamps/cinevibe",
      skills: ["Next JS", "Typescript", "Websocket", "WebRTC", "Golang"],
      preview: "/cinevibe.png",
    },
    {
      name: "Lensboxd",
      description:
        "Lensboxd is a web application that provides personalized movie recommendations. Users can get recommendations based on their Letterboxd username or by providing a list of seed movies. This Web Using API From  https://github.com/unedtamps/lensboxd-api",
      dateRange: "Dec 2025 - Jan 2026",
      contributors: "1",
      link: "https://lensboxd.site",
      source: "https://github.com/unedtamps/lensboxd",
      skills: ["React JS", "Typescript", "Zustand"],
      preview: "/muse.png",
    },
    {
      name: "Tunara",
      description:
        "Tunara is an innovative Android app that leverages AI-powered image analysis to accurately identify traditional Indonesian musical instruments. Built with Java and integrated with smart APIs, it allows users to capture images using their phone’s camera for real-time instrument recognition, making it a practical cultural education tool.  Tunara promotes the preservation and exploration of Indonesia’s musical heritage, ideal for education, cultural promotion, and personal discovery. My contribution was designing the application and building it from scratch using Java. My friend and I also built an AI for detection using Roboflow with the YOLO algorithm",

      dateRange: "Jun 2025 - Jul 2025",
      contributors: "3",
      link: "https://drive.google.com/file/d/1grFAot_kDKyrm6FWmdI4hICE3luQzDlQ/view",
      source: "https://github.com/unedtamps/tunara",
      skills: ["Android", "XML", "Java", "Deep Learning", "YOLO"],
      preview: "/tunara.png",
    },
    {
      name: "API Letterboxd",
      description:
        "Simple API provider get data from https://letterboxd.com and Movie Recommendation Model. Scrape lists of currently popular Letterboxd users, pull comprehensive movie diaries and written reviews from specific profiles. Access scraped film details and user activity through structured endpoints and get film recommendations based on user preferences and seed films. ",
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
      name: "Schematics 2024",
      description:
        "This project was part of an annual event organized by my faculty. I was invited to contribute on the server side, responsible for building all required services with a focus on performance and security.The backend was built using Express with TypeScript, while the frontend used React with Next.js. The project uses the agile method and conducts scrum every week to work on one service",
      link: "https://www.schematics-its.com/",
      dateRange: "Mar 2024 - Jan 2025",
      contributors: "6",
      skills: ["Node JS", "Typescript", "Express JS", "Prisma"],
      preview: "/sch.png",
    },
    {
      name: "OrbitSearch",
      description:
        "This project provides a simple API gateway for searching content (movies, books, TV shows) through Jackett. It uses the go-jackett library to interact with a running Jackett instance and exposes a RESTful API.",
      link: "https://orbit.unedotampubolon.com/",
      dateRange: "Jan 2026 - Feb 2026",
      source: "https://github.com/unedtamps/orbit",
      contributors: "1",
      skills: ["Go", "HTML", "CSS", "Torrent", "Javascript"],
      preview: "./orbit.png",
    },
    {
      name: "Neural Style Transfer",
      description:
        "This project explores the implementation of advanced Neural Style Transfer (NST) and Image-to-Image translation techniques. By leveraging DRIT++ and CycleGAN, we demonstrate the ability to translate images across different domains while preserving structural integrity. I contributed to worked on building the drit++ implementation",
      dateRange: "Feb 2025 - May 2025",
      contributors: "2",
      source: "https://github.com/unedtamps/neural-style-transfer.git",
      skills: ["CycleGAN", "DRIT++", "DeepLearning", "Pytorch"],
      preview: "/nst.png",
    },

    {
      name: "Sphere Online Meme",
      description:
        "This project is for completion of web development course in campus. this web aim is to give a context to a meme. User can post a meme and also give a context to a meme. Meme can have the origin like where is came from and why the meme is spread. Admin can give a verdict to a origin , is it good or not.",
      dateRange: "Jul 2025 - Oct 2025",
      contributors: "2",
      source: "https://github.com/unedtamps/spom",
      skills: ["Laravel", "PHP", "Livewire", "Blade"],
      preview: "/spom.png",
    },
  ],
  experience: [
    {
      company: "Schematics ITS",
      title: "Backend Developer Expert Staff",
      dateRange: "Mar 2023 - Dec 2024",
      bullets: [
        "Designed and developed RESTful APIs to support core features of the platform, ensuring scalability and maintainability",
        "Collaborated with the project manager to complete assigned tasks on time, contributing to successful project milestones",
        "Implemented efficient backend solutions that enhanced system performance and reliability",
      ],
    },
    {
      company: "Ini Lho ITS",
      title: "Backend Developer Expert Staff",
      dateRange: "Oct 2023 - Jun 2024",
      bullets: [
        "Successfully developed and deployed RESTful APIs using TypeScript to support the Ini Lho ITS website.",
        "Managed database schemas and queries efficiently using Prisma ORM, ensuring optimized data handling",
      ],
    },
    {
      company: "PT. Telkomsel",
      title: "Fullstack Developer Intern",
      dateRange: "Jun 2025 - Aug 2025",
      bullets: [
        "Built an internal company website to display coverage and performance data for Surabaya and Madura.",
        "Developed the frontend using React.js and the backend using Golang.",
        "Created an AI Chatbot Agent leveraging MCP, LangChain, and LangGraph for enhanced automation and interaction.",
        "Developed the frontend using React.js and the backend using Golang.",
        "Created an AI Chatbot Agent leveraging MCP, LangChain, and LangGraph for enhanced automation and interaction.",
        "Implementing React Js and Golang backend and creating Chatbot AI Agent using MCP with Langchain and Langgraph",
      ],
    },
    {
      company: "Beta U Software House",
      title: "Fullstack Developer",
      dateRange: "Jun 2024 - Jun 2025",
      bullets: [
        "Successfully contributed to projects assigned by the Product Manager, ensuring on-time completion and delivery to production",
        "Assisted in deploying websites to production environments, ensuring smooth launches and stable performanc",
      ],
    },
  ],
  education: [
    {
      school: "Sepuluh Nopember Institute of Technology (ITS)",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2022 - 2026",
      achievements: [
        "GPA: 3.79/4.00",
        "Relevant Coursework: Data Structures, Algorithms, Software Engineer, Database Systems, Cloud Computing, Deep Learning",
      ],
    },
  ],
};
