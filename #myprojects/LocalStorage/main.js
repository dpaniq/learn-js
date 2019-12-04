'use strict'

import {detailTabs} from './detailtab.js'
import {createElement} from './createElement.js'

const container = document.querySelector('.container')
const addTaskButton = document.querySelector('.taskAdder')
const taskContainer = document.querySelector('.tasksContainer')
const buttonAdderAddition = document.querySelector('[name=taskAdderAddition]')
const taskAddition = document.querySelector('.taskAddition') 
const deleteBlockList = document.querySelector('.deleteBlockList')
// const recentBlock = document.querySelector('.recentBlock')
// const reasonBlock = document.querySelector('.reasonBlock')

// LocalVariable to LocalStorage
let tasks = JSON.parse(localStorage.getItem('taskList')) || []



showTaskList()

// EVENTS MODULE
addTaskButton.addEventListener('submit', addTask)
taskContainer.addEventListener('click', removeTask)
taskContainer.addEventListener('click', toggleTask)

deleteBlockList.addEventListener('click', plusTaskFromDeletedBlock)
deleteBlockList.addEventListener('click', minusTaskFromDeletedBlock)
deleteBlockList.addEventListener('click', infoBlockFromDeletedBlock)

buttonAdderAddition.addEventListener('click', (event) => {
    console.log(taskAddition)
    taskAddition.classList.toggle('hide')

})

function showTaskList() {
    taskContainer.textContent = ''
    deleteBlockList.textContent = ''
    const tasksFromLocalStorage = JSON.parse(localStorage.getItem('taskList')) || []
    tasksFromLocalStorage.forEach((element, index) => {
        
        const div = createElement('div', 'taskElements', '')
        const li = createElement('li', '', element.name)

        li.dataset.number = index
        
        if (element.done) {
            li.classList.add('done')
        }

        const minusButton = createElement('button', 'minusButton', '-')

        div.appendChild(li)
        div.appendChild(minusButton)
        
        if (element.deleted) {
            const plusButton = createElement('button', 'plusButton', '+')
            const infoButton = createElement('button', 'infoButton', 'i')
            const tab = detailTabs(element)

            div.appendChild(plusButton)
            div.appendChild(infoButton)
            li.appendChild(tab)

            deleteBlockList.appendChild(div)

        } else {
            taskContainer.appendChild(div)
        }
    })
}

// 67 50 35
function addTask(event) {
    event.preventDefault()
    const name = this.querySelector('[name=task]').value

    let task = {
        name,  // that mean variable -> name: 'some'
        description: '',
        done: false,
        deleted: false,
        time: {
            start: new Date(),
            finish: 0,
            duration: 0
        },

        progressBar: function () {}
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


function removeTask(event) {
    const remove = event.target
    if (remove.tagName === 'BUTTON' && remove != remove.currentTarget) {
        
        const changeDoneProporty = remove.previousSibling.dataset.number
        tasks[changeDoneProporty].deleted = !tasks[changeDoneProporty].deleted
        
        saveToLocalStorage()
        showTaskList()
    }
}

function toggleTask(event) {
    const toggle = event.target
    if (toggle.tagName !== 'BUTTON' && toggle != event.currentTarget) {
        const changeDoneProporty = toggle.dataset.number
        tasks[changeDoneProporty].done = !tasks[changeDoneProporty].done
        
        event.target.classList.toggle('done')
        saveToLocalStorage()
    }
}


function saveToLocalStorage() {
    localStorage.setItem('taskList', JSON.stringify(tasks))
}


// Container


// deleteBlock
function minusTaskFromDeletedBlock () {
    const minus = event.target
    if (minus.tagName === 'BUTTON' && minus.className === 'minusButton') {
        console.log('minus', minus, minus.previousSibling)
        const changeDoneProporty = minus.previousSibling.dataset.number
        tasks.splice(changeDoneProporty, 1)
        saveToLocalStorage()
        showTaskList()
    }
    
}

function plusTaskFromDeletedBlock (event) {
    const plus = event.target
    if (plus.tagName === 'BUTTON' && plus.className === 'plusButton') {
        const changeDoneProporty = plus.previousSibling.previousSibling.dataset.number
        tasks[changeDoneProporty].deleted = false
        saveToLocalStorage()
        showTaskList()
    }
}

 function infoBlockFromDeletedBlock(event) {
    const info = event.target
    if (info.tagName === 'BUTTON' && info.className === 'infoButton') {
        const wh = info.parentElement.firstChild.lastChild
        wh.classList.toggle('hide')
        // tasks[changeDoneProporty].deleted = false
        console.log(info, event.currentTarget, wh)
    }
 }


 
function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
      seconds = parseInt((duration / 1000) % 60),
      minutes = parseInt((duration / (1000 * 60)) % 60),
      hours = parseInt((duration / (1000 * 60 * 60)) % 24);
  
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
  }
