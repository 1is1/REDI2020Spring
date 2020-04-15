const createNewTaskElement = function( taskObject ) {
    const element = document.createElement("div");
    element.setAttribute("class", "todoTask");
    element.textContent = taskObject.taskDescription;
    if (taskObject.isImportant) {
        element.style.fontWeight = 900;
        element.style.color = "#b00";
    }
    return element;
}

const removeAllChildrenFromTaskPanel = function( taskPanel ) {
    while( taskPanel.children().length > 0 ) {
        taskPanel.children()[0].remove();
    }
}

const addAllTasks = function( tasks, taskPanel ) {
    for (let i = 0; i < tasks.length; i++) {
        let taskElement = createNewTaskElement(tasks[i]);
        taskElement.innerText = "#" + (i+1) + "   " + taskElement.innerText;
        taskPanel.append(taskElement);
    }
}

const updateTasks = function() {
    const taskPanel = $("#todoTaskPanel");
    removeAllChildrenFromTaskPanel(taskPanel);
    addAllTasks(taskArr, taskPanel);
}

const runFunctionAndUpdateTasks = function ( inputFunction ) {
    return () => { 
        inputFunction();
        updateTasks();
    }
}

$( 'document' ).ready(function() {
    updateTasks();
    $( "#addTop" ).click( runFunctionAndUpdateTasks(addToTop) );
    $( "#addBottom" ).click( runFunctionAndUpdateTasks(addToBottom) );
    $( "#addImportant" ).click( runFunctionAndUpdateTasks(addImportant) );
    $( "#removeTop" ).click( runFunctionAndUpdateTasks(removeFromTop) );
    $( "#removeBottom" ).click( runFunctionAndUpdateTasks(removeFromBottom) );
    $( "#clearList" ).click( runFunctionAndUpdateTasks(clearList) );
    $( "#reverseList" ).click( runFunctionAndUpdateTasks(reverseList) );
    $( "#defaultList" ).click( runFunctionAndUpdateTasks(defaultList) );
    $( "#randomTask" ).click( runFunctionAndUpdateTasks(addRandomTask) );
    $( "#milkMania" ).click( runFunctionAndUpdateTasks(milkMania) );
    $( "#cookiesAndCream" ).click( runFunctionAndUpdateTasks(cookiesAndCream) );
    $( "#removeLongTasks" ).click( runFunctionAndUpdateTasks(removeLongTasks) );
    $( "#title" ).click( () => alert("What up, sku' det være en hoddok?") );
});

let createUnimportantTask = function( taskDescription ) {
    return {
        taskDescription: taskDescription,
        isImportant: false
    }
}

let createImportantTask = function( taskDescription ) {
    return {
        taskDescription: taskDescription,
        isImportant: true
    }
}

const randomTasks = ["Do laundry", "Relax", "Sleep", "Buy Milk", "Go for a walk", "Call mom", "Read a book", "Empty dryer", "Go to bed early", "Nap", "Practice coding", "Pick up mail", "Practice violin", "Practice harmonica", "Go for a jog", "Prepare food for tomorrow"];
let addRandomTask = function () {
    const randomIndex = Math.floor(Math.random()*randomTasks.length);
    let randomTask = Math.random() > 0.3 ? createUnimportantTask(randomTasks[randomIndex]) : createImportantTask(randomTasks[randomIndex]);
    taskArr.push(randomTask);
}



// Random idea
//function createButton( buttonName, buttonFunction ) {
//    
//}
//buttonFunction( a, b ) {
//    
//}
