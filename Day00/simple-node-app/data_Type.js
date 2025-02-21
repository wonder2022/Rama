// Both let and const are used to declare variables in JavaScript, but they behave differently.

// Feature	                let	            const
// Reassignment	            ✅ Allowed	    ❌ Not Allowed
// Initialization Required?	❌ No	        ✅ Yes
// Scope	                Block-scoped	Block-scoped
// Hoisting	                ✅ Hoisted but uninitialized	✅ Hoisted but uninitialized


let name = "Alice";
console.log(name); // Alice

name = "Bob"; // ✅ Allowed (Reassigning)
console.log(name); // Bob

const age = 25;
console.log(age); // 25

//age = 30; // ❌ Error: Assignment to constant variable


/*
    Mutable Object Example
 */
console.log("Const log")
const user = { name: "Alice", age: 25 };
user.age = 30;  // ✅ Allowed (modifying property)
console.log(user); // { name: 'Alice', age: 30 }

//user = { name: "Bob" }; // ❌ Error (Reassignment not allowed)
console.log("Let log")
let student = { name: "Rama", age: 26 };
student.age = 30;  // ✅ Allowed (modifying property)
console.log(student); // { name: 'Alice', age: 30 }

student = { name: "Shanker" };
console.log(student);


// Both let and const are block-scoped, meaning they only exist inside {}.
{
    let x = 10;
    const y = 20;
}
//console.log(x); // ❌ Error (x is not defined)
//console.log(y); // ❌ Error (y is not defined)

if (true) {
    var z = 50;
}
console.log(z);
