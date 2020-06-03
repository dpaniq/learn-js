import {container, modal, modalForms, modalContent, modalCloseBtn, modalSelect, modalAttributes, plus} from './variables.js'
import {createProduct} from './creaters.js'
import {serialize, openAddProduct, updateSelectAttributes} from './functions.js'


function setEvents() {
    // plus.addEventListener('click', () => {
    //     console.log('Hello yopta')
    //     container.insertBefore(createProduct(), plus);
    // })

    // container.addEventListener('click', event => {
    //     // todo string has product inside className
    //     if (event.target.className === 'product col s3') {
    //         modal.style.display = "block";
    //     }
    //     // }
    //     // console.log('event', event.target, event.currentTarget, event.target.getAttribute('class'))
    // })

    // plus.addEventListener('click', event => openAddProduct(event))


    // Modal
    console.log(modalForms)
    Object.entries(modalForms).forEach(form => {
        form[1].addEventListener('submit', (event) => {
            // event.preventDefault()

        })

        console.log(form[1].name)
    })

    modalForms[1].submit()
    // Object.entries(modalForms).forEach(form => {
    //     console.log(form[1].submit())
    // })
    // modalContent.addEventListener('click', event => {
    //     if (event.target === modalCloseBtn) {
    //         console.log(modalForm, serialize(modalForm), serialize(modalForm).split('&'))
    //         modal.style.display = "none"
    //         modalForm.reset()
    //     }
    //
    //     // if (event.target === modalCloseBtn) {
    //     //     modal.style.display = "none";
    //     // }
    //
    //     // }
    //     // console.log('event', event.target, event.currentTarget, event.target.getAttribute('class'))
    // })

    // modal.addEventListener('click', event => {
    //     console.log(event.target, modalContent, event.currentTarget)
    //     console.log(event.currentTarget.children)
    //
    //
    //     if (modalContent.hasChildNodes()) {
    //         modal.style.display = "none";
    //     }
    // })

    // container.addEventListener('click ', event => {
    //     console.log('asdasdasd')
    //     modal.className = modal.className === 'modal' ? 'modal.active' : 'modal'
    // })


    // modalSelect.addEventListener('change', () => updateSelectAttributes())



}


export {setEvents}
