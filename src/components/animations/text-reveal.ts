import { gsap } from "../../lib/gsap";

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function initTextReveal(): void {
  const elements = document.querySelectorAll<HTMLElement>("[data-text-reveal]");

  elements.forEach((el) => {
    const delay = parseFloat(el.dataset.textRevealDelay ?? "0");
    const stagger = parseFloat(el.dataset.textRevealStagger ?? "0.045");
    const start = el.dataset.textRevealStart ?? "top 90%";
    const targets = el.querySelectorAll<HTMLElement>("[data-word]");

    if (prefersReducedMotion()) {
      gsap.set(targets, { yPercent: 0, opacity: 1 });
      return;
    }

    gsap.fromTo(
      targets,
      { yPercent: 115 },
      {
        yPercent: 0,
        duration: 0.85,
        ease: "power4.out",
        delay,
        stagger,
        scrollTrigger: {
          trigger: el,
          start,
        },
      },
    );
  });
}
