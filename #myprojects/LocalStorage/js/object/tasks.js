
export let tasks = JSON.parse(localStorage.getItem('taskList')) || []

export function saveToLocalStorage() {
    localStorage.setItem('taskList', JSON.stringify(tasks))
}


export function fillTaskProporties() {
    return {
        task_name: document.querySelector('[name="task_name"]').value || '',
        task_description: document.querySelector('[name="task_description"]').value || '',
    
    
        // task_category: document.querySelector('[name="task_name"]').value || '',
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
                    
                // A: Nahodim vse elementi po etomu dnju i vikidivajem v return
                //      Zatem proganjaem cherez funkciju kotoraja nahodit vse validnie dlja otobrazenija polja
                //      zasovivajet v otdelnij div
                //      progoditjsa detail tab
                
                
                tasksinday.push(tasks[i])
            }
    }

    let alltasks = []
    for (let z = 0; z < tasksinday.length; z++){
        alltasks.push(showTaskDetail(tasksinday[z]))
    }
    return alltasks
}

function showTaskDetail(task){

    let detailTab = document.createElement('div')
    detailTab.classList.add('detailTab')

    let name = document.createElement('div')
    name.textContent = task.task_name
    detailTab.appendChild(name)

    if (task.task_description) {
        let describ = document.createElement('div')
        describ.textContent = task.task_description
        detailTab.appendChild(describ)
    }

    if (task.task_date.start) {
        let timestart = document.createElement('div')
        timestart.textContent = new Date(task.task_date.start)
        detailTab.appendChild(timestart)
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


