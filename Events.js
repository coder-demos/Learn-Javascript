// let btn1 = document.querySelector("#btn1");

// btn1.addEventListener("click", (evt) => {
//     console.log("button1 was clicked - handler1");
// });

// btn1.addEventListener("click", () => {
//     console.log("button1 was clicked - handler2");
// });

// btn1.addEventListener("click", () => {
//     console.log("button1 was clicked - handler3");
// });

// btn1.addEventListener("click", () => {
//     console.log("button1 was clicked - handler4");
// });

// PRACTICE:

let modeBtn = document.querySelector("#mode");
let currMode = "light"; //dark

modeBtn.addEventListener("click", () => {
    if(currMode === "light") {
        currMode = "blue";
        document.querySelector("body").style.backgroundColor = "blue";
    } else {
        currMode = "light";
        document.querySelector("body").style.backgroundColor = "green";
    }


});
