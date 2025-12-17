// Day 18: Sorting Algorithms

// 1. Bubble Sort: O(n^2) - Swaps adjacent elements
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap
            }
        }
    }
    return arr;
}

// 2. Selection Sort: O(n^2) - Finds min element and moves to front
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) min = j;
        }
        if (min !== i) [arr[i], arr[min]] = [arr[min], arr[i]];
    }
    return arr;
}


// It picks a 'pivot' and partitions the array into 'less than' and 'greater than'
const data = [29, 10, 14, 37, 13];
console.log("Original:", data);
console.log("Bubble Sort:", bubbleSort([...data]));
console.log("Selection Sort:", selectionSort([...data]));