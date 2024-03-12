"use strict";
/*
-> A function Always has access to the variable enviroment(EV) of the execution context in which it was created even after that execution context is gone.

-> Closure: VE attached to the function , exactly as it was at the time and place the function was ceated.


-> A Closure makes a function remember all the variables that existed  at the functions .

-> So we can say that secureBooking function is the birthplace of booker function. 

-> The Closure basically has priority over the scope chain. because if we create a passengerCount variable in the global scope and set the value to 10 , it will still first use the one in the closure.

*/

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

// booker();
// booker();

/*
-> A Closure is the closed-over variable enviroment of the execution context in which a function was created , even after that execution context is gone.


-> A Closure gives a function access to all the variables of its parent function,even after that parent function has returned. The function keeps a reference to its outer scope, which preserves the scope chain throughout time.

-> A Closure makes sure that a function doesn't loose connection to variables that existed at the function's birth place.


-> A Closure is like a backpack that a function carries around wherever it goes. This backpack has all the variables that were present in the enviroment where the function was created.



Note: We do not have to manually create closures , this is a javascript feature that happens automatically.We can't even access closed-over(coverd something)  variables explicitly. A Closure is NOT a tangible(that can be touched) Javascript object .
*/

// what we can do, is to actually take a look at this internal property in the console.

// Let's do it:
// console.dir(booker);
// And there : the scopes area is the variable enviroment of the booker function.

// More CLOSURE Examples:
// Let's create two more situations in which closures are gonna apper. so then you can start identifying closures.

// Example 1:
let f;

const g = function () {
  const a = 2;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 20;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();

// Re assigning f function
h();
f(); // this is entirely new function

// Example 2:
const boardPassengers = function (n, wait) {
  // If I removed this variable , then the global scoped variable will assign to the settime out function.
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups , each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 100;
boardPassengers(6, 1);

//  we said that closures have priority over the scope chain , let's demonstrate it using the example:
