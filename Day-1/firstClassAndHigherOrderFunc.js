"use strict";

/* --> FIRST-CLASS  FUNCTIONS:
> JS treats functions as first-class citizens .

> This means that functions are simply values.

> Functions are just another type of object.


a) We can store functions in variables or properties:
 variable = (args) => return.
 object = {prop, method:(){log(this)}}


b) We can pass functions as an arguments to other functions:
variable = () => return;
Ob.EventListener('click',greet)



c) we can return functions from functions.

d) As we just said that , functions are just another type of Object. so It can also call methods like we did in arrays,or objects.

function.bind();


Note: The FIRST CLASS FUNCTIONS is just a concept in javascript , we can understand the different behaviours of functions.

*/

/* --> HIGHER-ORDER FUNCTIONS:

> A function that recieves another function as an argument, that returns a new function or both.

> This is only possible because of first class functions. (The concept of first class functions)


a) Function that recieves another function:
const greet = () => console.log('Hey');
btnClose.addEventListener('click',greet);

> Here , the EventListener function is Higher order function and the other function as an argument is callback function.

b) Functions that returns new Function:
function count()
{
    let counter = 0;
    return function()
    {
        counter++;
    }
}
*/

// In the next lecture , let's create a higher order function.
