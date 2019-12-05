'use strict'

import {detailTabs} from '../js/detailtab.js'
import {Calendar} from '../js/calendar.js'
import {createNewElement} from '../js/create/createElement.js'

const container = document.querySelector('.container')
const addTaskButton = document.querySelector('.taskAdder')
const taskContainer = document.querySelector('.tasksContainer')
const buttonAdderAddition = document.querySelector('[name=taskAdderAddition]')
const taskAddition = document.querySelector('.taskAddition') 
const deleteBlockList = document.querySelector('.deleteBlockList')
// const recentBlock = document.querySelector('.recentBlock')
// const reasonBlock = document.querySelector('.reasonBlock')

// START APPLICATION
// LocalVariable to LocalStorage
let tasks = JSON.parse(localStorage.getItem('taskList')) || []
showTaskList()

// EVENTS MODULE
addTaskButton.addEventListener('submit', addTask)
taskContainer.addEventListener('click', removeNtoggle)
deleteBlockList.addEventListener('click', MinusPlusInfoBlock)

buttonAdderAddition.addEventListener('click', (event) => {
    console.log(taskAddition)
    taskAddition.classList.toggle('hide')

})

function showTaskList() {
    taskContainer.textContent = ''
    deleteBlockList.textContent = ''
    const tasksFromLocalStorage = JSON.parse(localStorage.getItem('taskList')) || []
    tasksFromLocalStorage.forEach((element, index) => {
        
        const div = createNewElement('div', 'taskElements', '')
        const li = createNewElement('li', '', element.name)

        li.dataset.number = index
        
        if (element.done) {
            li.classList.add('done')
        }

        const minusButton = createNewElement('button', 'minusButton', '-')

        div.appendChild(li)
        div.appendChild(minusButton)
        
        if (element.deleted) {
            const plusButton = createNewElement('button', 'plusButton', '+')
            const infoButton = createNewElement('button', 'infoButton', 'i')
            let tab = detailTabs(element)

            div.appendChild(plusButton)
            div.appendChild(infoButton)
            li.appendChild(tab)

            deleteBlockList.appendChild(div)

        } else {
            taskContainer.appendChild(div)
        }
    })
}

function addTask(event) {
    event.preventDefault()
    const name = this.querySelector('[name=task]').value

    let task = {
        name,  // that mean variable -> name: 'some'
        description: '',
        done: false,
        deleted: false,
        category: '',
        time: {
            start: new Date(),
            finish: 0,
            duration: 0
        }
    }

    if (taskAddition.className == 'taskAddition') {
        const description = this.querySelector('[name=description]').value
        const start = this.querySelector('[name=timeStart]').value
        const finish = this.querySelector('[name=timeFinish]').value

        task.description = description
        task.time.start = new Date(start)
        task.time.finish = new Date(finish)
    }
    
    tasks.push(task)
    saveToLocalStorage()
    showTaskList()
    this.reset() //  is used to reset all the value of form elements
}

function removeNtoggle(event) {
    const et = event.target
    if (et.tagName === 'BUTTON' && et != et.currentTarget) {
        const changeDoneProporty = et.previousSibling.dataset.number
        tasks[changeDoneProporty].deleted = !tasks[changeDoneProporty].deleted
    
    } else if (et.tagName !== 'BUTTON' && et != et.currentTarget) {
        const changeDoneProporty = et.dataset.number
        tasks[changeDoneProporty].done = !tasks[changeDoneProporty].done
    }        
    saveToLocalStorage()
}

function saveToLocalStorage() {
    localStorage.setItem('taskList', JSON.stringify(tasks))
    showTaskList() // Reload Blocks
}


// Container


// deleteBlock -----------------------------------------------------------------
function MinusPlusInfoBlock (event) {
    const et = event.target
    if (et.tagName === 'BUTTON' && et.className === 'minusButton') {
        tasks.splice(et.previousSibling.dataset.number, 1)
        saveToLocalStorage()
        
    } else if (et.tagName === 'BUTTON' && et.className === 'plusButton') {
        tasks[et.previousSibling.previousSibling.dataset.number].deleted = false
        saveToLocalStorage()

    } else if (et.tagName === 'BUTTON' && et.className === 'infoButton') {
        et.parentElement.firstChild.lastChild.classList.toggle('hide')
    }
}


document.querySelector('#calendar').onclick = function (event) {
    console.log(event.target, 'попался:)')
    event.target.textContent = event.target.textContent + ' CHECK'

    let x = document.createElement('div')
    x.className = 'testtest'
    document.body.appendChild(x)
}
