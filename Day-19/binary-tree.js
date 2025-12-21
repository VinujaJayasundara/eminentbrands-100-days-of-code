// Day 19: Binary Search Tree (BST) Basics

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // Insert method to place data according to BST rules
    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        }

        let current = this.root;
        while (true) {
            if (value === current.value) return undefined; // No duplicates
            
            if (value < current.value) {
                // Go Left
                if (!current.left) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                // Go Right
                if (!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }
}


const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(2);

console.log("Root:", bst.root.value); 
console.log("Left child of root:", bst.root.left.value); 
console.log("Left-most leaf:", bst.root.left.left.value); 