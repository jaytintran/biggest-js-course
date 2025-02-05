class Hero {
  constructor(name, powerType, level, nationality, heroClass) {
    this.name = name;
    this.powerType = powerType;
    this.level = level;
    this.nationality = nationality;
  }

  greet() {
    console.log(
      `Hello fellow citizens, I am a class ${heroClass} hero. My name is ${this.name} and I am a ${this.powerType}.`
    );
  }
}

const saitama = new Hero("Saitama", "Superhuman", 100, "Japanese", "B");
saitama.greet(); // "Hello fellow citizens, I am a class B hero. My name is Saitama and I am a Superhuman."

class Mega extends Hero {
  constructor(name, powerType, level, nationality, heroClass, natureType) {
    super(name, powerType, level, nationality, heroClass);
    this.natureType = natureType;
  }
}

const thunderGirl = new Mega(
  "Thunder Girl",
  "Magic",
  100,
  "Japanese",
  "B",
  "Thunder"
);
