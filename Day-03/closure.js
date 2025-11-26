//The rule normally hen function finishes all its local variables are destroyed
//But closure allows a function to retain access to its lexical scope even when the function 
// is executed outside that scope

function createCounter() {
    //the base camp
    let count = 0; // Private variable(supply in base camp)

    //Below, this is the hiker
    return function() {
        count += 1;//reaching into base camp to get the private variable    
        console.log(count);
    };
}
const myCounter = createCounter();//here base camp is closed but hiker still has access to it.

myCounter(); // Output: 1 this works because hiker kept a reference to base camp(count variable)
myCounter(); // Output: 2
myCounter(); // Output: 3