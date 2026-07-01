import { useEffect } from "react";
import { motion } from "motion/react";
import { X, ExternalLink, Github, Eye } from "lucide-react";
import { Project } from "../types";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Lock background scroll when modal is active
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  // Handle escape key close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-neutral-950/60 backdrop-blur-md">
      {/* Invisible backdrop click zone */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <motion.div
        className="relative w-full max-w-3xl max-h-[92vh] sm:max-h-[85vh] bg-white dark:bg-neutral-900 rounded-t-2xl sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10 font-sans border border-neutral-200/40 dark:border-neutral-800/60 transition-colors duration-500"
        initial={{ y: "60%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "60%", opacity: 0 }}
        transition={{ type: "spring", damping: 30, stiffness: 240 }}
      >
        {/* Sticky Close Trigger button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:scale-105 active:scale-95 transition-transform"
          aria-label="Close case study details"
        >
          <X size={18} />
        </button>

        {/* Modal Scrollable Content wrapper */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden">
          
          {/* Header Image Frame / Mesh Visual */}
          <div className="relative w-full aspect-[16/7] bg-neutral-100 dark:bg-neutral-950 overflow-hidden border-b border-neutral-100 dark:border-neutral-800/40">
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                const nextEl = e.currentTarget.nextElementSibling as HTMLElement;
                if (nextEl) nextEl.style.display = "flex";
              }}
            />
            {/* Elegant gradient placeholder for non-loaded or missing images */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-900 dark:to-neutral-950 hidden">
              <span className="font-serif font-semibold italic text-xl sm:text-3xl text-neutral-400 dark:text-neutral-700 max-w-[80%] line-clamp-2">
                {project.title.split("—")[0].trim()}
              </span>
              <span className="text-[10px] font-mono tracking-wider mt-4 text-neutral-500 uppercase border border-neutral-300/30 dark:border-neutral-800/60 px-3 py-1 rounded-full bg-white/40 dark:bg-black/40">
                Place inside Assets: "{project.img}"
              </span>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-10">
            
            {/* Meta tags & Year */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div className="flex flex-wrap gap-2">
                {project.cats.map((cat) => (
                  <span
                    key={cat}
                    className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase bg-neutral-100 dark:bg-neutral-800/80 text-neutral-500 dark:text-neutral-400 px-3 py-1.5 rounded-full border border-neutral-200/50 dark:border-neutral-700/50"
                  >
                    {cat}
                  </span>
                ))}
              </div>
              <span className="text-xs font-mono font-medium text-neutral-400 dark:text-neutral-500">
                {project.year}
              </span>
            </div>

            {/* Project Full Title */}
            <h3 className="font-serif italic font-normal text-2xl sm:text-4xl leading-tight text-neutral-950 dark:text-neutral-50 tracking-tight mb-4">
              {project.title}
            </h3>

            {/* Long Description paragraph */}
            <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 leading-relaxed mb-8">
              {project.desc}
            </p>

            {/* Quick Facts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-neutral-200 dark:bg-neutral-800 rounded-xl overflow-hidden mb-8 border border-neutral-200 dark:border-neutral-800 transition-colors duration-500 shadow-sm">
              <div className="p-4 sm:p-5 bg-neutral-50 dark:bg-neutral-900/60">
                <span className="text-[9px] sm:text-[10px] tracking-widest font-bold uppercase text-neutral-400 dark:text-neutral-500 block mb-1">
                  Type of Work
                </span>
                <span className="text-xs sm:text-sm font-semibold text-neutral-800 dark:text-neutral-200 block leading-snug">
                  {project.type}
                </span>
              </div>
              <div className="p-4 sm:p-5 bg-neutral-50 dark:bg-neutral-900/60">
                <span className="text-[9px] sm:text-[10px] tracking-widest font-bold uppercase text-neutral-400 dark:text-neutral-500 block mb-1">
                  Primary Tech Stack
                </span>
                <span className="text-xs sm:text-sm font-semibold text-neutral-800 dark:text-neutral-200 block leading-snug">
                  {project.tech.join(", ")}
                </span>
              </div>
            </div>

            {/* Key Accomplishments & Highlights */}
            <div className="mb-10">
              <h4 className="text-[10px] sm:text-xs tracking-widest font-bold uppercase text-neutral-400 dark:text-neutral-500 mb-4">
                Core Contributions & Highlights
              </h4>
              <ul className="space-y-3.5">
                {project.highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed pl-5 relative"
                  >
                    <span className="absolute left-0 top-1 text-accent-orange font-bold text-sm leading-none">
                      —
                    </span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {/* Dynamic Interactive Call to Action Panel */}
            <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-neutral-100 dark:border-neutral-800/60">
              {project.figmaLink && (
                <a
                  href={project.figmaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-neutral-950 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-200 dark:text-neutral-950 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-full shadow-sm transition-all hover:scale-102"
                >
                  <Eye size={15} />
                  Figma Prototype
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-700 font-bold text-xs sm:text-sm px-5 py-3 rounded-full border border-neutral-200 dark:border-neutral-700 transition-all hover:scale-102"
                >
                  <Github size={15} />
                  GitHub Code
                </a>
              )}
              {project.pdfLink && (
                <a
                  href={project.pdfLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-700 font-bold text-xs sm:text-sm px-5 py-3 rounded-full border border-neutral-200 dark:border-neutral-700 transition-all hover:scale-102"
                >
                  <ExternalLink size={15} />
                  View Case Study (PDF)
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-700 font-bold text-xs sm:text-sm px-5 py-3 rounded-full border border-neutral-200 dark:border-neutral-700 transition-all hover:scale-102"
                >
                  <ExternalLink size={15} />
                  {project.linkLabel || "View Resource"}
                </a>
              )}
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
}
