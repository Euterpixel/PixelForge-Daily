
// list.print();

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    add(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            console.log(`Head is being set to ${this.head.data}`);
        }
        else {
            let currentNode = this.head;
            while (currentNode.next !== null) {
                console.log(this.head.data);
                currentNode = currentNode.next;
                console.log(currentNode.data);
            }
            currentNode.next = newNode;
            console.log(currentNode.next.data);
        }
    }
}
// This is the first exercise I code for learning linked lists 
const list = new LinkedList();
list.add("Alice");
list.add("Bob");
list.add("Charlie");
list.add("Aman");
list.add("Juliet");
