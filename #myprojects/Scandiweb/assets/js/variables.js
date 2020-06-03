// const product = document.querySelector('')

// Tools
const container = document.querySelector('.container')
const plus = document.querySelector('.plus')

// Modal
const modal = document.querySelector('.modal')
const modalForm = document.querySelector('.modal form')
const modalCloseBtn = document.querySelector('.close')
const modalSubmitBtn = document.querySelector('button')
const modalResetBtn = document.querySelector('.reset')
const modalContent = document.querySelector('.modal-content')
const modalSelect = document.querySelector('.modal-content>form>select')
const modalAttributes = document.querySelector('.modal-content .attributes')
const modalInputs = document.querySelectorAll('.modal-content input')

// Get the modal
// var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
// btn.onclick = function() {
//     modal.style.display = "block";
// }

export {
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
    modalInputs
}
