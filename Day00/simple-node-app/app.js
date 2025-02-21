// app.js

// 1. Variables
let greeting = "Hello Rama";
console.log(greeting)

let number = 10;
console.log(number)

let isTrue = true;

console.log(isTrue)


//Condition
if (number > 5) {
    console.log("The nuber is greater than 5");
} else if (number === 5) {
    console.log("The number is equal to 5");
} else {
    console.log("The number is less than 5");
}

// For Loop
console.log("Using for Loop");
for (let i = 0; i < 6; i++) {
    console.log("Iteration:", i)
}

// While loop

console.log("While Loops")
let count=0
while(count<5){
    console.log("Count:",count)
    count ++
}

let index = 0;
do {
    console.log("Index is:", index);
    index++;
} while (index < 5);

// Array
let fruits=  ["Apple","orange","Banana","Grapes","Cherry"]
for(let i=0;i<fruits.length;i++){
    console.log("Fruits:",fruits[i])
}

fruits.forEach((fruit)=>{console.log(fruit)})



