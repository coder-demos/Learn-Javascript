// Used to perform some operation on data

// Arithmetic Operators:

// let a = 5;
// let b = 2;

// console.log("a = ", a, " & b = ", b);
// console.log("a + b =", a + b);
// console.log("a - b =", a - b);
// console.log("a * b =", a * b);
// console.log("a / b =", a / b);
// console.log("a % b =", a % b);
// console.log("a ** b =", a ** b); //5^2 = 25

// Unary Operators

// let a = 5;
// let b = 2;

// console.log("a = ", a, "& b = ", b);
// // a++; //6
// // console.log("a = ", a); //6
// a--;
// console.log("a = ", a)//4

// Assignment Operators:

// let a = 5;
// let b = 2;

// // a += 4; //a = a + 4
// // a -= 4; //a = a - 4
// // a *= 4; //a = a * 4
// // a /= 4; //a = a / 4
// // a %= 4; //a = a % 4
// a **= 4; //a = a ** 4

// console.log("a = ", a); //9


//Comparison Operators:

// let a = 5;
// let b = 2;

// console.log("5 == 2", a == b); //false

// let a = 5;
// let b = 5;

// console.log("5 == 5", a == b); //true

// let a = 5;
// let b = 5;

// console.log("5 !== 5", a !== b); //false


// let a = 5;
// let b = 2;

// console.log("5 !== 2", a !== b); //true

// let a = 5;//number so it will be false bcz the data type is not same
// let b = "2";//string

// console.log("5 === 2", a === b); //false


// let a = 5;
// let b = "2";

// console.log("5 !== 2", a !== b); //true

// let a = 5;
// let b = 3;

// console.log("5 < 3", a < b);

// Logical Operators:

// Logical AND &&:

// let a = 6;
// let b = 5;

// let cond1 = a > b; //true
// let cond2 = a === 5; //flase
// console.log("cond1 && cond2 = ", cond1 && cond2);

// Logical OR:

// let a = 6;
// let b = 5;

// console.log("cond1 || cond2 = ", a < b || a === 6); //true

// Logical Not:

// let a = 6;
// let b = 5;

// console.log("!(6<5) = ", !(a === 6)); // false bcz it was true

// Conditional Statements:

// IF STATEMENT:

// let age = 16;
// let mode = "light";
// let color;

// if(mode === "dark") {
//     color = "black";
// }

// if (mode === "light"){
//     color = "white";
// }

// console.log(color);

// if(age > 18){
//     console.log("can vote");
// }

// if (age < 18) {
//     console.log("you cannot vote");
// }

// IF ELSE STATEMENT:

// let age = 16;
// let mode = "dark";
// let color;

// if(mode === "dark") {
//     color = "black";
// } else {
//     color = "white";
// }

// console.log(color);


//odd or even

// let num = 2;

// if (num % 2 === 0){
//     console.log(num, "is even");
// } else{
//     console.log(num, "is odd");
// }


// ELSE-IF STATEMENT:

// let mode = "dark";
// let color;

// if(mode === "dark") {
//     color = "black";
// } else if (mode === "blue") {
//     color = "pink";
// } else {
//     color = "white";
// }

// console.log(color);

// TERNARY OPERATORS:

let age = 25;

let result = age >= 18 ? "adult" : "not adult";
console.log(result);