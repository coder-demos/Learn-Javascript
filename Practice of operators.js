// Q1 ://Get user to input a number using prompt ("Enter a number:"). Check if the number is a multiple of 5 or not:

// let num = prompt("enter a number");

// if(num % 5 === 0) {
//     console.log(num, " is multiple of 5");
// } else {
//     console.log(num, " is Not a multiple of 5");
// }

// Q2: write a code which can give grades to students accoring to their scores:

let score = prompt("enter your score (0-100)");
let grade;

if(score >= 90 && score <= 100) {
    grade = "A";
} else if (score >= 70 && score <= 89) {
    grade = "B";
} else if(score >= 60 && score <= 69){
    grade = "C";
} else if(score >= 50 && score <= 59){
    grade = "D";
} else if(score >= 0 && sscore <= 49){
    grade = "F";
}

console.log("accoring to your scores, your grade was: ", grade);