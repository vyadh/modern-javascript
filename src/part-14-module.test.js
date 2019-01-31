/*
 * Modules, imports and exports.
 *
 * This section demonstrates a more common use of functions and testing code.
 */

import { theUltimateQuestion } from "./part-14-module";
import * as myModule from "./part-14-module";

it("call the function from a simple import", () => {
  const question = theUltimateQuestion();

  expect(question).toContain("multiply six by nine");
});

it("call the function that has been imported into a module space", () => {
  const answer = myModule.theUltimateAnswer();

  expect(answer).toBeGreaterThan(41);
  expect(answer).toBeLessThan(43);
});

// This begs the question: How do you unit test a private (non-exported) function?
// Ref: https://github.com/jhnns/rewire
// Ref: https://medium.com/@macsikora/how-to-test-private-functions-of-es6-module-fb8c1345b25f
