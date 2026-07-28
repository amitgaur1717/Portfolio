# Amit Kumar Gaur — Portfolio

Personal portfolio website for **Amit Kumar Gaur**, AI Engineer based in Long Beach, CA.
Built on a modern React + Three.js + GSAP + Tailwind CSS stack, customized to showcase
LLM, RAG, and production ML work.

> Original template by [Sanidhya Kumar Verma](https://github.com/sanidhyy/threejs-portfolio).
> Heavily modified for content, sections, icons, and theming.

## About Me

AI Engineer with 3+ years of experience building and deploying production ML and
Generative AI systems. M.S. in Information Systems from California State University,
Long Beach. Strongest in LLM applications, Retrieval-Augmented Generation (RAG), and
end-to-end ML pipelines using Python, PyTorch, LangChain, and Hugging Face.

- 📍 Long Beach, CA
- 📧 amitkumargaur632@gmail.com
- 🔗 [LinkedIn](https://linkedin.com/in/developeramitkumargaur)
- 💻 [GitHub](https://github.com/amitgaur1717)

## Tech Stack

- **Frontend:** React 18, TypeScript, Tailwind CSS, Vite
- **3D / Animation:** Three.js, @react-three/fiber, @react-three/drei, GSAP
- **Globe:** react-globe.gl
- **Forms:** EmailJS, Sonner (toasts)

## Getting Started

### Prerequisites

- Node.js 18+ and npm (or bun)

### Install & Run

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Environment Variables

Copy `.env.example` to `.env` and fill in your EmailJS credentials so the contact
form works:

```env
VITE_APP_EMAIL=amitkumargaur632@gmail.com
VITE_APP_SERVICE_ID=your_emailjs_service_id
VITE_APP_TEMPLATE_ID=your_emailjs_template_id
VITE_APP_PUBLIC_KEY=your_emailjs_public_key
```

See [EmailJS docs](https://www.emailjs.com/) to create these credentials.

## Project Structure

```
src/
├── App.tsx                # Top-level layout
├── main.tsx               # React entry point
├── index.css              # Global styles + Tailwind
├── components/            # Reusable 3D + UI components
├── constants/index.ts     # All content (projects, experience, social links)
└── sections/              # Page sections (Hero, About, Projects, Experience, Contact, Footer, Navbar)
```

To edit content (projects, work experience, contact info), update
`src/constants/index.ts`.

## License

MIT
