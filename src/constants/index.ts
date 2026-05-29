export const links = {
  contactEmail: "amitkumargaur632@gmail.com",
  sourceCode: "https://github.com/amitgaur1717",
};

export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
] as const;

export const clientReviews = [
  {
    id: 1,
    name: "Rizwan V K",
    position:
      "Senior Backend Engineer · Node.js, NestJS, Java, MongoDB, Kafka, AWS, GCP",
    img: "/assets/Rizwan.jpg",
    review:
      "I am pleased to work with Amit Kumar Gaur, an outstanding software developer with a strong focus on Node.js. Having had the opportunity to work alongside him at Reliance Industries Limited, I was continually impressed by his technical expertise and problem-solving abilities. Amit's proficiency in Node.js allowed us to build scalable and efficient applications, and his attention to detail ensured that our projects were both high-quality and reliable. I highly recommend Amit for any software development role, especially those focused on Node.js.",
  },
  {
    id: 2,
    name: "Akshay Bhavsar",
    position: "Full-Stack Engineer Developer · Angular, Node.js, Tech Enthusiast",
    img: "/assets/Akshay.jpg",
    review:
      "I had the pleasure of working with Amit Gaur at Jio, where he proved himself to be an outstanding Node.js developer. Amit was instrumental in delivering scalable, efficient backend solutions, and he took the lead on developing Kafka-based systems, leveraging his hands-on experience with Kafka to streamline data processing in our projects. His ability to troubleshoot and optimize complex systems made a significant impact.",
  },
  {
    id: 3,
    name: "Krishan Kumar",
    position:
      "Cloud Engineer at 66degrees · CKAD, GCP PCNE, GCP PCA, HashiCorp TA-003, Kubernetes, Docker",
    img: "/assets/Krishan.jpg",
    review:
      "I had the pleasure of hiring Amit Kumar Gaur for some POCs that required API development using Node.js, integrated with SQL and Oracle databases. Amit consistently demonstrated strong work ethics and reliability. Notably, in my absence, he took the initiative to collaborate with my team, ensuring the project was completed on time. His proactive approach and team spirit were commendable. I highly recommend Amit for any similar work.",
  },
  {
    id: 4,
    name: "Abhiraj Yadav",
    position: "Software Engineer at Capgemini",
    img: "/assets/Abhiraj.jpg",
    review:
      "Amit is a great resource. Always eager to learn new things and proactive in grabbing opportunities and deliver on time. Always ready to share his findings with the team makes him a great team worker as well.",
  },
] as const;

export const myProjects = [
  {
    title: "NourishU — AI-Powered Smart Meal Platform",
    desc: "NourishU is an LLM-powered meal recommendation engine that delivers personalized nutrition guidance by combining OpenAI GPT and Google Gemini APIs with a Retrieval-Augmented Generation pipeline. The system ingests user profiles, dietary constraints, and preference history to surface meal suggestions that adapt to each user in real time.",
    subdesc:
      "Built with Python, OpenAI GPT, Google Gemini, and vector embeddings for RAG, NourishU runs end-to-end pipelines for data ingestion, preprocessing, and LLM context delivery. Prompt engineering and A/B testing lifted recommendation quality and user engagement by 30%. Awarded a cash prize from the SPROUTS Startup Accelerator.",
    href: "https://github.com/amitgaur1717",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "OpenAI GPT",
        path: "/assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "Google Gemini",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "RAG / Vector DB",
        path: "/assets/framer.png",
      },
    ],
  },
  {
    title: "Real-Time AI Data Pipeline — Streaming Ingestion at Scale",
    desc: "A high-throughput streaming pipeline that ingests, transforms, and routes real-time event data into ML-ready feature stores. Built to support downstream inference services with low-latency, ordered, fault-tolerant delivery across distributed consumers.",
    subdesc:
      "Engineered with Apache Kafka, Python, Docker, and Kubernetes. Reduced data latency by 60% through optimized stream processing, parallel consumer groups, and workflow automation. Containerized for horizontal scalability and high availability across cloud environments.",
    href: "https://github.com/amitgaur1717",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "Apache Kafka",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "Python",
        path: "/assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "Docker",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Kubernetes",
        path: "/assets/framer.png",
      },
    ],
  },
  {
    title: "Audit First — Identity & Access Management Automation",
    desc: "An enterprise identity and access management system that automates authentication flows, API validation, and integration testing for security compliance. Designed to handle SSO and MFA pipelines at scale while maintaining strict audit trails for regulated environments.",
    subdesc:
      "Developed with Node.js and Azure B2C, then re-architected on serverless Azure Functions to reduce authentication latency by 30%. Automated API validation and integration testing workflows ensure security compliance and reliability across the entire identity lifecycle.",
    href: "https://github.com/amitgaur1717",
    texture: "/textures/project/project3.mp4",
    logo: "/assets/project-logo3.png",
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "Node.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "Azure B2C",
        path: "/assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "Azure Functions",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "SSO / MFA",
        path: "/assets/framer.png",
      },
    ],
  },
] as const;

export const workExperiences = [
  {
    id: 1,
    name: "California State University Long Beach",
    pos: "Student Office Assistant",
    duration: "Feb 2025 – May 2026",
    title:
      "Developed automated data processing and reporting workflows with Python and SQL, improving operational efficiency by 20% and reducing manual errors. Analyzed system usage data to identify bottlenecks and authored technical documentation that streamlined team onboarding.",
    icon: "/assets/cal.png",
    animation: "salute",
  },
  {
    id: 2,
    name: "Jio Platforms Limited",
    pos: "AI Software Developer",
    duration: "Sep 2022 – Jul 2024",
    title:
      "Architected scalable ML data pipelines with Python, SQL, and Apache Kafka for real-time AI inference. Deployed FastAPI and Node.js microservices that cut prediction latency by 35%, designed event-driven AWS and Azure architectures for distributed inference, and built Docker/Kubernetes/GitHub Actions CI/CD that reduced model deployment time by 40%.",
    icon: "/assets/jio.png",
    animation: "victory",
  },
  {
    id: 3,
    name: "Flipkart Private Limited",
    pos: "Software Developer Intern",
    duration: "Sep 2021 – Aug 2022",
    title:
      "Analyzed 10M+ user behavior records with Python, Pandas, and SQL to engineer recommendation features. Built scalable RESTful APIs serving ML predictions on a high-traffic e-commerce platform, reduced recommendation API latency by 28%, and implemented secure SSO and MFA pipelines to strengthen enterprise identity and access management.",
    icon: "/assets/flipkart.jpg",
    animation: "clapping",
  },
  
  
] as const;

export const socialLinks = [
  {
    name: "GitHub",
    icon: "/assets/github.svg",
    url: "https://github.com/amitgaur1717",
  },
  {
    name: "LinkedIn",
    icon: "/assets/twitter.svg",
    url: "https://linkedin.com/in/developeramitkumargaur",
  },
  {
    name: "Email",
    icon: "/assets/instagram.svg",
    url: "mailto:amitkumargaur632@gmail.com",
  },
] as const;