import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.svg";

const projects = [
  {
    id: 1,
    title: "FitLog — Workout Library",
    image: project1,
    category: "Full Stack / Fitness Web App",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "DaisyUI",
      "LocalStorage"
    ],
    description:
      "A comprehensive, responsive workout library web application with exercise detail pages, routine builders, and workout planning features. Features personal workout plans, saved routines, completion tracking, multi-criteria sorting, and browser LocalStorage persistence.",
    live: "https://b14-a6-fit-log-opal-xi.vercel.app/",
    github: "https://github.com/Avijit35cse/B14-A6-Fit-Log",
    challenges: [
      "Managing persistent client-side workout tracking states with browser LocalStorage while preventing Next.js Server-Side Rendering (SSR) hydration mismatches",
      "Building accessible workout planning modals, category filters, and exercise completion toggles with DaisyUI and Tailwind CSS",
      "Structuring strong TypeScript interfaces for diverse exercise metadata, muscle groups, and routine schedules"
    ],
    future: [
      "User authentication and personal profile sync using NextAuth / Supabase",
      "Custom user-submitted exercise creation with image upload and video guide embeds",
      "Visual weekly analytics charts tracking completed reps, workout duration, and calorie burn"
    ],
  },
  {
    id: 2,
    title: "Dev-Stack — Developer Technology Explorer",
    image: project2,
    category: "Developer Tools & Showcase",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "DaisyUI",
      "Vite"
    ],
    description:
      "A developer-focused interactive interface for exploring, categorizing, and organizing modern technology stack choices. Features instant full-text search, multi-category filtering (Frontend, Backend, Database, Cloud), stack builder drawer, and clean responsive card layouts.",
    live: "https://dev-stack-avijit.netlify.app/",
    github: "https://github.com/Avijit35cse/B14-A05-DevStack",
    challenges: [
      "Developing an instant client-side search indexing system with multi-criteria category filtering without UI lag",
      "Ensuring strict TypeScript type safety across dynamically rendered technology cards and custom category chips",
      "Creating a clean, developer-friendly dark and light UI with responsive drawer navigation for smaller mobile screens"
    ],
    future: [
      "One-click export of selected stack configurations to package.json dependencies and README markdown format",
      "Community voting, pros/cons breakdown, and compatibility matrix for technology pairs",
      "Integration with GitHub API to fetch real-time star counts and recent commit activity for each library"
    ],
  },
  {
    id: 3,
    title: "Bazar Dor — Daily Market Price Tracker",
    image: project3,
    category: "Consumer Analytics & Web App",
    isComingSoon: true,
    status: "Coming Soon",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Better Auth",
      "React"
    ],
    description:
      "A Bengali daily market price tracker and consumer commodity analytics platform (currently in active development). Designed to monitor fluctuating essential grocery and food commodity rates across Dhaka and major divisional markets with transparent historical records and user alerts.",
    live: null,
    github: "https://github.com/Avijit35cse/B14-A7-Bazar-Dor",
    challenges: [
      "Architecting clean Next.js server actions and API routes for daily commodity price submissions and verification",
      "Integrating Better Auth for secure user role authentication (Administrators vs. General Consumers)",
      "Designing a clean, bilingual responsive interface with localized numbers, currency formatting, and fast tabular filtering"
    ],
    future: [
      "Interactive historical price trend line charts using Chart.js or Recharts",
      "SMS & WhatsApp notification alerts for sudden essential commodity price changes",
      "Crowdsourced price verification system with localized community trust ratings"
    ],
  },
];

export default projects;
