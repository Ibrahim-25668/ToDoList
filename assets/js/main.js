let daysContainer = document.getElementById("daysContainer");
let taskContainer = document.getElementById("tasksContainer");
let modal = document.getElementById("modal")
let id = 0;
const tasks = [];
let btnAdd = document.getElementById("btnAdd")

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
}

function pushValue() {
    let taskTitleValue = taskTitle.value;
    let taskDescValue = taskDesc.value;
    let timeStartValue = timeStart.value;
    let timeEndValue = timeEnd.value;
    let taskCateValue = taskCate.value;
    let taskDateValue = new Date().toLocaleDateString()

    tasks.push({
        id,
        taskTitleValue,
        taskDescValue,
        timeStartValue,
        timeEndValue,
        taskCateValue,
        taskDateValue
    })
}

function createElement() {

    let tbody = document.getElementById("tbody")
    let tr = document.createElement("tr")
    tbody.appendChild(tr)

    let tdTitle = document.createElement("td")
    let tdDescription = document.createElement("td")
    let tdTimeStart = document.createElement("td")
    let tdTimeEnd = document.createElement("td")
    let tdCategories = document.createElement("td")

    tdTitle.classList.add("th-task", "col-color")
    tdDescription.classList.add("th-task", "col-color")
    tdTimeStart.classList.add("th-task", "col-color")
    tdTimeEnd.classList.add("th-task", "col-color")
    tdCategories.classList.add("th-task", "col-color")

    return {tr, tdTitle, tdDescription, tdTimeStart, tdTimeEnd, tdCategories}

}

function renderTabel() {

    pushValue()

    let elements = createElement()

    let tr = elements.tr 
    let tdTitle = elements.tdTitle
    let tdDescription = elements.tdDescription
    let tdTimeStart = elements.tdTimeStart
    let tdTimeEnd = elements.tdTimeEnd
    let tdCategories = elements.tdCategories


    for (const { taskTitleValue, taskDescValue, timeStartValue, timeEndValue, taskCateValue } of tasks) {
        tdTitle.textContent = taskTitleValue
        tdDescription.textContent = taskDescValue
        tdTimeStart.textContent = timeStartValue
        tdTimeEnd.textContent = timeEndValue
        tdCategories.textContent = taskCateValue
    }

    tr.appendChild(tdTitle)
    tr.appendChild(tdDescription)
    tr.appendChild(tdTimeStart)
    tr.appendChild(tdTimeEnd)
    tr.appendChild(tdCategories)
    
}

btnAdd.onclick = () => {
    // Input Call
    let taskTitle = document.getElementById("taskTitle");
    let taskDesc = document.getElementById("taskDesc");
    let timeStart = document.getElementById("timeStart");
    let timeEnd = document.getElementById("timeEnd");
    let taskCate = document.getElementById("taskCate");

    renderTabel()
    id++

    // Remove Value From Input 
    taskTitle.value = "";
    taskDesc.value = "";
    timeStart.value = "";
    timeEnd.value = "";
    taskCate.value = "";

    // Exti Modal 
    modal.classList.remove("modal-show")
}