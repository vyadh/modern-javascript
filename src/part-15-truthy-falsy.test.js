/*
 * The notion of 'truthy' and 'falsy' in JS.
 *
 * JavaScript provides a definition of 'truth' in JS which is more
 * than just boolean values. While this might be unexpected, it's
 * quite helpful to reduce clutter in your code.
 *
 * All values are considered 'truthy' apart from the following:
 *  - false
 *  - null
 *  - undefined
 *  - 0 (zero)
 *  - '' (an empty string)
 *
 * This relies on automatic type-conversion to boolean. While this
 * feature is considered a mistake in JS in general, coersion to
 * boolean values can be quite helpful as shown in this section.
 */

// Let's be explicit about converting to true or false.
// Note this expression could also be an if staement,
// or even boolean operators!
const truth = value => (value ? true : false);

test("values considered 'falsy'", () => {
  expect(truth(0)).toBe(false);
  expect(truth(null)).toBe(false);
  expect(truth(undefined)).toBe(false);

  // Above is for illustration purposes, but note Jest also supports:
  expect(0).toBeFalsy();
  expect(null).toBeFalsy();
  expect(undefined).toBeFalsy();
});

// Exercise:
// Verify the below values are 'truthy'
test("values considered 'truthy'", () => {
  let anyNonZeroNumber = 42;
  let anyObject = {};
  let anyArray = [];

  // todo ...
});

test("common if labourious way to check for undefined variable (truthy)", () => {
  let value = "a defined value";

  let result = value !== undefined && value !== null ? value : "missing";

  expect(result).toBe("a defined value");
});

// Exercise
// Repeat the above for the case where value is undefined
test("common if labourious way to check for undefined variable (falsy)", () => {
  // todo ...
});

test("a shorter way of providing a default (truthy)", () => {
  let value = "a defined value";

  let result = value ? value : "missing";

  expect(result).toBe("a defined value");
});

// Exercise
// Repeat the above for the case where value is undefined
test("a shorter way of providing a default (falsy)", () => {
  // todo ...
});

// The boolean operators || and && don't resolve to a boolean (!),
// they actually resolve to the value itself..
// We can use this fact to make the above even shorter.
// This is the idomatic way to specify 'default' values in JS

test("specifying defaults using '||' boolean operators (truthy)", () => {
  let value = "defined value";

  let result = value || "default";

  expect(result).toBe("defined value");
});

// Exercise:
// Repeat the above but verifying a 'falsy' value returns the default
test("specifying defaults using '||' boolean operators (falsy)", () => {
  // todo ...
});

test("the && operator can also be used for null-propagation", () => {
  let person = {
    address: {
      work: {
        street: "Queen Victoria Street"
      }
    }
  };

  // This isn't perfect but a EcmaScript stage-1 proposal should fix it
  let street =
    person &&
    person.address &&
    person.address.work &&
    person.address.work.street;

  expect(street).toBe("Queen Victoria Street");
});

test("Actually converting to boolean can also be done", () => {
  let value = undefined;

  expect(!!value).toBe(false);
  expect(Boolean(value)).toBe(false);
});
