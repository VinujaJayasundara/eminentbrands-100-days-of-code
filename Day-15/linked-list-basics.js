// Day 15 Challenge: Linked List Implementation

/* Note: Linked Lists (LL) are fundamental DSA. Unlike Arrays, insertion/deletion 
is O(1) if you know the location, but accessing an element is O(n) because 
you must start at the 'head' and traverse to the element.
*/

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next; // Pointer to the next node
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Insert a new node at the end (O(n) time complexity)
    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            // Traverse until 'current.next' is null
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    // Simple traversal to view the list
    printList() {
        let current = this.head;
        let output = "";
        while (current) {
            output += `${current.data} -> `;
            current = current.next;
        }
        console.log(output + "NULL");
    }
}


const list = new LinkedList();
list.append('First');
list.append('Second');
list.append('Third');
list.printList(); 
