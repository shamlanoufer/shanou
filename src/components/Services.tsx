import { motion } from "motion/react";
import { SERVICES } from "../data";
import { Sparkles, Layout, BarChart, Code, Eye } from "lucide-react";

const getServiceIcon = (num: string) => {
  switch (num) {
    case "01":
      return <Code className="text-neutral-400 dark:text-neutral-500 group-hover:text-accent-orange transition-colors" size={24} />;
    case "02":
      return <Layout className="text-neutral-400 dark:text-neutral-500 group-hover:text-accent-orange transition-colors" size={24} />;
    case "03":
      return <BarChart className="text-neutral-400 dark:text-neutral-500 group-hover:text-accent-orange transition-colors" size={24} />;
    case "04":
      return <Sparkles className="text-neutral-400 dark:text-neutral-500 group-hover:text-accent-orange transition-colors" size={24} />;
    case "05":
      return <Eye className="text-neutral-400 dark:text-neutral-500 group-hover:text-accent-orange transition-colors" size={24} />;
    default:
      return <Code className="text-neutral-400 dark:text-neutral-500 group-hover:text-accent-orange transition-colors" size={24} />;
  }
};

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 px-6 sm:px-12 md:px-16 bg-neutral-50 dark:bg-neutral-950 text-neutral-950 dark:text-white transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Services Top Section Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end mb-16 border-b border-neutral-200 dark:border-neutral-800 pb-12">
          <div className="md:col-span-7">
            <span className="text-[11px] tracking-widest uppercase text-neutral-400 dark:text-neutral-600 font-bold block mb-4">
              My Services
            </span>
            <h2 className="font-serif font-normal italic text-[clamp(36px,5.2vw,64px)] leading-[0.98] tracking-tight">
              What <br />
              <span className="not-italic font-sans font-extrabold text-[0.8em] text-stroke dark:text-stroke">
                I Do
              </span>
            </h2>
          </div>
          <div className="md:col-span-5 text-sm sm:text-base text-neutral-500 dark:text-neutral-400">
            <p className="max-w-sm">
              I explore, design, and develop technology-driven solutions that solve real-world problems and create tangible value for users.
            </p>
          </div>
        </div>

        {/* Services Multi-Row Listing */}
        <div className="flex flex-col border-t border-neutral-200 dark:border-neutral-800">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.num}
              className="group relative border-b border-neutral-200 dark:border-neutral-800 py-8 px-2 md:px-4 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center cursor-default transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
            >
              {/* Colored underline highlight on group hover */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent-orange scale-y-0 group-hover:scale-y-100 transition-transform duration-400 origin-bottom" />

              {/* Service Index Prefix */}
              <div className="md:col-span-1 flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-neutral-400 dark:text-neutral-600 group-hover:text-accent-orange transition-colors">
                  /{service.num}
                </span>
                <div className="md:hidden">
                  {getServiceIcon(service.num)}
                </div>
              </div>

              {/* Service Title */}
              <div className="md:col-span-4 flex items-center gap-3">
                <h3 className="font-serif italic text-2xl sm:text-3xl text-neutral-950 dark:text-neutral-50 group-hover:translate-x-2 transition-transform duration-300">
                  {service.title}
                </h3>
              </div>

              {/* Service Description */}
              <div className="md:col-span-6">
                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed group-hover:text-neutral-800 dark:group-hover:text-neutral-200 transition-colors">
                  {service.desc}
                </p>
              </div>

              {/* Service Icon Desktop */}
              <div className="hidden md:col-span-1 md:flex justify-end pr-2">
                {getServiceIcon(service.num)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
