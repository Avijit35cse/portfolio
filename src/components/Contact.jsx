import { useState } from "react";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlineChatAlt2,
  HiOutlineCheckCircle,
} from "react-icons/hi";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        submitting: false,
        submitted: false,
        error: "Please fill in all required fields (Name, Email, Message).",
      });
      return;
    }

    setStatus({ submitting: true, submitted: false, error: null });

    // Simulate sending message
    setTimeout(() => {
      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Auto-hide success message after 6 seconds
      setTimeout(() => {
        setStatus((prev) => ({ ...prev, submitted: false }));
      }, 6000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-semibold uppercase tracking-wider">
          <HiOutlineChatAlt2 className="text-blue-600 text-sm" />
          <span>Get In Touch</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
          Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Connect</span>
        </h2>

        <p className="text-base sm:text-lg text-gray-600">
          Interested in discussing a Frontend Developer, Web AI, or Full Stack role? Reach out to me directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Direct Info Cards & Social Links (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl border border-gray-200/90 p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                Contact Information
              </h3>
              <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                Connect via phone, email, or chat directly on WhatsApp.
              </p>
            </div>

            <div className="space-y-3.5 pt-1">
              {/* WhatsApp (Updated to 01812880953) */}
              <a
                href="https://wa.me/8801812880953"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-4 p-4 rounded-2xl bg-emerald-50/80 hover:bg-emerald-100/80 border border-emerald-200 hover:border-emerald-300 transition group"
                title="Chat on WhatsApp: 01812880953"
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-xs">
                  <FaWhatsapp className="text-xl" />
                </div>
                <div>
                  <span className="text-xs text-emerald-800 font-semibold uppercase tracking-wider block">
                    WhatsApp Chat (Instant Response)
                  </span>
                  <span className="text-sm font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
                    01812880953
                  </span>
                </div>
              </a>

              {/* Email Address */}
              <a
                href="mailto:ovicse35@outlook.com"
                className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50/80 hover:bg-blue-50/80 border border-gray-200/80 hover:border-blue-300 transition group"
                title="Send email to Avijit Barua"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <HiOutlineMail className="text-xl" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider block">
                    Email Address
                  </span>
                  <span className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors break-all">
                    ovicse35@outlook.com
                  </span>
                </div>
              </a>

              {/* Phone Number */}
              <a
                href="tel:01964050150"
                className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50/80 hover:bg-blue-50/80 border border-gray-200/80 hover:border-blue-300 transition group"
                title="Call 01964050150"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <HiOutlinePhone className="text-xl" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider block">
                    Phone / Call
                  </span>
                  <span className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    01964050150
                  </span>
                </div>
              </a>

              {/* Present Address */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50/80 border border-gray-200/80">
                <div className="w-11 h-11 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <HiOutlineLocationMarker className="text-xl" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider block">
                    Present Address
                  </span>
                  <span className="text-sm font-bold text-gray-900">
                    Ahmedbag, Basabo, Dhaka
                  </span>
                </div>
              </div>

              {/* Permanent Address */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50/80 border border-gray-200/80">
                <div className="w-11 h-11 rounded-xl bg-gray-200 text-gray-700 flex items-center justify-center shrink-0">
                  <HiOutlineLocationMarker className="text-xl" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider block">
                    Permanent Address
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-gray-700">
                    South Gahtchek, Rangunia Municipal Area, Rangunia-4360, Chattogram
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links Bar */}
            <div className="pt-4 border-t border-gray-100">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-3">
                Professional Profiles
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Avijit35cse"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className="w-11 h-11 rounded-xl bg-gray-100 hover:bg-gray-900 hover:text-white flex items-center justify-center text-gray-700 transition"
                  title="GitHub: Avijit35cse"
                >
                  <FaGithub className="text-xl" />
                </a>
                <a
                  href="https://www.linkedin.com/in/avijit-barua-dev"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-11 h-11 rounded-xl bg-gray-100 hover:bg-[#0a66c2] hover:text-white flex items-center justify-center text-gray-700 transition"
                  title="LinkedIn: avijit-barua-dev"
                >
                  <FaLinkedin className="text-xl" />
                </a>
                <a
                  href="https://wa.me/8801812880953"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="w-11 h-11 rounded-xl bg-emerald-50 hover:bg-emerald-600 hover:text-white flex items-center justify-center text-emerald-600 transition"
                  title="WhatsApp: 01812880953"
                >
                  <FaWhatsapp className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Contact Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-3xl border border-gray-200/90 p-6 sm:p-10 shadow-xs">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              Send a Direct Message
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              Fill out the form below and I will respond to your inquiry promptly.
            </p>

            {/* Success Toast */}
            {status.submitted && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-3 animate-fadeIn">
                <HiOutlineCheckCircle className="text-2xl text-emerald-600 shrink-0" />
                <div>
                  <p className="text-sm font-bold">Message sent successfully!</p>
                  <p className="text-xs text-emerald-700">
                    Thank you for reaching out. I will get back to you shortly at your provided email.
                  </p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {status.error && (
              <div className="mb-6 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-sm">
                {status.error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-gray-700 uppercase mb-1.5">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Hiring Manager"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50/50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-gray-700 uppercase mb-1.5">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50/50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-xs font-semibold text-gray-700 uppercase mb-1.5">
                  Subject / Role Inquiry
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Frontend Developer / Web AI / Full Stack Opportunity"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50/50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-gray-700 uppercase mb-1.5">
                  Your Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hello Avijit, we reviewed your projects and would love to discuss an opportunity..."
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50/50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status.submitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-md shadow-blue-500/25 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status.submitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FaPaperPlane className="text-sm" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
