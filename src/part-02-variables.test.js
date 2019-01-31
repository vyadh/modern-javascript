/*
 * Variable declaration keywords.
 */

test("traditionally JS has had the 'var' declartion for variables", () => {
  var numberOfPlanets = 9;

  numberOfPlanets = numberOfPlanets - 1;

  expect(numberOfPlanets).toBe(8);
});

test("but var has scoping issues so don't use it - instead use 'let' for variables", () => {
  let numberOfPlanets = 9;

  numberOfPlanets = numberOfPlanets - 1;

  expect(numberOfPlanets).toBe(8);
});

// Most of the time we don't change 'variables', and attempts to do so may be unintentional.
// As you will see later, it's no so common in modern JS (less need for imperative loops).
// In fact, there are no further variable ressignments in this course

test("if a 'variable' (sometimes called a binding in JS) doesn't change, we can use 'const'", () => {
  const rockyPlanets = 4;
  const gasGiants = 4;
  const numberOfPlanets = rockyPlanets + gasGiants;

  expect(numberOfPlanets).toBe(8);
});

// It's a bit of a shame that the more common keyword uses two more characters!
// Some books and coding standards encourage widespread use of const. However, if you
// rarely re-assign variables and your functions are small, the distinction between
// let and const is not so useful. In this course, we'll use 'let' for our local
// variables even if they are effectively constant.

// Exercise
test("declare a variable as const and then attempt to reassign it", () => {
  // ...
});

// A note for C# developers!

test("a JavaScript const is not like a C# const - it can include mutable reference types", () => {
  const array = ["we'll", "get", "to", "arrays", "later"];

  array[3] = "lots more";

  expect(array.join(" ")).toBe("we'll get to lots more later");
});
