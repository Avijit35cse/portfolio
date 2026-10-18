import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiMail, HiArrowUp } from "react-icons/hi";
import brandLogo from "../assets/logo.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t border-gray-200/90 text-gray-600 print:hidden mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand & Mission */}
          <div className="md:col-span-2 space-y-3">
            <Link
              to="/"
              className="inline-flex items-center group focus:outline-none"
              title="Avijit Barua - Home"
            >
              <img
                src={brandLogo}
                alt="Avijit Barua Logo"
                className="h-8.5 sm:h-9.5 md:h-10 w-auto object-contain transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_4px_14px_rgba(59,130,246,0.35)] select-none"
                style={{ imageRendering: "-webkit-optimize-contrast" }}
              />
            </Link>
            <p className="text-sm text-gray-500 max-w-md leading-relaxed">
              Frontend &amp; Web AI-Driven Full Stack Developer with 6 years of enterprise IT foundation at BKMEA (2020–2026), specializing in React, Next.js, TypeScript, Tailwind CSS, Node.js, Express, MongoDB, and Better Auth.
            </p>
            <div className="pt-1 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs text-gray-600 font-medium">
                Actively Seeking Frontend &amp; Web AI Full Stack Opportunities
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/#home" className="hover:text-blue-600 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/#about" className="hover:text-blue-600 transition">
                  About Me
                </a>
              </li>
              <li>
                <a href="/#skills" className="hover:text-blue-600 transition">
                  Skills Arsenal
                </a>
              </li>
              <li>
                <a href="/#experience" className="hover:text-blue-600 transition">
                  Work Experience
                </a>
              </li>
              <li>
                <a href="/#education" className="hover:text-blue-600 transition">
                  Educational Qualifications
                </a>
              </li>
              <li>
                <a href="/#projects" className="hover:text-blue-600 transition">
                  Featured Projects
                </a>
              </li>
              <li>
                <Link to="/resume" className="text-blue-600 font-semibold hover:underline">
                  View Full Resume &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Socials */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider">
              Connect Directly
            </h4>
            <p className="text-sm text-gray-500">
              Reach out for hiring, projects, or technical collaboration.
            </p>
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="https://github.com/Avijit35cse"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-900 hover:text-white flex items-center justify-center text-gray-700 transition"
                title="GitHub: Avijit35cse"
              >
                <FaGithub className="text-lg" />
              </a>
              <a
                href="https://www.linkedin.com/in/avijit-barua-dev"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-[#0a66c2] hover:text-white flex items-center justify-center text-gray-700 transition"
                title="LinkedIn: avijit-barua-dev"
              >
                <FaLinkedin className="text-lg" />
              </a>
              <a
                href="https://wa.me/8801812880953"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Chat"
                className="w-10 h-10 rounded-xl bg-emerald-50 hover:bg-emerald-600 hover:text-white flex items-center justify-center text-emerald-600 transition"
                title="WhatsApp: 01812880953"
              >
                <FaWhatsapp className="text-lg" />
              </a>
              <a
                href="mailto:ovicse35@outlook.com"
                aria-label="Send Email"
                className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-rose-500 hover:text-white flex items-center justify-center text-gray-700 transition"
                title="Send Email: ovicse35@outlook.com"
              >
                <HiMail className="text-lg" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Avijit Barua. All rights reserved. Built with React 19 &amp; Tailwind CSS.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="inline-flex items-center gap-1.5 text-gray-600 hover:text-blue-600 font-semibold transition cursor-pointer"
          >
            <span>Back to top</span>
            <HiArrowUp className="text-sm" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
