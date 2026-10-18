import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";
import {
  HiArrowLeft,
  HiExternalLink,
  HiCode,
  HiLightBulb,
  HiShieldCheck,
  HiCheckCircle,
} from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-[75vh] flex items-center justify-center px-6">
        <div className="text-center max-w-md bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Project Not Found</h2>
          <p className="text-gray-600 text-sm mb-6">
            The project you are looking for does not exist or has been relocated.
          </p>
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-semibold transition"
          >
            <HiArrowLeft /> Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen pt-28 pb-20 bg-gray-50/60 text-gray-800">
      <div className="max-w-4xl mx-auto px-6">
        {/* Navigation Breadcrumb */}
        <div className="mb-6 flex items-center justify-between">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-blue-600 transition"
          >
            <HiArrowLeft /> Back to All Projects
          </Link>

          <span className="text-xs text-gray-400 font-medium">
            Project #{project.id} of {projects.length}
          </span>
        </div>

        {/* Project Card Container */}
        <div className="bg-white rounded-3xl border border-gray-200/90 shadow-sm overflow-hidden p-6 sm:p-10 space-y-8">
          
          {/* Main Screenshot / Project Image */}
          <div className="rounded-2xl overflow-hidden border border-gray-200/80 shadow-md aspect-video bg-gray-100">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Title & Category Header */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              {project.category && (
                <span className="inline-block bg-blue-50 text-blue-700 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">
                  {project.category}
                </span>
              )}
              {project.isComingSoon && (
                <span className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                  Coming Soon — In Active Development
                </span>
              )}
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              {project.title}
            </h1>
          </div>

          {/* 1. Main Technology Stack Used (Requirement 9) */}
          <div className="p-5 rounded-2xl bg-gray-50/80 border border-gray-100">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <HiCode className="text-blue-600 text-base" /> Main Technology Stack Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-white text-blue-800 border border-blue-200/80 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold shadow-2xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* 2. Brief Description & Overview (Requirement 9) */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-gray-900">Project Overview</h3>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              {project.description}
            </p>
          </div>

          {/* 3. Challenges Faced While Developing (Requirement 9) */}
          {project.challenges && project.challenges.length > 0 && (
            <div className="space-y-3 p-6 rounded-2xl bg-amber-50/40 border border-amber-200/60">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2">
                <HiShieldCheck className="text-amber-600 text-xl" />
                Challenges Faced While Developing the Project
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {project.challenges.map((challenge, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 4. Potential Improvements and Future Plans (Requirement 9) */}
          {project.future && project.future.length > 0 && (
            <div className="space-y-3 p-6 rounded-2xl bg-blue-50/40 border border-blue-200/60">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2">
                <HiLightBulb className="text-blue-600 text-xl" />
                Potential Improvements &amp; Future Plans
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {project.future.map((enhancement, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <HiCheckCircle className="text-blue-600 text-lg shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{enhancement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 5. Live Project Link & GitHub Repository Link (Only Client) (Requirement 9) */}
          <div className="pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3.5">
              {/* Live project link / Coming Soon */}
              {project.live ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3.5 rounded-xl font-bold shadow-md shadow-blue-500/25 transition-all text-sm"
                  title="Open Live Project"
                >
                  <span>Live Project Link</span>
                  <HiExternalLink className="text-base" />
                </a>
              ) : (
                <span
                  className="inline-flex items-center gap-2 bg-amber-500 text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-md shadow-amber-500/20"
                  title="Coming Soon - Under Active Development"
                >
                  <span>🔨 Under Active Development (Coming Soon)</span>
                </span>
              )}

              {/* GitHub repository link (only client) */}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-gray-900 hover:bg-black text-white px-6 py-3.5 rounded-xl font-semibold shadow-xs hover:shadow transition-all text-sm"
                  title="GitHub Client Repository"
                >
                  <FaGithub className="text-lg" />
                  <span>GitHub Repository (Client)</span>
                  <HiExternalLink className="text-sm" />
                </a>
              )}
            </div>

            <Link
              to="/#projects"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:underline"
            >
              &larr; Back to Portfolio
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
};

export default ProjectDetails;
