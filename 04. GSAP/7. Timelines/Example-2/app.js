let timeline = gsap.timeline({
  default: {
    duration: 1,
  },
});

timeline
  .to("h1", { y: -100, duration: 2, color: "red" })
  .to(".box1", { x: -200, duration: 2, backgroundColor: "red" })
  .to(".box2", {
    x: -200,
    duration: 2,
    backgroundColor: "green",
  })
  .to(".box3", { x: -200, duration: 2, backgroundColor: "blue" });
