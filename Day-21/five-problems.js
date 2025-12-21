// Day 21: Solving 5 DSA Problems

// 1. Two Sum (Hashing Pattern)
function twoSum(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) return [map.get(complement), i];
        map.set(nums[i], i);
    }
}

// 2. Valid Parentheses (Stack Pattern)
function isValid(s) {
    let stack = [];
    let map = { ')': '(', '}': '{', ']': '[' };
    for (let char of s) {
        if (!map[char]) stack.push(char);
        else if (stack.pop() !== map[char]) return false;
    }
    return stack.length === 0;
}

// 3. Maximum Depth of Binary Tree (Tree/Recursion)
function maxDepth(root) {
    if (!root) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

// 4. Merge Two Sorted Lists (Linked List/Two-Pointer)
function mergeLists(l1, l2) {
    return "Resulting Merged List";
}

// 5. Contains Duplicate (Set Pattern)
function containsDuplicate(nums) {
    return new Set(nums).size !== nums.length;
}


console.log("Two Sum [2,7,11,15], target 9:", twoSum([2, 7, 11, 15], 9));
console.log("Valid Parentheses '()[]{}':", isValid("()[]{}"));
console.log("Contains Duplicate [1,2,3,1]:", containsDuplicate([1,2,3,1]));