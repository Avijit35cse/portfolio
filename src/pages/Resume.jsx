import { Link } from "react-router-dom";
import {
  HiArrowLeft,
  HiPrinter,
  HiDownload,
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiExternalLink,
} from "react-icons/hi";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Resume = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8 text-gray-800 font-sans print:bg-white print:py-0 print:px-0">
      {/* Top Action Bar (Hidden during print) */}
      <div className="max-w-4xl mx-auto mb-6 flex flex-wrap items-center justify-between gap-4 print:hidden">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 px-4 py-2.5 rounded-xl shadow-xs hover:bg-gray-50 hover:text-blue-600 transition"
        >
          <HiArrowLeft className="text-base" /> Back to Portfolio
        </Link>

        <div className="flex items-center gap-3">
          {/* Direct Download of actual uploaded resume PDF */}
          <a
            href="/resume.pdf"
            download="Avijit_Barua_Resume.pdf"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-800 bg-white border border-gray-300 hover:border-blue-500 hover:text-blue-600 px-4 py-2.5 rounded-xl shadow-xs hover:shadow transition cursor-pointer"
          >
            <HiDownload className="text-base text-blue-600" /> Download PDF
          </a>

          {/* Print / Save as PDF button */}
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-5 py-2.5 rounded-xl shadow-md shadow-blue-500/20 hover:shadow-lg transition cursor-pointer"
          >
            <HiPrinter className="text-base" /> Print / Save as PDF
          </button>
        </div>
      </div>

      {/* Main Resume Sheet */}
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-200/80 p-8 sm:p-12 print:shadow-none print:border-none print:p-0 print:rounded-none">
        
        {/* Header Section */}
        <header className="border-b border-gray-200 pb-6 mb-6 text-center sm:text-left">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
                AVIJIT BARUA
              </h1>
              <p className="text-base sm:text-lg font-bold text-blue-600 mt-1 uppercase tracking-wide">
                FRONTEND &amp; WEB AI-DRIVEN FULL STACK DEVELOPER
              </p>
            </div>

            {/* Availability Badge */}
            <div className="flex flex-col items-center sm:items-start md:items-end gap-1 text-sm text-gray-600">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Open for Hire • Frontend &amp; Full Stack
              </span>
              <span className="text-xs text-gray-500">Transforming Career to Web AI Development</span>
            </div>
          </div>

          {/* Contact Details Bar with LinkedIn */}
          <div className="mt-5 flex flex-wrap items-center gap-y-2.5 gap-x-5 text-xs sm:text-sm text-gray-600 pt-4 border-t border-gray-100">
            <a
              href="https://www.linkedin.com/in/avijit-barua-dev"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-[#0a66c2] transition font-semibold"
              title="LinkedIn: avijit-barua-dev"
            >
              <FaLinkedin className="text-[#0a66c2] text-base shrink-0" />
              <span>linkedin.com/in/avijit-barua-dev</span>
            </a>
            <a
              href="https://github.com/Avijit35cse"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-gray-900 transition font-semibold"
              title="GitHub: Avijit35cse"
            >
              <FaGithub className="text-gray-900 text-base shrink-0" />
              <span>github.com/Avijit35cse</span>
            </a>
            <a
              href="https://wa.me/8801812880953"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-emerald-600 transition font-medium"
              title="WhatsApp: 01812880953"
            >
              <FaWhatsapp className="text-emerald-500 text-base shrink-0" />
              <span>WhatsApp: 01812880953</span>
            </a>
            <a
              href="tel:01964050150"
              className="flex items-center gap-1.5 hover:text-blue-600 transition font-medium"
              title="Call: 01964050150"
            >
              <HiPhone className="text-blue-600 text-base shrink-0" />
              <span>01964050150</span>
            </a>
            <a
              href="mailto:ovicse35@outlook.com"
              className="flex items-center gap-1.5 hover:text-blue-600 transition font-medium"
              title="Email: ovicse35@outlook.com"
            >
              <HiMail className="text-blue-600 text-base shrink-0" />
              <span>ovicse35@outlook.com</span>
            </a>
          </div>

          {/* Address Details */}
          <div className="mt-3 pt-2 text-xs text-gray-500 flex flex-col sm:flex-row gap-2 sm:gap-6">
            <p className="flex items-center gap-1">
              <HiLocationMarker className="text-blue-600 shrink-0" />
              <strong>Present:</strong> Ahmedbag, Basabo, Dhaka
            </p>
            <p className="flex items-center gap-1">
              <HiLocationMarker className="text-gray-400 shrink-0" />
              <strong>Permanent:</strong> South Gahtchek, Rangunia Municipal Area, Rangunia-4360, Chattogram
            </p>
          </div>
        </header>

        {/* Section: Professional Summary */}
        <section className="mb-6">
          <h2 className="text-base font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1 mb-2.5 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-600 rounded-xs"></span>
            Professional Summary
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed text-justify">
            Former Assistant Secretary – IT at <strong>BKMEA</strong> (2020–2026) with 6 years of enterprise IT operations, database and software administration, technical support, IT infrastructure, and international project data management. Actively transforming my career into <strong>Frontend and Web AI-driven Full Stack Web Development</strong>, building modern, responsive, and secure web applications using <strong>React</strong>, <strong>Next.js</strong>, <strong>TypeScript</strong>, <strong>Tailwind CSS</strong>, <strong>Node.js</strong>, <strong>Express.js</strong>, <strong>MongoDB</strong>, and <strong>Better Auth</strong>. Seeking Frontend Developer, Web AI, and Full Stack Development opportunities.
          </p>
        </section>

        {/* Section: Professional Experience */}
        <section className="mb-6">
          <h2 className="text-base font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1 mb-3.5 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-600 rounded-xs"></span>
            Professional Experience (Past Roles)
          </h2>

          <div className="space-y-5">
            {/* Role 1 */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm">
                <h3 className="font-bold text-gray-900 text-base">
                  Former Assistant Secretary – IT | <span className="text-blue-600">BKMEA</span>
                </h3>
                <span className="text-xs font-semibold text-gray-500">
                  February 2020 – February 2026 (6 Years)
                </span>
              </div>
              <ul className="mt-2 list-disc list-inside text-xs sm:text-sm text-gray-700 space-y-1">
                <li>
                  Administered and supported team management and implementation of the BKMEA Biometric Member-Worker Database software.
                </li>
                <li>
                  Implemented and managed wireless devices; provided IT support, troubleshooting, network monitoring, server management, and automated data backup.
                </li>
                <li>
                  Managed BKMEA official websites, Membership Software, Tally Software, Windows Servers, UD Software, and ERP software.
                </li>
              </ul>
            </div>

            {/* Role 2 */}
            <div className="border-t border-gray-100 pt-3">
              <h4 className="font-bold text-sm text-gray-900">
                ILO–BKMEA Joint Initiative — Employment Retention for RMG Workers: COVID-19 Response
              </h4>
              <ul className="mt-1.5 list-disc list-inside text-xs sm:text-sm text-gray-700 space-y-1">
                <li>Field monitoring and processing information/data for the central database.</li>
                <li>Data management and implementation.</li>
                <li>Technical support and IT infrastructure management.</li>
              </ul>
            </div>

            {/* Role 3 */}
            <div className="border-t border-gray-100 pt-3">
              <h4 className="font-bold text-sm text-gray-900">
                EU Social Protection Program for Unemployed and Distressed Workers
              </h4>
              <ul className="mt-1.5 list-disc list-inside text-xs sm:text-sm text-gray-700 space-y-1">
                <li>Data collection and implementation.</li>
                <li>IT &amp; Database support.</li>
              </ul>
            </div>

            {/* Role 4 */}
            <div className="border-t border-gray-100 pt-3">
              <h4 className="font-bold text-sm text-gray-900">
                ILO EIS Pilot Project
              </h4>
              <ul className="mt-1.5 list-disc list-inside text-xs sm:text-sm text-gray-700 space-y-1">
                <li>IT technical support.</li>
                <li>Data tool management.</li>
                <li>Field monitoring and data processing.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section: Technical Skills */}
        <section className="mb-6">
          <h2 className="text-base font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1 mb-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-600 rounded-xs"></span>
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
              <span className="font-bold text-gray-900 block mb-1">
                Frontend &amp; Web Technologies:
              </span>
              <p className="text-gray-700">
                React.js, Next.js (App Router/SSR), TypeScript, JavaScript (ES6+), Tailwind CSS, DaisyUI, HTML5, CSS3, Responsive Design.
              </p>
            </div>

            <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
              <span className="font-bold text-gray-900 block mb-1">
                Backend &amp; Full Stack:
              </span>
              <p className="text-gray-700">
                MongoDB (CRUD &amp; Aggregations), Node.js, Express.js, Better Auth, RESTful APIs, Context API, LocalStorage.
              </p>
            </div>

            <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
              <span className="font-bold text-gray-900 block mb-1">
                IT Operations &amp; Systems:
              </span>
              <p className="text-gray-700">
                Windows Server, IT support, troubleshooting, network monitoring, server backup, BKMEA Biometric Database, ERP.
              </p>
            </div>

            <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
              <span className="font-bold text-gray-900 block mb-1">
                Tools &amp; Deployment:
              </span>
              <p className="text-gray-700">
                Git, GitHub, VS Code, npm, Vercel, Netlify, Postman, Vite, Chrome DevTools.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Selected Projects */}
        <section className="mb-6">
          <h2 className="text-base font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1 mb-3.5 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-600 rounded-xs"></span>
            Selected Projects
          </h2>

          <div className="space-y-4">
            {/* Project 1 */}
            <div className="border-l-2 border-blue-600 pl-4 py-0.5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="text-sm sm:text-base font-bold text-gray-900">
                  FitLog — Workout Library
                </h3>
                <div className="flex items-center gap-3 text-xs font-semibold text-blue-600">
                  <a
                    href="https://b14-a6-fit-log-opal-xi.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline flex items-center gap-1"
                  >
                    Live Demo <HiExternalLink />
                  </a>
                  <span>•</span>
                  <a
                    href="https://github.com/Avijit35cse/B14-A6-Fit-Log"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline flex items-center gap-1"
                  >
                    Repository <HiExternalLink />
                  </a>
                </div>
              </div>
              <p className="text-xs text-gray-500 font-medium mt-0.5">
                Tech Stack: Next.js, TypeScript, React, Tailwind CSS, DaisyUI, LocalStorage
              </p>
              <ul className="mt-1.5 list-disc list-inside text-xs sm:text-sm text-gray-700 space-y-1">
                <li>Built a responsive workout library with exercise detail pages and workout planning features.</li>
                <li>Implemented a personal plan, saved workouts, completion tracking, sorting, and LocalStorage persistence.</li>
              </ul>
            </div>

            {/* Project 2 */}
            <div className="border-l-2 border-indigo-600 pl-4 py-0.5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="text-sm sm:text-base font-bold text-gray-900">
                  Dev-Stack — Developer Technology Explorer
                </h3>
                <div className="flex items-center gap-3 text-xs font-semibold text-indigo-600">
                  <a
                    href="https://dev-stack-avijit.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline flex items-center gap-1"
                  >
                    Live Demo <HiExternalLink />
                  </a>
                  <span>•</span>
                  <a
                    href="https://github.com/Avijit35cse/B14-A05-DevStack"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline flex items-center gap-1"
                  >
                    Repository <HiExternalLink />
                  </a>
                </div>
              </div>
              <p className="text-xs text-gray-500 font-medium mt-0.5">
                Tech Stack: React, TypeScript, Tailwind CSS, DaisyUI, Vite
              </p>
              <ul className="mt-1.5 list-disc list-inside text-xs sm:text-sm text-gray-700 space-y-1">
                <li>Developed a developer-focused interface for exploring and organizing technology stack choices.</li>
              </ul>
            </div>

            {/* Project 3 */}
            <div className="border-l-2 border-emerald-600 pl-4 py-0.5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm sm:text-base font-bold text-gray-900">
                    Bazar Dor — Bengali Daily Market Price Tracker
                  </h3>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
                    Coming Soon
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs font-semibold text-emerald-600">
                  <span className="text-amber-600 font-medium">In Development</span>
                  <span>•</span>
                  <a
                    href="https://github.com/Avijit35cse/B14-A7-Bazar-Dor"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline flex items-center gap-1"
                  >
                    Repository <HiExternalLink />
                  </a>
                </div>
              </div>
              <p className="text-xs text-gray-500 font-medium mt-0.5">
                Tech Stack: Next.js, TypeScript, Tailwind CSS, Better Auth, React
              </p>
              <ul className="mt-1.5 list-disc list-inside text-xs sm:text-sm text-gray-700 space-y-1">
                <li>Currently engineering daily market commodity price tracker with Better Auth authentication and responsive localized tables.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section: Education */}
        <section className="mb-6">
          <h2 className="text-base font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1 mb-2.5 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-600 rounded-xs"></span>
            Education
          </h2>
          <div className="text-sm text-gray-800">
            <h3 className="font-bold text-base text-gray-900">
              B.Sc. in Computer Science &amp; Engineering
            </h3>
            <p className="text-gray-600 text-sm">
              International Islamic University Chittagong
            </p>
          </div>
        </section>

        {/* Section: Career Focus */}
        <section>
          <h2 className="text-base font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1 mb-2 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-600 rounded-xs"></span>
            Career Focus
          </h2>
          <p className="text-sm font-semibold text-blue-700 bg-blue-50/80 px-3.5 py-2 rounded-xl inline-block border border-blue-100">
            Frontend Development • Web AI-Driven Applications • Full Stack Web Engineering
          </p>
        </section>

      </div>
    </div>
  );
};

export default Resume;
