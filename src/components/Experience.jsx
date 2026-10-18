import {
  HiOutlineBriefcase,
  HiOutlineCalendar,
  HiOutlineLocationMarker,
  HiOutlineCheckCircle,
  HiOutlineSparkles,
} from "react-icons/hi";
import { FaLaptopCode, FaHandsHelping, FaAward, FaServer } from "react-icons/fa";

const experiences = [
  {
    role: "Former Assistant Secretary – IT",
    company: "BKMEA (Bangladesh Knitwear Manufacturers & Exporters Association)",
    location: "Dhaka, Bangladesh",
    period: "February 2020 – February 2026 (Past Experience)",
    type: "Past Professional Experience",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    responsibilities: [
      "Administered and supported team management and implementation of the BKMEA Biometric Member-Worker Database software across RMG factories.",
      "Implemented and managed wireless devices; provided proactive IT support, technical troubleshooting, network monitoring, server management, and automated data backups.",
      "Managed and maintained BKMEA official websites, Membership Software, Tally Accounting Software, Windows Servers, UD Software, and organizational ERP software.",
    ],
    technologies: [
      "Windows Server",
      "Biometric Database",
      "Network Monitoring",
      "ERP Software",
      "Data Backup",
      "IT Support",
    ],
  },
  {
    role: "Technical & Data Support Specialist",
    company: "ILO–BKMEA Joint Initiative (Employment Retention for RMG Workers: COVID-19 Response)",
    location: "Dhaka & Field Locations",
    period: "International Project Collaboration (Completed)",
    type: "Past Project Experience",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    responsibilities: [
      "Conducted field monitoring, auditing, and processing of worker records into the central database for RMG worker employment retention.",
      "Executed database implementation and streamlined data validation pipelines.",
      "Provided uninterrupted technical support and managed essential IT infrastructure on site.",
    ],
    technologies: ["Database Management", "Field Monitoring", "IT Infrastructure", "Data Processing"],
  },
  {
    role: "IT & Database Support Officer",
    company: "EU Social Protection Program for Unemployed and Distressed Workers",
    location: "Dhaka, Bangladesh",
    period: "EU Funded Initiative (Completed)",
    type: "Past Project Experience",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
    responsibilities: [
      "Coordinated accurate data collection and verification pipelines for distressed workers across beneficiary zones.",
      "Maintained operational integrity of project databases, generating structured reports for international auditors.",
      "Delivered ongoing IT support to field workers and administrative officers.",
    ],
    technologies: ["Data Collection", "Database Support", "Verification Tools", "Reporting"],
  },
  {
    role: "IT Support & Data Tool Specialist",
    company: "ILO EIS Pilot Project",
    location: "Dhaka, Bangladesh",
    period: "Pilot Project (Completed)",
    type: "Past Project Experience",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
    responsibilities: [
      "Provided frontline IT technical support and hardware/software troubleshooting for project personnel.",
      "Managed specialized data collection and data entry tools ensuring zero data loss during pilot field assessments.",
      "Conducted routine data processing, verification audits, and system status health checks.",
    ],
    technologies: ["Data Tool Management", "Technical Support", "Field Monitoring", "Data Audit"],
  },
];

const valueProps = [
  {
    icon: FaLaptopCode,
    title: "Career Transformation & Focus",
    desc: "Dedicated to modern Frontend and Web AI-driven Full Stack development, building fast SPAs with Next.js, React, TypeScript, and MongoDB.",
  },
  {
    icon: FaServer,
    title: "6-Year Enterprise IT Reliability",
    desc: "Past tenure as Assistant Secretary – IT at BKMEA (2020–2026) managing enterprise systems, servers, and mission-critical databases.",
  },
  {
    icon: FaHandsHelping,
    title: "International Stakeholder Track Record",
    desc: "Proven success executing technical support and data pipelines for the International Labour Organization (ILO) and European Union (EU).",
  },
  {
    icon: FaAward,
    title: "Modern Full-Stack Tooling",
    desc: "Well-versed in Better Auth, Express.js, Node.js, Tailwind CSS, DaisyUI, and REST APIs with clean code standards.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-gray-50/50">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-semibold uppercase tracking-wider">
          <HiOutlineBriefcase className="text-blue-600 text-sm" />
          <span>Professional Background</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
          Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Experience</span>
        </h2>

        <p className="text-base sm:text-lg text-gray-600">
          6 years of past enterprise IT experience at BKMEA (2020–2026) alongside international project roles (ILO &amp; EU), now channeling this discipline into Frontend &amp; Web AI Development.
        </p>
      </div>

      {/* Experience Timeline Cards */}
      <div className="max-w-4xl mx-auto space-y-8 mb-16">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl border border-gray-200/90 p-6 sm:p-8 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 relative"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
              <div>
                <span className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full border mb-2 ${exp.badgeColor}`}>
                  {exp.type}
                </span>
                <h3 className="text-xl font-bold text-gray-900">
                  {exp.role}
                </h3>
                <p className="text-sm font-semibold text-blue-600 mt-0.5">
                  {exp.company}
                </p>
              </div>

              <div className="flex flex-col sm:items-end text-xs text-gray-500 gap-1 shrink-0">
                <span className="flex items-center gap-1 font-medium text-gray-700">
                  <HiOutlineCalendar className="text-blue-600" />
                  {exp.period}
                </span>
                <span className="flex items-center gap-1">
                  <HiOutlineLocationMarker className="text-gray-400" />
                  {exp.location}
                </span>
              </div>
            </div>

            {/* Responsibilities list */}
            <ul className="space-y-2 mb-5">
              {exp.responsibilities.map((task, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-700">
                  <HiOutlineCheckCircle className="text-blue-600 text-base shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{task}</span>
                </li>
              ))}
            </ul>

            {/* Technologies used */}
            <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase text-gray-400 mr-1">
                Domain / Tools:
              </span>
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-50 text-gray-700 border border-gray-100"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Value Proposition Callout Card */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-blue-200/80 p-8 shadow-sm">
        <div className="text-center max-w-xl mx-auto mb-8 space-y-1">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
            Why Hire Me for Your Web Development Team?
          </h3>
          <p className="text-sm text-gray-500">
            A battle-tested IT foundation combined with modern full-stack web engineering and Web AI drive.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {valueProps.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex items-start gap-3.5 p-4 rounded-xl bg-blue-50/40 border border-blue-100/60">
                <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Icon className="text-lg" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
