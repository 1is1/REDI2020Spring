// TIPS: When you need userinput, use the function called "prompt" 

// Example: 
//    let answer = prompt("What is your name?");
//  The line above will ask the user "What is your name?" and whatever the user replies, will be saved in the variable "answer".

// The "taskArr" is the array you will be manipulating in this project
let taskArr = [
    {taskDescription: "Brush teeth!", isImportant: true},
    {taskDescription: "This is another important task!", isImportant: true},
    {taskDescription: "This is a not so important task", isImportant: false},
    {taskDescription: "This is a another not so important task" }
];

let createTaskWithImportance = function ( taskDescription, isImportant ) {
    return {
        taskDescription: taskDescription,
        isImportant: isImportant
    };
}

let createTask = function ( taskDescription ) {
  return {
      taskDescription: taskDescription,
      isImportant: false
  }  
} 

// Ask for a todo-task and add it to the beginning of the array
let addToTop = function () {
    const taskDescription = prompt("Please describe the task:");
    let task = createTask(taskDescription);
    taskArr.splice(0,0, task);
}

// Ask for a task and add it to end of the array
let addToBottom = function () {
    const taskDescription = prompt("Please describe the task:");
    let task = createTask(taskDescription);
    taskArr.push(task);
}

// Ask for a todo-task and add it to the beginning of the array
let addImportant = function () {
    const taskDescription = prompt("Please describe the task:");
    let task = createTaskWithImportance(taskDescription, true);
    taskArr.splice(0,0, task);
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
    taskArr = [
        createTask("Do laundry"),
        createTask("Practice Coding"),
        createTask("Buy milk"),
        createTask("Pack sportswear")
    ];
}

// Replace every single task with "Buy milk"
let milkMania = function () {
    for (let i = 0; i < taskArr.length; i++ ) {
        taskArr[i] = createTask("Buy milk");
        
    }
}

// If there is a "Buy cookies" among the tasks, then add "Buy cream", if there isn't, then add "Buy cookies"
let cookiesAndCream = function () {
    let listHasCookies = false;
    for (let i = 0; i < taskArr.length; i++) {
        if (taskArr[i].taskDescription == "Buy cookies") {
            listHasCookies = true;
        }
    }
    if (listHasCookies) {
        taskArr.push(createTask("Buy cream"));
    } else {
        taskArr.push(createTask("Buy cookies"));
    }
}

// Remove all tasks whose descriptions are longer than five characters
let removeLongTasks = function () {
    for (let i = taskArr.length - 1; i >= 0; i-- ) {
        if (taskArr[i].taskDescription.length > 5) {
            taskArr.splice(i,1);
        }
    }
}
