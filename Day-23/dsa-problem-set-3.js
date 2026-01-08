// Day 23: 5 More DSA Problems

// 1. Min Stack (Stack Design)
// Design a stack that supports push, pop, top, and retrieving the minimum element in O(1) time.
class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }
    push(val) {
        this.stack.push(val);
        if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(val);
        }
    }
    pop() {
        let val = this.stack.pop();
        if (val === this.minStack[this.minStack.length - 1]) this.minStack.pop();
    }
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}

// 2. Climbing Stairs (Recursion/Dynamic Programming Concept)
// You can climb 1 or 2 steps. How many ways to reach the top?
function climbStairs(n) {
    if (n <= 2) return n;
    let first = 1, second = 2;
    for (let i = 3; i <= n; i++) {
        let third = first + second;
        first = second;
        second = third;
    }
    return second;
}

// 3. First Unique Character in a String (Frequency Map)
function firstUniqChar(s) {
    let count = {};
    for (let char of s) count[char] = (count[char] || 0) + 1;
    for (let i = 0; i < s.length; i++) {
        if (count[s[i]] === 1) return i;
    }
    return -1;
}

// 4. Binary Tree Inorder Traversal (Tree/Recursion)
function inorderTraversal(root) {
    let res = [];
    function traverse(node) {
        if (!node) return;
        traverse(node.left);
        res.push(node.value);
        traverse(node.right);
    }
    traverse(root);
    return res;
}

// 5. Intersection of Two Arrays (Set/Hashing)
function intersect(nums1, nums2) {
    let set1 = new Set(nums1);
    return [...new Set(nums2.filter(n => set1.has(n)))];
}

// EXECUTION EXAMPLES
console.log("Climbing 5 stairs (ways):", climbStairs(5));
console.log("First unique in 'leetcode':", firstUniqChar("leetcode")); // 0