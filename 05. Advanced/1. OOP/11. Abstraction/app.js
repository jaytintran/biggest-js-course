/* 

    In this exampe. we have an abstract class Animal that contains an abstract method makeSound(). The makeSound() method is declared in the Animal class but doesn't provide the implementation. It is meant to be implemented by subclasses like Cat, Dog, Mouse.

    The Dog and Cat classes are concrete subclasses that inherit from the Animal class. They carry the implementation of the abstract makeSound() method by themselves with their own specific sounds.

    By using abstraction, we define a common interface (makeSound()) that each subclass has to adhere to and carry out the implementation, while hidding the interal details of how each animal makes its sound.

    This simplifies the code and allows us to work with animals at a higher level of abstraction, without worrying about the specifics of each animal's sound implementation 


*/

// Abstract Class: Providing a blueprint for subclasses
class Animal {
  constructor(name) {
    this.name = name;
  }

  // Abstract method (to be implemented by subclasses)
  makeSound() {
    throw new Error("Method [[makeSound]] must be implemented");
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  // Implementing the abstract method
  makeSound() {
    return "Woof! Woof!";
  }
}

// Concrete Subclass
class Cat extends Animal {
  constructor(name, breed, color) {
    super(name);
    this.breed = breed;
    this.color = color;
  }

  // Implementing the abstract method
  makeSound() {
    return "Meow! Meow!";
  }
}

class Mouse extends Animal {
  constructor(name) {
    super(name);
  }
}

// ---

const dog = new Dog("Jig", "Golden Retriever");
console.log(dog.name);
console.log(dog.makeSound());

const cat = new Cat("Licky", "Persian", "White");
console.log(cat.name);
console.log(cat.makeSound());

// ---

const mouse = new Mouse("Mickey");
console.log(mouse.name);
// Method makeSound is missing in the Mouse class. So it will throw an error
console.log(mouse.makeSound());

// ---
