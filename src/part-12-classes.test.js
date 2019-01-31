/*
 * Classes in JavaScript are currently used in React to model 'stateful'
 * components.
 *
 * Classes might feel pretty comfortable to a developer used to C# and Java.
 * However, they are not quite what they appear, and there are some
 * gotcha's that will require explaining in the following section.
 *
 * We currently need to understand classes in JavaScript as they are
 * required for some React usage. However there are features being
 * added that will avoid having to use them (hooks).
 *
 * Classes may be best avoided in general for the same reasons that
 * React is migrating away from them:
 *  - Harder for JS VMs to optimise
 *  - Do not minify well
 *  - Make hot-reloading unreliable
 *  - Inherit the problems with 'this' from normal functions (see next part)
 *
 * Ref: https://reactjs.org/docs/hooks-intro.html#classes-confuse-both-people-and-machines
 */

test("the name of a class is available as a property", () => {
  class Animal {}

  expect(Animal.name).toBe("Animal");
});

// Note the capitalisation above, even though the naming convention for JavaScript functions
// (and most other things) is 'lower camel-case', classes use 'Pascal case' by convention.

test("implementation inheritance in JS is done in a familiar way, but as always, it should be avoided", () => {
  class Animal {}
  class Dog extends Animal {}

  expect(Animal.name).toBe("Animal");
  expect(Dog.name).toBe("Dog");
});

// JavaScript inheritance is used in React to create stateful / class
// components.
//  - Implemention-based inheritance should be used sparingly, if at all.
//  - Use composition instead of implementation (class) inheritance.
// Interfaces do not exist in JavaScript (although there are in TypeScript).
// - Polymorphism is performed structurally (by function signature) rather
//   than by inheritance.

test("we can create objects of a class (or strictly, objects from a prototype) by using 'new' keyword", () => {
  class Dog {}

  let dog = new Dog();

  expect(typeof dog).toBe("object"); // But type is still just an object
});

test("methods can be defined on classes with a specific syntax", () => {
  class Dog {
    sound() {
      return "woof!";
    }
  }

  let dog = new Dog();
  let sound = dog.sound();

  expect(sound).toBe("woof!");
});

// Exercise
// Defining methods for different functions
test("return what a dog might do if patted by both an owner or stranger", () => {
  // Provide an argument to a patting method indictating who is doing the patting
  // todo ...
});

test("we can specify a constructor capturing arguments supplied in the 'new' expression", () => {
  class Dog {
    constructor(myName) {
      this.myName = myName;
      this.sound = "woof!";
    }

    message() {
      // Note we need to explicitly reference 'this'
      return `${this.myName} said "${this.sound}"`;
    }
  }

  let fluffy = new Dog("Fluffy");

  expect(fluffy.message()).toBe('Fluffy said "woof!"');
});
