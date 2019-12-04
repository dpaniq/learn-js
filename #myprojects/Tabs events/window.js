window.addEventListener('DOMContentLoaded', () => {
    'use strict'

    let more = document.querySelector('.more')
    let overlay = document.querySelector('.overlay')
    let close = document.querySelector('.popup-close')

    more.addEventListener('click', () => {
        overlay.style.display = 'block'
        overlay.classList.add('more-splash')
        document.body.style.overflow = 'hidden'
    })

    close.addEventListener('click', () => {
        overlay.style.display = 'none'
        more.classList.remove('more-splash')
        document.body.style.overflow = ''
    })

})