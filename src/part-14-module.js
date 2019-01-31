/*
 * Modules, imports and exports.
 *
 * C# has namespaces.
 * Java has packages.
 * JavaScript has 'modules'.
 */

export const theUltimateQuestion = () => {
  return "What do you get when you multiply six by nine?";
};

export const theUltimateAnswer = () => {
  return 42;
};

// The 'public' functions can be exported where they are defined as above, however it is
// also common to export them in a separate section as below

const someFunction = () => 1;
const someOtherFunction = () => 2;

export { someFunction, someOtherFunction };
