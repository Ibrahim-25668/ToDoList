let daysContainer = document.getElementById("daysContainer");
let taskContainer = document.getElementById("tasksContainer");
let modal = document.getElementById("modal")
let modalUpdate = document.getElementById("modalUpdate")
let id = 0;
const tasks = [];
let btnAdd = document.getElementById("btnAdd")
let btnSaveUpdate = document.getElementById("btnSaveUpdate")
let tbody = document.getElementById("tbody")
const taskForm = document.getElementById("taskForm")

function pushValue() {
    let taskTitleValue = taskTitle.value;
    let taskDescValue = taskDesc.value;
    let timeStartValue = timeStart.value;
    let timeEndValue = timeEnd.value;
    let taskCateValue = taskCate.value;
    let taskDateValue = new Date().toLocaleDateString()
    let taskStatus = false

    tasks.push({
        id,
        taskTitleValue,
        taskDescValue,
        timeStartValue,
        timeEndValue,
        taskCateValue,
        taskDateValue,
        taskStatus
    })
}

function createBtnActions(taskId) {

    let divContainer = document.createElement("div")
    let btnDelete = document.createElement("button")
    let btnUpdate = document.createElement("button")
    let btnCompleted = document.createElement("button")

    divContainer.classList.add("btn-container")
    btnDelete.classList.add("btn", "btnDelete")
    btnUpdate.classList.add("btn", "btnUpdate")
    btnCompleted.classList.add("btn", "btnCompleted")

    btnDelete.textContent = "Delete"
    btnUpdate.textContent = "Update"
    btnCompleted.textContent = "Completed"

    btnDelete.dataset.id = taskId
    btnUpdate.dataset.id = taskId
    btnCompleted.dataset.id = taskId

    btnDelete.onclick = () => {
        const taskID = Number(btnDelete.dataset.id)
        const taskIndexInArray = tasks.findIndex(task => task.id === taskID)
        if (taskIndexInArray != -1) {
            tasks.splice(taskIndexInArray, 1)
        }
        renderTabel();
    }

    btnCompleted.onclick = () => {
        const taskID = Number(btnCompleted.dataset.id)
        const taskIndexInArray = tasks.findIndex(task => task.id === taskID)
        const taskGetVakue = tasks.find(task => task.id === taskID)
        if (taskIndexInArray != -1) {
            taskGetVakue.taskStatus = true
        }
        renderTabel();
    }

    btnUpdate.onclick = () => {
        const taskID = Number(btnUpdate.dataset.id)
        const taskIndexInArray = tasks.findIndex(task => task.id === taskID)
        const taskGetVakue = tasks.find(task => task.id === taskID)
        if (taskIndexInArray != -1) {
            let taskTitle = taskGetVakue.taskTitleValue
            let taskDescription = taskGetVakue.taskDescValue
            let timeStart = taskGetVakue.timeStartValue
            let timeEnd = taskGetVakue.timeEndValue
            let taskCategory = taskGetVakue.taskCateValue

            let titleInput = document.getElementById("updateTaskTitle")
            let descriptionInput = document.getElementById("updateTaskDesc")
            let timeStartInput = document.getElementById("updateTimeStart")
            let timeEndInput = document.getElementById("updateTimeEnd")
            let categoryInput = document.getElementById("updateTaskCate")

            titleInput.value = taskTitle
            descriptionInput.value = taskDescription
            timeStartInput.value = timeStart
            timeEndInput.value = timeEnd
            categoryInput.value = taskCategory

            modalUpdate.classList.add("modal-show")
        }
    }

    btnSaveUpdate.onclick = () => {
        const taskID = Number(btnUpdate.dataset.id)
        const taskIndexInArray = tasks.findIndex(task => task.id === taskID)
        const taskGetVakue = tasks.find(task => task.id === taskID)
        if (taskIndexInArray != -1) {

            let titleInput = document.getElementById("updateTaskTitle")
            let descriptionInput = document.getElementById("updateTaskDesc")
            let timeStartInput = document.getElementById("updateTimeStart")
            let timeEndInput = document.getElementById("updateTimeEnd")
            let categoryInput = document.getElementById("updateTaskCate")

            if (titleInput.value == "" || descriptionInput.value == "" || timeStartInput.value == "" || timeEndInput.value == "" || categoryInput.value == "") {
                alert("Please Fill In All Input!")
                return
            }

            taskGetVakue.taskTitleValue = titleInput.value
            taskGetVakue.taskDescValue = descriptionInput.value
            taskGetVakue.timeStartValue = timeStartInput.value
            taskGetVakue.timeEndValue = timeEndInput.value
            taskGetVakue.taskCateValue = categoryInput.value

            modalUpdate.classList.remove("modal-show")

        }
        renderTabel();
    }

    divContainer.appendChild(btnDelete)
    divContainer.appendChild(btnUpdate)
    divContainer.appendChild(btnCompleted)

    return divContainer;

}

