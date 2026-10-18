import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineSparkles,
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlineBriefcase,
  HiOutlineCheckCircle,
  HiOutlineHeart,
} from "react-icons/hi";
import {
  FaLaptopCode,
  FaRocket,
  FaFutbol,
  FaCompass,
  FaServer,
  FaCode,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";
import profilePhoto from "../assets/profile.jpg";

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState("transformation");

  const highlights = [
    {
      title: "Career Transformation Focus",
      desc: "Actively transforming my career from enterprise IT into modern Frontend & Web AI-driven Full Stack Development.",
    },
    {
      title: "Full Stack & Web AI Stack",
      desc: "Proficient in Next.js, React, TypeScript, Tailwind CSS, MongoDB, Node.js, Express.js, and Better Auth.",
    },
    {
      title: "6-Year Enterprise IT Foundation",
      desc: "Past tenure as Assistant Secretary – IT at BKMEA (2020–2026) managing databases, servers, and international projects (ILO, EU).",
    },
    {
      title: "B.Sc. in CSE (IIUC)",
      desc: "Strong academic grounding in computational thinking, software architecture, data structures, and algorithms.",
    },
  ];

  const hobbies = [
    {
      icon: FaCode,
      color: "text-blue-600 bg-blue-50 border-blue-200",
      title: "Web & AI Stack Research",
      desc: "Exploring Web AI integrations, prompt engineering, Next.js 15 innovations, Better Auth flows, and modern cloud deployment.",
    },
    {
      icon: FaFutbol,
      color: "text-emerald-600 bg-emerald-50 border-emerald-200",
      title: "Cricket & Fitness",
      desc: "Playing cricket and staying physically active — bringing stamina, quick agility, and strong team spirit into engineering.",
    },
    {
      icon: FaCompass,
      color: "text-purple-600 bg-purple-50 border-purple-200",
      title: "Travel & Culture",
      desc: "Traveling across Bangladesh, exploring historical heritage, and drawing creative inspiration from diverse environments.",
    },
    {
      icon: FaServer,
      color: "text-amber-600 bg-amber-50 border-amber-200",
      title: "System Resilience & Clean Code",
      desc: "Reading up on full-stack system scalability, security best practices, database indexing, and component architecture.",
    },
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-gray-50/50">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-semibold uppercase tracking-wider">
          <HiOutlineUser className="text-blue-600 text-sm" />
          <span>About Me</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
          Who I <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Am</span>
        </h2>

        <p className="text-base sm:text-lg text-gray-600">
          Learn about my journey from enterprise IT leadership into modern Frontend and Web AI-driven Full Stack Web Development.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Profile Card & Quick Specs (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="relative bg-white rounded-2xl border border-gray-200/90 p-6 sm:p-8 shadow-xs">
            {/* Ambient Accent Glow */}
            <div className="w-24 h-24 bg-blue-500/10 rounded-full blur-2xl absolute -top-4 -right-4 -z-10"></div>

            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
              <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-blue-500/30 shadow-md shrink-0">
                <img
                  src={profilePhoto}
                  alt="Avijit Barua"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Avijit Barua</h3>
                <p className="text-sm font-semibold text-blue-600">Frontend &amp; Full Stack Developer</p>
                <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-1">
                  <HiOutlineLocationMarker className="text-gray-400" />
                  <span>Basabo, Dhaka (Chattogram origin)</span>
                </div>
              </div>
            </div>

            {/* Quick Specs List */}
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-center justify-between py-1.5 border-b border-gray-50">
                <span className="flex items-center gap-2 text-gray-500">
                  <HiOutlineBriefcase className="text-blue-600" /> Past Experience:
                </span>
                <span className="font-semibold text-gray-900 text-xs sm:text-sm">
                  Asst. Secretary – IT, BKMEA (2020–2026)
                </span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-gray-50">
                <span className="flex items-center gap-2 text-gray-500">
                  <FaLaptopCode className="text-blue-600" /> Current Direction:
                </span>
                <span className="font-semibold text-purple-700 text-xs sm:text-sm">
                  Frontend &amp; Web AI Full Stack
                </span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-gray-50">
                <span className="flex items-center gap-2 text-gray-500">
                  <HiOutlineMail className="text-blue-600" /> Email:
                </span>
                <span className="font-semibold text-gray-800 text-xs sm:text-sm">ovicse35@outlook.com</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-gray-50">
                <span className="flex items-center gap-2 text-gray-500">
                  <FaWhatsapp className="text-emerald-500" /> WhatsApp:
                </span>
                <a
                  href="https://wa.me/8801812880953"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-emerald-600 hover:underline text-xs sm:text-sm"
                >
                  01812880953
                </a>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-gray-50">
                <span className="flex items-center gap-2 text-gray-500">
                  <FaLinkedin className="text-[#0a66c2]" /> LinkedIn:
                </span>
                <a
                  href="https://www.linkedin.com/in/avijit-barua-dev"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-blue-600 hover:underline text-xs sm:text-sm"
                  title="LinkedIn: avijit-barua-dev"
                >
                  avijit-barua-dev
                </a>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-gray-50">
                <span className="flex items-center gap-2 text-gray-500">
                  <HiOutlineHeart className="text-rose-500" /> Primary Tech:
                </span>
                <span className="font-semibold text-gray-800 text-xs">
                  React, Next.js, TS, Node, MongoDB, Better Auth
                </span>
              </div>
            </div>

            {/* Micro Stats */}
            <div className="grid grid-cols-3 gap-3 pt-6 mt-6 border-t border-gray-100 text-center">
              <div className="p-3 bg-gray-50/80 rounded-xl border border-gray-100">
                <span className="block text-2xl font-black text-blue-600">6Y</span>
                <span className="text-[11px] text-gray-500 font-medium">BKMEA IT Tenure</span>
              </div>
              <div className="p-3 bg-gray-50/80 rounded-xl border border-gray-100">
                <span className="block text-2xl font-black text-indigo-600">AI</span>
                <span className="text-[11px] text-gray-500 font-medium">Web AI Focus</span>
              </div>
              <div className="p-3 bg-gray-50/80 rounded-xl border border-gray-100">
                <span className="block text-2xl font-black text-emerald-600">B.Sc.</span>
                <span className="text-[11px] text-gray-500 font-medium">CSE (IIUC)</span>
              </div>
            </div>
          </div>

          {/* Core Strengths Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="p-4 rounded-xl bg-white border border-gray-200/80 shadow-2xs flex items-start gap-3 hover:border-blue-300 transition"
              >
                <HiOutlineCheckCircle className="text-lg text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-gray-900">{item.title}</h4>
                  <p className="text-[11px] sm:text-xs text-gray-500 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Tabbed Narrative & Hobbies (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Navigation Pill Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-gray-200/60 rounded-xl border border-gray-200">
            <button
              onClick={() => setActiveTab("transformation")}
              className={`flex-1 min-w-[120px] py-2.5 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                activeTab === "transformation"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <FaCode className="text-sm" />
              <span>Career Transformation</span>
            </button>

            <button
              onClick={() => setActiveTab("past_experience")}
              className={`flex-1 min-w-[120px] py-2.5 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                activeTab === "past_experience"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <FaServer className="text-sm" />
              <span>BKMEA Past Experience</span>
            </button>

            <button
              onClick={() => setActiveTab("hobbies")}
              className={`flex-1 min-w-[120px] py-2.5 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                activeTab === "hobbies"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <HiOutlineHeart className="text-sm" />
              <span>Hobbies &amp; Interests</span>
            </button>
          </div>

          {/* Tab 1: Career Transformation into Frontend & Web AI-Driven Development */}
          {activeTab === "transformation" && (
            <div className="bg-white rounded-2xl border border-gray-200/90 p-6 sm:p-8 shadow-xs space-y-5 animate-fadeIn">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center text-sm">
                  🚀
                </span>
                Transforming My Career into Frontend &amp; Web AI Development
              </h3>

              <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Having spent 6 years managing mission-critical enterprise systems and databases, I am now <strong>actively transforming my career to focus on modern Frontend and Web AI-driven Full Stack Web Development</strong>.
                </p>
                <p>
                  I am driven by the immense potential of combining clean, component-driven user interfaces with intelligent backend architectures. My modern full-stack skillset encompasses:
                </p>
                <ul className="space-y-2 text-sm text-gray-700 pl-2">
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">✓</span>
                    <span><strong>Frontend Engineering:</strong> React, Next.js (App Router, SSR, Server Actions), TypeScript, Tailwind CSS, and DaisyUI.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">✓</span>
                    <span><strong>Backend &amp; Database:</strong> Node.js, Express.js, MongoDB (CRUD &amp; Aggregations), and RESTful API integrations.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">✓</span>
                    <span><strong>Authentication &amp; Security:</strong> Modern authentication using Better Auth, session security, and role-based access.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">✓</span>
                    <span><strong>Web AI Integration:</strong> Infusing AI-assisted features, dynamic data analysis, and intelligent automated workflows into web products.</span>
                  </li>
                </ul>
                <p>
                  I am eager to bring this solid combination of enterprise operational discipline and agile web development into a progressive engineering team as a Frontend or Full Stack Developer.
                </p>
              </div>

              {/* Milestones */}
              <div className="pt-4 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 bg-blue-50/50 rounded-xl border border-blue-100">
                  <span className="text-xs font-bold text-blue-700 block">Modern UI/UX</span>
                  <p className="text-xs text-gray-600 mt-1">Next.js, React &amp; TypeScript with Tailwind CSS.</p>
                </div>
                <div className="p-3 bg-emerald-50/50 rounded-xl border border-emerald-100">
                  <span className="text-xs font-bold text-emerald-700 block">Robust Backend</span>
                  <p className="text-xs text-gray-600 mt-1">Node.js, Express, MongoDB &amp; Better Auth.</p>
                </div>
                <div className="p-3 bg-purple-50/50 rounded-xl border border-purple-100">
                  <span className="text-xs font-bold text-purple-700 block">AI-Driven Vision</span>
                  <p className="text-xs text-gray-600 mt-1">Building responsive, intelligent web solutions.</p>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: BKMEA Past Experience */}
          {activeTab === "past_experience" && (
            <div className="bg-white rounded-2xl border border-gray-200/90 p-6 sm:p-8 shadow-xs space-y-5 animate-fadeIn">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm">
                  🏢
                </span>
                Past Experience: Assistant Secretary – IT at BKMEA (2020–2026)
              </h3>

              <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Between <strong>February 2020 and February 2026</strong>, I served as <strong>Assistant Secretary – IT at BKMEA</strong> (Bangladesh Knitwear Manufacturers &amp; Exporters Association), completing a successful 6-year tenure of IT infrastructure administration.
                </p>
                <p>
                  Key accomplishments and past responsibilities included:
                </p>
                <ul className="space-y-2 text-sm text-gray-700 pl-2">
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">✓</span>
                    <span>Administering the <strong>BKMEA Biometric Member-Worker Database</strong> software across RMG factories.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">✓</span>
                    <span>Managing Windows Server infrastructure, domain accounts, wireless networks, and disaster recovery backup protocols.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">✓</span>
                    <span>Serving as IT &amp; Database Lead for high-visibility international collaborations: the <strong>ILO–BKMEA COVID-19 Worker Retention Initiative</strong>, the <strong>EU Social Protection Program</strong>, and the <strong>ILO EIS Pilot Project</strong>.</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* Tab 3: Hobbies & Interests */}
          {activeTab === "hobbies" && (
            <div className="bg-white rounded-2xl border border-gray-200/90 p-6 sm:p-8 shadow-xs space-y-5 animate-fadeIn">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center text-sm">
                    🌟
                  </span>
                  Hobbies, Interests &amp; Personal Balance
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Staying balanced, energized, and curious beyond daily code commits.
                </p>
              </div>

              {/* Hobbies Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {hobbies.map((hobby) => {
                  const Icon = hobby.icon;
                  return (
                    <div
                      key={hobby.title}
                      className="p-4 rounded-xl bg-gray-50/70 border border-gray-200/80 hover:border-blue-300 transition-all flex items-start gap-3.5"
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border text-lg ${hobby.color}`}>
                        <Icon />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-900 mb-1">{hobby.title}</h4>
                        <p className="text-xs text-gray-600 leading-relaxed">{hobby.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Personality Callout */}
              <div className="pt-4 border-t border-gray-100 bg-blue-50/50 p-4 rounded-xl border border-blue-100/70">
                <h4 className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1.5">
                  Personal Work Ethic
                </h4>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  I combine enterprise-honed accountability with the rapid learning agility needed in fast-moving web teams. I love debugging complex technical bottlenecks and collaborating with empathetic communication.
                </p>
              </div>
            </div>
          )}

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <Link
              to="/resume"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md shadow-blue-500/20 transition-all duration-300 text-sm"
            >
              <HiOutlineSparkles className="text-lg" />
              <span>Inspect Full Resume</span>
            </Link>

            <a
              href="https://wa.me/8801812880953"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-600 hover:text-white px-6 py-3 rounded-xl font-semibold shadow-xs transition-all duration-300 text-sm"
            >
              <FaWhatsapp className="text-base text-emerald-600" />
              <span>WhatsApp: 01812880953</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
