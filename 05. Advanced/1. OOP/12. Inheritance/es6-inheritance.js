// Superclass

class Animal {
  constructor(name) {
    this.name = name;
  }
  makeSound() {
    return "Unknow Sound";
  }
}

// Subclass inheriting from Animal
class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  makeSound() {
    return "Woof!";
  }
}

const genericAnimal = new Animal("Generic Animal");
console.log(genericAnimal.makeSound()); // "Unknow Sound"

const becky = new Dog("Becky", "Golden Retriever");
console.log(becky.makeSound()); // "Woof!"
