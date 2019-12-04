window.addEventListener('DOMContentLoaded', () => {
    'use strict'

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent')

    function hideTabContent(hide) {
        for (let i = hide; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show')
            tabContent[i].classList.add('hide')
        }
    }

    hideTabContent(1) // hide elements from first

    function showTabContent(show) {
        if (tabContent[show].classList.contains('hide')) {
            tabContent[show].classList.remove('hide')
            tabContent[show].classList.add('show')
        }
    }

    info.addEventListener('click', e => {
        let target = event.target
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0)
                    showTabContent(i)
                }
            }
        }
    })

})