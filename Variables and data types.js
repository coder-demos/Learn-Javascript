// // console.log("Momina Khalid");
// // console.log("I love coding");

// fullName = "tony stark";
// age = 23;
// price = 99.99;
// x = null;
// y = undefined;
// isfollow = true;
// console.log(isfollow);

// let, var, const:

// Can be redeclared and update

// var age = 24;
// var age = 89;
// var age = 76;

// console.log(age);

// cannot be redeclared but update

// let age = 24;
// age = 40;
// age = 20;

// console.log(age);

// Cannot be both

// const age = 24;

// console.log(age);

// Block:

// {
//     let a = 5;
//     console.log(a);
// }

// {
//     let a = 10;
//     console.log(a);
// }

// Data Types:

// Number

// let age = 24;
// let price = 100.5;

// console.log(typeof age);

// String

// let fullName = "Momina";

// console.log(typeof fullName)

// Boolean

// isFollow = true;

// console.log(typeof isFollow);

// Undefined

// let x;

// console.log(typeof x);

// Null

// let x = null;

// console.log(typeof x);

// Bigint

// let x = BigInt("123");

// console.log(x);

// //Symbol

// let y = Symbol("Hello!");
// console.log(y);

// OBJECT:

const student = {
    fullName: "Rahul Kumar",
    age: 20,
    agpa: 8.2,
    isPass: true,
};

student["age"] = student["age"] + 1

console.log(student["age"]);