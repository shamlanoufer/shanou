import { motion } from "motion/react";
import { SKILL_CATEGORIES } from "../data";
import { ChevronRight } from "lucide-react";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 sm:px-12 md:px-16 bg-neutral-100 dark:bg-neutral-900/40 text-neutral-950 dark:text-white transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Skills Header Grid */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-neutral-200 dark:border-neutral-800">
          <div>
            <span className="text-[11px] tracking-widest uppercase text-neutral-400 dark:text-neutral-600 font-bold block mb-4">
              Expertise & Tools
            </span>
            <h2 className="font-serif font-normal italic text-[clamp(36px,5.2vw,64px)] leading-[0.98] tracking-tight">
              Skills &amp; <br />
              <span className="not-italic font-sans font-extrabold text-[0.8em]">
                Tools
              </span>
            </h2>
          </div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-sm">
            A comprehensive overview of my technical stack and conceptual expertise spanning design systems, programming, and cybersecurity.
          </p>
        </div>

        {/* Skills Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.article
              key={category.num}
              className="group relative bg-white dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800/40 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-400 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
            >
              {/* Highlight accent left border */}
              <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-neutral-950 dark:bg-white scale-y-0 group-hover:scale-y-100 transition-transform duration-400 origin-bottom" />

              {/* Category Head Info */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-neutral-50 dark:bg-neutral-800 border border-neutral-200/40 dark:border-neutral-700/60 flex items-center justify-center font-bold font-mono text-xs text-neutral-400 dark:text-neutral-500 group-hover:bg-neutral-950 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-neutral-950 transition-colors duration-300">
                  {category.num}
                </div>
                <h3 className="font-sans font-extrabold text-sm sm:text-base tracking-wider uppercase text-neutral-950 dark:text-neutral-50">
                  {category.title}
                </h3>
              </div>

              {/* Thin Section Divider */}
              <div className="h-px bg-neutral-100 dark:bg-neutral-800 mb-6" />

              {/* Skills Itemized List */}
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
                    <ChevronRight size={14} className="text-accent-orange font-bold flex-shrink-0" />
                    <span className="font-semibold text-neutral-800 dark:text-neutral-300 group-hover:text-neutral-950 dark:group-hover:text-white transition-colors">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>

            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
