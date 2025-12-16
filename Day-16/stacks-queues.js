// Day 16 Challenge: Queue Implementation (FIFO)

/* Note: Stacks (LIFO - Last In, First Out) and Queues (FIFO - First In, First Out) 
are fundamental for handling sequences and managing tasks (like an event queue in JS). 
Using Array methods like 'push' and 'shift' is the simplest implementation in JS.
*/
// 

class Queue {
    constructor() {
        // Using a simple array for underlying storage
        this.items = [];
    }

    // Add an element to the back of the queue (FIFO principle)
    enqueue(element) {
        this.items.push(element); // O(1) time complexity (fast)
    }

    // Remove an element from the front of the queue (FIFO principle)
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        // NOTE: Array.shift() is O(n) because all indices must be renumbered.
        // In interviews, prefer a Linked List for O(1) dequeue.
        return this.items.shift(); 
    }

    isEmpty() {
        return this.items.length === 0;
    }

    peek() {
        if (this.isEmpty()) return "Queue is empty";
        return this.items[0];
    }
}

// EXECUTION
const taskQueue = new Queue();
taskQueue.enqueue('Task A (First)');
taskQueue.enqueue('Task B');
taskQueue.enqueue('Task C (Last)');

console.log(`Queue Contents: [${taskQueue.items.join(', ')}]`);
console.log(`Next task up (Peek): ${taskQueue.peek()}`); 

console.log(`Processing: ${taskQueue.dequeue()}`); // Task A (First In, First Out)
console.log(`Processing: ${taskQueue.dequeue()}`); // Task B
console.log(`Queue Contents after Dequeue: [${taskQueue.items.join(', ')}]`);