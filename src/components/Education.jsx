import {
  HiOutlineAcademicCap,
  HiOutlineBookOpen,
  HiOutlineCalendar,
  HiOutlineLocationMarker,
  HiOutlineBadgeCheck,
} from "react-icons/hi";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";

const educationHistory = [
  {
    degree: "B.Sc. in Computer Science & Engineering (CSE)",
    institution: "International Islamic University Chittagong (IIUC)",
    location: "Chittagong, Bangladesh",
    period: "Graduated",
    grade: "Bachelor of Science",
    description:
      "Gained a comprehensive academic foundation in computer science, software engineering principles, algorithm design, database management systems, and networking protocols.",
    coursework: [
      "Data Structures & Algorithms",
      "Database Management Systems (DBMS)",
      "Software Engineering & Architecture",
      "Computer Networks & Telecommunications",
      "Operating Systems & Linux Basics",
      "Web Technologies & System Design",
      "Object-Oriented Programming (OOP)",
      "Problem Solving & Analytical Reasoning",
    ],
    highlights: [
      "Specialized study in software engineering, computational algorithms, and scalable web architectures.",
      "Bridged deep theoretical foundations with practical full-stack web applications and IT operations.",
      "Comprehensive laboratory training in relational databases, Unix/Linux environments, and networking.",
    ],
  },
];

const certifications = [
  {
    title: "Modern Web & Frontend Engineering",
    issuer: "Specialized Web Development Program",
    year: "Recent",
    desc: "Comprehensive practical training building full-stack web applications with React, Next.js, TypeScript, Tailwind CSS, and DaisyUI.",
  },
  {
    title: "Windows Server & IT Infrastructure Administration",
    issuer: "Enterprise Training & Professional Practice",
    year: "BKMEA",
    desc: "Over 6 years of direct hands-on server administration, biometric database management, and network troubleshooting.",
  },
  {
    title: "Project Data Management & Field Operations",
    issuer: "ILO & EU Project Collaborations",
    year: "International",
    desc: "Verified competencies in large-scale workforce data collection, verification pipelines, and audit-ready data processing.",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-semibold uppercase tracking-wider">
          <HiOutlineAcademicCap className="text-blue-600 text-sm" />
          <span>Academic Background</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
          Educational <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Qualifications</span>
        </h2>

        <p className="text-base sm:text-lg text-gray-600">
          My academic computer science degree from International Islamic University Chittagong and professional continuous learning.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Formal Degree (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-4">
            <FaGraduationCap className="text-blue-600 text-2xl" />
            <span>Academic Qualification</span>
          </h3>

          <div className="space-y-6">
            {educationHistory.map((edu) => (
              <div
                key={edu.degree}
                className="bg-white rounded-2xl border border-gray-200/90 p-6 sm:p-8 shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-300 relative overflow-hidden"
              >
                {/* Decorative left accent border */}
                <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-600 to-indigo-600"></div>

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900">
                      {edu.degree}
                    </h4>
                    <p className="text-base font-semibold text-blue-600 mt-1">
                      {edu.institution}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500 mt-1.5">
                      <span className="flex items-center gap-1">
                        <HiOutlineCalendar className="text-gray-400" />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <HiOutlineLocationMarker className="text-gray-400" />
                        {edu.location}
                      </span>
                    </div>
                  </div>

                  <span className="inline-block bg-blue-50 text-blue-700 border border-blue-200 text-xs font-bold px-3 py-1.5 rounded-full shrink-0">
                    {edu.grade}
                  </span>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed mb-5">
                  {edu.description}
                </p>

                {/* Academic Highlights */}
                <div className="mb-5 bg-blue-50/50 rounded-xl p-4 border border-blue-100">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-2.5 flex items-center gap-1.5">
                    <HiOutlineBadgeCheck className="text-blue-600 text-base" />
                    Key Academic Highlights
                  </h5>
                  <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                    {edu.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Coursework list */}
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2.5 flex items-center gap-1">
                    <HiOutlineBookOpen className="text-blue-600 text-sm" />
                    Key Courses &amp; Core Subjects
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="text-xs font-medium px-3 py-1.5 rounded-lg bg-gray-50 text-gray-700 border border-gray-200/80 hover:border-blue-300 transition"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Certifications & Continuous Learning (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-4">
            <FaCertificate className="text-amber-500" />
            <span>Key Competencies &amp; Certifications</span>
          </h3>

          <div className="space-y-4">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="bg-white rounded-2xl border border-gray-200/80 p-5 shadow-xs hover:border-amber-200 hover:shadow-sm transition-all"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                    <HiOutlineBadgeCheck className="text-lg" />
                  </div>
                  <span className="text-xs font-bold text-amber-700 bg-amber-50/80 border border-amber-200 px-2 py-0.5 rounded">
                    {cert.year}
                  </span>
                </div>

                <h4 className="font-bold text-gray-900 text-sm mt-3">
                  {cert.title}
                </h4>
                <p className="text-xs font-semibold text-blue-600 mt-0.5">
                  {cert.issuer}
                </p>
                <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                  {cert.desc}
                </p>
              </div>
            ))}

            {/* Quick Note Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-md">
              <h4 className="font-bold text-base mb-1">Career Focus</h4>
              <p className="text-xs text-blue-100 leading-relaxed mb-3">
                Actively pursuing challenging opportunities in IT Support, Application Support, and Frontend Web Engineering.
              </p>
              <span className="inline-block bg-white/20 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1 rounded-full">
                Open to Opportunities
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
