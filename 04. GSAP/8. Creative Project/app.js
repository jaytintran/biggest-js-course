let timeline = gsap.timeline({
  default: { opacity: 0, ease: "bounce", duration: 3 },
});

timeline.fromTo(
  ".sidebar",
  { width: 0 },
  {
    opacity: 1,
    width: "30%",
  }
);

timeline.fromTo(
  ".main-img",
  { x: 0 },
  {
    opacity: 1,
  }
);

timeline.fromTo(".content", { x: 100, opacity: 0 }, { opacity: 1, x: 0 });
