"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiBriefcase,
  FiUploadCloud,
  FiCheckCircle,
  FiXCircle,
  FiFileText,
} from "react-icons/fi";

export default function Career() {
  const formRef = useRef(null);

  const [resumeUrl, setResumeUrl] = useState("");
  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState({ open: false, type: "success", msg: "" });

  const showToast = (type, msg) => {
    setToast({ open: true, type, msg });
    setTimeout(() => setToast({ open: false, type, msg: "" }), 2600);
  };

  /* ---------- Resume Upload ---------- */
  const uploadResume = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type !== "application/pdf") {
      showToast("error", "Please upload a PDF resume.");
      return;
    }

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "AR Technology");
    data.append("cloud_name", "dk5yx0nwj");

    try {
      setUploading(true);
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dk5yx0nwj/raw/upload",
        { method: "POST", body: data }
      );

      const uploaded = await res.json();
      if (!uploaded?.secure_url) throw new Error("Upload failed");

      setResumeUrl(uploaded.secure_url);
      showToast("success", "Resume uploaded successfully.");
    } catch {
      showToast("error", "Resume upload failed. Try again.");
    } finally {
      setUploading(false);
    }
  };

  /* ---------- Submit Form ---------- */
  const submitForm = async (e) => {
    e.preventDefault();

    if (!resumeUrl) {
      showToast("error", "Please upload your resume first.");
      return;
    }

    // Ensure hidden input exists only once
    const existing = formRef.current?.querySelector('input[name="user_resume_url"]');
    if (existing) existing.remove();

    const hidden = document.createElement("input");
    hidden.type = "hidden";
    hidden.name = "user_resume_url";
    hidden.value = resumeUrl;
    formRef.current.appendChild(hidden);

    try {
      setSubmitting(true);

      await emailjs.sendForm(
        "service_x4nvcrj",
        "template_5549p97",
        formRef.current,
        "rh-z3wyi0InbrrTs0"
      );

      formRef.current.reset();
      setResumeUrl("");
      showToast("success", "Application submitted successfully.");
    } catch {
      showToast("error", "Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Modern ambient blobs */}
      <div className="pointer-events-none absolute -top-28 -left-28 h-[440px] w-[440px] rounded-full bg-blue-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -right-28 h-[460px] w-[460px] rounded-full bg-indigo-300/30 blur-3xl" />

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(2,6,23,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(2,6,23,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(60% 50% at 50% 18%, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)",
          WebkitMaskImage:
            "radial-gradient(60% 50% at 50% 18%, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)",
        }}
      />

      <div className="relative mx-auto w-[92%] max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2 text-sm font-medium text-blue-700">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            Careers at AR TECHNOLOGY
          </span>

          <h1 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
            Build the Future of{" "}
            <span className="text-blue-600">AR Commerce</span>
          </h1>

          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Apply to join our team delivering scalable AR solutions for Shopify
            eCommerce brands worldwide.
          </p>
        </motion.div>

        {/* Layout */}
        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left: Info panel (modern) */}
          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="lg:col-span-5"
          >
            <div className="rounded-3xl border border-white bg-white/70 backdrop-blur-xl p-8 shadow-[0_22px_70px_rgba(0,0,0,0.10)]">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-gray-200 bg-white text-blue-600">
                  <FiBriefcase />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Application Notes
                  </h3>
                  <p className="text-sm text-gray-600">
                    A clear submission helps faster review.
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-gray-200 bg-white p-5">
                  <p className="text-sm font-semibold text-gray-900">Required</p>
                  <ul className="mt-3 space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600" />
                      Basic info: name, email, phone
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600" />
                      Role selection and experience
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600" />
                      Resume in PDF format
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-5">
                  <p className="text-sm font-semibold text-gray-900">
                    What we value
                  </p>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    Professional collaboration, reliable delivery, and scalable
                    engineering practices aligned with Shopify performance
                    expectations.
                  </p>
                </div>
              </div>
            </div>
          </motion.aside>

          {/* Right: Form 3D glass */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <motion.div
              whileHover={{ rotateX: 2.5, rotateY: -2.5, y: -2 }}
              transition={{ type: "spring", stiffness: 140, damping: 16 }}
              style={{ transformStyle: "preserve-3d" }}
              className="
                relative rounded-3xl p-10
                bg-white/75 backdrop-blur-xl
                border border-white
                shadow-[0_30px_90px_rgba(0,0,0,0.12)]
              "
            >
              <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-tr from-blue-200/35 via-transparent to-indigo-200/35" />

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-gray-200 bg-white text-blue-600">
                  <FiFileText />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    Submit Your Application
                  </h2>
                  <p className="text-sm text-gray-600">
                    Fill details and attach your PDF resume.
                  </p>
                </div>
              </div>

              <form ref={formRef} onSubmit={submitForm} className="mt-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-5">
                  <Field icon={<FiUser />} name="user_name" placeholder="Full Name" />
                  <Field icon={<FiPhone />} name="user_contact" placeholder="Contact Number" />
                </div>

                <Field
                  icon={<FiMail />}
                  name="user_email"
                  type="email"
                  placeholder="Email Address"
                />

                {/* Role */}
                <div>
                  <p className="text-sm font-semibold text-gray-800 mb-3">
                    Apply For
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      "Web Developer",
                      "Mobile App Developer",
                      "UI/UX Designer",
                      "AI Engineer",
                      "Digital Marketer",
                    ].map((role) => (
                      <label
                        key={role}
                        className="
                          group flex items-center justify-between
                          px-4 py-3 rounded-xl
                          bg-white border border-gray-200
                          hover:border-blue-300 hover:bg-blue-50/60
                          transition cursor-pointer
                        "
                      >
                        <span className="text-sm font-medium text-gray-800">
                          {role}
                        </span>
                        <input
                          type="radio"
                          name="user_post"
                          value={role}
                          required
                          className="h-4 w-4 accent-blue-600"
                        />
                      </label>
                    ))}
                  </div>
                </div>

                <Field
                  icon={<FiBriefcase />}
                  name="user_experience"
                  placeholder="Years of Experience"
                />

                <textarea
                  name="user_details"
                  rows={4}
                  placeholder="Tell us about your skills or portfolio…"
                  className="
                    w-full rounded-xl px-4 py-3
                    bg-white border border-gray-200
                    text-gray-800 placeholder:text-gray-400
                    focus:ring-2 focus:ring-blue-400 outline-none
                  "
                />

                {/* Resume Upload */}
                <div className="space-y-2">
                  <label
                    className={[
                      "flex items-center justify-between gap-4",
                      "px-4 py-4 rounded-xl",
                      "border transition cursor-pointer",
                      resumeUrl
                        ? "bg-emerald-50 border-emerald-200"
                        : "bg-blue-50 border-blue-200 hover:bg-blue-100",
                    ].join(" ")}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <FiUploadCloud className={resumeUrl ? "text-emerald-600" : "text-blue-600"} />
                      <div className="min-w-0">
                        <p
                          className={[
                            "font-semibold text-sm truncate",
                            resumeUrl ? "text-emerald-700" : "text-blue-700",
                          ].join(" ")}
                        >
                          {resumeUrl ? "Resume Uploaded" : "Upload Resume (PDF)"}
                        </p>
                        <p className="text-xs text-gray-600">
                          {uploading
                            ? "Uploading…"
                            : resumeUrl
                            ? "Ready to submit."
                            : "Only PDF supported."}
                        </p>
                      </div>
                    </div>

                    <span className="text-xs font-medium text-gray-700">
                      {uploading ? "Please wait" : resumeUrl ? "Done" : "Choose file"}
                    </span>

                    <input
                      type="file"
                      accept=".pdf"
                      onChange={uploadResume}
                      hidden
                      disabled={uploading || submitting}
                    />
                  </label>

                  {resumeUrl && (
                    <a
                      href={resumeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block text-xs font-medium text-blue-700 hover:underline"
                    >
                      View uploaded resume
                    </a>
                  )}
                </div>

                <button
                  disabled={uploading || submitting}
                  className={[
                    "w-full mt-2 py-3 rounded-xl font-semibold text-white",
                    "bg-gradient-to-r from-blue-600 to-indigo-600",
                    "hover:opacity-90 transition",
                    "focus:outline-none focus:ring-2 focus:ring-blue-400",
                    uploading || submitting ? "opacity-60 cursor-not-allowed" : "",
                  ].join(" ")}
                >
                  {submitting ? "Submitting…" : "Submit Application"}
                </button>

                <p className="text-xs text-gray-500">
                  By submitting, you confirm the provided details are accurate.
                </p>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Toast */}
      <AnimatePresence>
        {toast.open && (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 14 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <div
              className={[
                "flex items-center gap-3 rounded-2xl border px-4 py-3 shadow-lg",
                toast.type === "success"
                  ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                  : "border-rose-200 bg-rose-50 text-rose-800",
              ].join(" ")}
            >
              <span className="text-lg">
                {toast.type === "success" ? <FiCheckCircle /> : <FiXCircle />}
              </span>
              <p className="text-sm font-medium">{toast.msg}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ---------- Input Field ---------- */
function Field({ icon, name, type = "text", placeholder }) {
  return (
    <div className="relative">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
        {icon}
      </span>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="
          w-full pl-11 pr-4 py-3 rounded-xl
          bg-white border border-gray-200
          text-gray-800 placeholder:text-gray-400
          focus:ring-2 focus:ring-blue-400 outline-none
        "
      />
    </div>
  );
}
