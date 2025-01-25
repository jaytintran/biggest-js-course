/* 
    .set Method:
    gsap.set(selectElement, vars obj); 
*/

/* 
    The gsap.set() method in GSAP is used to set properties of a target element instantly without creating an animation. 

    Unlike tweens, which animate properties over time, gsap.set() immediately applies the specified values.

    The set method is used to set a property of an element before animating it.
*/

/* 
    Syntax:
    gsap.set(target, vars);

    + targets: The element(s) to which the properties will be applied. This can be a CSS selector, DOM element, array, or NodeList.
    + vars: An object that defines the properties to be set and their values. 

*/

// Prepare the element before animating
gsap.set(".box", {
  opacity: 0.5,
  background: "red",
});

// Animate the element
gsap.to(".box", {
  x: 200,
  duration: 2,
  repeat: -1,
  yoyo: true,
  opacity: 1,
  background: "blue",
});

/* 
    Key Use Cases
    + Initialization: Set default values for elements before animations start.
    + State Management: Quickly update styles or properties without a visible animation.
    + Optimizing Animations: Use gsap.set() to position or style elements before applying complex tweens.

*/
