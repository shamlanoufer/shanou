import React, { useState } from "react";
import { motion } from "motion/react";
import { Send, Check } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate an incredibly smooth API post or form submit handler
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });

      // Reset success notification after a short time
      setTimeout(() => {
        setIsSubmitted(false);
      }, 4000);
    }, 1200);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 sm:px-12 md:px-16 bg-neutral-100 dark:bg-neutral-900/40 text-neutral-950 dark:text-white transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Contact Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end mb-16 pb-8 border-b border-neutral-200 dark:border-neutral-800">
          <div className="lg:col-span-7">
            <h2 className="font-serif font-normal italic text-[clamp(44px,6.5vw,84px)] leading-[0.94] tracking-tight">
              Let's Talk <br />
              <span className="not-italic font-sans font-extrabold text-[0.8em] text-stroke dark:text-stroke block mt-2 text-neutral-950 dark:text-white">
                Your Next
              </span>
              <span className="block font-serif text-accent-orange font-medium mt-1">
                Big Idea
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5 text-sm sm:text-base text-neutral-500 dark:text-neutral-400">
            <p className="max-w-sm">
              Open to UI/UX design, front-end development, and full-stack engineering internships or contract roles. Let's build something wonderful together.
            </p>
          </div>
        </div>

        {/* Contact Form Element Container */}
        <div className="max-w-4xl mx-auto">
          <span className="text-[10px] tracking-widest font-extrabold uppercase text-neutral-400 dark:text-neutral-600 block mb-6">
            Inquiry Mailbox
          </span>

          <form onSubmit={handleSubmit} className="flex flex-col border-t border-neutral-200 dark:border-neutral-800">
            
            {/* Name Input Row */}
            <div className="relative border-b border-neutral-200 dark:border-neutral-800 focus-within:bg-neutral-200/20 dark:focus-within:bg-neutral-800/10 transition-colors">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Your Name"
                className="w-full bg-transparent border-none outline-none font-sans text-sm sm:text-base text-neutral-950 dark:text-white py-6 px-1 placeholder-neutral-400 dark:placeholder-neutral-600 focus:px-3 transition-all duration-300"
              />
            </div>

            {/* Email Input Row */}
            <div className="relative border-b border-neutral-200 dark:border-neutral-800 focus-within:bg-neutral-200/20 dark:focus-within:bg-neutral-800/10 transition-colors">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Your Email"
                className="w-full bg-transparent border-none outline-none font-sans text-sm sm:text-base text-neutral-950 dark:text-white py-6 px-1 placeholder-neutral-400 dark:placeholder-neutral-600 focus:px-3 transition-all duration-300"
              />
            </div>

            {/* Message Textarea Row */}
            <div className="relative border-b border-neutral-200 dark:border-neutral-800 focus-within:bg-neutral-200/20 dark:focus-within:bg-neutral-800/10 transition-colors">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="More about the project or role details..."
                className="w-full bg-transparent border-none outline-none font-sans text-sm sm:text-base text-neutral-950 dark:text-white py-6 px-1 placeholder-neutral-400 dark:placeholder-neutral-600 min-h-[140px] resize-none focus:px-3 transition-all duration-300"
              />
            </div>

            {/* Submit Action Block */}
            <div className="flex justify-end pt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`relative group inline-flex items-center gap-3 font-sans font-bold text-xs sm:text-sm px-8 py-4 rounded-full border shadow-md transition-all active:scale-95 cursor-pointer select-none ${
                  isSubmitted
                    ? "bg-green-600 border-green-600 text-white"
                    : "bg-neutral-950 border-neutral-950 text-white dark:bg-white dark:border-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-100"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white dark:border-neutral-950/30 dark:border-t-neutral-950 rounded-full animate-spin" />
                    Connecting...
                  </>
                ) : isSubmitted ? (
                  <>
                    <Check size={16} />
                    Message Sent ✓
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </>
                )}
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}
