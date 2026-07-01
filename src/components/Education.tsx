import { motion } from "motion/react";
import { EDUCATION_ITEMS } from "../data";
import { GraduationCap, MapPin } from "lucide-react";

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 px-6 sm:px-12 md:px-16 bg-neutral-50 dark:bg-neutral-950 text-neutral-950 dark:text-white transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Education Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[11px] tracking-widest uppercase text-neutral-400 dark:text-neutral-600 font-bold block mb-4">
            Academic Background
          </span>
          <h2 className="font-serif font-normal italic text-[clamp(36px,5.2vw,64px)] leading-[0.98] tracking-tight">
            Education &amp; <br />
            <span className="not-italic font-sans font-extrabold text-[0.8em]">
              Learning
            </span>
          </h2>
        </div>

        {/* Timeline Table list */}
        <div className="flex flex-col border-t border-neutral-200 dark:border-neutral-800">
          {EDUCATION_ITEMS.map((item, idx) => (
            <motion.div
              key={idx}
              className="group border-b border-neutral-200 dark:border-neutral-800 py-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start cursor-default hover:bg-neutral-100/50 dark:hover:bg-neutral-900/10 px-4 rounded-xl transition-all duration-300"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
            >
              
              {/* Year Period Column */}
              <div className="md:col-span-3 flex items-center gap-3">
                <GraduationCap size={16} className="text-accent-orange flex-shrink-0" />
                <span className="text-xs sm:text-sm font-mono font-bold text-neutral-400 dark:text-neutral-500 group-hover:text-accent-orange transition-colors">
                  {item.period}
                </span>
              </div>

              {/* Institution and Degree Details */}
              <div className="md:col-span-9">
                <h3 className="font-serif italic text-2xl sm:text-3xl text-neutral-950 dark:text-neutral-50 mb-1 group-hover:translate-x-1 transition-transform duration-300">
                  {item.degree}
                </h3>
                
                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-neutral-600 dark:text-neutral-400 mb-4 uppercase tracking-wider">
                  <MapPin size={12} className="text-neutral-400" />
                  <span>{item.school}</span>
                </div>
                
                <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-2xl">
                  {item.notes}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
