function detailTabs(task){

    let detailTab = document.createElement('div')
    detailTab.classList.add('detailTab')
    detailTab.classList.add('hide')

    if (task.description) {
        let describ = document.createElement('div')
        describ.textContent = task.description
        detailTab.appendChild(describ)
    }

    if (task.time.start) {
        let timestart = document.createElement('div')
        timestart.textContent = new Date(task.time.start)
        detailTab.appendChild(timestart)
    } 

    if (task.time.finish) {
        let timefinish = document.createElement('div')
        timefinish.textContent = new Date(task.time.finish)
        detailTab.appendChild(timefinish)
    } 

    if (task.time.finish && task.time.start) {
        let progressbarOut = document.createElement('div')
        progressbarOut.textContent = 'progress bar'
        progressbarOut.style.width = 300 + 'px'
        progressbarOut.style.height = 20 + 'px'
        progressbarOut.style.backgroundColor = 'red'
        let progressbarIn = document.createElement('div')
        let starttemp = new Date(task.time.start)
        let finishtemp = new Date(task.time.finish)

        let x = (a, b, c = new Date()) => {
            
            
            let ba = b.getTime() - a.getTime() // время start до finish в ms
            let na = c.getTime() - a.getTime() // now - a(start)

            let progressbarline = 300 / ba // width of detailtab (temp is 300)

            console.group('S')
            console.log('a', a.getTime())
            console.log('b', b.getTime())
            console.log('n', c.getTime())
            console.log('raznica b-a', ba)
            console.log('raznica n-a', na)

            console.groupEnd('S')
            
            
            
            
            return [progressbarline, na]
            
            
        }
        
        let result = x(starttemp, finishtemp)
   
        progressbarIn.style.width = result[0] * result[1] + 'px'
        progressbarIn.style.height = 20 + 'px'
        progressbarIn.style.backgroundColor = 'green'
        // progressbarIn.textContent = 'asdasd'

        progressbarOut.appendChild(progressbarIn)
        detailTab.appendChild(progressbarOut)
    } 

    return detailTab
}

export {detailTabs}

