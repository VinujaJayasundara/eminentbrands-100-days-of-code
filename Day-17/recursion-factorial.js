// Day 17 Challenge: Factorial using Recursion

/* Note: Recursion is a function calling itself. It must have a 'Base Case' 
to stop the calls and prevent infinite loops (Stack Overflow). The problem must 
be broken down into smaller, identical sub-problems.
*/

// Time Complexity: O(n) - The function calls itself n times.
function factorial(n) {
    // Base Case: The condition that stops the recursion
    if (n === 0) {
        return 1;
    }
    
    // Recursive Step: Calls itself with a smaller input (n - 1)
    return n * factorial(n - 1);
}

const num1 = 5;
const num2 = 0;
console.log(`Factorial of ${num1}: ${factorial(num1)}`);
console.log(`Factorial of ${num2}: ${factorial(num2)}`);  