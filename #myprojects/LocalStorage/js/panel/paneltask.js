import {
    createOne,
    createNewElement} from '../create/createNewElement.js'


function PanelFastTask() {
    return createOne ([
        // tag / className / textContent / [attr1, attr2...]
        createNewElement('div', 'panelFastTask'),
        createNewElement('input', '', '', [['name', 'task'], ['placeholder', 'New Task Item']]),
        createNewElement('input', 'pushFastTask', '', [['type', 'submit'], ['value', 'Add task']])
    ])
}

function PanelLongTask() {
    return createOne ([
        // tag / className / textContent / [attr1, attr2...]
        createNewElement('div', 'panelLongTask'),

        createNewElement('label', '', 'Description:', [['for', 'description']]),
        createNewElement('textarea', '', '', [['name', 'description'], ['placeholder', 'Describe Your Task']]),

        createNewElement('label', '', 'Start to:', [['for', 'timeStart']]),
        createNewElement('input', '', '', [['name', 'timeStart'], ['type', 'datetime-local']]),

        createNewElement('label', '', 'Finish to:', [['for', 'timeFinish']]),
        createNewElement('input', '', '', [['name', 'timeFinish'], ['type', 'datetime-local']]),

        createNewElement('label', '', 'Reset fields:', [['for', 'reset']]),
        createNewElement('input', '', '', [['type', 'reset']]),

        createNewElement('input', 'pushLongTask', '', [['type', 'submit'], ['value', 'Add task']])
    ])
}

// zachem togda selektori?/??????????????? ?????????????????????
// kak sovmestitj s objectom TASK?

// function PanelDetailTask(selector) {
//     createNewElement('div', 'taskElement', )
// }

export {PanelFastTask, PanelLongTask}