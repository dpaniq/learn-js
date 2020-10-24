import {

    header,
    headerSelect,
    headerApplyBtn,
    container,
    modal,
    modalForm,
    modalContent,
    modalCloseBtn,
    modalSubmitBtn,
    modalSelect,
    modalAttributes,
    modalInputs,
    plus
} from './variables.js'
// import {createProduct, attributeDvd} from './creaters.js'


import {
    // Modal
    closeModal,

    serialize,
    openModal,
    updateModalSelect,
    getModalFormInputs,
    checkModalValidity,
    changeProductSelectedStatus,
    applyAction,
    changeSelectOption
} from './functions.js'


function setEvents() {

    // Modal
    plus.addEventListener('click', openModal)
    modalCloseBtn.addEventListener('click', closeModal)
    modalSelect.addEventListener('change', updateModalSelect)
    modalForm.addEventListener('input', checkModalValidity)



    // modalCloseBtn.addEventListener('click', event => {
    //     modal.style.display = "none"
    //     modalForm.reset()
    // })


    // modalContent.addEventListener('click', event => {
    //     if (event.target === modalCloseBtn) {
    //         // console.log(modalForm, serialize(modalForm), serialize(modalForm).split('&'))
    //         modal.style.display = "none"
    //         modalForm.reset()
    //     }
    // })
    console.log('MF', modalForm)
    modalForm.addEventListener('submit', event => {
        event.preventDefault()
        const data = JSON.stringify(serialize(modalForm))
        modalForm.reset()
        modalSubmitBtn.setAttribute('disabled', 'disabled')

        fetch(modalForm.getAttribute('action'), {
            method: 'POST',
            body: data,
            headers: {'Content-Type': 'application/json'} // 'Content-Type': 'application/x-www-form-urlencoded',
        })
            .then(response => response.json())
            .then(result => {
                const div = document.createElement('div')
                div.className = 'product'
                div.innerHTML = result.created
                container.insertBefore(div, plus);
            })
    })


    // container.addEventListener('click', event => {
    //     // todo string has product inside className
    //     if (event.target.className === 'product col s3') {
    //         modal.style.display = "block";
    //     }
    //     // }
    //     // console.log('event', event.target, event.currentTarget, event.target.getAttribute('classes'))
    // })


    // modalAttributes.appendChild(attributeDvd())


    // Modal
    // console.log(modalForms)
    // console.log('Attributes', modalAttributes.children)
    // Object.entries(modalForms).forEach(form => {
    //     form[1].addEventListener('submit', (event) => {
    //         // event.preventDefault()
    //
    //     })
    //
    //     console.log(form[1].name)
    // })

    // modalForms[1].submit()
    // Object.entries(modalForms).forEach(form => {
    //     console.log(form[1].submit())
    // })


    //
    //     // if (event.target === modalCloseBtn) {
    //     //     modal.style.display = "none";
    //     // }
    //
    //     // }
    //     // console.log('event', event.target, event.currentTarget, event.target.getAttribute('classes'))


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




    // todo sdelatj tak vse functions!!!


    // Check Product to Action
    container.addEventListener('click', changeProductSelectedStatus)
    headerApplyBtn.addEventListener('click', applyAction)
    headerSelect.addEventListener('change', changeSelectOption)

}

export {setEvents}
