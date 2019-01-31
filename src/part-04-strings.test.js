/*
 * String functions and interpolation.
 *
 * ReferenceL https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 */

test("strings are concatenated using familiar syntax", () => {
  let result = "milky" + "way";

  expect(result).toBe("milkyway");
});

test("be careful with concatenation when mixing types, likely an error in other languages", () => {
  let result1 = "1" + 5 + 10;
  let result2 = 1 + 5 + "10";

  expect(result1).toBe("1510");
  expect(result2).toBe("610");
});

test("string interpolation can be done with a 'template' surrounded by backticks", () => {
  let planet = "Earth";
  let kmFromSun = (150000000).toLocaleString(); // Methods can be called on number if surrounded by brackets

  let message = `The planet ${planet} is on average ${kmFromSun} Km away from the sun`;

  expect(message).toBe(
    "The planet Earth is on average 150,000,000 Km away from the sun"
  );
});

test("strings can flow onto multiple lines when using backticks", () => {
  let mystring = `can you
hear me
major tom?`;

  expect(mystring).toBe("can you\nhear me\nmajor tom?");
});

test("common string operations are available", () => {
  expect(" mercury \t".trim()).toBe("mercury");

  expect("venus".toUpperCase()).toBe("VENUS");

  expect("earth mars".split(" ")).toEqual(["earth", "mars"]);
  // Note the 'toEqual' we've been able to use an object-equality matcher until now
  // Arrays requires deep equality comparison

  expect(["jupiter", "saturn"].join(",")).toBe("jupiter,saturn");

  expect("uranus!".repeat(3)).toBe("uranus!uranus!uranus!");

  expect("neptune".indexOf("tune")).toBe(3);
});

// prettier-ignore
test("JavaScript provides many useful functions out of the box, such as padding text", () => {
  expect("1".padStart(5, " ")).toBe("    1");
  expect("12".padStart(5, " ")).toBe("   12");
  expect("123".padStart(5, " ")).toBe("  123");
});

// Exercise
// Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
test("use the substring function on string to uncover the 'secret' message", () => {
  let secret = "nfaonabepoijohbnicejobaweygamnlfla";
  let start = 15;
  let end = 22;

  // todo ...
});

// Exercise
// String also has a 'slice' method - what is the difference from substring?
