window.addEventListener('DOMContentLoaded', () => {
    'use strict'

    let time = document.querySelector('.timer-numbers').children

    let useInterval = setInterval(timer, 1000)

    function timer() {

        let currentTime = 0
        let hours = parseInt(time[0].textContent),
            minutes = parseInt(time[2].textContent),
            seconds = parseInt(time[4].textContent)

        currentTime = seconds + minutes * 60 + hours * 3600
        
        if (currentTime > 0) {
            currentTime = currentTime - 1

            let hrs = Math.floor(currentTime / 3600)
            let min = Math.floor((currentTime - hrs * 3600) / 60)
            let sec = currentTime - (min * 60) - (hrs * 3600)

            time[0].textContent = hrs
            time[2].textContent = min
            time[4].textContent = sec


        } else {
            clearInterval(useInterval)
        }
    }

})