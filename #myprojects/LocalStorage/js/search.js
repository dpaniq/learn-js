import {tasks, showTasksNames, showTaskDetail, selectedOption} from '../js/object/tasks.js'
export {searchFormActiveted} 

let taskname = document.querySelector('.search_task'),
    between  = document.querySelector('.search_between'),
    category = document.querySelector('.search_category')

let showTasksDay = document.querySelector('.tasksday')
let closeBtn = document.querySelector('.closeTaskAdderBtn')
let plusBtn = document.querySelector('.plusTaskAdderBtn')

function searchFormActiveted(event) {
    event.preventDefault()
    const searchtype = document.querySelector('[name="search_type"]')
    
    if (searchtype.value === 'bytaskname'){
        searchTasksbyTaskName(taskname.value)
        

    } else if (searchtype.value === 'bytimebetween') {
        searchTasksByTimeBetween(document.querySelector('[name="search_time_start"]').value,
                                document.querySelector('[name="search_time_finish"]').value)

    } else if (searchtype.value === 'bycategory') {
        
        // let options = category.options

        // let question = []
        // for (let i = 0; i < options.length; i++) {
        //     if (options[i].selected) {
        //         question.push(options[i].text)
        //     }

        // }
        searchTasksByTaskCategory(selectedOption(category))
    }

    this.reset()
}

////// After find out all tasks CALL Detail TAB the same for one TD!


function searchTasksbyTaskName (taskname) {
    const regex = new RegExp(taskname, "igm")
    let allTasksNames = []
    for (let i = 0; i < tasks.length; i++) {
        if (regex.test(tasks[i].task_name)) {
            allTasksNames.push(tasks[i]) // SOBIRAJEM TOLKO OBJECTI - VOZMEM VSE CHTO NADO POSLE
        }
    }
    console.log(allTasksNames)
    showTasksNames(allTasksNames)
    showTasksDay.classList.toggle('hide')
    
    closeBtn.classList.toggle('hide')
    plusBtn.classList.toggle('hide')
}   

function searchTasksByTimeBetween (a,b) {
    let allTasksNames = []
    
    for (let i = 0; i < tasks.length; i++) {
        console.log(`a: ${new Date(a).getTime()} <= start: ${new Date(tasks[i].task_date.start).getTime()} <= b: ${new Date(b).getTime()}`)
        if (new Date(a).getTime() <= new Date(tasks[i].task_date.start).getTime() && 
            new Date(b).getTime() >= new Date(tasks[i].task_date.start).getTime()) {
            allTasksNames.push(tasks[i])
        }
    }

    showTasksNames(allTasksNames)
    showTasksDay.classList.toggle('hide')
    closeBtn.classList.toggle('hide')
    plusBtn.classList.toggle('hide')
}

function searchTasksByTaskCategory (selectedList) {
    console.log('Tasks', tasks) // objects
    console.log('Data', selectedList) // What i select in form ['HEALTH', ...]
    let allTasksNames = []

    selectedList.forEach(element => {
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].task_category.includes(element) && !allTasksNames.includes(tasks[i].task_category)) {
                allTasksNames.push(tasks[i])
            }
        }
    })
    showTasksNames(allTasksNames)

    showTasksDay.classList.toggle('hide')
    closeBtn.classList.toggle('hide')
    plusBtn.classList.toggle('hide')
}
