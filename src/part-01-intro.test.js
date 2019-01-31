/*
 * Code and exercises in this course will be demonstrated and written as tests
 * (don't worry too much about the syntax, we'll get to that later...)
 *
 * We will be using 'Jest' - a popular JavaScript testing library.
 */

test("a test with a nice description", () => {
  // Code under test goes here
  expect(true).toBe(true);
});

// An alternate alias for 'test' is using 'it' as seen below in the 'describe + it' style
describe("grouped test", () => {
  it("case A", () => {
    expect(1 + 1).toBe(2);
  });

  it("case B", () => {
    expect(Math.random()).toBeGreaterThan(0);
  });
});

// The below test is currently being skipped.
// Skipped tests will often be used in this course for exercises to complete.

// Exercise
// 1) Have a look at the tests tab in CodeSandbox(top-right button under profile icon, hover to see)
// 2) Click on this file in that panel: /src/intro.test.js
// 3) Remove the '.skip' below to enable the test below and observe the failing test result
// 4) Fix the test

test.skip("a failing test", () => {
  expect(true).toBe(false);
});

// Notice that when something is changed, the tests are re-run without having to save.
// Unfortunately CodeSandbox is a bit aggressive running tests which causes typing lag on
// many tests so you will want to hide this panel which typing (stops tests being run)
// Related bug for this: https://github.com/CompuIves/codesandbox-client/issues/1414

// For more examples of Jest matchers, including links to reference docs, see:
// https://jestjs.io/docs/en/using-matchers
