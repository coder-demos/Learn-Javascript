// // String is a sequence of characters used to represent text

// // Create

// let str = "Momina Khalid";
// let str2 = 'Momina';
// console.log(str.length); //to get the lenght of the string

// let stri = "Momina khalid";

// console.log(stri[0], stri[1]); //M , O

// Template Literals:

// let obj = {
//     item: "pen",
//     price: 10,
// }

// let output = `the cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);

// Escape character:

// console.log("Momina\nKhalid"); //next line
// console.log("Momina\tKhalid"); //tab space

// String Methods:

// String to upper case

// let str = "Hello world";
// console.log(str.toUpperCase());

// String to lower case

// let str1 = "Hello Me";
// console.log(str1.toLowerCase());

// Trim Method: Remove Whitespaces from start and end

// let str = "       Hello World    Js        ";
// console.log(str.trim());

// PRACTICE

let fullName = prompt("enter your fullname without spaces");

let username = "@" + fullName + fullName.length;
console.log(username);

