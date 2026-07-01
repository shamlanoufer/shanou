import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Sync scroll state for visual changes (compress padding)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sync theme with local storage & document class
  useEffect(() => {
    let savedTheme: string | null = null;
    try {
      savedTheme = localStorage.getItem("theme");
    } catch (e) {
      console.warn("Storage access restricted, falling back to in-memory state.");
    }
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    const useDark = savedTheme === "dark" || (!savedTheme && systemPrefersDark);
    
    if (useDark) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      try {
        localStorage.setItem("theme", "light");
      } catch (e) {
        // ignore
      }
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      try {
        localStorage.setItem("theme", "dark");
      } catch (e) {
        // ignore
      }
      setIsDarkMode(true);
    }
  };

  const menuLinks = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <div
        className={`fixed left-0 right-0 z-50 flex justify-center px-4 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none ${
          isScrolled ? "top-3" : "top-5"
        }`}
      >
        <motion.nav
          className="flex items-center justify-between w-full md:w-max h-14 px-5 py-2 glass-panel rounded-full shadow-lg pointer-events-auto gap-4 md:gap-0"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Left Side: Logo */}
          <a
            href="#hero"
            className="font-sans font-bold text-base tracking-tight text-neutral-900 dark:text-white hover:opacity-80 transition-opacity"
          >
            Shamla.
          </a>

          {/* Center: Desktop Links */}
          <ul className="hidden md:flex items-center gap-6 mx-8">
            {menuLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="relative text-xs font-semibold text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors duration-250 py-1"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Side: Theme & Mobile Hamburger & CTA */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center p-2 rounded-full text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-neutral-800 transition-all duration-200"
              aria-label="Toggle visual theme"
            >
              {isDarkMode ? (
                <Sun size={15} className="text-amber-400 animate-[spin_8s_linear_infinite]" />
              ) : (
                <Moon size={15} />
              )}
            </button>

            {/* Let's Chat Desktop CTA */}
            <a
              href="#contact"
              className="hidden sm:inline-block bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 text-xs font-bold px-4 py-1.5 rounded-full hover:opacity-85 active:scale-95 transition-all"
            >
              Let's Chat!
            </a>

            {/* Mobile Menu Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden flex items-center justify-center p-2 rounded-full bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 transition-transform active:scale-90"
              aria-label="Open mobile menu"
            >
              <Menu size={15} />
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Menu Full-screen Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-100 bg-neutral-50 dark:bg-neutral-950 p-6 flex flex-col justify-between"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "tween", ease: [0.16, 1, 0.3, 1], duration: 0.55 }}
          >
            {/* Top Bar inside Overlay */}
            <div className="flex items-center justify-between">
              <span className="font-sans font-bold text-lg tracking-tight text-neutral-950 dark:text-white">
                Shamla.
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center w-11 h-11 rounded-full bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 transition-transform active:scale-90"
                aria-label="Close mobile menu"
              >
                <X size={18} />
              </button>
            </div>

            {/* Middle Nav Links */}
            <nav className="flex flex-col items-center justify-center flex-1 gap-4">
              {menuLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif font-semibold italic text-4xl sm:text-5xl text-neutral-900 dark:text-white flex items-baseline gap-1.5 hover:opacity-60 transition-opacity"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.06, duration: 0.4 }}
                >
                  {link.name}
                  <span className="font-sans font-normal not-italic text-sm text-neutral-400 dark:text-neutral-600">
                    +
                  </span>
                </motion.a>
              ))}
            </nav>

            {/* Bottom Bar inside Overlay */}
            <div className="flex flex-col sm:flex-row justify-between items-center border-t border-neutral-200 dark:border-neutral-800 pt-6 text-xs text-neutral-400 dark:text-neutral-600 gap-3">
              <span>&copy; {new Date().getFullYear()} Shamla Noufer</span>
              <div className="flex gap-4">
                <a href="https://linkedin.com/in/shamla-noufer/" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 dark:hover:text-white">LinkedIn</a>
                <a href="https://github.com/shamlanoufer" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 dark:hover:text-white">GitHub</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
