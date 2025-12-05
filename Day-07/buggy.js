// Day 7 Challenge: Find and Fix 3 Intentional Bugs

// BUG 1: Reference Error - FIXED
// The variable 'number' was misspelled; it should be 'numbers' (the parameter name).
function calculateSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        // FIX: Changed 'number[i]' to 'numbers[i]'
        sum += numbers[i]; 
    }
    return sum;
}

// BUG 2: Logical Error - FIXED
// The calculation was wrong; it should calculate the remaining price (1 - percentage/100).
function applyDiscount(originalPrice, percentage) {
    // FIX: Changed calculation to (originalPrice * (1 - percentage / 100))
    // Example: 100 * (1 - 20/100) = 100 * 0.80 = 80
    return originalPrice * (1 - percentage / 100);
}

// BUG 3: Uncaught Promise/Async Error - FIXED
// This function simulates a failing network call and needs proper error handling.
function fetchData() { 
    // This function returns a Promise that rejects
    return new Promise((resolve, reject) => {
        if (false) {
            resolve("Data successfully fetched!");
        } else {
            reject("Server timed out!"); // This causes the rejection!
        }
    });
}

const prices = [10, 20, 30];
// Bug 1 Result (Should be 60): FIX CONFIRMED
console.log("Bug 1 Result (Should be 60):", calculateSum(prices)); 

const finalPrice = applyDiscount(100, 20);
// Bug 2 Result (Should be 80): FIX CONFIRMED
console.log("Bug 2 Result (Should be 80):", finalPrice); 

// Bug 3: Implement try/catch using async/await to safely handle the failing Promise.
async function safeFetchData() {
    try {
        const result = await fetchData();
        console.log("Bug 3 Success Result:", result);
    } catch (error) {
        // FIX: The error is correctly caught here when the Promise rejects.
        console.error("Bug 3 Caught Error:", error);
    }
}
safeFetchData();