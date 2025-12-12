// Day 13 Challenge: Solving problems using the Two-Pointer Pattern

// Challenge 1: Reverse an Array In-Place (modifies the original array)
// Time Complexity: O(n) - Linear time, as we only traverse half the array.
function reverseArray(arr) {
    let left = 0;
    let right = arr.length - 1;

    // Loop until the pointers meet or cross
    while (left < right) {
        // 1. Swap the elements at the left and right pointers
        const temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        // 2. Move the pointers toward the center
        left++;
        right--;
    }
    return arr;
}

// Challenge 2: Check for a Palindrome (reads the same forwards and backwards)
// Time Complexity: O(n) - Linear time.
function isPalindrome(str) {
    // Clean the string (remove spaces, punctuation, convert to lowercase)
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    let left = 0;
    let right = cleanStr.length - 1;

    // Loop until the pointers meet or cross
    while (left < right) {
        // If the characters at the pointers don't match, it's not a palindrome
        if (cleanStr[left] !== cleanStr[right]) {
            return false;
        }

        // Move the pointers toward the center
        left++;
        right--;
    }
    return true; // Pointers met, all characters matched
}


console.log("--- Challenge 1: Array Reversal ---");
const numbers = [10, 20, 30, 40, 50];
console.log("Original:", numbers);
console.log("Reversed:", reverseArray(numbers)); 

console.log("\n--- Challenge 2: Palindrome Check ---");
console.log('isPalindrome("Racecar"):', isPalindrome("Racecar"));     
console.log('isPalindrome("hello"):', isPalindrome("hello"));         
console.log('isPalindrome("A man, a plan, a canal: Panama"):', isPalindrome("A man, a plan, a canal: Panama")); // true