import { useEffect, useState } from "react";
import { motion, useAnimation } from "motion/react";
import { useInView } from "react-intersection-observer";

function Counter({ value, duration = 1.5 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = value;
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.min(Math.abs(Math.floor(totalMiliseconds / end)), 50);
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [inView, value, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function About() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section
      id="about"
      className="py-24 px-6 sm:px-12 md:px-16 bg-neutral-50 dark:bg-neutral-950 text-neutral-950 dark:text-white transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Eyebrow Label */}
        <span className="text-[11px] tracking-widest uppercase text-neutral-400 dark:text-neutral-600 font-bold block mb-12">
          About Me
        </span>

        {/* About Intro Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Large Column Heading */}
          <div className="lg:col-span-5">
            <h2 className="font-serif font-normal italic text-[clamp(36px,5.2vw,64px)] leading-[0.98] tracking-tight text-neutral-950 dark:text-neutral-50 lg:sticky lg:top-24">
              Hey, there <br />
              <span className="text-stroke dark:text-stroke not-italic font-sans font-extrabold uppercase text-[0.8em] block mt-2 text-neutral-950 dark:text-white">
                I'm Shamla
              </span>
              <span className="block mt-1 font-serif text-accent-orange font-medium">
                Noufer
              </span>
            </h2>
          </div>

          {/* Right Rich Copy Column */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="lg:col-span-7 flex flex-col gap-6 font-sans text-neutral-500 dark:text-neutral-400 text-sm sm:text-base leading-relaxed"
          >
            <motion.p variants={itemVariants} className="font-medium text-neutral-800 dark:text-neutral-200">
              A Computer Science undergraduate passionate about technology, design, and creating meaningful digital solutions. My interests span software development, UI/UX design, web and mobile applications, business analysis, networking, and data-driven problem solving.
            </motion.p>
            
            <motion.p variants={itemVariants}>
              I enjoy transforming ideas into practical solutions by combining technical knowledge, creativity, and user-centered thinking. From understanding requirements and analyzing problems to designing, developing, and refining products, I am driven by the goal of building solutions that are both effective and intuitive.
            </motion.p>
            
            <motion.p variants={itemVariants}>
              Currently, I am pursuing a BSc (Hons) in Computer Science from the University of Bedfordshire validated by SLIIT. I am continuously expanding my knowledge through hands-on projects, exploring emerging technologies, and learning new tools and frameworks.
            </motion.p>
            
            <motion.p variants={itemVariants} className="border-l-2 border-accent-orange pl-4 italic text-neutral-600 dark:text-neutral-300">
              I am actively seeking internship opportunities where I can contribute to impactful projects, gain industry experience, and grow as a technology professional in a collaborative and innovative environment.
            </motion.p>
          </motion.div>
        </div>

        {/* Showcase Image Block */}
        <div className="mt-16 md:mt-24 w-full rounded-2xl overflow-hidden aspect-[16/6] bg-neutral-200 dark:bg-neutral-900 relative group border border-neutral-300/40 dark:border-neutral-800/40">
          <img
            src="assets/whatido.jpg"
            alt="Shamla Noufer - Design Studio Profile"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            onError={(e) => {
              // Gracefully handle image load errors by replacing with a gorgeous, high-fidelity mesh gradient vector placeholder
              e.currentTarget.style.display = "none";
              const nextEl = e.currentTarget.nextElementSibling as HTMLElement;
              if (nextEl) nextEl.style.display = "flex";
            }}
          />
          {/* Fallback elegant SVG placeholder with prompt-guided filename display */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-900 dark:to-neutral-950 font-sans hidden">
            <span className="font-serif font-semibold italic text-xl sm:text-3xl text-neutral-400 dark:text-neutral-700">
              Shamla Noufer — Profile Frame
            </span>
            <span className="text-[10px] font-mono tracking-wider mt-3 text-neutral-500 dark:text-neutral-500 uppercase border border-neutral-400/30 dark:border-neutral-800/60 px-3 py-1 rounded-full bg-white/40 dark:bg-black/40">
              To replace this: Save your image as "assets/whatido.jpg"
            </span>
          </div>
        </div>

        {/* Statistics Deck */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 border border-neutral-200 dark:border-neutral-800 rounded-xl divide-y md:divide-y-0 md:divide-x divide-neutral-200 dark:divide-neutral-800 overflow-hidden bg-white dark:bg-neutral-950 shadow-sm transition-colors duration-500">
          
          <div className="p-8 flex flex-col justify-center">
            <div className="font-serif font-bold text-5xl sm:text-6xl text-neutral-950 dark:text-white flex items-baseline">
              <Counter value={13} />
              <span className="text-accent-orange text-3xl ml-0.5">+</span>
            </div>
            <span className="text-xs sm:text-sm text-neutral-400 dark:text-neutral-500 mt-2 font-medium uppercase tracking-wider">
              Completed Projects
            </span>
          </div>

          <div className="p-8 flex flex-col justify-center">
            <div className="font-serif font-bold text-5xl sm:text-6xl text-neutral-950 dark:text-white flex items-baseline">
              <Counter value={3} />
              <span className="text-accent-orange text-3xl ml-0.5">+</span>
            </div>
            <span className="text-xs sm:text-sm text-neutral-400 dark:text-neutral-500 mt-2 font-medium uppercase tracking-wider">
              Years of Experience
            </span>
          </div>

          <div className="p-8 flex flex-col justify-center">
            <div className="font-serif font-bold text-5xl sm:text-6xl text-neutral-950 dark:text-white flex items-baseline">
              <Counter value={9} />
              <span className="text-accent-orange text-3xl ml-0.5">+</span>
            </div>
            <span className="text-xs sm:text-sm text-neutral-400 dark:text-neutral-500 mt-2 font-medium uppercase tracking-wider">
              Specialized Tech Stacks
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
