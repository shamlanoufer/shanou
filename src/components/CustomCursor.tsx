import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable for fine pointer devices that do not prefer reduced motion
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    if (!finePointer || prefersReducedMotion) return;

    // Standard body class to hide the system cursor
    document.body.classList.add("has-custom-cursor");

    // Coordinates cache
    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHovering = false;
    let isMouseDown = false;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseDown = () => {
      isMouseDown = true;
      if (ringRef.current) ringRef.current.classList.add("scale-[0.8]", "border-accent-orange");
    };

    const handleMouseUp = () => {
      isMouseDown = false;
      if (ringRef.current) ringRef.current.classList.remove("scale-[0.8]", "border-accent-orange");
    };

    // Fast delegation for hovering items
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const interactive = target.closest('a, button, [role="button"], .project-card, .process-card, .skill-card, [data-cursor-hover]');
      if (interactive) {
        isHovering = true;
        if (ringRef.current) {
          ringRef.current.classList.add("w-14", "h-14", "border-accent-orange/80", "bg-accent-orange/5");
        }
        if (dotRef.current) {
          dotRef.current.classList.add("scale-[0.5]", "bg-accent-orange");
        }
      } else {
        if (isHovering) {
          isHovering = false;
          if (ringRef.current) {
            ringRef.current.classList.remove("w-14", "h-14", "border-accent-orange/80", "bg-accent-orange/5");
          }
          if (dotRef.current) {
            dotRef.current.classList.remove("scale-[0.5]", "bg-accent-orange");
          }
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("mouseup", handleMouseUp, { passive: true });
    document.addEventListener("mouseover", handleMouseOver, { passive: true });

    let animationFrameId: number;

    const updateCursor = () => {
      // Linear interpolation for smooth trailing ring
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate3d(-50%, -50%, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate3d(-50%, -50%, 0)`;
      }

      animationFrameId = requestAnimationFrame(updateCursor);
    };

    animationFrameId = requestAnimationFrame(updateCursor);

    return () => {
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* 1. Precise Inner Dot: bright, high-contrast, theme-aware */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-accent-orange rounded-full pointer-events-none z-[9999] shadow-[0_0_8px_#853953]"
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      />

      {/* 2. Fluid trailing ring: styled with high visibility and responsive transitions */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-9 h-9 border border-neutral-400 dark:border-neutral-500 rounded-full pointer-events-none z-[9999] transition-[width,height,border-color,background-color] duration-300"
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      />
    </>
  );
}

