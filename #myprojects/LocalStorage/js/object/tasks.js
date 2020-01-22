
export let tasks = JSON.parse(localStorage.getItem('taskList')) || []

export function saveToLocalStorage() {
    localStorage.setItem('taskList', JSON.stringify(tasks))
}


export function fillTaskProporties() {
    return {
        task_name: document.querySelector('[name="task_name"]').value || '',
        task_description: document.querySelector('[name="task_description"]').value || '',
        task_type: document.querySelector('[name="task_type').value,
        task_category: selectedOption(document.querySelector('[name="task_category"]')) || [],
        task_date: {
            start: document.querySelector('[name="task_timeStart"]').value || new Date(),
            finish: document.querySelector('[name="task_timeFinish"]').value || 0,
        }
    
        // task_icon: document.querySelector('[name="task_name"]').value || '',
    
        // task_done: false, // if now > task_date.finish - done or cancel
    }
}

export function showAllTaskForThatDay (target) {
    let tdate = new Date(target.dataset.dateYear, target.dataset.dateMonth, target.dataset.dateDay)
    let tasksinday = []

    for (let i = 0; i < tasks.length; i++){
        if (new Date(tasks[i].task_date.start).getFullYear() === tdate.getFullYear() &&
            new Date(tasks[i].task_date.start).getMonth() === tdate.getMonth() &&
            new Date(tasks[i].task_date.start).getDate() === tdate.getDate()) {
                tasksinday.push(tasks[i])
            }
    }

    showTasksNames(tasksinday)
    // let alltasks = []
    // for (let z = 0; z < tasksinday.length; z++){
    //     alltasks.push(showTaskDetail(tasksinday[z]))  
    // }
    // return alltasks
}


const taskDayNames = document.querySelector('#tasksdayNames')
const taskDayDetail= document.querySelector('#tasksdayTaskDetail')

export function showTasksNames (data = [], clean = true) {
    
    if (clean) {
        taskDayNames.textContent = ''
    }

    if (data.length == 0) {
        taskDayDetail.innerHTML = `<h1>Совсем никаких дел на сегодня нет</h1><br><h2>Подумайте, что можно сделать на завтра?</h2>`
    }
    

    for (let i = 0; i < data.length; i++){
        let tskN_temp = document.createElement('button')
        tskN_temp.setAttribute('class', 'tasksNames')
        tskN_temp.setAttribute('title', data[i].task_name)
        tskN_temp.setAttribute('name', data[i].task_name)
        
        if (data[i].task_name.length > 10) {
            tskN_temp.textContent = data[i].task_name.slice(0, 11) + '...'
        } else {
            tskN_temp.textContent = data[i].task_name
        }
        
        taskDayNames.appendChild(tskN_temp)
        if (i == 0) {
            console.log('tut')
            showTaskDetail(data[i])
        }
    }
}

export function showTaskDetail(task){

    let detailTab = document.createElement('div')
    detailTab.classList.add('tasksDetails')

    let name = document.createElement('div')
    name.textContent = task.task_name
    detailTab.appendChild(name)

    if (task.task_description) {
        let describ = document.createElement('div')
        describ.textContent = task.task_description
        detailTab.appendChild(describ)
    }

    if (task.task_category) {
        let category = document.createElement('div')
        category.textContent = task.task_category
        detailTab.appendChild(category)
    }

    if (task.task_date.start) {
        let timestart = document.createElement('div')
        timestart.textContent = new Date(task.task_date.start)
        detailTab.appendChild(timestart)
    } 

    if (task.task_type) {
        let tasktype = document.createElement('div')
        tasktype.textContent = 'Type of task: ' + task.task_type
        detailTab.appendChild(tasktype)
    } 

    if (task.task_date.finish) {
        let timefinish = document.createElement('div')
        timefinish.textContent = new Date(task.task_date.finish)
        detailTab.appendChild(timefinish)
    } 

    if (task.task_date.finish && task.task_date.start) {
        let progressbarOut = document.createElement('div')
        progressbarOut.id = 'progressBar'
        let progressbarIn = document.createElement('div')
        let starttemp = new Date(task.task_date.start)
        let finishtemp = new Date(task.task_date.finish)



        let x = (a, b, c = new Date()) => {
            if (new Date().getTime() < starttemp.getTime()) {
                console.log('Less than start time', new Date().getTime(), starttemp.getTime())
                return 0
            } else if (new Date().getTime() > finishtemp.getTime()) {
                console.log('More than start time', new Date().getTime(), finishtemp.getTime())
                return 500
            } else {
                const fs = b.getTime() - a.getTime() // finish - start
                const ns = c.getTime() - a.getTime() // now - start
                return parseInt(500 * (ns * 100 / fs) / 100)
            }
        }
        progressbarIn.style.width = x(starttemp, finishtemp) + 'px'
        progressbarIn.style.height = 20 + 'px'

        progressbarOut.appendChild(progressbarIn)
        detailTab.appendChild(progressbarOut)
    }
    return detailTab
}

let showTasksDay = document.querySelector('.tasksday')
showTasksDay.addEventListener('click', showTaskNameAndDetail)

// Task Name and detail 
function showTaskNameAndDetail(event) {
    const et = event.target
    if (et.className === 'tasksNames') {
        for (let i = 0; i < tasks.length; i++){
            if (tasks[i].task_name === et.getAttribute('name')) {
                tasksdayTaskDetail.textContent = ''
                tasksdayTaskDetail.append(showTaskDetail(tasks[i]))
            }
        }
    }
}

export function selectedOption(elem) {

    let options = elem.options
    let select = []
    for (let i = 0; i < options.length; i++) {
        if (options[i].selected) {
            select.push(options[i].text)
        }
    }
    return select
}





// TASK EDIT FUNCTION

export function taskEdit () {
    
}
