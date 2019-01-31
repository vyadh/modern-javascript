/*
 * This behaviour of 'this' might surprise you.
 * Unfortuately 'this' problem is something that needs to be understood.
 *
 * We'll show the problem in the conext of classes as that is where you
 * might generally see the issue, but since classes are really just syntax
 * sugar for functions the issue lies there also.
 *
 * Sanity warning!
 *
 * Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
 */

test("while JavaScript has classes, but they may not work how you expect", () => {
  class Dog {}

  expect(typeof Dog).toBe("function");
});

test("classes are just syntax sugar for functions", () => {
  function Dog(myName) {
    this.myName = myName;
  }
  // We're not covering prototypes, just note that this provides an
  // inheritance-mechanism for JS objects
  Dog.prototype.speak = function() {
    return `${this.myName} said "Woof!"`;
  };

  let dog = new Dog("Fluffy"); // Uses 'new' with a function!

  expect(dog.speak()).toBe('Fluffy said "Woof!"');
});

// Exercise
test("since classes are functions, they unfortunately inherit a problem with 'this'", () => {
  class Dog {
    constructor() {
      this.myName = "Fluffy";
    }

    status() {
      return `${this.myName} is sleeping`; // <- 'this' is a problem
    }
  }

  let fluffy = new Dog();
  let statusFunction = fluffy.status; // Represents copying the function reference

  // TypeError: Cannot read property 'name' of undefined
  expect(() => statusFunction()).toThrow(TypeError);

  // Exercise:
  // See this yourself - temporarily uncomment the following assertion
  // expect(statusFunction()).toBe("Fluffy is sleeping"); // This would fail!
});

// The above fails because the meaning of 'this' in JavaScript changes
// based on the caller (!!)
// This is completely unexpected and a source of widespread confusion
// in the JS community.

// We need to know about 'this' as falling into its trap is a common
// occurance when using event handlers in React.

// Exercise (remove .skip)
test.skip("fix the problem with 'this' using arrow functions (copy of the above test)", () => {
  class Dog {
    constructor() {
      this.myName = "Fluffy";
    }

    status() {
      return `${this.myName} is sleeping`; // <- 'this' is a problem
    }
  }

  let fluffy = new Dog();
  let statusFunction = fluffy.status; // Represents copying the function reference

  expect(statusFunction()).toBe("Fluffy is sleeping"); // This would fail!
});

// Question: Why did this work?

// Lesson learned: Only pass 'this'-using functions around after wrapping
// in arrow functions.

// Great article explaining the issue, examples, and different ways to
// fix them:
// https://medium.freecodecamp.org/what-to-do-when-this-loses-context-f09664af076f

// For a great React-specific overview, see here:
// https://frontarm.com/articles/when-to-use-arrow-functions/
