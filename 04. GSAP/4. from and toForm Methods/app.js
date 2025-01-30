/* 
    The from method animates an element from a specific set of property values to its current or default values.
    You don't have to specify the initial state (it will figure it out).

    gsap.from(targets, vars);
    gsap.from(".box", { duration: 1, x: -200, opacity: 0 });


    The fromTo method animates an element from specific starting property values to specific ending property values.
    You have to specify the initial and final states.

    gsap.fromTo(targets, fromVars, toVars);
    gsap.fromTo(".box", { x: -200, opacity: 0 }, { duration: 1, x: 0, opacity: 1 });

*/

gsap.from(".box1", {
  x: -200,
  opacity: 0,
  ease: "bounce.out",
  duration: 2,
  repeat: -1,
  yoyo: true,
});

gsap.fromTo(
  ".box2",
  { y: 200, opacity: 0 },
  {
    duration: 2,
    y: 0,
    opacity: 1,
    ease: "bounce.out",
    repeat: -1,
    yoyo: true,
    borderRadius: "0",
  }
);

gsap.fromTo(
  ".box3",
  { y: -200, opacity: 0 },
  {
    duration: 2,
    y: 0,
    opacity: 1,
    ease: "bounce.out",
    repeat: -1,
    yoyo: true,
    borderRadius: "0%",
  }
);
