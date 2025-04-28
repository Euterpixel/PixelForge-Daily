// let tasks = [];
// tasks.push("Buy milk");
// tasks.push("Study JavaScript");
// tasks.push("Walk the dog");
// console.log(tasks);

const readline = require('readline');

// import readline from 'readline'
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let tasks = [];

function showMenu() {
    console.log("\n---To-Do-List");
    console.log("1. Add task");
    console.log("2. Show Tasks");
    console.log("3. Exit");

    rl.question("Choose an option (1-3): ", function (option) {
        switch (option) {
            case '1':
                addTask();
                break;
            case '2':
                showTasks();
                break;
            case '3':
                console.log("Goodbye!");
                rl.close();
                break;
            default:
                console.log("Invalid option. Please try again.");
                showMenu();
                break;
        }
    });

}

function addTask() {
    rl.question('Enter a task:', function (task) {
        tasks.push(task);
        console.log('Task added successfully!');
        showMenu();
    });
}

function showTasks(task) {
    if (tasks === 0) {
        console.log("No tasks available");
    }
    else {
        console.log("\nYour Tasks:");
        tasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task}`);
        });
    }
    showMenu();
}
showMenu();
