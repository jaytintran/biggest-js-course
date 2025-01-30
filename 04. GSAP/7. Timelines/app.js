/* 
    A timeline in GSAP is a powerful tool that allows you to create complex, coordinated animations by sequencing multiple tweens (animations). 
    You can control their timing, order, and relationships, ensuring smooth and organized animations.

    Features:
    Sequencing: Add multiple tweens to a timeline to play them in order.
    Overlap Control: Define delays or overlaps between animations.
    Reusable Logic: Use a single timeline to handle multiple animations.
    Global Control: Pause, play, reverse, or adjust the speed of all animations in a timeline together.
    Flexible Start Times: Control when each tween starts relative to the timeline's playhead.


*/

// let timeline = gsap.timeline();

// timeline
//   .to(".box1", {
//     duration: 2,
//     scale: 0,
//     opacity: 0,
//     delay: 1,
//   })
//   .to(".box2", {
//     duration: 2,
//     x: -200,
//   })
//   .to(".box3", { duration: 2, x: -200, borderRadius: 0, rotate: 360 })
//   .set(".box1", {
//     scale: 1,
//     opacity: 1,
//     duration: 2,
//   });

// REFACTOR

let timeline = gsap.timeline({
  default: {
    duration: 1,
  },
});

timeline
  .to(".box1", {
    scale: 0,
    opacity: 0,
    delay: 1,
  })
  .to(".box2", {
    x: -200,
  })
  .to(".box3", { x: -200, borderRadius: 0, rotate: 360 })
  .set(".box1", {
    x: 200,
  })
  .to(".box1", {
    scale: 1,
    opacity: 1,
  });
