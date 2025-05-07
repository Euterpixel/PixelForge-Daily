

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
                if (newNode.data === "Manu" && currentNode.next.data === "Aman") {
                    newNode.next = currentNode.next;
                    currentNode.next = newNode;
                    return
                }
                else {

                    console.log(this.head.data);
                    currentNode = currentNode.next;
                    console.log(`inside while loop ${currentNode.data}`);
                }
            }
            currentNode.next = newNode;
            console.log(`outside while loop ${currentNode.next.data}`);
        }
    }
    print() {
        let currentPrintingNode = this.head;
        while (currentPrintingNode !== null) {
            console.log(currentPrintingNode.data);
            currentPrintingNode = currentPrintingNode.next;
        }
    }
}

// This is the first exercise I code for learning linked lists 
const list = new LinkedList();
list.add("Alice");
list.add("Bob");
list.add("Charlie");
list.add("Aman");
list.add("Manu");
list.add("Juliet");
list.print();