// import {modal} from './variables.js'
//
import {container, modal, plus} from "./variables";

container.addEventListener('click', event => {
    // todo string has product inside className
    if (event.target === plus) {
        modal.style.display = "block";
    }
    // }
    // console.log('event', event.target, event.currentTarget, event.target.getAttribute('class'))
})
//
// export {
//
// }
