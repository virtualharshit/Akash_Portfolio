"use client";

import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Google Form Field IDs (replace with your actual IDs)
  const FIELD_IDS = {
    name: "entry.1205332458",
    email: "entry.1768062433", // Find in your form's HTML
    contact: "entry.1574097731", // Find in your form's HTML
    message: "entry.371500695",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formUrl = `https://docs.google.com/forms/d/e/1FAIpQLSftE-6UMyU7T7HzufmIyjaRd4QD9S4YkWA4K0WIdLwm9oukAg/formResponse?usp=pp_url&${
      FIELD_IDS.name
    }=${encodeURIComponent(formData.name)}&${
      FIELD_IDS.email
    }=${encodeURIComponent(formData.email)}&${
      FIELD_IDS.contact
    }=${encodeURIComponent(formData.contact)}&${
      FIELD_IDS.message
    }=${encodeURIComponent(formData.message)}`;

    try {
      await fetch(formUrl, { method: "POST", mode: "no-cors" });
      setSubmitStatus("success");
      setFormData({ name: "", email: "", contact: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="px-4 py-12 md:py-24 lg:px-8">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4 text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Let&apos;s Start Something
        </h2>
      </div>

      <div className="bg-white text-black max-w-6xl mx-auto p-6 md:p-8 rounded-2xl flex flex-col gap-6">
        <div className="font-bold text-xl md:text-2xl border-b border-[#00000033] py-4">
          GET IN TOUCH
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium">
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter Name"
              className="bg-[#EDEDED] p-3 md:p-4 rounded focus:ring-2 focus:ring-black focus:border-transparent"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium">
              Your Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter Email"
              className="bg-[#EDEDED] p-3 md:p-4 rounded focus:ring-2 focus:ring-black focus:border-transparent"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-2">
            <label htmlFor="contact" className="text-sm font-medium">
              Your Contact
            </label>
            <input
              id="contact"
              name="contact"
              type="tel"
              placeholder="Enter Contact Number"
              className="bg-[#EDEDED] p-3 md:p-4 rounded focus:ring-2 focus:ring-black focus:border-transparent"
              value={formData.contact}
              onChange={handleChange}
              required
            />
          </div>

          {/* Message (full width) */}
          <div className="md:col-span-2 flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium">
              Anything you&apos;d like to mention before we give you a call?
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Enter your message"
              className="bg-[#EDEDED] p-3 md:p-4 rounded focus:ring-2 focus:ring-black focus:border-transparent"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          {/* Submit Button and Status */}
          <div className="md:col-span-2 flex flex-col items-end gap-2">
            {submitStatus === "success" && (
              <p className="text-green-600 ">
                Thank you! We&apos;ll contact you soon.
              </p>
            )}
            {submitStatus === "error" && (
              <p className="text-red-600">
                Submission failed. Please try again.
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full cursor-pointer md:w-auto bg-black text-white py-3 px-8 rounded-lg text-lg md:text-xl hover:bg-gray-800 transition-colors ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Sending..." : "Let's Contact"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
