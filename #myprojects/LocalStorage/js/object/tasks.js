
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
    let schedule_div = document.createElement('div')

    for (let i = 0; i < tasks.length; i++){
        if (new Date(tasks[i].task_date.start).getFullYear() === tdate.getFullYear() &&
            new Date(tasks[i].task_date.start).getMonth() === tdate.getMonth() &&
            new Date(tasks[i].task_date.start).getDate() === tdate.getDate()) {
                    
                // A: Nahodim vse elementi po etomu dnju i vikidivajem v return
                //      Zatem proganjaem cherez funkciju kotoraja nahodit vse validnie dlja otobrazenija polja
                //      zasovivajet v otdelnij div
                //      progoditjsa detail tab
                
                schedule_div.innerHTML += `${tdate} = ${tasks[i].task_name} <br>`
                
            }
    }
    return schedule_div
}