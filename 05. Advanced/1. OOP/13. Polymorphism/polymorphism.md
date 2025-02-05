## What is Polymorphism?

Polymorphism means "one thing, many forms." It allows different objects to use/share the same method from their parent/superclass, but this method behave differently based on the object.

Think of it like this:
👉 A single command, but different results!

For example:

- A dog says "Woof!"
- A cat says "Meow!"
- A cow says "Moo!"

Even though they all have a makeSound() method, each animal sounds different.

## Polymorphism

- Polymorphism allows objects to be treated as instances of their parent class, even if they are instances of subclass. This facillitates writting code that works with different types of objects in a generic way.
- In JS, polymorphism is achieved by methods overriding - when a subclass define & provide its own implementation of a method which existed already in the parent class. The code can then be used by both the parent and its subclass instances.
