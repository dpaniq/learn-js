
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
    console.log('Начался')
    if (clean) {
        taskDayNames.textContent = ''
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
    }
    if (data = []){
        console.log('Завершился')
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
        progressbarOut.textContent = 'progress bar'
        progressbarOut.style.width = 500 + 'px'
        progressbarOut.style.height = 50 + 'px'
        progressbarOut.style.backgroundColor = 'red'
        let progressbarIn = document.createElement('div')
        let starttemp = new Date(task.task_date.start)
        let finishtemp = new Date(task.task_date.finish)



        let x = (a, b, c = new Date()) => {
            if (new Date().getTime() < starttemp.getTime()) {
                return [0,0]
            }
            // problem GREEN LINE INCREASE WITH EACH DAY
            //  else if (new Date().getTime() < starttemp.getTime()) {}
                
            else {
                let ba = b.getTime() - a.getTime() // время start до finish в ms
                let na = c.getTime() - a.getTime() // now - start
    
    
                let progressbarline = 500 / ba // width of detailtab (temp is 300)
    
                // console.group('S')
                // console.log('a', a.getTime())
                // console.log('b', b.getTime())
                // console.log('n', c.getTime())
                // console.log('raznica b-a', ba)
                // console.log('raznica n-a', na)
    
                // console.groupEnd('S')
                
                return [progressbarline, na]
            }
        }
        
        let result = x(starttemp, finishtemp)
   
        progressbarIn.style.width = result[0] * result[1] + 'px'
        progressbarIn.style.height = 30 + 'px'
        progressbarIn.style.backgroundColor = 'green'
        // progressbarIn.textContent = 'asdasd'

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