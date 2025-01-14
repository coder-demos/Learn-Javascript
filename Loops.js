//Loops are used to execute a peice of code again & again

//print 1 to 5:

// for (let a = 1; a <= 5; a++){
//     console.log("hello");
// }

// console.log("Loop has ended");

// Calculate sum of 1 to 5:

// let sum = 0;
// for(let i = 1; i <= 5; i++){
//     sum = sum + i;
// }

// console.log("sum = ", sum);
// console.log("Loop has ended");

// Infinite Loops: A loop that never ends !!never use it

// While Loops

//print 1 to 5:

// let i = 1;
// while(i<=10){
//     console.log("Momina Khalid");
//     i++;
// }

// let i = 1;
// do {
//   console.log("i=", i);
//   i++;
// } while (i <= 5);

// For-of Loop:

// let str = "Javascript";

// let size = 0;

// for (let val of str) {
//     //iterator -> characters
//     console.log("val=", val);
//     size++;
// }

// console.log("string size = ", size);

// For in loop:

// let student = {
//     name: "Rahul Kumar",
//     age: 20,
//     cgpa: 7.5,
//     isPass: true,
// };

// for (let key in student) {
//     console.log("key= ", key, "value=", student[key]);
// }

// Practice:

// Q1: Print all even numbers from 0 to 100?

// Even

// for (let num = 0; num <= 100; num++) {
//     if (num % 2 === 0) { //even number
//         console.log("num =", num);
//     }
// }

// ODD

// for (let num = 0; num <= 100; num++) {
//     if (num % 2 !== 0) { //odd number
//         console.log("num =", num);
//     }
// }