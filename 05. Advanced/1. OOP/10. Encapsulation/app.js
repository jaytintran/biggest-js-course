function Counter() {
  let _count = 0; // Private property, unaccessible outside the class

  // Public methods
  this.increment = () => _count++;
  this.decrement = () => _count--;

  // Public property
  this.getCount = () => _count;
}

const counter = new Counter();
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.getCount()); // 1
console.log(counter._count); // undefined
