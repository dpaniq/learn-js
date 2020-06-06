import {
    // new
    ADD_RECORDS,
    EDIT_RECORDS,
    // DELETE_RECORDS,
} from '../actionTypes'

const initialState = {
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_RECORDS: {
            console.group('records reducer')
            console.log('action', action.type)
            console.log('action', action.table)
            console.log('action', action.payload, {...action.payload})
            console.log('state', state, state.table)
            console.log('table', action.table)
            console.log()
            console.log('...state[action.table]', state[action.table])
            console.log('result ...state', {...state})
            console.groupEnd('records reducer')

            console.log({})
            const table = state[action.table] ? state[action.table] : []
            console.log(table)
            // return {...state, {...action.payload}]}
            return {...state, [action.table]: [...table, action.payload]}

        }
        case EDIT_RECORDS: {
            return []
        }

        default: return state;
    }
}
