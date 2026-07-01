import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PROJECTS } from "../data";
import { Project } from "../types";
import ProjectModal from "./ProjectModal";
import { ArrowUpRight, Folder, Smartphone, Shield, BarChart, Network, Layers, Monitor, Calendar } from "lucide-react";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const tabs = [
    "All",
    "UI/UX",
    "Web App",
    "Mobile App",
    "Data Analysis",
    "Networking",
    "Security",
  ];

  // Logic to filter projects dynamically
  const filteredProjects = PROJECTS.filter((project) => {
    if (activeTab === "All") return true;
    
    const catsStr = project.cats.map(c => c.toLowerCase()).join(" ");
    const typeStr = project.type.toLowerCase();
    
    if (activeTab === "UI/UX") {
      return catsStr.includes("ui/ux") || catsStr.includes("hci") || typeStr.includes("ui/ux");
    }
    if (activeTab === "Web App") {
      return catsStr.includes("web") || typeStr.includes("web");
    }
    if (activeTab === "Mobile App") {
      return catsStr.includes("mobile") || typeStr.includes("mobile") || catsStr.includes("flutter");
    }
    if (activeTab === "Data Analysis") {
      return catsStr.includes("data") || catsStr.includes("rstudio") || typeStr.includes("data");
    }
    if (activeTab === "Networking") {
      return catsStr.includes("networking") || typeStr.includes("networking");
    }
    if (activeTab === "Security") {
      return catsStr.includes("security") || catsStr.includes("nist") || typeStr.includes("security");
    }
    return false;
  });

  // Helper to retrieve an icon representing the main project category
  const getProjectIcon = (project: Project) => {
    const catsStr = project.cats.join(" ").toLowerCase();
    if (catsStr.includes("mobile") || catsStr.includes("flutter")) return <Smartphone size={22} />;
    if (catsStr.includes("security")) return <Shield size={22} />;
    if (catsStr.includes("data")) return <BarChart size={22} />;
    if (catsStr.includes("networking")) return <Network size={22} />;
    if (catsStr.includes("ui/ux") || catsStr.includes("hci")) return <Layers size={22} />;
    return <Monitor size={22} />;
  };

  return (
    <section
      id="projects"
      className="py-24 px-6 sm:px-12 md:px-16 bg-neutral-100 dark:bg-neutral-900/40 text-neutral-950 dark:text-white transition-colors duration-500 overflow-hidden border-t border-neutral-200 dark:border-neutral-800"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Projects Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[11px] tracking-widest uppercase text-neutral-400 dark:text-neutral-600 font-bold block mb-4">
              Selected Work
            </span>
            <h2 className="font-serif font-normal italic text-[clamp(36px,5.2vw,64px)] leading-[0.98] tracking-tight">
              Featured <br />
              <span className="not-italic font-sans font-extrabold text-[0.8em]">
                Projects
              </span>
            </h2>
          </div>
          <span className="text-xs font-mono font-medium text-neutral-400 dark:text-neutral-600 border border-neutral-300 dark:border-neutral-800 px-4 py-2 rounded-full">
            {PROJECTS.length} Works Total
          </span>
        </div>

        {/* Dynamic Navigation Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-neutral-200 dark:border-neutral-800/60 pb-6 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2.5 rounded-full border transition-all duration-300 cursor-pointer whitespace-nowrap ${
                activeTab === tab
                  ? "bg-neutral-950 border-neutral-950 text-white dark:bg-white dark:border-white dark:text-neutral-950"
                  : "bg-white border-neutral-200 text-neutral-500 hover:text-neutral-900 hover:border-neutral-300 dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-400 dark:hover:text-white dark:hover:border-neutral-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid of Interactive Cards */}
        <motion.div
          className="grid grid-cols-1 gap-6"
          layout
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {filteredProjects.map((project, idx) => (
            <motion.article
              key={project.id}
              layoutId={`project-container-${project.id}`}
              onClick={() => setSelectedProject(project)}
              className="group bg-white dark:bg-neutral-900/60 border border-neutral-200/60 dark:border-neutral-800/40 rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[280px] cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-400"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: Math.min(idx * 0.08, 0.4) }}
            >
              {/* Left Side Column: Information Fact Sheets (Pills, Title, Desc, Year) */}
              <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-neutral-100 dark:border-neutral-800/50">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-serif font-medium italic text-xs text-neutral-300 dark:text-neutral-700 tracking-wider">
                      {project.id < 10 ? `0${project.id}` : project.id}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.cats.slice(0, 3).map((cat) => (
                        <span
                          key={cat}
                          className="text-[10px] tracking-wider uppercase font-bold text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 px-3 py-1 rounded-full"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h3 className="font-serif font-normal italic text-2xl sm:text-3xl leading-[1.1] tracking-tight text-neutral-950 dark:text-neutral-100 mb-3 group-hover:text-accent-orange transition-colors">
                    {project.title.split("—")[0].trim()}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-[95%] line-clamp-3">
                    {project.desc}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-8 pt-4 border-t border-neutral-100 dark:border-neutral-800/40">
                  <div className="flex items-center gap-2 text-neutral-400 dark:text-neutral-500">
                    <Calendar size={14} />
                    <span className="text-xs font-mono tracking-wider">
                      {project.year}
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center text-neutral-400 group-hover:bg-neutral-950 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-neutral-950 group-hover:rotate-45 transition-all duration-300">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>

              {/* Right Side Column: Visual Panel (Gradients, Title zoom effect, Big Icon) */}
              <div className="lg:col-span-5 relative bg-neutral-50 dark:bg-neutral-900 overflow-hidden flex items-center justify-center min-h-[160px] lg:min-h-full">
                {/* Visual representation gradient (uses id modulo for sleek variation) */}
                <div
                  className={`absolute inset-0 opacity-100 group-hover:scale-105 transition-transform duration-700 ${
                    project.id % 4 === 1
                      ? "bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] dark:from-[#1e293b] dark:to-[#0f172a]"
                      : project.id % 4 === 2
                      ? "bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7] dark:from-[#064e3b] dark:to-[#022c22]"
                      : project.id % 4 === 3
                      ? "bg-gradient-to-br from-[#faf5ff] to-[#f3e8ff] dark:from-[#4c1d95] dark:to-[#2e1065]"
                      : "bg-gradient-to-br from-[#fff7ed] to-[#ffedd5] dark:from-[#7c2d12] dark:to-[#431407]"
                  }`}
                />

                <div className="relative z-10 flex flex-col items-center text-center p-6 gap-2">
                  <div className="text-neutral-300 dark:text-neutral-700 group-hover:translate-y-[-4px] transition-transform duration-300">
                    {getProjectIcon(project)}
                  </div>
                  <span className="font-serif font-semibold italic text-lg text-neutral-400/80 dark:text-neutral-500/80 tracking-tight leading-snug max-w-[85%] mt-1">
                    {project.title.split("—")[0].trim()}
                  </span>
                  <span className="text-[9px] tracking-widest uppercase text-neutral-400 dark:text-neutral-600 font-bold">
                    {project.cats[0]}
                  </span>
                </div>
              </div>

            </motion.article>
          ))}
        </motion.div>
      </div>

      {/* Slide-Up Detailed Case Study Modal Display */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
