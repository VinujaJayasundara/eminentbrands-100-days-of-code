// Day 12 Challenge: Solving problems using Hashing (Frequency Maps)

// Challenge 1: Check for Anagrams (Two strings must use the exact same characters)
// Time Complexity: O(n) - Linear time, as we only iterate over the strings once.
function isAnagram(s1, s2) {
    if (s1.length !== s2.length) {
        return false;
    }

    // Use a Map (Hash Map) to store character frequencies
    const freqMap = new Map();

    // 1. Build the frequency map for the first string (s1)
    for (const char of s1) {
        // Increment the count for each character, defaulting to 0 if not found
        freqMap.set(char, (freqMap.get(char) || 0) + 1);
    }

    // 2. Decrement the frequency map using the second string (s2)
    for (const char of s2) {
        let count = freqMap.get(char);

        // If the character is not found, or count is already 0, it's not an anagram
        if (!count) {
            return false;
        }

        freqMap.set(char, count - 1);
    }

    // If all characters matched, the counts in the map will be zero.
    // For simplicity, we just check if any character was missed above.
    return true; 
}

// Challenge 2: Find the First Duplicate in an array
// Time Complexity: O(n) - Linear time, much faster than O(n^2) nested loops.
function findFirstDuplicate(arr) {
    const seen = new Set(); // A Set is a specialized Hash Map (only stores keys)

    for (const element of arr) {
        // Hashing: Check for existence in O(1) time
        if (seen.has(element)) {
            return element; // Found the first duplicate!
        }
        // Hashing: Add the element to the set in O(1) time
        seen.add(element);
    }
    return -1;
}


console.log("--- Anagram Check (Challenge 1) ---");
console.log('isAnagram("listen", "silent"):', isAnagram("listen", "silent")); // true
console.log('isAnagram("hello", "world"):', isAnagram("hello", "world"));   // false

console.log("\n--- Find Duplicate (Challenge 2) ---");
const numbers = [2, 1, 3, 5, 3, 2];
console.log('findFirstDuplicate([2, 1, 3, 5, 3, 2]):', findFirstDuplicate(numbers)); // 3