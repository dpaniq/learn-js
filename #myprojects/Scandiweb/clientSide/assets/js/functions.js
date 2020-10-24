import {
    modal,
    container,
    modalAttributes,
    modalSelect,
    modalForm,
    modalSubmitBtn,
    modalInputs,
    plus,
    header,
    headerSelect,
    headerApplyBtn,

} from "./variables.js";

/* Modal */

function closeModal() {
    modal.style.display = "none"
    modalForm.reset()
}

function openModal(event) {

    if (event.target === plus || event.target.parentElement === plus) {
        updateModalSelect();

        // todo is it needed?
        // setTimeout(() => {
        //     console.log('inputs', modalInputs)
        // }, 1300)

        modal.style.display = "block";
    }
}

function updateModalSelect() {

    const selectedOptionValue = modalSelect.options.selectedIndex
    const selectedOptionText = modalSelect.options[selectedOptionValue].textContent.toLowerCase()
    modalForm.setAttribute('action', '/create/' + selectedOptionText);

    fetch('/product/' + selectedOptionText, {method: 'POST'})
        .then(response => response.json())
        .then(result => {
            modalAttributes.innerHTML = result.empty.reduce((accumulator, currentValue) => accumulator + currentValue)
        })

}

function getModalFormInputs() {
    return Object.values(document.querySelectorAll('.modal-content input'))
}


function checkModalValidity() {
    const done = getModalFormInputs().every(item => item.checkValidity()) // checkValidity is a native html5 function
    done ? modalSubmitBtn.removeAttribute('disabled') : modalSubmitBtn.setAttribute('disabled', 'disabled')
}

/* End Modal */


/* Copy/Remove single/all selected (checked) items button */
function changeProductSelectedStatus(event) {
    const node = event.target
    if (node.className.includes('product') && !node.className.includes('plus')) {

        const color = headerSelect.selectedOptions[0].value === '1' ? 'green' : 'red'
        console.log('-colro->', color);
        console.log('-item->', node);

        // node.className.includes(color) ? node.classList.remove(color) : node.classList.add(color)

        const chx = node.querySelector('input')

        if (chx.checked) {
            chx.removeAttribute('checked')
            node.classList.remove(color)
        } else {
            chx.setAttribute('checked', 'true')
            node.classList.add(color)
        }

        activateDeactivateRemoveButton()
    }
}

function activateDeactivateRemoveButton() {
    const checkboxes = container.querySelectorAll('input[type=checkbox]')
    const checkedItems = Object.values(checkboxes).filter(item => item.checked)

    checkedItems.length
        ? headerApplyBtn.removeAttribute('disabled')
        : headerApplyBtn.setAttribute('disabled', 'disabled')

    return checkedItems
}

function applyAction(event) {
    const checkedItems = activateDeactivateRemoveButton()
    if (checkedItems) {
        switch (headerSelect.selectedOptions[0].value) {
            case '1':
                copySelected(checkedItems)
                break;
            case '2':
                removeSelected(checkedItems)
                break;
        }
    }
    activateDeactivateRemoveButton()
}

function copySelected(items) {
    items.map(item => {
        const newNode = item.parentElement.cloneNode(true)
        container.insertBefore(newNode, plus);
    })
}

function removeSelected(items) {
    items.map(item => {
        container.removeChild(item.parentElement)
    })
}

function changeSelectOption() {
    const checkboxes = container.querySelectorAll('input[type=checkbox]')
    Object.values(checkboxes).map(item => {
        item.removeAttribute('checked')
        item.parentElement.classList.remove('green')
        item.parentElement.classList.remove('red')
    })
}

/* End Remove all selected (checked) items button */



class Product {
    /*
        1. Get all Items From Mysql
        2. Set Products into Container
        3.
     */
}


// Helper
function serialize(form) {

    const serialized = [];
    for (let i = 0; i < form.elements.length; i++) {

        let field = form.elements[i];

        // Don't serialize fields without a name, submits, buttons, file and reset inputs, and disabled fields
        if (!field.name || field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') continue;

        // If a multi-select, get all selections
        if (field.type === 'select-multiple') {
            for (let n = 0; n < field.options.length; n++) {
                if (!field.options[n].selected) continue;
                // serialized.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.options[n].value));
                serialized.push(field.name + "=" + field.options[n].value);
            }
        }

        // Convert field data to a query string
        else if ((field.type !== 'checkbox' && field.type !== 'radio') || field.checked) {
            // serialized.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value));
            serialized.push(field.name + "=" + field.value);
        }
    }

    return serialized.reduce(((previousValue, currentValue) => {
        const [key, value] = currentValue.split('=')
        previousValue[key] = value
        return previousValue
    }), {})

    // return serialized.join('&');
};


export {
    // Modal
    closeModal,
    openModal,
    updateModalSelect,
    checkModalValidity,

    serialize,

    getModalFormInputs,

    changeProductSelectedStatus,


    applyAction,
    changeSelectOption
}

// Todo that idea make classes !!!!!!!!!!!!!!!!!
// export classes removeCheckedItems {
// }
