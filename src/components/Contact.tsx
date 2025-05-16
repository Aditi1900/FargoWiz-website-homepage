 "use client";

import React, { useState } from "react";
import { useInView } from 'react-intersection-observer';
 
export default function Contact () {
 function validateEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function validateForm() {
    const errors = {
      name: "",
      email: "",
      message: "",
    };
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      errors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }
    setFormErrors(errors);
    return !errors.name && !errors.email && !errors.message;
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }
    setIsSubmitting(true);
    setSubmitError("");
    try {
      // simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // reset form on success
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setSubmitSuccess(true);

      // reset success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setSubmitError("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  

    const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { ref, inView } = useInView({
    threshold: 0.5, 
    triggerOnce: true, 
  });

return (
<section
        id="contact"
        className="py-20 px-5 bg-[rgb(254,254,254)] text-center border-b border-[rgba(0,0,0,0.1)]"
        style={{
       backgroundImage: `url("/assets/background3.jpg")`,
       backgroundSize: "cover",
      backgroundPosition: "center",
      }}
      >
        
        <h2 ref={ref}
        style={{
              transition: "all 1.5s ease-in-out",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translatey(100px)",
            }}
        className="text-white text-2xl font-bold mb-10">GET IN TOUCH</h2>
        <div 
        style={{
              transition: "all 1.5s ease-in-out",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(150px)",
            }}
        className="max-w-[700px] mx-auto p-8 rounded-[20px] backdrop-blur-[3px] border-white transition-transform duration-300 border-2 bg-transparent hover:scale-105 hover:shadow-lg hover:shadow-white/10 shadow-[0_16px_32px_0_rgba(166,55,112,0.1)]">
          <form onSubmit={handleSubmit}>
            <div className="mb-5 text-left">
              <label
                htmlFor="name"
                className="mb-2 block text-white text-base"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                aria-invalid={!!formErrors.name}
                aria-describedby={formErrors.name ? "name-error" : undefined}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  if (formErrors.name) {
                    setFormErrors({ ...formErrors, name: "" });
                  }
                }}
                className="w-full p-3 rounded-lg border border-blue-500 hover:shadow-lg hover:shadow-white/10 transition-transform duration-300 hover:scale-105 shadow-[0_16px_32px_0_rgba(166,55,112,0.1)] text-base focus:outline-none focus:ring-2 focus:ring-[rgb(25,132,255)]"
              />
              {formErrors.name && (
                <p id="name-error" className="text-red-500 text-sm mt-1">
                  {formErrors.name}
                </p>
              )}
            </div>
            <div className="mb-5 text-left">
              <label
                htmlFor="email"
                className="mb-2 block text-white text-base"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                aria-invalid={!!formErrors.email}
                aria-describedby={formErrors.email ? "email-error" : undefined}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (formErrors.email) {
                    setFormErrors({ ...formErrors, email: "" });
                  }
                }}
                className="w-full p-3 rounded-lg border border-blue-500 text-base  hover:shadow-lg hover:shadow-white/10 transition-transform duration-300 hover:scale-105 shadow-[0_16px_32px_0_rgba(166,55,112,0.1)] focus:outline-none focus:ring-2 focus:ring-[rgb(25,132,255)]"
              />
              {formErrors.email && (
                <p id="email-error" className="text-red-500 text-sm mt-1">
                  {formErrors.email}
                </p>
              )}
            </div>
            <div className="mb-5 text-left">
              <label
                htmlFor="message"
                className="mb-2 block text-white text-base"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                aria-invalid={!!formErrors.message}
                aria-describedby={
                  formErrors.message ? "message-error" : undefined
                }
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value });
                  if (formErrors.message) {
                    setFormErrors({ ...formErrors, message: "" });
                  }
                }}
                className="w-full p-3 rounded-lg border border-blue-500  hover:shadow-lg hover:shadow-white/10 transition-transform duration-300 hover:scale-105 shadow-[0_16px_32px_0_rgba(166,55,112,0.1)] </textarea>text-base resize-vertical focus:outline-none focus:ring-2 focus:ring-[rgb(25,132,255)]"
              />
              {formErrors.message && (
                <p id="message-error" className="text-red-500 text-sm mt-1">
                  {formErrors.message}
                </p>
              )}
            </div>
            {submitError && (
              <p className="text-red-500 mb-5 text-center">{submitError}</p>
            )}
            {submitSuccess && (
              <p className="text-green-500 mb-5 text-center">
                Message sent successfully!
              </p>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[rgb(47,84,235)] text-white py-[15px] px-[30px] rounded-[25px] border-none text-lg cursor-pointer transition-all duration-300 hover:bg-[rgb(37,67,188)] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>
    );
};