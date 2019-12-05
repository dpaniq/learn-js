import {
    createOne,
    createNewElement} from '../js/create/createNewElement.js'

function PanelFastTask(selector) {
    return createOne ([
        // tag / className / textContent / [attr1, attr2...]
        createNewElement('div', 'PanelFastTask'),
        createNewElement('input', '', '', [['name', 'task'], ['placeholder', 'New Task Item']]),
        createNewElement('input', 'pushFastTask', 'Add task', [['type', 'submit']])
    ])
}

function PanelLongTask(selector) {
    return createOne ([
        // tag / className / textContent / [attr1, attr2...]
        createNewElement('div', 'PanelLongTask'),

        createNewElement('label', '', 'Description:', [['for', 'description']]),
        createNewElement('textarea', '', '', [['name', 'description'], ['placeholder', 'Describe Your Task']]),

        createNewElement('label', '', 'Start to:', [['for', 'timeStart']]),
        createNewElement('input', '', '', [['name', 'timeStart'], ['type', 'datetime-local']]),

        createNewElement('label', '', 'Finish to:', [['for', 'timeFinish']]),
        createNewElement('input', '', '', [['name', 'timeFinish'], ['type', 'datetime-local']]),

        createNewElement('label', '', 'Reset fields:', [['for', 'reset']]),
        createNewElement('input', '', '', [['type', 'reset']]),

        createNewElement('input', 'pushLongTask', 'Add task', [['type', 'submit']])
    ])
}

// zachem togda selektori?/??????????????? ?????????????????????
// kak sovmestitj s objectom TASK?

// function PanelDetailTask(selector) {
//     createNewElement('div', 'taskElement', )
// }

export {PanelFastTask, PanelLongTask}