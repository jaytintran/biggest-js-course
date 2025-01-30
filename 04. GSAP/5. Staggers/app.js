/* 
  GSAP's stagger feature is integrated directly into gsap.to(), gsap.from(), and gsap.fromTo(). You can use the stagger property to define how much delay there should be between each element's animation.

  
  gsap.to(targets, { duration, properties, stagger: staggerValue });

  + targets: The elements to animate (NodeList, array, CSS selector, etc.).
  + duration: The duration of each animation.
  + properties: The properties to animate (e.g., x, y, opacity, etc.).
  + staggerValue: Defines the delay between each element's animation

*/

gsap.set(".box", {
  borderRadius: 0,
});

gsap.to(".box", {
  borderRadius: 100,
  duration: 1,
  y: -100,
  ease: "power1",
  yoyo: true,
  repeat: -1,
  stagger: {
    amount: 1, // the amount of delay
    ease: 0.5,
    from: 0,
  },
});
