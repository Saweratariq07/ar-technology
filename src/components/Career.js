"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiBriefcase,
  FiUploadCloud,
} from "react-icons/fi";

export default function Career() {
  const formRef = useRef(null);
  const [resumeUrl, setResumeUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  /* ---------- Resume Upload ---------- */
  const uploadResume = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "AR Technology");
    data.append("cloud_name", "dk5yx0nwj");

    try {
      setLoading(true);
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dk5yx0nwj/raw/upload",
        { method: "POST", body: data }
      );
      const uploaded = await res.json();
      setResumeUrl(uploaded.secure_url);
      setStatus("resume_uploaded");
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  /* ---------- Submit Form ---------- */
  const submitForm = async (e) => {
    e.preventDefault();
    if (!resumeUrl) return setStatus("resume_missing");

    const hidden = document.createElement("input");
    hidden.type = "hidden";
    hidden.name = "user_resume_url";
    hidden.value = resumeUrl;
    formRef.current.appendChild(hidden);

    try {
      setLoading(true);
      await emailjs.sendForm(
        "service_x4nvcrj",
        "template_5549p97",
        formRef.current,
        "rh-z3wyi0InbrrTs0"
      );
      setStatus("success");
      formRef.current.reset();
      setResumeUrl("");
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
      {/* Soft background blobs */}
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-blue-300/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-[420px] h-[420px] bg-indigo-300/30 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-5 py-2 text-sm rounded-full bg-blue-100 text-blue-700 font-medium">
            Careers at AR TECHNOLOGY
          </span>

          <h1 className="mt-6 text-4xl md:text-5xl font-semibold text-gray-900">
            Build the Future of{" "}
            <span className="text-blue-600">AR Commerce</span>
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            Join our team and work on scalable AR solutions for Shopify
            eCommerce brands worldwide.
          </p>
        </motion.div>

        {/* 3D Glass Card */}
        <motion.div
          whileHover={{ rotateX: 4, rotateY: -4 }}
          transition={{ type: "spring", stiffness: 120 }}
          style={{ transformStyle: "preserve-3d" }}
          className="
            relative max-w-4xl mx-auto
            rounded-3xl p-10
            bg-white/70 backdrop-blur-xl
            border border-white
            shadow-[0_30px_80px_rgba(0,0,0,0.12)]
          "
        >
          {/* subtle gradient edge */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-200/30 via-transparent to-indigo-200/30 -z-10" />

          <form ref={formRef} onSubmit={submitForm} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
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
              <p className="text-sm font-medium text-gray-700 mb-3">
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
                      flex items-center justify-between
                      px-4 py-3 rounded-xl
                      bg-gray-50 border border-gray-200
                      hover:border-blue-400 hover:bg-blue-50
                      transition cursor-pointer
                    "
                  >
                    <span className="text-gray-700">{role}</span>
                    <input
                      type="radio"
                      name="user_post"
                      value={role}
                      required
                      className="accent-blue-600"
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
                bg-gray-50 border border-gray-200
                text-gray-800 placeholder:text-gray-400
                focus:ring-2 focus:ring-blue-400 outline-none
              "
            />

            {/* Resume Upload */}
            <label
              className="
                flex items-center justify-between
                px-4 py-4 rounded-xl
                bg-blue-50 border border-blue-200
                hover:bg-blue-100 transition
                cursor-pointer
              "
            >
              <div className="flex items-center gap-3">
                <FiUploadCloud className="text-blue-600" />
                <span className="text-blue-700 font-medium">
                  {resumeUrl ? "Resume Uploaded" : "Upload Resume (PDF)"}
                </span>
              </div>
              <input type="file" accept=".pdf" onChange={uploadResume} hidden />
            </label>

            {/* Status */}
            {status && (
              <p className="text-center text-sm text-gray-600">
                {status === "resume_uploaded" && "Resume uploaded successfully."}
                {status === "resume_missing" && "Please upload your resume first."}
                {status === "success" && "Application submitted successfully."}
                {status === "error" && "Something went wrong. Try again."}
              </p>
            )}

            <button
              disabled={loading}
              className="
                w-full mt-4 py-3 rounded-xl font-semibold
                bg-gradient-to-r from-blue-600 to-indigo-600
                text-white hover:opacity-90 transition
              "
            >
              {loading ? "Submitting…" : "Submit Application"}
            </button>
          </form>
        </motion.div>
      </div>
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
          bg-gray-50 border border-gray-200
          text-gray-800 placeholder:text-gray-400
          focus:ring-2 focus:ring-blue-400 outline-none
        "
      />
    </div>
  );
}
