import { motion } from "motion/react";

export default function Hero() {
  const line1 = "Design.";
  const line2 = "Build. Innovate.";

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-end px-6 sm:px-12 md:px-16 overflow-hidden bg-neutral-50 dark:bg-neutral-950 text-neutral-950 dark:text-white transition-colors duration-500"
    >
      {/* Dynamic Background: Checks and plays ambient video or shows a subtle grain overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video
          className="w-full h-full object-cover opacity-35 dark:opacity-20 transition-opacity duration-500"
          autoPlay
          loop
          muted
          playsInline
        >
          {/* Support both custom local assets or a beautiful fall-back standard placeholder path */}
          <source src="assets/homepage.mp4" type="video/mp4" />
          <source src="Assests/homepage.mp4" type="video/mp4" />
        </video>
        
        {/* Soft elegant gradient mesh overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-50 via-neutral-50/80 to-transparent dark:from-neutral-950 dark:via-neutral-950/80" />
      </div>

      {/* Hero Core Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto pt-40 pb-16 sm:pb-20 md:pb-24 flex flex-col">
        
        {/* Large Syne/DM Serif Display Heading */}
        <h1 className="font-serif italic font-normal text-[clamp(44px,7.8vw,110px)] leading-[0.92] tracking-tighter text-neutral-950 dark:text-neutral-50">
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            >
              {line1}
            </motion.span>
          </span>
          <span className="block overflow-hidden mt-2">
            <motion.span
              className="block text-stroke dark:text-stroke"
              style={{ color: "transparent" }}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              {line2}
            </motion.span>
          </span>
        </h1>

        {/* Subtitle & Focus Copy */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mt-12 gap-8">
          <motion.p
            className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 max-w-lg leading-relaxed font-sans"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            From initial user research and interactive wireframes to complete
            front-end development, I specialize in crafting high-impact digital
            products that balance Human-Computer Interaction principles with gorgeous,
            sleek visuals.
          </motion.p>
          
          {/* Call to Action Anchor */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-3 text-xs sm:text-sm font-semibold text-neutral-950 dark:text-white group border border-neutral-300 dark:border-neutral-700 rounded-full px-6 py-3 hover:bg-neutral-950 hover:text-white dark:hover:bg-white dark:hover:text-neutral-950 transition-all duration-300"
            >
              Explore Selected Work
              <span className="group-hover:translate-x-1.5 transition-transform duration-300">
                →
              </span>
            </a>
          </motion.div>
        </div>

        {/* Specialties Navigation Row */}
        <motion.div
          className="flex flex-wrap items-center mt-16 sm:mt-24 pt-6 border-t border-neutral-200 dark:border-neutral-800 gap-4 sm:gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <span className="text-[10px] tracking-widest uppercase text-neutral-400 dark:text-neutral-600 font-bold">
            Areas of Focus
          </span>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {["UI/UX Design", "Front-End Development", "Business Analysis", "Interactive Prototyping"].map(
              (area) => (
                <a
                  key={area}
                  href="#services"
                  className="text-xs sm:text-sm font-medium text-neutral-800 hover:text-accent-orange dark:text-neutral-300 dark:hover:text-accent-orange underline decoration-neutral-300 dark:decoration-neutral-700 underline-offset-4 hover:decoration-accent-orange transition-all duration-300"
                >
                  {area}
                </a>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
