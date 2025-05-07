class Fruit {
    constructor(name, color) {
        this.name = name;
            this.color = color;
    }
    describe(){
        console.log(`This is a ${this.color} ${this.name}.`);
    }
};
const banana = new Fruit("Banana", "yellow");
const apple = new Fruit("Apple", "Red");

console.log(banana.color);
console.log(apple.name);
banana.describe();
apple.describe();