function createElement() {
    let tr = document.createElement("tr")

    let tdTitle = document.createElement("td")
    let tdDescription = document.createElement("td")
    let tdTimeStart = document.createElement("td")
    let tdTimeEnd = document.createElement("td")
    let tdCategories = document.createElement("td")
    let tdStatus = document.createElement("td")
    let tdActions = document.createElement("td")

    tdTitle.classList.add("td-task")
    tdDescription.classList.add("td-task")
    tdTimeStart.classList.add("td-task")
    tdTimeEnd.classList.add("td-task")
    tdCategories.classList.add("td-task")
    tdStatus.classList.add("td-task")
    tdActions.classList.add("td-task")

    return { tr, tdTitle, tdDescription, tdTimeStart, tdTimeEnd, tdCategories, tdStatus, tdActions }

}

function renderTabel() {
    tbody.innerHTML = ""

    tasks.forEach((task) => {

        let elements = createElement()

        let tr = elements.tr
        let tdTitle = elements.tdTitle
        let tdDescription = elements.tdDescription
        let tdTimeStart = elements.tdTimeStart
        let tdTimeEnd = elements.tdTimeEnd
        let tdCategories = elements.tdCategories
        let tdStatus = elements.tdStatus
        let tdActions = elements.tdActions

        tdTitle.textContent = task.taskTitleValue
        tdDescription.textContent = task.taskDescValue
        tdTimeStart.textContent = task.timeStartValue
        tdTimeEnd.textContent = task.timeEndValue
        tdCategories.textContent = task.taskCateValue
        tdStatus.textContent = task.taskStatus ? "Completed" : "In Work"

        let divContainer = createBtnActions(task.id)
        tdActions.appendChild(divContainer)

        tr.appendChild(tdTitle)
        tr.appendChild(tdDescription)
        tr.appendChild(tdTimeStart)
        tr.appendChild(tdTimeEnd)
        tr.appendChild(tdCategories)
        tr.appendChild(tdStatus)
        tr.appendChild(tdActions)

        tbody.appendChild(tr)
    })




}

// Btn Events 

function days(day) {
    daysContainer.classList.add("hidd");
    daysContainer.classList.remove("show");
    taskContainer.classList.remove("hidd");
    taskContainer.classList.add("show");
}

function goBack() {
    taskContainer.classList.add("hidd");
    taskContainer.classList.remove("show");
    daysContainer.classList.remove("hidd");
    daysContainer.classList.add("show");
}

function newTask() {
    modal.classList.add("modal-show");
}

function exitForm() {
    modal.classList.remove("modal-show");
    modalUpdate.classList.remove("modal-show");
}

function addTask() {
    pushValue()
    // Input Call
    let taskTitle = document.getElementById("taskTitle");
    let taskDesc = document.getElementById("taskDesc");
    let timeStart = document.getElementById("timeStart");
    let timeEnd = document.getElementById("timeEnd");
    let taskCate = document.getElementById("taskCate");

    id++
    renderTabel()

    // Remove Value From Input 
    taskTitle.value = "";
    taskDesc.value = "";
    timeStart.value = "";
    timeEnd.value = "";
    taskCate.value = "";

    // Exti Modal 
    modal.classList.remove("modal-show")
}

taskForm.onsubmit = (required) => {
    required.preventDefault()
    addTask()
}


let calendarContainer = document.getElementById("calendarContainer")

let currentDate = new Date();

let btnNextMonth = document.getElementById("btnNextMonth")
let btnBackMonth = document.getElementById("btnBackMonth")

function calendarContainerFunction() {
    
    let tempDate = new Date(currentDate)

    let lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()


    for (let i = 0; i <= 30; i++) {
        let card = document.createElement("div")
        card.classList.add("card")

        card.textContent = tempDate.toLocaleDateString()

        calendarContainer.appendChild(card)

        if (tempDate.getDate() == lastDay) {
            break;
        }

        tempDate.setDate(tempDate.getDate() + 1)
    }

}
calendarContainerFunction()

function nextMonth() {
      calendarContainer.innerHTML = ""
    btnBackMonth.classList.remove("hidd")
    currentDate.setMonth(currentDate.getMonth() + 1)
    currentDate.setDate(1)
    calendarContainerFunction()
}

function backMonth() {
      calendarContainer.innerHTML = ""
    currentDate.setMonth(currentDate.getMonth() - 1)

    let firstMonth = new Date()


    if (currentDate.getMonth() == firstMonth.getMonth() && currentDate.getFullYear() == firstMonth.getFullYear()) {
        btnBackMonth.classList.add("hidd")
        calendarContainer.innerHTML = ""
        currentDate = new Date()
        calendarContainerFunction()
        return;
    }

    currentDate.setDate(1)
    calendarContainerFunction()
}