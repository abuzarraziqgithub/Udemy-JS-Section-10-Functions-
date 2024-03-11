"use strict";

const flight = "LH234";
const abuzar = {
  name: "Abuzar RaziQ",
  passport: 123,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr." + passenger.name;

  if (passenger.passport === 123) {
    console.log("Checked in");
  } else {
    console.log("Wrong Passport");
  }
};

// checkIn(flight, abuzar);
// console.log(flight);
// console.log(abuzar);

// Is the same as doing ...
// const flighNum = flight;
// const passenger = abuzar;

/*
---> We pass two arguments , one is primiive value and the other is object.

-> But when we log it , the primitive value didn't change , because we said that in the previous lectures , that when we copy the primitive type variable , It actually has assign the value of that variable.

-> But when we change the value , then the value is assigned to that variable in another address.


-> But for objects , the refrence as value can't change , so when we copy object , and then change the values , it automatically change in the original one as well .
*/

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() + 100);
};

newPassport(abuzar);
checkIn(flight, abuzar);
console.log(flight);
console.log(abuzar);

/*
--> we changed the passport value in the newPassport function , now when we pass abuzar object as an argument  , then the value will change in it , and then the CheckIn function will become false.


-> In JS , the arguments are passed as passing by value not passing by reference ....Google it.

*/
