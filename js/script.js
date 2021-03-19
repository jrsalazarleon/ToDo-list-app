const inputEl = document.getElementById("input-data");
const toDotList = document.getElementById("list-content");
const formList = document.getElementById("main-form")
const sendButton = document.getElementById("send-task-button")
const deleteButton = document.getElementById("clear-button");

var tasksSaved = loadTask();

function createTask(e) {
    e.preventDefault()

    const inputValue = inputEl.value;

    if (inputValue.length === 0) {
        return alert("No puedes enviar un campo vacío")
    }

    addToDoItem(inputValue);
    tasksSaved.unshift(inputValue)
    saveTasks()
    inputEl.value = "";
    
}


function addToDoItem(toDoItemContent) {
    const todoItem = document.createElement("li");

    todoItem.textContent = toDoItemContent;

    toDotList.appendChild(todoItem)

}

function clearAllData() {
    toDotList.innerHTML = ""
    tasksSaved = []
    deleteTask()
}

formList.addEventListener("submit", createTask);
deleteButton.addEventListener("click", clearAllData);

function saveTasks() {
    localStorage.setItem("Tareas",JSON.stringify(tasksSaved))
    
}

function deleteTask() {
    localStorage.removeItem("Tareas")
}

function loadTask() {
    var getLocalStorage = JSON.parse(localStorage.getItem("Tareas"))

    if (getLocalStorage) {
        return getLocalStorage
    } else {
        return []
    }

}

tasksSaved.forEach(addToDoItem);

sendButton.addEventListener("click", createTask)




