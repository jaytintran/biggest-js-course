let play = document.querySelector(".play");
let pause = document.querySelector(".pause");
let restart = document.querySelector(".restart");

let tween = gsap.to(".box1", {
  x: -200,
  duration: 2,
  ease: "power1.inOut",
  repeat: -1,
  yoyo: true,
  repeatDelay: 1,
  backgroundColor: "red",
});

play.addEventListener("click", () => tween.play());
pause.addEventListener("click", () => tween.pause());
restart.addEventListener("click", () => {
  tween.restart();
  tween.pause();
});
