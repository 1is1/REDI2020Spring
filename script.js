const createNewTaskElement = function( taskDescription ) {
    const element = document.createElement("div");
    element.setAttribute("class", "todoTask");
    element.textContent = taskDescription;
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


const randomTasks = ["Do laundry", "Relax", "Sleep", "Buy Milk", "Go for a walk", "Call mom", "Read a book", "Empty dryer", "Go to bed early", "Nap", "Practice coding", "Pick up mail", "Practice violin", "Practice harmonica", "Go for a jog", "Prepare food for tomorrow"];
let addRandomTask = function () {
    const randomIndex = Math.floor(Math.random()*randomTasks.length);
    taskArr.push(randomTasks[randomIndex]);
}



// Random idea
//function createButton( buttonName, buttonFunction ) {
//    
//}
//buttonFunction( a, b ) {
//    
//}