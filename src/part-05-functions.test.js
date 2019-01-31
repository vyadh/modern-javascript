/*
 * Function syntax.
 */

// The traditional-style function syntax in JavaScript looks comfortingly familiar

test("traditional 'function declaration' syntax", () => {
  function plus(a, b) {
    return a + b;
  }

  expect(plus(1, 2)).toBe(3);
});

// While this syntax is familiar, it unfortunately comes with issues around the meaning of 'this'.
// We'll look at the 'this' problem later, but it's very common to use a style that avoids it
// using 'function expressions', aka 'arrow syntax' or 'lambda exprssions' more generally.

test("two-argument function", () => {
  const plus = (a, b) => {
    return a + b;
  };

  expect(plus(1, 2)).toBe(3);
});

// Note that we're using 'const' here rather than 'let'. We'll use this convention for
// functions as it helps the eye distinguish between functions and variables.
// In reality it's exactly the same thing - functions are just values in JS.

// As you might expect from other languages, if you have a single-line function, this
// can be more concise...

test("two-argument one-line function", () => {
  const plus = (a, b) => a + b;

  expect(plus(1, 2)).toBe(3);
});

// A function with a single argument doesn't need brackets

test("single argument function", () => {
  const doubleIt = n => n * 2;

  expect(doubleIt(5)).toBe(10);
});

// Also, as you've probably noticed, we've been using a zero-argument lambda function all
// along for our tests!

test("zero-argument function", () => {
  // action...
});

// Exercise
test("all JS functions return something, but what happens if it's not explicit?", () => {
  const conditionalReturn = hasReturn => {
    if (hasReturn) {
      return "return value";
    }
  };

  expect(conditionalReturn(true)).toBe("return value");
  // todo ...
});

// 'Higher order functions' are functions that operate on other functions passed as arguments,
// or return functions as results. As mentioned, in JavaScript, functions are treated as
// *values* like everything else.

test("higher order function used to mutiply values", () => {
  const multiplier = factor => {
    return n => n * factor;
  };

  const triple = multiplier(3);

  expect(triple(5)).toBe(15);
});

/*
Functional Programming terminology sidebar on the above:

  multipler function
   - this is a higher-order function as it returns a function
   - it's also a special type of HOF called a 'curried' function 
     as it returns a single-argumet function that can be invoked
     either elsewhere or as a chain of invokations.

  multiplier(3)
   - satisfies the 'factor' argument, this is a partial application
     of the curried function (aka 'currying') this is also sometimes
     (less readably in this case) expressed as: mupltiplier(3)(5)

  triple
   - appears as a normal function with a primitive argument and result
*/

// Exercise
// Define a calculator as higher-order functions that evaluates operations on two numbers,
// and returns a string result to satisfy the below tests.
// Remove the '.skip' before working on this exercise

test.skip("calculator excerise", () => {
  const plus = undefined;
  const minus = undefined;
  const multiply = undefined;
  const divide = undefined;

  const calculate = undefined;

  expect(calculate(plus, 3, 4)).toBe("The result is 7");
  expect(calculate(minus, 3, 4)).toBe("The result is -1");
  expect(calculate(multiply, 2, 6)).toBe("The result is 12");
  expect(calculate(divide, 20, 5)).toBe("The result is 4");
});

// The purpose to the obove is to start thinking of functions as just another value
// in the language that you can pass around rather than a special static construct.
// This is useful in JS when using event handlers.
