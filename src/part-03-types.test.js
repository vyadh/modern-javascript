/*
 * Types in JavaScript, illustrated by the 'typeof' function that provides
 * the value type as a string.
 */

test("boolean type", () => {
  expect(typeof true).toBe("boolean");
  expect(typeof false).toBe("boolean");
});

test("string", () => {
  expect(typeof "some text").toBe("string");
  expect(typeof "42").toBe("string");
});

test("single numeric type in JS is 'number' - a 64-bit floating point type (no integers!)", () => {
  expect(typeof 3.14159).toBe("number");
  expect(typeof 42).toBe("number");
});

test("there are also reference types", () => {
  expect(typeof new Date()).toBe("object");
});

test("arrays, which are typed as an object", () => {
  expect(typeof [1, 2, 3]).toBe("object");
  expect(typeof ["one", "two", "three"]).toBe("object");
});

test("declared functions have a type (in JS, functions are just values)", () => {
  expect(typeof Math.random).toBe("function");
});

test("there is also an undefined type, which is a bit like the 'void' type in other languages", () => {
  expect(typeof undefined).toBe("undefined");
  expect(typeof undeclaredVariable).toBe("undefined"); // No error! (only for typeof)
});

// Exercise
test.skip("find the type of null", () => {
  // todo ...
  // If you're interested to know why:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#Additional_information
});

// Sanity warning!

test("a horribly awkward thing that JavaScript does is 'automatic type conversion'", () => {
  expect("1" == 1).toBe(true);

  // Note the ESLint warning on the comparison above
  // If you don't see this - goto Settings / Editor and turn on ESLint functionality
  // (if it's on, try turning it off and on again ;)
});

test("above can lead to rather unexpected behaviour, so always use type-checking comparisons", () => {
  expect("1" === 1).toBe(false);
  expect("2" !== 2).toBe(true);
});

// Exercise
test("observe the behaviour of type conversion with other operators such as +, * and -", () => {
  // todo ...
});
