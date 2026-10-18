import { useState } from "react";
import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaServer,
  FaNetworkWired,
  FaDatabase,
  FaWindows,
  FaNodeJs,
  FaLock,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiDaisyui,
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiVercel,
  SiNetlify,
} from "react-icons/si";
import {
  HiOutlineCode,
  HiOutlineServer,
  HiOutlineTerminal,
  HiSparkles,
  HiOutlineSupport,
  HiOutlineCube,
} from "react-icons/hi";

const categories = [
  { id: "all", name: "All Skills" },
  { id: "frontend", name: "Frontend & Web", icon: HiOutlineCode },
  { id: "backend", name: "Backend & Full Stack", icon: HiOutlineCube },
  { id: "it_systems", name: "IT Operations & Systems", icon: HiOutlineServer },
  { id: "tools", name: "Tools & Deploy", icon: HiOutlineTerminal },
];

const skillsData = [
  // Frontend & Web
  {
    name: "React.js",
    category: "frontend",
    icon: FaReact,
    color: "text-cyan-500",
    bg: "bg-cyan-50 border-cyan-100",
    barColor: "from-cyan-500 to-blue-500",
    level: "Proficient",
    percentage: 90,
    description: "Component-driven architecture, Custom Hooks, Router v7, Context API, Virtual DOM",
  },
  {
    name: "Next.js",
    category: "frontend",
    icon: SiNextdotjs,
    color: "text-gray-900",
    bg: "bg-gray-100 border-gray-200",
    barColor: "from-gray-700 to-black",
    level: "Proficient",
    percentage: 88,
    description: "App Router, SSR, SSG, Server Actions, Route Handlers, SEO optimization",
  },
  {
    name: "TypeScript",
    category: "frontend",
    icon: SiTypescript,
    color: "text-blue-600",
    bg: "bg-blue-50 border-blue-100",
    barColor: "from-blue-500 to-indigo-600",
    level: "Proficient",
    percentage: 85,
    description: "Static typing, Interfaces, Generics, strict null checks, Type safety",
  },
  {
    name: "Tailwind CSS & DaisyUI",
    category: "frontend",
    icon: SiTailwindcss,
    color: "text-teal-500",
    bg: "bg-teal-50 border-teal-100",
    barColor: "from-teal-400 to-emerald-500",
    level: "Advanced",
    percentage: 94,
    description: "Utility-first design, DaisyUI component classes, custom themes, responsive layouts",
  },
  {
    name: "JavaScript (ES6+)",
    category: "frontend",
    icon: FaJsSquare,
    color: "text-yellow-500",
    bg: "bg-yellow-50 border-yellow-100",
    barColor: "from-yellow-400 to-amber-500",
    level: "Proficient",
    percentage: 90,
    description: "Async/Await, Promises, Closures, Array Methods, DOM Manipulation, Modules",
  },
  {
    name: "HTML5 & CSS3",
    category: "frontend",
    icon: FaHtml5,
    color: "text-orange-500",
    bg: "bg-orange-50 border-orange-100",
    barColor: "from-orange-400 to-red-500",
    level: "Advanced",
    percentage: 95,
    description: "Semantic markup, CSS Grid, Flexbox, Keyframe animations, accessibility (a11y)",
  },

  // Backend & Full Stack (Requested: MongoDB, Node.js, Express.js, Better Auth)
  {
    name: "MongoDB",
    category: "backend",
    icon: SiMongodb,
    color: "text-emerald-600",
    bg: "bg-emerald-50 border-emerald-100",
    barColor: "from-emerald-500 to-teal-600",
    level: "Proficient",
    percentage: 86,
    description: "NoSQL document collections, CRUD queries, schema indexing, aggregation pipelines",
  },
  {
    name: "Node.js",
    category: "backend",
    icon: FaNodeJs,
    color: "text-green-600",
    bg: "bg-green-50 border-green-100",
    barColor: "from-green-500 to-emerald-600",
    level: "Proficient",
    percentage: 85,
    description: "V8 JavaScript runtime, asynchronous event loop, npm ecosystem, server logic",
  },
  {
    name: "Express.js",
    category: "backend",
    icon: SiExpress,
    color: "text-gray-800",
    bg: "bg-gray-50 border-gray-200",
    barColor: "from-gray-600 to-gray-900",
    level: "Proficient",
    percentage: 84,
    description: "RESTful API routes, middleware pipeline, request validation, CORS, error handling",
  },
  {
    name: "Better Auth",
    category: "backend",
    icon: FaLock,
    color: "text-purple-600",
    bg: "bg-purple-50 border-purple-100",
    barColor: "from-purple-500 to-indigo-600",
    level: "Proficient",
    percentage: 88,
    description: "Modern authentication framework, credential auth, OAuth, secure session cookies, role permissions",
  },
  {
    name: "REST API Integration",
    category: "backend",
    icon: HiOutlineCode,
    color: "text-indigo-600",
    bg: "bg-indigo-50 border-indigo-100",
    barColor: "from-indigo-500 to-blue-600",
    level: "Advanced",
    percentage: 90,
    description: "JSON payloads, HTTP methods, client-side caching, async state handling, error bounds",
  },

  // IT Operations & Systems (BKMEA 2020-2026 foundation)
  {
    name: "IT Operations & Support",
    category: "it_systems",
    icon: HiOutlineSupport,
    color: "text-blue-600",
    bg: "bg-blue-50 border-blue-100",
    barColor: "from-blue-500 to-indigo-600",
    level: "Advanced",
    percentage: 95,
    description: "Hardware diagnostics, technical troubleshooting, wireless devices, user support",
  },
  {
    name: "Windows Server Management",
    category: "it_systems",
    icon: FaWindows,
    color: "text-cyan-600",
    bg: "bg-cyan-50 border-cyan-100",
    barColor: "from-cyan-500 to-blue-600",
    level: "Advanced",
    percentage: 92,
    description: "Active Directory, user privileges, server maintenance, network security protocols",
  },
  {
    name: "Biometric Database & ERP",
    category: "it_systems",
    icon: FaDatabase,
    color: "text-amber-600",
    bg: "bg-amber-50 border-amber-100",
    barColor: "from-amber-500 to-orange-600",
    level: "Advanced",
    percentage: 95,
    description: "BKMEA Biometric Member-Worker Database, Membership Software, UD & Tally ERP",
  },
  {
    name: "Network & Data Backup",
    category: "it_systems",
    icon: FaNetworkWired,
    color: "text-teal-600",
    bg: "bg-teal-50 border-teal-100",
    barColor: "from-teal-500 to-emerald-600",
    level: "Advanced",
    percentage: 92,
    description: "Network health monitoring, automated offsite server backups, disaster recovery",
  },

  // Tools & Deployment
  {
    name: "Git & GitHub",
    category: "tools",
    icon: FaGitAlt,
    color: "text-orange-600",
    bg: "bg-orange-50 border-orange-100",
    barColor: "from-orange-500 to-red-600",
    level: "Proficient",
    percentage: 88,
    description: "Feature branching, Pull Requests, merge resolution, repository organization",
  },
  {
    name: "Vercel & Netlify Deployment",
    category: "tools",
    icon: SiVercel,
    color: "text-gray-900",
    bg: "bg-gray-100 border-gray-200",
    barColor: "from-gray-700 to-black",
    level: "Proficient",
    percentage: 92,
    description: "Continuous deployment (CI/CD), environment variables, custom domain routing",
  },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredSkills =
    activeTab === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeTab);

  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-semibold uppercase tracking-wider">
          <HiSparkles className="text-blue-600 text-sm" />
          <span>Technical Arsenal</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">Skills</span> &amp; Expertise
        </h2>

        <p className="text-base sm:text-lg text-gray-600">
          A visual overview of my frontend engineering, full-stack technologies (MongoDB, Node.js, Express.js, Better Auth), and enterprise IT systems.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                activeTab === cat.id
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/25 scale-105"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:text-blue-600 hover:bg-gray-50"
              }`}
            >
              {Icon && <Icon className="text-base" />}
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Graphical Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filteredSkills.map((skill) => {
          const Icon = skill.icon;
          return (
            <div
              key={skill.name}
              className="bg-white rounded-2xl border border-gray-200/80 p-5 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Header with Icon and Level Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center border text-2xl ${skill.bg} ${skill.color} group-hover:scale-110 transition-transform`}
                  >
                    <Icon />
                  </div>

                  <span
                    className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${
                      skill.level === "Advanced"
                        ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                        : "bg-blue-50 text-blue-700 border-blue-200"
                    }`}
                  >
                    {skill.level}
                  </span>
                </div>

                <h3 className="font-bold text-gray-900 text-base mb-1 group-hover:text-blue-600 transition-colors">
                  {skill.name}
                </h3>

                <p className="text-xs text-gray-500 leading-relaxed min-h-[36px]">
                  {skill.description}
                </p>
              </div>

              {/* Graphical Progress Bar / Percentage Meter */}
              <div className="mt-5 pt-3 border-t border-gray-100 space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[11px] text-gray-400 font-medium capitalize">
                    Proficiency
                  </span>
                  <span className="font-bold text-gray-700 text-xs">
                    {skill.percentage}%
                  </span>
                </div>

                {/* Graphical Fill Bar */}
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${skill.barColor} transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
