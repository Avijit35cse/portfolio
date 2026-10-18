import { Link } from "react-router-dom";
import {
  HiDocumentText,
  HiArrowRight,
  HiSparkles,
  HiDownload,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import {
  FaReact,
  FaGitAlt,
  FaGithub,
  FaLinkedin,
  FaNodeJs,
  FaWhatsapp,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiMongodb, SiExpress } from "react-icons/si";
import profilePhoto from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background Decorative Glow Orbs */}
      <div className="absolute top-16 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse"></div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Introductions, Designations & CTAs (7 cols) */}
        <div className="lg:col-span-7 text-left space-y-6">
          {/* Status Badge: Career Transformation to Frontend & Web AI-Driven Development */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/90 text-blue-700 text-xs sm:text-sm font-semibold shadow-xs backdrop-blur-xs">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>Open for Hire • Frontend &amp; Web AI-Driven Full Stack Developer</span>
          </div>

          {/* Designation & Name Heading */}
          <div className="space-y-2">
            <p className="text-gray-600 font-medium text-lg sm:text-xl flex items-center gap-2">
              <span>Hello, I am</span>
              <span className="font-bold text-gray-900">Avijit Barua</span>
              <span className="inline-block animate-wave origin-[70%_70%] text-xl">👋</span>
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.15]">
              Frontend &amp;{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                Web AI-Driven
              </span>{" "}
              Developer
            </h1>
          </div>

          {/* Description highlighting career transformation & 6-year BKMEA foundation */}
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed">
            With a 6-year foundation as <em>Former Assistant Secretary – IT at BKMEA (2020–2026)</em>, I am actively transforming my career into <strong>Frontend and Web AI-driven Full Stack Web Development</strong>. I craft scalable, intelligent web applications using{" "}
            <span className="text-gray-900 font-semibold">React</span>,{" "}
            <span className="text-gray-900 font-semibold">Next.js</span>,{" "}
            <span className="text-gray-900 font-semibold">TypeScript</span>,{" "}
            <span className="text-gray-900 font-semibold">Tailwind CSS</span>,{" "}
            <span className="text-gray-900 font-semibold">Node.js</span>,{" "}
            <span className="text-gray-900 font-semibold">Express.js</span>,{" "}
            <span className="text-gray-900 font-semibold">MongoDB</span>, and{" "}
            <span className="text-gray-900 font-semibold">Better Auth</span>.
          </p>

          {/* Action Buttons: Resume Download & View */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            {/* 1-Click Resume Download Button (Downloads real PDF) */}
            <a
              href="/resume.pdf"
              download="Avijit_Barua_Resume.pdf"
              className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white px-6 py-3.5 rounded-xl font-bold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer text-sm sm:text-base group"
              title="Download Avijit Barua Resume PDF"
            >
              <HiDownload className="text-xl group-hover:translate-y-0.5 transition-transform" />
              <span>Download Resume</span>
            </a>

            {/* View Full Interactive Resume Link */}
            <Link
              to="/resume"
              className="inline-flex items-center justify-center gap-2 bg-white text-gray-800 border border-gray-300 hover:border-blue-500 hover:text-blue-600 px-5 py-3.5 rounded-xl font-semibold shadow-xs hover:shadow-md transition-all duration-300 text-sm sm:text-base hover:bg-blue-50/40"
              title="View full resume sheet"
            >
              <HiDocumentText className="text-xl text-blue-600" />
              <span>View Resume</span>
            </Link>

            {/* Direct WhatsApp Chat CTA with updated number */}
            <a
              href="https://wa.me/8801812880953"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-600 hover:text-white px-5 py-3.5 rounded-xl font-semibold shadow-xs transition-all duration-300 text-sm sm:text-base"
              title="Chat on WhatsApp: 01812880953"
            >
              <FaWhatsapp className="text-lg text-emerald-500 group-hover:text-white" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Social Links Row */}
          <div className="pt-2">
            <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
              Connect With Me
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Avijit35cse"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="w-10 h-10 rounded-xl bg-white border border-gray-200/90 hover:bg-gray-900 hover:text-white hover:border-gray-900 flex items-center justify-center text-gray-700 shadow-xs hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
                title="GitHub: Avijit35cse"
              >
                <FaGithub className="text-lg" />
              </a>
              <a
                href="https://www.linkedin.com/in/avijit-barua-dev"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 rounded-xl bg-white border border-gray-200/90 hover:bg-[#0a66c2] hover:text-white hover:border-[#0a66c2] flex items-center justify-center text-gray-700 shadow-xs hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
                title="LinkedIn: avijit-barua-dev"
              >
                <FaLinkedin className="text-lg" />
              </a>
              <a
                href="https://wa.me/8801812880953"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Chat"
                className="w-10 h-10 rounded-xl bg-white border border-gray-200/90 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 flex items-center justify-center text-gray-700 shadow-xs hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
                title="WhatsApp: 01812880953"
              >
                <FaWhatsapp className="text-lg" />
              </a>
              <a
                href="mailto:ovicse35@outlook.com"
                aria-label="Email Avijit Barua"
                className="px-3.5 py-2 rounded-xl bg-white border border-gray-200/90 hover:border-blue-500 hover:text-blue-600 text-xs font-semibold text-gray-700 shadow-xs hover:shadow-md transition-all duration-200 flex items-center gap-1.5"
                title="Send Email: ovicse35@outlook.com"
              >
                <span>ovicse35@outlook.com</span>
              </a>
            </div>
          </div>

          {/* Core Tech Stack Badges including MongoDB, Node, Express, Better Auth */}
          <div className="pt-4 border-t border-gray-200/80">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-1.5">
              <HiSparkles className="text-blue-600" /> Core Tech &amp; Full Stack Skills
            </p>
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100/90 text-gray-800 font-medium border border-gray-200 shadow-2xs hover:border-gray-900 transition">
                <SiNextdotjs className="text-gray-900 text-base" /> Next.js
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100/90 text-gray-800 font-medium border border-gray-200 shadow-2xs hover:border-cyan-300 transition">
                <FaReact className="text-cyan-500 text-base" /> React
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100/90 text-gray-800 font-medium border border-gray-200 shadow-2xs hover:border-blue-400 transition">
                <SiTypescript className="text-blue-600 text-base" /> TypeScript
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100/90 text-gray-800 font-medium border border-gray-200 shadow-2xs hover:border-emerald-400 transition">
                <SiMongodb className="text-emerald-600 text-base" /> MongoDB
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100/90 text-gray-800 font-medium border border-gray-200 shadow-2xs hover:border-green-400 transition">
                <FaNodeJs className="text-green-600 text-base" /> Node.js
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100/90 text-gray-800 font-medium border border-gray-200 shadow-2xs hover:border-gray-400 transition">
                <SiExpress className="text-gray-700 text-base" /> Express.js
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100/90 text-gray-800 font-medium border border-gray-200 shadow-2xs hover:border-purple-300 transition">
                <span className="text-purple-600 font-bold text-xs">🔒</span> Better Auth
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100/90 text-gray-800 font-medium border border-gray-200 shadow-2xs hover:border-teal-300 transition">
                <SiTailwindcss className="text-teal-500 text-base" /> Tailwind CSS
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: High Quality Portrait & Real Info Card (5 cols) */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          {/* Decorative Framing & Glowing Backing */}
          <div className="relative w-full max-w-md">
            {/* Outer Gradient Ring */}
            <div className="absolute -inset-1.5 bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-500 rounded-3xl blur-lg opacity-40 group-hover:opacity-60 transition duration-1000"></div>

            {/* Photo Card Container */}
            <div className="relative bg-white rounded-3xl border border-gray-200/90 shadow-2xl overflow-hidden p-3 sm:p-4">
              {/* High-Resolution Professional Portrait of Avijit Barua */}
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-gray-100">
                <img
                  src={profilePhoto}
                  alt="Avijit Barua - Frontend & Web AI-Driven Developer"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                {/* Subtle photo overlay gradient at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-gray-950/85 via-gray-900/35 to-transparent flex items-end p-4">
                  <div className="text-white">
                    <p className="font-bold text-lg leading-tight">Avijit Barua</p>
                    <p className="text-xs text-blue-200 flex items-center gap-1">
                      <HiOutlineLocationMarker className="text-sm" /> Ahmedbag, Basabo, Dhaka
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Info Bar below photo */}
              <div className="pt-3 px-1 flex items-center justify-between text-xs text-gray-600">
                <span className="font-semibold text-gray-900">Career Transformation</span>
                <span className="text-purple-700 font-bold bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-200">
                  Web &amp; AI Full Stack
                </span>
              </div>
            </div>

            {/* Floating Experience Badge: Past BKMEA Tenure */}
            <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-md border border-gray-200 rounded-2xl p-3.5 shadow-xl flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-lg shadow-md shadow-blue-500/25">
                6Y
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900">Past BKMEA IT Role</p>
                <p className="text-[11px] text-gray-500">Feb 2020 – Feb 2026</p>
              </div>
            </div>

            {/* Floating Top Badge */}
            <div className="absolute -top-3 -right-3 bg-white/95 backdrop-blur-md border border-gray-200 rounded-full px-3.5 py-1.5 shadow-lg flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <p className="text-xs font-bold text-gray-900">Seeking Frontend Role</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;