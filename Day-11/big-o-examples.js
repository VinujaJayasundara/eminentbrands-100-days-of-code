// Day 11 Challenge: Demonstrating Big-O Notation

const sampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
// constant time O(1)
// The operation takes the same amount of time regardless of how big the array is.
function checkFirstElement(arr) {
    // Only one operation: accessing index 0.
    return arr[0] > 5; 
}

// 2. O(n) - Linear Time
// The operation time is directly proportional to the input size (n).
function findValue(arr, value) {
    // A single loop must check every element in the worst case.
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            count++;
        }
    }
    return count;
}

// 3. O(n^2) - Quadratic Time
// The operation time is the square of the input size (n * n).
function logAllPairs(arr) {
    let count = 0;
    // Outer loop runs n times
    for (let i = 0; i < arr.length; i++) {
        // Inner loop runs n times for every outer loop iteration
        for (let j = 0; j < arr.length; j++) {
            console.log(`${arr[i]}, ${arr[j]}`);
            count++; // Total operations = n * n
        }
    }
    // For an input size of 10, this prints 100 times.
    console.log(`Total pairs logged: ${count}`); 
}

console.log(`O(1) Check (Array Size 10): ${checkFirstElement(sampleArray)}`);
console.log(`O(n) Count (Array Size 10): ${findValue(sampleArray, 5)}`);
logAllPairs(sampleArray); 