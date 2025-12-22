// Day 22: Solving 5 More DSA Problems

// 1. Longest Substring Without Repeating Characters (Sliding Window)
function lengthOfLongestSubstring(s) {
    let set = new Set();
    let left = 0, maxLength = 0;
    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
}

// 2. Best Time to Buy and Sell Stock (Greedy/Sliding Window)
function maxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
    for (let price of prices) {
        if (price < minPrice) minPrice = price;
        else if (price - minPrice > maxProfit) maxProfit = price - minPrice;
    }
    return maxProfit;
}

// 3. Valid Anagram (Hashing - Frequency Map)
function isAnagram(s, t) {
    if (s.length !== t.length) return false;
    let counts = {};
    for (let char of s) counts[char] = (counts[char] || 0) + 1;
    for (let char of t) {
        if (!counts[char]) return false;
        counts[char]--;
    }
    return true;
}

// 4. Reverse a Linked List (Pointer Manipulation)
function reverseList(head) {
    let prev = null, curr = head;
    while (curr) {
        let nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }
    return prev;
}

// 5. Palindrome Number (Math/Two Pointers)
function isPalindrome(x) {
    if (x < 0) return false;
    let s = x.toString();
    let left = 0, right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) return false;
        left++; right--;
    }
    return true;
}


console.log("Longest Substring 'abcabcbb':", lengthOfLongestSubstring("abcabcbb")); 
console.log("Max Profit [7,1,5,3,6,4]:", maxProfit([7,1,5,3,6,4])); 
console.log("Is Anagram 'rat', 'car':", isAnagram("rat", "car")); 