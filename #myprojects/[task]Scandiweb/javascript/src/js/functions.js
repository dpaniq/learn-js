import {modal, modalAttributes, modalSelect, plus} from "./variables.js";

function openAddProduct (event) {
    if (event.target === plus || event.target.parentElement === plus) {

        // // Todo exlude to single function
        // const selected = modalSelect.options.selectedIndex
        //
        // console.log(modalAttributes, modalAttributes.children, typeof modalAttributes.children)
        // Object.entries(modalAttributes.children).forEach(attribute => {
        //     console.log(attribute, selected)
        //     // attribute[1].style.display = 'none'
        //     attribute[0] === selected.toString() ? attribute[1].style.display = 'block' : attribute[1].style.display = 'none';
        // })

        updateSelectAttributes();

        modal.style.display = "block";
    }
}

function updateSelectAttributes () {

    const selected = modalSelect.options.selectedIndex.toString()

    Object.entries(modalAttributes.children).forEach(attribute => {
        console.log(attribute, selected)
        // attribute[0] === selected.toString() ? attribute[1].style.display = 'block' : attribute[1].style.display = 'none';

        if (attribute[0] !== selected) {
            attribute[1].style.display = 'none'
            Object.values(attribute[1].children).forEach(input => {
                if (input.tagName === 'INPUT') {
                    input.setAttribute('disabled', 'disabled')
                }
            })
        } else {
            attribute[1].style.display = 'block'
            Object.values(attribute[1].children).forEach(input => {
                if (input.tagName === 'INPUT') {
                    input.removeAttribute('disabled')
                }
            })
        }
    })
}




// Helper

/**
 * Serialize all form data into a query string
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}        form The form to serialize
 * @return {String}      The serialized form data
 */
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
                serialized.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.options[n].value));
            }
        }

        // Convert field data to a query string
        else if ((field.type !== 'checkbox' && field.type !== 'radio') || field.checked) {
            serialized.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value));
        }
    }

    return serialized.join('&');
};


export {
    serialize,
    openAddProduct,
    updateSelectAttributes
}
