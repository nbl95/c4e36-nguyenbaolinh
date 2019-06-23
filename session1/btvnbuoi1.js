// baitap1
// 1.1 How to check a variable’s type?


// Use typeof:

> typeof "foo"
"string"
> typeof true
"boolean"
> typeof 42
"number"
// So you can do:

if(typeof bar === 'number') {
   //whatever
}
// Be careful though if you define these primitives with their object wrappers (which you should never do, use literals where ever possible):

> typeof new Boolean(false)
"object"
> typeof new String("foo")
"object"
> typeof new Number(42)
"object"
// The type of an array is still object. Here you really need the instanceof operator.

// 1.2 In what cases, you will get SyntaxError from the compiler telling you that some of your variables have invalid names? Can you give 3 different examples of invalid names?

// Answer:
// Except in the following cases:
// Can start a variable with any letter, $, or _ character.
// As long as it doesn't start with a number, you can include numbers as well.
// Start: [a-z], $, _
// Contain: [a-z], [0-9], $, _

// Can you give 3 different examples of invalid names?

// Answer:
let x = 2,8;
let y = 2P;
let z = ;6;

// BAITAP2 Write a program that calculates the area of a circle. The circle radius is entered by users

let x = prompt ('Radius?');
console.log ('Area = ' +x*x*3.14+'.0');

// BAITAP3 Write a program that converts Celsius (0C) into Fahrenheit (0F) 

let x = prompt('Enter the temperature in Celsius');
console.log(x + '°C = ' + ((x * 9 / 5) + 32) + '°F');


// Turtle exercise
// 1. A square
clear();
fd(100);
lt(90);
fd(100);
lt(90);
fd(100);
lt(90);
fd(100);

// 2.An equilateral triangle
clear();
rt(30);
fd(200);
rt(120);
fd(200);
rt(120);
fd(200);
 
// 3. a circle
clear();
for(i=0;i<360;i++){
fd(2);
lt(1);
};
 
// 4.Multi-circles
clear();
for(x=0;x<360;x++){
  for(y=0;y<360;y++){
    fd(2);
    lt(1);
  }
  lt(10);
}

// END


