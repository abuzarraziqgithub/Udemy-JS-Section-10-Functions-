"use strict";

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");

  return [first.toUpperCase(), ...others].join(" ");
};

// HIGHER ORDER FUNCTION:
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed String: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};
transformer("JavaScript is the best!", upperFirstWord);

transformer("JavaScript is the best!", oneWord);

// JS uses callbacks all the time:
const high5 = function () {
  console.log("Hey (:");
};
document.body.addEventListener("click", high5);

["jonas", "Martha", "Adam"].forEach(high5);

/*
This is also call Abstraction , because above , the transformer function doesn't relly care about what tpo do , it is the call back functions that are doing the cation , and It is the way of writing Reusable and clean code.

-> Call back functions has a crucial role in js.

-. The transformer and eventlistener is Higher Order functions in which these low level functions are passed as callbacks.


*/
