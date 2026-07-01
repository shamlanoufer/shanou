import { motion } from "motion/react";
import { Search, Compass, Paintbrush, CheckCircle } from "lucide-react";

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Research",
      desc: "Understand before designing. I dig deep into target demographics, user behavior, and industry competitors to make sure every creative decision starts with concrete user data.",
      icon: <Search className="text-neutral-700 dark:text-neutral-300" size={24} />,
    },
    {
      num: "02",
      title: "Define",
      desc: "Translate observations into absolute clarity. I outline core user personas, specify user journeys, and establish Heuristic frameworks to secure perfect user-centered boundaries.",
      icon: <Compass className="text-neutral-700 dark:text-neutral-300" size={24} />,
    },
    {
      num: "03",
      title: "Design",
      desc: "Sketch, wireframe, and prototype in rapid loops. I move from loose pencil layout grids to fully custom, micro-animated design screens inside Figma, ready for stakeholder critiques.",
      icon: <Paintbrush className="text-neutral-700 dark:text-neutral-300" size={24} />,
    },
    {
      num: "04",
      title: "Deliver",
      desc: "Provide pristine, complete code packages. I bundle pixel-perfect UI specs, interactive design prototypes, and documented React/TypeScript front-end code with responsive precision.",
      icon: <CheckCircle className="text-neutral-700 dark:text-neutral-300" size={24} />,
    },
  ];

  return (
    <section
      id="process"
      className="py-24 px-6 sm:px-12 md:px-16 bg-neutral-50 dark:bg-neutral-950 text-neutral-950 dark:text-white transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Process Header */}
        <header className="mb-12">
          <span className="text-xs font-mono font-bold text-accent-orange block mb-3">
            // DESIGN PROCESS & HCI PRINCIPLES
          </span>
          <h2 className="font-serif font-normal italic text-[clamp(36px,5.2vw,64px)] leading-[0.98] tracking-tight">
            Design <br />
            <span className="not-italic font-sans font-extrabold text-[0.8em]">
              Methodology
            </span>
          </h2>
        </header>

        {/* Separating Divider */}
        <div className="w-full h-px bg-neutral-200 dark:bg-neutral-800 mb-16" />

        {/* Process Core Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Explanatory Block */}
          <div className="lg:col-span-4 max-w-sm">
            <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 leading-relaxed">
              Good design is never accidental. I strictly follow user-centered methodologies and Human-Computer Interaction rules to guarantee that every system looks beautiful while delivering highly efficient, accessible digital workflows.
            </p>
          </div>

          {/* Right Process Cards List */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {steps.map((step, idx) => (
              <motion.article
                key={step.num}
                className="bg-white dark:bg-neutral-900/40 border border-neutral-200/60 dark:border-neutral-800/40 rounded-xl p-8 flex flex-col justify-between min-h-[250px] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                {/* Step Icon */}
                <div className="w-12 h-12 rounded-lg bg-neutral-50 dark:bg-neutral-800 border border-neutral-200/50 dark:border-neutral-700/50 flex items-center justify-center text-neutral-700 mb-8 group-hover:scale-105 transition-transform duration-300">
                  {step.icon}
                </div>

                {/* Step Title & Details */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-mono font-bold text-neutral-400 dark:text-neutral-600">
                      Phase {step.num}
                    </span>
                    <span className="w-1 h-1 bg-accent-orange rounded-full" />
                  </div>
                  <h3 className="text-sm sm:text-base font-extrabold uppercase tracking-widest text-neutral-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
