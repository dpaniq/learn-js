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
let tclick_down = 0
document.addEventListener('mousedown', () => {tclick_down = new Date().getTime()})

document.querySelector('#calendar').addEventListener('click', tdOpenTaskAdder)

// Short/Long Form
let tStart = document.querySelector('[name="task_timeStart"]')

let formShort = document.querySelector('.formShort')
formShort.addEventListener('submit', addNewTask)
document.querySelector('input[name="task_plus"]').addEventListener('click', toggleFormLong)
let showTasksDay = document.querySelector('.tasksday')

// Buttons
let closeBtn = document.querySelector('.closeTaskAdderBtn')
closeBtn.addEventListener('click', closeTaskAdderBtn)

let plusBtn = document.querySelector('.plusTaskAdderBtn')
plusBtn.addEventListener('click', plusTaskAdderBtn)



function toggleFormLong(event) {
    document.querySelector('.formLong').classList.toggle('hide')
}

function addNewTask(event) {
    event.preventDefault()

    tasks.push(fillTaskProporties())
    saveToLocalStorage()
    
    Calendar("calendar", new Date().getFullYear(), new Date().getMonth());
    this.reset()
}

function tdOpenTaskAdder (event) {
    let timing = new Date().getTime() - tclick_down
    console.log('timiing is', timing)
    if (timing > 500) {
        showTasksDay.textContent = ''
        showAllTaskForThatDay(event.target).forEach(element => {
            showTasksDay.append(element)
        });

        // showTasksDay.appendChild(showAllTaskForThatDay(event.target))
        showTasksDay.classList.toggle('hide')
        closeBtn.classList.toggle('hide')
        plusBtn.classList.toggle('hide')
    } else {
        if (event.target.tagName === 'TD') {

            let tempDate = new Date(event.target.dataset.dateYear, event.target.dataset.dateMonth, event.target.dataset.dateDay)
            tStart.value = tempDate.toISOString().substring(0, 16)

 
            formShort.classList.toggle('hide')
            closeBtn.classList.toggle('hide')
        }
    }  
}

// Buttons
function closeTaskAdderBtn(event) {
        if (!showTasksDay.classList.contains('hide')) {
            showTasksDay.classList.toggle('hide')}

        if (!formShort.classList.contains('hide')) {
            formShort.classList.toggle('hide')}

        event.target.classList.toggle('hide')
        // plusBtn.classList.toggle('hide')
}

function plusTaskAdderBtn(event) {
    if (formShort.classList.contains('hide')) {
        // let tempDate = new Date().toISOString().substring(0, 16)
        // console.log(tempDate, new Date())
        const ty = new Date().getFullYear(),
              tm = new Date().getMonth() + 1 < 10 ? '0' + (new Date().getMonth() + 1) : new Date().getMonth() + 1,
              td = new Date().getDate() < 10 ? '0' + new Date().getDate() : new Date().getDate()

        
        console.log(ty, tm, td, new Date())
        
        tStart.value = `${ty}-${tm}-${td}T06:00:00` // 2011-10-05T14:48:00'
        formShort.classList.toggle('hide')
        
    }
    closeBtn.classList.toggle('hide')
    // plusBtn.classList.toggle('hide')
}
