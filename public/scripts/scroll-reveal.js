function initScrollReveal() {
  if (typeof IntersectionObserver === "undefined") return;
  const nodes = document.querySelectorAll("[data-reveal]");
  if (!nodes.length) return;
  nodes.forEach((el, i) => {
    el.classList.add("reveal");
    el.style.transitionDelay = `${Math.min(i * 80, 400)}ms`;
  });
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -80px 0px" }
  );
  nodes.forEach((el) => io.observe(el));
}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initScrollReveal);
} else {
  initScrollReveal();
}
