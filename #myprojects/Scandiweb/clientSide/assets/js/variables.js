// const product = document.querySelector('')

// Header
const header = document.querySelector('header')
const headerSelect = header.querySelector('select')
const headerApplyBtn = header.querySelector('button')

// Tools
const container = document.querySelector('.container')
const plus = container.querySelector('.plus')

// Modal
const modal = document.querySelector('.modal')
const modalForm = document.querySelector('.modal form')
const modalCloseBtn = document.querySelector('.close')
const modalSubmitBtn = document.querySelector('.modal-content button')
const modalResetBtn = document.querySelector('.reset')
const modalContent = document.querySelector('.modal-content')
const modalSelect = document.querySelector('.modal-content>form>select')
const modalAttributes = document.querySelector('.modal-content .attributes')
const modalInputs = document.querySelectorAll('.modal-content input')

export {
    header,
    headerSelect,
    headerApplyBtn,

    plus,
    container,

    modal,
    modalForm,
    modalContent,
    modalCloseBtn,
    modalResetBtn,
    modalSubmitBtn,
    modalSelect,
    modalAttributes,
    modalInputs,

}
