/*
 * The spread operator - making it easier to work with immutable data structures.
 *
 * (note: this is slightly different from the 'rest' operator seen previously at the declation site,
 *  where spread is distinguished by being used at the call-site)
 *
 * Reference
 * Arrays: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Spread_in_array_literals
 * Objects: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Spread_in_object_literals
 */

// ARRAYS

test("the spread operator aids working with arrays without resorting to imperitive code", () => {
  let nearEarth = ["venus", "earth", "mars"];

  let planets = ["mercury", ...nearEarth, "jupiter"];

  expect(planets).toEqual(["mercury", "venus", "earth", "mars", "jupiter"]);
});

// Exercise
test("use the spread syntax to show an alternative way of concatenating arrays", () => {
  // todo ...
});

// Exercise (remove .skip)
test.skip("re-write the swapByIndex function from the 'arrays' section to use the spread operator", () => {
  const swapFromIndex = (array, index) => {
    return undefined;
  };

  let original = [1, 2, 3, 4, 5, 6];
  let expected = [4, 5, 6, 1, 2, 3];
  expect(swapFromIndex(original, 3)).toEqual(expected);
});

// OBJECTS

test("the spread operator can also be used to easily create new versions of objects", () => {
  let rocket = {
    name: "Insight R5",
    colour: "green",
    heightKm: 50.0
  };

  let rocketAfterBoost = { ...rocket, heightKm: 75.0 };

  expect(rocketAfterBoost).toEqual({
    name: "Insight R5",
    colour: "green",
    heightKm: 75.0
  });
});

// Important!
// The above is an extremely useful technique when programming in React.
// While it is theoretically possible to mutate objects, this does not work well with React and Redux.
// Both require immutable data for simple, reliable and performant UI updates.
// The operation of these tools depend on delegating state changes to the framework, so mutation should be avoided.

// Exercise
test("use the spread operator to merge the properties of two objects and note which takes presedence", () => {
  // todo ...
});

// Exercise
test("use the rest and spread operators to repalce a property with other", () => {
  let rocket = {
    name: "Insight R5",
    colour: "green",
    heightKm: 50.0
  };

  // Replace 'heightKm' property with height in meters
  // todo ...
});

// Note:
// The spread syntax for object literals is a completed standards proposal but currently
// only implemented in Firefox and Chrome (as of Dec 2018). The previously-used method
// used a longer syntax with Object.assign()
// Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
// This isn't an issue in pratice as Babel and TypeScript contain a 'polyfill'
// (making it compatible with older browsers)
