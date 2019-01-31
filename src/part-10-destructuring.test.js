/*
 * JavaScript provides a limited form of desctructuring to allow pulling
 * out data from a structure concisely.
 *
 * Also includes information on the 'rest' operator.
 */

test("destructure an array", () => {
  let array = [1, 2, 3];

  let [one, two, three] = array;

  expect(one).toBe(1);
  expect(two).toBe(2);
  expect(three).toBe(3);
});

// Exercise
test("what happens when too few variables are supplied for the data being passed?", () => {
  // todo ...
});

// Exercise
test("what happens when too many variables are supplied for the data being passed?", () => {
  // todo ...
});

test("we can capture the rest of the array via destructuring using the 'rest' operator", () => {
  let array = [1, 2, 3, 4, 5];

  let [one, two, ...others] = array;

  expect(others).toEqual([3, 4, 5]);
});

test("destructuring also works with function arguments", () => {
  const concat = ([a, b, c]) => a + b + c;

  let array = ["-", "!", "-"];
  let result = concat(array);

  expect(result).toBe("-!-");
});

// Exercise
test("infer how varargs work in JS using the rest operator with function parameters", () => {
  // Hint: See the last two examples
  // todo ...
});

test("destructuring allows us to pull data out of objects", () => {
  let star = {
    name: "rigel",
    type: "blue supergiant",
    tempKelvin: 10000,
    radiusKm: 54.89e6,
    distanceLY: 864
  };

  let { name, tempKelvin } = star;

  expect(name).toBe("rigel");
  expect(tempKelvin).toBe(10000);
});

test("if a value is not defined, we can give it a default", () => {
  let star = {
    name: "rigel"
  };

  var { type: starType = "unknown" } = star;

  expect(starType).toBe("unknown");
});

test("the 'rest' operator also allows destructuring objects", () => {
  let star = {
    name: "rigel",
    type: "blue supergiant",
    tempKelvin: 10000
  };

  let { name, ...rest } = star;

  expect(rest).toEqual({ type: "blue supergiant", tempKelvin: 10000 });
});

// Exercise (note, remove the .skip)
test.skip("show that the destructuring can be done to any level", () => {
  let system = {
    planets: [
      { name: "Mercury", mass: 3.3e23 },
      { name: "Venus", mass: 4.9e24 },
      { name: "Earth", mass: 6.0e24 },
      { name: "Mars", mass: 6.4e23 }
      // etc.
    ]
  };

  // Destructure the Earth's mass!
  // Hint: Replace 'todo' with appropriate brackets {} and [] but with variables rather than data
  // Hint 2: Everyone knows Earth is the 3rd rock from the Sun, you don't need to search for it

  // todo ...

  expect(earthMass).toBe(6.0e24);
});

// Note that destructuring can be done at depth
// For example: An array with an object that contains an array, etc.
