import { gsap } from "../../lib/gsap";

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function initReveal(): void {
  const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");

  elements.forEach((el) => {
    const delay = parseFloat(el.dataset.revealDelay ?? "0");
    const y = parseFloat(el.dataset.revealY ?? "28");
    const once = el.dataset.revealOnce !== "false";

    if (prefersReducedMotion()) {
      gsap.set(el, { opacity: 1, y: 0 });
      return;
    }

    gsap.fromTo(
      el,
      { opacity: 0, y },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: once
            ? "play none none none"
            : "play none none reverse",
        },
      },
    );
  });
}
