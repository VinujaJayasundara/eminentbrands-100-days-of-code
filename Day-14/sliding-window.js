// Day 14 Challenge: Sliding Window Pattern
// Time Complexity: O(n) - Optimal for this type of sub-array problem.

function maxSubarraySum(arr, k) {
    if (k > arr.length) return null;
    
    let maxSum = 0;
    let currentSum = 0;

    // 1. Calculate the sum of the first window (initial slide)
    for (let i = 0; i < k; i++) {
        maxSum += arr[i];
    }
    currentSum = maxSum;

    // 2. Slide the window: Add the new element (right) and subtract the old one (left)
    // The window moves one step to the right each iteration.
    for (let i = k; i < arr.length; i++) {
        currentSum = currentSum - arr[i - k] + arr[i];
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}
const array = [4, 2, 1, 7, 8, 1, 2, 8, 1, 0];
const k = 3;
console.log(`Array: [${array}]`);
console.log(`Max sum of a sub-array of size ${k}: ${maxSubarraySum(array, k)}`); 
