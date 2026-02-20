/*
🟡 Problem: Implement bind() Polyfill

In JavaScript, the built-in Function.prototype.bind() method creates a new function that, when called:
1. Has its this keyword set to the provided value.
2. Can optionally accept partially applied arguments (currying).
3. Works correctly when used with the new operator.

Your task: Implement a custom version of Function.prototype.bind() called myBind.

Requirements:
1. It should bind this to a provided context.
2. It should support partial arguments.
3. It should behave correctly when used as a constructor (with new).
4. It should not modify the original function.
*/

Function.prototype.myBind = function (context, ...bindArgs) {
  const originalFn = this;

  function boundFunction(...callArgs) {
    const isNew = this instanceof boundFunction;

    return originalFn.apply(
      isNew ? this : context,
      [...bindArgs, ...callArgs]
    );
  }
  boundFunction.prototype = Object.create(originalFn.prototype);

  return boundFunction;
};
