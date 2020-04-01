// HINT: When you need userinput, use the function called "prompt" 

// Example: 
//    let answer = prompt("What is your name?");
//  The line above will ask the user "What is your name?" and whatever the user replies, will be saved in the variable "answer".

// The "taskArr" is the array you will be manipulating in this mini-project
let taskArr = ["Do the dishes :/"]; 

// Ask for a todo-task and add it to the beginning of the array
let addToTop = function () {}

// Ask for a task and add it to end of the array
let addToBottom = function () {}

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



// Finetuning:
// Some values might not be meaningful to add as a task, consider only adding the prompted value to the task array if it is a meaningful one
// Examples:  
//      - 'prompt' dialogue boxes that get canceled returns an 'undefined' value
//      - 'prompt' dialogue boxes returns 'null' if you press 'ok' without writing anything in the field
//      - if the prompt only has non-visible characters (spaces, linebreaks and such) that isn't a meaningful task either
//        TIP: the following expression '!(/\S/.test(stringVariableName))' will return 'true' if variable 'stringVariableName' is a string with only whitespace.
