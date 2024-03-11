"use strict";
/*
The Bind Method: Just like the call method , bind also allows us to manually  set the this keyword for any function call.

-> The difference is the bind does not immediately call the function instead it returns a new function where the this keyword is bound.
*/

const PIA = {
  airline: "PIA",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push(`flight:${this.iataCode}${flightNum}`, name);
  },
};

const airBlue = {
  airline: "Air Blue",
  iataCode: "AB",
  bookings: [],
};

const airWhite = {
  airline: "Air White",
  iataCode: "AW",
  bookings: [],
};

const book = PIA.book;

const bookBlue = book.bind(airBlue);
bookBlue(234, "Abuzar");
// we can create each function separatly for every object now.

const bookWhite = book.bind(airWhite);
bookWhite(29323, "Shaffoo");

// we can set default value in bind:
const bookBlueDef = book.bind(airBlue, 23);
// we can call this Partial Application, means that a part of arguments of the original function are already applied or already set.
bookBlueDef("Essa");
bookBlueDef("Mujtaba");

// Let's do with EventListeners:
airBlue.planes = 300;
airBlue.buyPlanes = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
document.querySelector(".buy").addEventListener("click", airBlue.buyPlanes);
//  If we just pass the method call by object , then the this keyword inside that function will pointed to the element itself
// This case is in EventListner functions.

//  To call method by it's object and pointing as well , we use the bind method, to return a new function.

document
  .querySelector(".buy")
  .addEventListener("click", airBlue.buyPlanes.bind(airBlue));
// it will simply pointing the airblue object and will be called by that object

// Partial Application:
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// let's create a new function  by using bind method and then apply preArguments to it using Partial Application concept.
const addVAT = addTax.bind(null, 0.23);
// In this bind , we just pass null as a first argument , because it is the this argument and we don't care about this. we just want to calculate the value without any object call.

//  and the 23 is the default value for rate parameter.

// Challenge :
//  Create a function that returns the function, and that do the same thing as we did by using binf method.
console.log(addVAT(30)); //  36.9
console.log(addVAT(23)); // 28.29

const addTaxFunc = function (rate) {
  return function (value) {
    const VAT = value + value * rate;
    console.log(VAT);
  };
};

const addVATFunc = addTaxFunc(0.25);
addVATFunc(100);
