// Day 26: My First TypeScript Code
// In TS, we can define the 'type' of a variable
var message = "Hello, TypeScript!";
var count = 100;
var isLearning = true;
// A function with typed parameters and return type
function greetUser(name) {
    return "Welcome to Day 26, ".concat(name, "!");
}
console.log(message);
console.log(greetUser("Vinuja"));
/* TO RUN THIS:
1. Open terminal in Day-26 folder
2. Run: tsc hello-ts.ts (This creates hello-ts.js)
3. Run: node hello-ts.js
*/ 
