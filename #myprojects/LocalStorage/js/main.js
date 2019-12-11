 // https://learn.javascript.ru/bubbling-and-capturing
    // event.stopPropagation()
    // event.stopImmediatePropagation()
    // removeEventListener('click', tdOpenTaskAdder)
    // removeEventListener('click', tdOpenTaskAdder)

'use strict'

// CHTO TAKOE DRY-PODHOD i kak ego primenitj 
// https://www.w3schools.com/html/html_symbols.asp

import {PanelFastTask, PanelLongTask} from '../js/panel/paneltask.js'
import {Calendar} from '../js/calendar.js'
import {createNewElement} from '../js/create/createNewElement.js'
import {fillTaskProporties, saveToLocalStorage, tasks, showAllTaskForThatDay} from '../js/object/tasks.js'



// START APPLICATION
// LocalVariable to LocalStorage

// EVENTS MODULE
// buttonAdderAddition.addEventListener('click', (event) => {
//     console.log(taskAddition)
//     taskAddition.classList.toggle('hide')

// })
document.addEventListener('mousedown', timeclickdown)
document.querySelector('#calendar').addEventListener('click', tdOpenTaskAdder)
document.querySelector('.closeTaskAdderBtn').addEventListener('click', closeTaskAdderBtn)
document.querySelector('.formShort').addEventListener('submit', addNewTask)
document.querySelector('input[name="task_plus"]').addEventListener('click', toggleFormLong)
document.querySelector('.tasksday').addEventListener('click', hideTaskDay)

let tclick_down = 0

function timeclickdown () {
    console.log('FINISH')
    tclick_down = new Date().getTime()
    console.log(tclick_down)
}

function toggleFormLong(event) {
    document.querySelector('.formLong').classList.toggle('hide')
}

function addNewTask(event) {
    event.preventDefault()

    tasks.push(fillTaskProporties())
    console.log(tasks[tasks.length])
    saveToLocalStorage()
    
    Calendar("calendar", new Date().getFullYear(), new Date().getMonth());
    this.reset()
}

function tdOpenTaskAdder (event) {
    let timing = new Date().getTime() - tclick_down
    console.log('timiing is', timing)
    if (timing > 500) {
        document.querySelector('.tasksday').textContent = ''
        showAllTaskForThatDay(event.target).forEach(element => {
            document.querySelector('.tasksday').append(element)
        });

        // document.querySelector('.tasksday').appendChild(showAllTaskForThatDay(event.target))
        document.querySelector('.tasksday').classList.toggle('hide')
    } else {
        if (event.target.tagName === 'TD') {
            document.querySelector('.formShort').classList.toggle('hide')
            document.querySelector('.closeTaskAdderBtn').classList.toggle('hide')
        }
    }  
}

function closeTaskAdderBtn(event) {
        document.querySelector('.formShort').classList.toggle('hide')
        event.target.classList.toggle('hide')
}

function hideTaskDay(event) {
    document.querySelector('.tasksday').classList.toggle('hide')
}