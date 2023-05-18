const myLang = document.querySelector("#chosenLang")

const fiNotes = document.querySelector("#fiNotes")
const sweNotes = document.querySelector("#sweNotes")

const sweDisplay = document.querySelector("#sweDisplay")
const fiDisplay = document.querySelector("#fiDisplay")

function fiClick() {
    localStorage.setItem("lang", "Finnish")
    myLang.innerText = "Finnish"
    showFiNotes()
}

function sweClick() {
    localStorage.setItem("lang", "Swedish")
    myLang.innerText = "Swedish"
    showSweNotes()
}

function saveFiNotes() {
    const note = fiNotes.value
    localStorage.setItem("fiNotes", note)
    fiDisplay.innerText = note
    fiNotes.value = ""
    showFiNotes()
}

function saveSweNotes() {
    const note = sweNotes.value
    localStorage.setItem("sweNotes", note)
    sweDisplay.innerText = note
    sweNotes.value = ""
    showSweNotes()
}

function showFiNotes() {
    const note = localStorage.getItem("fiNotes")
    if (localStorage.getItem("lang") == "Finnish") {
        fiDisplay.innerText = note || ''
        sweDisplay.innerText = ""
    } else {
        fiDisplay.innerText = ""
    }
}

function showSweNotes() {
    const note = localStorage.getItem("sweNotes")
    if (localStorage.getItem("lang") == "Swedish") {
        sweDisplay.innerText = note || ''
        fiDisplay.innerText = ""
    } else {
        sweDisplay.innerText = ""
    }
}
showSweNotes()
showFiNotes()