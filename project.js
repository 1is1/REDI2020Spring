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

// Ask for a todo-task and add it to the beginning of the array
let addToTop = function () {}

// Ask for a task and add it to end of the array
let addToBottom = function () {}


// Ask for a todo-task and add it to the beginning of the array with the field "isImportant" set to true
let addImportant = function () {
}

// Remove an item from the beginning of the array
let removeFromTop = function () {}

// Remove an item from the end of the array
let removeFromBottom = function () {}

// Remove all the items from the array ( or find another way to clear the array )
let clearList = function () {}

// Reverse the order of the array
let reverseList = function () {}

// Set the array to a sequence of at least five tasks
let defaultList = function () {}

// HARDER functions ahead!!! 
// 
// Try to remember things like: loops and if/conditional statements as well as how we iterate throug arrays.

// Replace ever single task with "Buy milk"
let milkMania = function () {}

// If there is a "Buy cookies" among the tasks, then add "Buy cream", if there isn't, then add "Buy cookies"
let cookiesAndCream = function () {}

// Very hard
// Remove all tasks that are longer than five characters (tricky because when you remove something the indexes of the following elements shrink by 1)
// Hint: Try reversing the array backwards
let removeLongTasks = function () {}
