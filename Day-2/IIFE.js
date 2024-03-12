"use strict";

// Immediately Invoked Function Expressions.
//  A Function that disappears right after it's called once.

// Simple function:
const runOnce = function () {
  console.log(`This will never run again`);
};
runOnce();

// Now let's create a function expression here :

// Now we wrapped the function below in open parenthesis , beacuse the JS will treat this function as an expression:
// we can then also call it.
// IIFE:
(function () {
  console.log(`This expression will never run again`);
})();

// It work same for arrow functions as well:
(() => console.log(`This Arrow expression function will never run again`))();

// Why are IIFE Invented?
/*
we know that there are scopes , and also the dunctions scope where the parent doesn't have access to it's inner scope variables.

-> we doesn't have access to  variables , which are function scope, because scope chaining works on this way.

-> Therefore , we can say that all data that is defined inside a scope is private , we also say that this data is encapsulated.
-> Data encapsulation and data privacy are extremely important concepts in programming.

-> It's important to hide variables , and scopes are good tool for doing this.

-> This also the reason why IIFE were invented.

-. we also said that the the const and let are blocked scope variables.
*/
{
  const isPrivate = 23;
  var notPrivate = 46;
}
console.log(notPrivate); // accessible
// console.log(isPrivate); // not accessible

// So now the IIFE are not that used anymore , because we can define private data inside block.

// we can still use it , if we want to call function only at once .
