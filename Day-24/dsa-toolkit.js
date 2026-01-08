/**
 * Day 24: DSA Helper Toolkit
 * A reusable utility class for common algorithms.
 */

class DSAHelper {
    // 1. Array Utilities: Quick Bubble Sort
    static bubbleSort(arr) {
        let n = arr.length;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
        return arr;
    }

    // 2. Searching: Optimized Binary Search
    static binarySearch(arr, target) {
        let left = 0, right = arr.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] === target) return mid;
            if (arr[mid] < target) left = mid + 1;
            else right = mid - 1;
        }
        return -1;
    }

    // 3. String Utilities: Palindrome Check
    static isPalindrome(str) {
        const cleaned = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
        return cleaned === cleaned.split('').reverse().join('');
    }

    // 4. Frequency Map: Count occurrences of elements
    static getFrequencyMap(items) {
        return items.reduce((acc, item) => {
            acc[item] = (acc[item] || 0) + 1;
            return acc;
        }, {});
    }
}


const myData = [5, 2, 9, 1, 5, 6];
console.log("Sorted Data:", DSAHelper.bubbleSort([...myData]));
console.log("Binary Search for 9:", DSAHelper.binarySearch([1, 2, 5, 5, 6, 9], 9));
console.log("Is 'Racecar' a palindrome?", DSAHelper.isPalindrome("Racecar"));
console.log("Frequency Map:", DSAHelper.getFrequencyMap(myData));