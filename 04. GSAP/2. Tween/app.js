/* 
    What is a Tween?
    - A Tween in GSAP (GreenSock Animation Platform) is the core component used to animate properties of an element over a specified duration.
    - It's short for "between," as it animates the property between two states (e.g., from one value to another).
    = A Tween can handle almost any property, like position, size, color, rotation, opacity, and more.

    Breakdown:
    - Specifying a target (the element to animate).
    - Defining the properties to animate (e.g., x, y, opacity).
    - Setting a duration for the animation.
    = Optionally using an ease to control the acceleration.
*/

/*  
    Overall Syntax:
    gsap.method(selectElement, vars obj);

    Explaination:
    - method: The method you want to use to animate the element.
    - selectElement: The element you want to animate.
    - vars obj: An object containing the properties you want to animate.
*/

/* 
    Types of Tweens:

    1. .to Method 
    - Animates from the current value to the specified value.
    gsap.to(".box", { duration: 2, x: 200, opacity: 0.5 });

    2. .from Method
    - Animates from a specified value to the current or default value.
    gsap.from(".box", { duration: 2, x: -200, opacity: 0 });

    3. .fromTo Method
    - Animates from a specific value to another specific value.
    gsap.fromTo(
        ".box",
        { x: 0, opacity: 0 },
        { duration: 2, x: 200, opacity: 1 }
    );
*/

/* 
    .to Method:
    gsap.to(selectElement, vars obj);
*/

gsap.to(".box", {
  x: -300,
  duration: 2,
  repeat: -1,
});
