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

export const myProjects = [
  {
    title: "NourishU - AI-Powered Smart Meal Platform",
    desc: "NourishU is an LLM-powered smart meal recommendation platform that delivers personalized, context-aware meal plans tailored to each user. Built on OpenAI GPT and Google Gemini, it leverages Retrieval-Augmented Generation (RAG) pipelines and vector embeddings to surface highly relevant suggestions and lift recommendation quality.",
    subdesc:
      "Engineered end-to-end Python pipelines for user data ingestion, preprocessing, and LLM context delivery. Applied prompt engineering and A/B testing across model variants to lift response quality and engagement by 30%. Awarded a cash prize at the SPROUTS Startup Accelerator for innovation in AI-driven personalization.",
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
        path: "/assets/python.svg",
      },
      {
        id: 2,
        name: "OpenAI GPT",
        path: "/assets/openai.svg",
      },
      {
        id: 3,
        name: "LangChain / RAG",
        path: "/assets/langchain.svg",
      },
      {
        id: 4,
        name: "FastAPI",
        path: "/assets/fastapi.svg",
      },
    ],
  },
  {
    title: "Closet AI - AI Outfit Visualization & Styling App",
    desc: "Closet AI is an AI-powered outfit recommendation and styling assistant that uses large language models with context-aware prompting to deliver real-time, personalized styling suggestions based on each user's wardrobe, occasion, and preferences.",
    subdesc:
      "Designed feature engineering workflows and structured LLM responses for consistent, production-grade outputs. Owned the full ML lifecycle from data collection through API deployment and post-deployment monitoring, ensuring low-latency inference and reliable model behavior in production.",
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
        name: "Python",
        path: "/assets/python.svg",
      },
      {
        id: 2,
        name: "LLM APIs",
        path: "/assets/openai.svg",
      },
      {
        id: 3,
        name: "PyTorch",
        path: "/assets/pytorch.svg",
      },
      {
        id: 4,
        name: "FastAPI",
        path: "/assets/fastapi.svg",
      },
    ],
  },
  {
    title: "Real-Time AI Data Pipeline",
    desc: "A high-throughput, real-time data pipeline engineered to power machine learning workloads at scale. Built on Apache Kafka, the system processes high-volume event streams for ML-ready ingestion, feeding both real-time model inference and downstream training workflows.",
    subdesc:
      "Reduced data latency by 60% through stream optimization and parallel consumer design. Deployed as containerized services with Docker and Kubernetes to achieve horizontal scalability, high availability, and zero-downtime rollouts across the cluster.",
    href: "https://github.com/amitgaur1717",
    texture: "/textures/project/project3.mp4",
    logo: "/assets/project-logo3.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "Apache Kafka",
        path: "/assets/kafka.svg",
      },
      {
        id: 2,
        name: "Docker",
        path: "/assets/docker.svg",
      },
      {
        id: 3,
        name: "Kubernetes",
        path: "/assets/kubernetes.svg",
      },
      {
        id: 4,
        name: "Python",
        path: "/assets/python.svg",
      },
    ],
  },
  {
    title: "Audit First - Identity & Access Management Automation",
    desc: "Audit First is an identity and access management automation platform that secures and streamlines enterprise authentication flows. The system standardizes how users are authenticated, audited, and authorized across services with built-in compliance reporting.",
    subdesc:
      "Developed secure authentication pipelines with Node.js and Azure B2C, then re-architected the core on serverless Azure Functions to cut authentication latency by 30%. Automated API validation and integration testing workflows to ensure enterprise security compliance and high reliability.",
    href: "https://github.com/amitgaur1717",
    texture: "/textures/project/project4.mp4",
    logo: "/assets/project-logo4.png",
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      {
        id: 1,
        name: "Node.js",
        path: "/assets/nodejs.svg",
      },
      {
        id: 2,
        name: "Azure",
        path: "/assets/azure.svg",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "REST APIs",
        path: "/assets/fastapi.svg",
      },
    ],
  },
] as const;

export const workExperiences = [
  {
    id: 1,
    name: "DXC Technology",
    pos: "AI Software Engineer",
    duration: "Feb 2026 - Present",
    title:
      "Engineered AI-powered backend services with Node.js, FastAPI, and RESTful APIs to integrate LLM-based workflows, reducing response latency by 12% in pilot deployments. Architected Retrieval-Augmented Generation pipelines with LangChain, FAISS, and vector embeddings that improved contextual response accuracy by 10% for enterprise knowledge assistants, and built AI agents on the OpenAI and Google Gemini APIs that cut manual research effort by 14%. Automated containerized deployment pipelines with Docker, GitHub Actions, and AWS Lambda, shortening release cycles by 9%.",
    icon: "/assets/dxc.jpg",
    animation: "victory",
  },
  {
    id: 2,
    name: "Jio Platforms Limited",
    pos: "Software Engineer",
    duration: "Sept 2022 - Jun 2024",
    title:
      "Architected scalable backend microservices and data pipelines in Python, SQL, and Apache Kafka, and built production REST APIs with FastAPI and Node.js that cut response latency by 35%. Designed event-driven serverless systems on AWS (Lambda, EC2, S3) and Azure Functions to enable horizontal scaling, engineered CI/CD pipelines with Docker, Kubernetes, and GitHub Actions that cut release time by 40%, and led a zero-data-loss SQL-to-NoSQL migration framework with automated validation across distributed systems.",
    icon: "/assets/jio.svg",
    animation: "clapping",
  },
  {
    id: 3,
    name: "Infinite Infolab",
    pos: "Associate Software Developer",
    duration: "Jan 2022 - Aug 2022",
    title:
      "Built RESTful backend APIs with Node.js and Express.js, reducing average API response time by 10% through optimized request handling, and implemented SQL query optimization across MySQL and PostgreSQL that improved reporting performance by 12%. Enhanced application stability by resolving backend defects and improving exception handling, streamlined CI/CD workflows with GitHub Actions, and supported cloud deployments and backend monitoring on AWS.",
    icon: "/assets/infolab.jpg",
    animation: "salute",
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
    icon: "/assets/linkedin.svg",
    url: "https://linkedin.com/in/developeramitkumargaur",
  },
] as const;
