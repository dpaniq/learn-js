import {
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
import {serialize, openAddProduct, updateSelectAttributes, getModalFormInputs} from './functions.js'


function setEvents() {

    // event that we click on `plus` div element
    plus.addEventListener('click', event => openAddProduct(event))

    // plus.addEventListener('click', () => {
    //     console.log('Hello yopta')
    //     container.insertBefore(createProduct(), plus);
    // })


    modalCloseBtn.addEventListener('click', event => {
        modal.style.display = "none"
        modalForm.reset()
    })

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
                div.className = 'product col s3'
                div.innerHTML = result.created
                container.insertBefore(div, plus);
                // modalAttributes.innerHTML = result.created.reduce((accumulator, currentValue) => accumulator + currentValue)
            })
    })


    // container.addEventListener('click', event => {
    //     // todo string has product inside className
    //     if (event.target.className === 'product col s3') {
    //         modal.style.display = "block";
    //     }
    //     // }
    //     // console.log('event', event.target, event.currentTarget, event.target.getAttribute('class'))
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
    //     // console.log('event', event.target, event.currentTarget, event.target.getAttribute('class'))


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


    modalSelect.addEventListener('change', () => updateSelectAttributes())

    console.log('inputs', modalInputs)


    // todo sdelatj tak vse functions!!!
    modalForm.addEventListener('input', checkModalFormValidity)

    function checkModalFormValidity() {
        const done = getModalFormInputs().every(item => item.checkValidity()) // checkValidity is a native html5 function
        done ? modalSubmitBtn.removeAttribute('disabled') : modalSubmitBtn.setAttribute('disabled', 'disabled')
    }
}

export {setEvents}
