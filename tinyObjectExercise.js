const node1 = {
    name: "Alice",
    next: null
};
const node2 = {
    name: "Bob",
    next: null
};

node1.next = node2;
node2.name = "Jane";

console.log(node1.next.name);