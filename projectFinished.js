// TIPS: When you need userinput, use the function called "prompt" 

// Example: 
//    let answer = prompt("What is your name?");
//  The line above will ask the user "What is your name?" and whatever the user replies, will be saved in the variable "answer".

// The "taskArr" is the array you will be manipulating in this mini-project
let taskArr = ["Do the dishes :/"];

// Ask for a todo-task and add it to the beginning of the array
let addToTop = function () {
    const taskDescription = prompt("Please describe the task:");
    taskArr.splice(0,0,taskDescription);
}

// Ask for a task and add it to end of the array
let addToBottom = function () {
    const taskDescription = prompt("Please describe the task:");
    taskArr.push(taskDescription);
}

// Remove an item from the beginning of the array
let removeFromTop = function () {
    taskArr.shift();
}

// Remove an item from the end of the array
let removeFromBottom = function () {
    taskArr.pop();
}

// Remove all the items from the array ( or find another way to clear the array )
let clearList = function () {
    taskArr = [];
}

// Reverse the order of the array
let reverseList = function () {
    taskArr.reverse();
}

// Set the array to a sequence of at least five tasks
let defaultList = function () {
    taskArr = ["Do laundry", "Practice Coding", "Buy milk", "Pack sportswear"];
}

// Replace every single task with "Buy milk"
let milkMania = function () {
    for (let i = 0; i < taskArr.length; i++ ) {
        taskArr[i] = "Buy milk";
    }
}

// If there is a "Buy cookies" among the tasks, then add "Buy cream", if there isn't, then add "Buy cookies"
let cookiesAndCream = function () {
    let listHasCookies = false;
    for (let i = 0; i < taskArr.length; i++) {
        if (taskArr[i] == "Buy cookies") {
            listHasCookies = true;
        }
    }
    if (listHasCookies) {
        taskArr.push("Buy cream");
    } else {
        taskArr.push("Buy cookies");
    }
}

// Remove all tasks that are longer than five characters
let removeLongTasks = function () {
    for (let i = taskArr.length - 1; i >= 0; i-- ) {
        if (taskArr[i].length > 5) {
            taskArr.splice(i,1);
        }
    }
}