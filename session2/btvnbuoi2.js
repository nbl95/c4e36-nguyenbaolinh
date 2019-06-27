// BT1:
// A JavaScript Boolean represents one of two values: true or false.

// Boolean Values
// Very often, in programming, you will need a data type that can only have one of two values, like
// YES / NO
// ON / OFF
// TRUE / FALSE
// For this, JavaScript has a Boolean data type. It can only take the values true or false.

// Example
// Boolean(10 > 9)        // returns true
// Or even easier:
// (10 > 9)              // also returns true
// 10 > 9                // also returns true

// BT2:
// A flowchart is a visual representation of a process in which each step in the process is represented by a different shape and contains a short description of the process step

// BT3:
// Nest conditionals. One conditional can also be nested within another. ... The outer conditional contains two branches. The second branch (the else from the outer) contains another if statement, which has two branches of its own. Those two branches could contain conditional statements as well.
// vi du: if a > b:
    // print("a is more than b")
    // else:
    //     if a < b:
    //         print("a is less than b")
    //     else:
    //         print("a and b must be equal")


// Turtle 
// 1.
// clear();
// color("red");
// for(i=0;i<4;i++){
// lt(30);
// fd(90);
// rt(60);
// fd(90);
// rt(120);
// fd(90);
// rt(60);
// fd(90);
// lt(120);
// }

// 2.
// clear();
// lt(30)
// color("red")
// for(i=0;i<6;i++){
// fd(100)
// rt(60)
// }
// rt(30)
// for(i=0;i<4;i++){
// fd(100)
// rt(90)
// }
// lt(18)
// color("blue")
// for(i=0;i<4;i++){
// fd(100)
// rt(72)
// }
// rt(60)
// fd(100)
// lt(120)
// fd(100)


// Serious exercises

// 1.
// let x = prompt("Enter your weight (kg)")
// let y = prompt("enter your height(cm)")
// Y=y*0.01
// BMI = x/(Y*Y)
// console.log(BMI)
// if (BMI < 16)
// {
//     console.log("Severely underweight")
// }
// else if(BMI <=18.5){
//     console.log("Underweight")
// }
// else if(BMI<= 25){
//     console.log("Normal")
// }
// else if(BMI <= 30){
//     console.log("Overweight")}
// else {
//     console.log("Obese")
// }



// 2.

// let n = Number(prompt("Enter n: "));
// let a = 1
//  for(i=1;i<=n;i++){
//       a=a*i;
//  }
//  console. log(`x! = ${a}`);