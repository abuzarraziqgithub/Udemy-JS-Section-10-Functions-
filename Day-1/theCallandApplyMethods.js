"use strict";
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

// PIA.book(1216, "Abuzar RaziQ");
// PIA.book(1221, "Shafqat RaziQ");

// console.log(PIA);

// What if we want to book another airline?

// We will simply create another object.
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
// we will copy the method in a clean way:
const book = PIA.book;

// Now the book is a regular function, and we said it in the previous lectures that , the this keyword is undefined in regular functions using strict mode.

// Does NOT work:
// book(23, "sarah Williams");

// so what should we do now?
// we have method for this:

// Call Method:
book.call(airBlue, 23, "Abuzar", 23);
// The call method allow us to set manually and explicitly set the this keyword of any function that we want to call.
console.log(airBlue);

book.call(airWhite, 937, "Abuzar White");

// Apply Method:
// It recieve arguments as an array of elements like this:
const flightData = [583, "George Cooper"];
book.apply(airWhite, flightData);

//  we don't use it anymore.
// we use the call and the spead operator instead:
book.call(airWhite, ...flightData);

/*
->Summary:  the call and apply methods allows us to explicitly define the this keyword in any function that we want.


-> But there is yet another method , which allows us to do the same thing , which is the bind method, it's more important than the call and apply method.

*/
