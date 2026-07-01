import { Mail, Phone, ExternalLink, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 text-white py-16 sm:py-20 px-6 sm:px-12 md:px-16 transition-colors duration-500 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 pb-12 border-b border-white/10">
        
        {/* Left footer segment: Big branding callout & CV Action */}
        <div className="max-w-md">
          <h2 className="font-serif font-normal italic text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight mb-8">
            Let's work <br />
            <span className="not-italic font-sans font-extrabold uppercase text-[0.8em] text-neutral-400">
              together.
            </span>
          </h2>
          <a
            href="assets/Shamla_Noufer_CV.pdf"
            download="Shamla_Noufer_CV.pdf"
            className="inline-flex items-center gap-2 bg-white text-neutral-950 font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full hover:bg-neutral-200 active:scale-95 transition-all shadow-sm"
          >
            Download CV ↓
          </a>
        </div>

        {/* Right footer segment: Mail, Phone, and Social Channels */}
        <div className="flex flex-col sm:flex-row gap-12 sm:gap-20">
          
          {/* Direct Contacts Block */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] tracking-widest uppercase text-neutral-500 font-bold block mb-2">
              Contact Detail
            </span>
            <a
              href="mailto:shamlanoufer@gmail.com"
              className="flex items-center gap-2 font-sans text-sm sm:text-base text-neutral-300 hover:text-white transition-colors"
            >
              <Mail size={14} className="text-neutral-500" />
              shamlanoufer@gmail.com
            </a>
            <a
              href="tel:+94772812449"
              className="flex items-center gap-2 font-sans text-sm sm:text-base text-neutral-300 hover:text-white transition-colors"
            >
              <Phone size={14} className="text-neutral-500" />
              +94 77 281 2449
            </a>
          </div>

          {/* Social Coordinates Block */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] tracking-widest uppercase text-neutral-500 font-bold block mb-2">
              Social Coordinates
            </span>
            <a
              href="https://www.linkedin.com/in/shamla-noufer/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-sans text-sm sm:text-base text-neutral-300 hover:text-white transition-colors"
            >
              LinkedIn
              <ExternalLink size={12} className="text-neutral-600" />
            </a>
            <a
              href="https://github.com/shamlanoufer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-sans text-sm sm:text-base text-neutral-300 hover:text-white transition-colors"
            >
              GitHub
              <ExternalLink size={12} className="text-neutral-600" />
            </a>
            <a
              href="https://wa.me/94772812449"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-sans text-sm sm:text-base text-neutral-300 hover:text-white transition-colors"
            >
              WhatsApp
              <ExternalLink size={12} className="text-neutral-600" />
            </a>
          </div>

        </div>

      </div>

      {/* Bottom Legal Attribution & Scroll to top anchor */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
        <span>
          &copy; {currentYear} Shamla Noufer. All Rights Reserved.
        </span>
        <a
          href="#hero"
          className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group"
        >
          Back to Top
          <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
        </a>
      </div>
    </footer>
  );
}
