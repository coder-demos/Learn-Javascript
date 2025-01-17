// Block of code that performs a specific task, can be invoked when needed

// function myFunction(){
//     console.log("Welcome to Coding");
//     console.log("We are learning Js :)");
//     console.log("Welcome to Coding");
//     console.log("We are learning Js :)");
// }

// myFunction();
// myFunction();

// function myFunction(msg) {
//     //parameter --> input
//     console.log(msg);
// }

// myFunction("I love JS"); //argument

// function sum(x, y) {
//     //local variables -> scope
//     s = x + y;
//     console.log("before return");
//     return s;
// }

// let val = sum(3, 4);
// console.log(val);

//sum Function

// function sum(a, b) {
//     return a + b;
// }

// const arrowSum = (a, b) => {
//     console.log(a + b);
// };

// Practice

function countVowels(str) {
    let count = 0;
    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++
        }
    }
    return count; 
}

// Performe the same task in arrow function

// const countVow = (str) => {
//     let count = 0;
//     for (const char of str) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++
//         }
//     }
//     return count; 
// }

// let arr = ["pune", "delhi", "mumbai"];

// arr.forEach((val, idx, arr) => {
//    console.log(val.toUpperCase(), idx, arr);
// });

// Practice

// For a given array of numbers, print the square of each value using the forEach loop

// let nums = [67, 52, 39, 98];

// let calcSquare = (num) => {
//     console.log(num * num);
// };

// nums.forEach(calcSquare);

// Filter

// let arr = [1, 2, 3, 4, 5, 6, 7];

// let evenArr = arr.filter((val) => {
//    return val > 3;
// });

// console.log(evenArr);

// Reduce

let arr = [5, 6, 2, 1, 3];

const output = arr.reduce((prev, curr) => {
   return prev > curr? prev : curr;
});

console.log(output);