"use strict";

// Function returning another Function:

const greet = function (greetMessage) {
  return function (name) {
    return console.log(`${greetMessage} ${name}`);
  };
};

const greetArr = (greetMesArr) => (nameArr) =>
  console.log(`${greetMesArr} 
${nameArr}`);

greetArr("Hi")("Jonas");
