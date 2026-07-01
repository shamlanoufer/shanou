export default function Ticker() {
  const tools = [
    { name: "Figma", fontClass: "font-sans font-bold tracking-tight" },
    { name: "Flutter", fontClass: "font-sans font-medium" },
    { name: "React", fontClass: "font-display font-semibold tracking-wide" },
    { name: "TypeScript", fontClass: "font-mono font-bold" },
    { name: "Node.js", fontClass: "font-mono" },
    { name: "UI/UX Research", fontClass: "font-serif italic font-semibold text-sm" },
    { name: "HCI Design", fontClass: "font-display font-extrabold uppercase text-xs" },
    { name: "PostgreSQL", fontClass: "font-mono" },
    { name: "Design Systems", fontClass: "font-serif font-bold italic" },
    { name: "Penetration Testing", fontClass: "font-mono font-semibold" },
  ];

  // Repeat items for seamless loop
  const duplicatedTools = [...tools, ...tools, ...tools];

  return (
    <div className="w-full overflow-hidden py-5 border-y border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 transition-colors duration-500">
      <div className="animate-marquee gap-12 text-sm text-neutral-400 dark:text-neutral-500">
        {duplicatedTools.map((item, idx) => (
          <div key={idx} className="flex items-center gap-12 flex-shrink-0">
            <span className={`${item.fontClass} hover:text-neutral-900 dark:hover:text-white transition-colors duration-250 cursor-default`}>
              {item.name}
            </span>
            <span className="w-1.5 h-1.5 bg-neutral-300 dark:bg-neutral-800 rounded-full flex-shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}
