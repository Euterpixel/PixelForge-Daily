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
    console.log("3. Delete Task");
    console.log("4. Exit");

    rl.question("Choose an option (1-3): ", function (option) {
        switch (option) {
            case '1':
                addTask();
                break;
            case '2':
                showTasks();
                break;
            case '3':
                deleteTask();
                break;
            case '4':
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
function deleteTask(number) {
    let numberOfTask = 1;
    if (tasks.length > 0) {
        for (let i = 0; i < tasks.length; i++) {
            console.log((i+1) + ". " + tasks[i]);
        }
        rl.question('Which task would you like to delete?', function(number){
            const index = parseInt(number) - 1;
            if (index >= 0 && index < tasks.length){
                const removed = tasks.splice(index,1);
                console.log(`Deleted: ${removed[0]}`);
            }
            else{
                console.log("Invalid task number. ");
            }
            showMenu();
        })
        
    }
    else { console.log('There is nothing to delete') ;
    showMenu()};
}
showMenu();
