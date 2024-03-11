"use strict";

console.log(`----- ES5 DEFAULT VALUES -----`);

const bookings = [];

const createBooking = function (flightNum, numPassengers, price) {
  //   The old way of default parameters
  // Inorder to avoid undefined value , we need to use Short Circuiting to apply default value to it .(The old (ES5) way of assigning default value.)
  flightNum = flightNum || "empty";
  numPassengers = numPassengers || "empty";
  price = price || "empty";
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
  //   console.log(bookings);
};

createBooking(1122, 30, 20000);
createBooking(54);

// Now

console.log(`----- ES6 DEFAULT VALUES -----`);
const bookings2 = [];

const createBooking2 = function (
  flightNum = 1,
  numPassengers = 2,
  price = 90 * numPassengers
) {
  // The advance way of default parameters.
  //  we can lso use expression.
  // In ES6 , there is a better way to passing default values to parameters , simply assign them a value.
  const booking2 = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking2);
  bookings2.push(booking2);
  //   console.log(bookings2);
};

createBooking2(1122, 30, 20000);
createBooking2(54);

/*
--> This was the lecture about default parameters in js,
-> Before ES6 , we need to use shortcircuiting in order to assign default values to parameters .


-> But now in   ES6 , we can directly assign values to parameters and also can use expression in it.

-> JavaScript check the parameters in order way, so we can't use a parameter as a expression before declaring it.

*/
