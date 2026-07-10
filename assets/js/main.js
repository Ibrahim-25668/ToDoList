let btnNew = document.getElementById("btnNew")
let modal = document.getElementsByClassName("modal")
let btnExitForm = document.getElementById("btnExitForm")
let btnDays = document.getElementsByClassName("btnDays")
let daysContainer = document.getElementById("daysContainer")
let tasks = document.getElementById("tasksContainer")
let btnBack = document.getElementById("btnBack")

btnNew.onclick = () => {
    modal[0].classList.add("modal-show")
}

function days(day){
    daysContainer.classList.add("hidd")
    daysContainer.classList.remove("show")
    tasks.classList.remove("hidd")
    tasks.classList.add("show")
}

btnBack.onclick = () => {
    tasks.classList.remove("show")
    tasks.classList.add("hidd")
    daysContainer.classList.remove("hidd")
    daysContainer.classList.add("show")
}

btnExitForm.onclick = () => {
    modal[0].classList.remove("modal-show")
}