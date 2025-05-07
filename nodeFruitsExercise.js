const node = {
    data: "Banana",
    next: null,
    head: null
};

const node1 = {
    data: "Mango",
    next: null,
    head: node,
}

const node2 = {
    data: "grapes",
    next: null,
    head: node,
}

node.next = node1;
node1.next = node2;
console.log(node.next.next.data);
console.log(node.data);
console.log(node.next.data);
console.log(node.next.next.data);


