import {
    // new
    ADD_RECORDS,
    EDIT_RECORDS,
    // DELETE_RECORDS,
    CHANGE_ACTIVE_TABLE,
    DELETE_RECORDS
    
} from '../actionTypes'

const initialState = {
    activeTable: '0',
    editMode: {flag: false, table: 0, field: 0},
    listTables: {}
}

export default function (state = initialState, action) {

console.log('!!!!action.type', action.type)

    switch (action.type) {
        case ADD_RECORDS: {
            
            const stateCurrentTable = state.listTables[action.table] ? state.listTables[action.table] : [] 
            // console.log('stateCurrentTable', stateCurrentTable)
            
            const insideTable = {[action.table]: [...stateCurrentTable, action.payload]}
            // console.log('insideTable', insideTable)

            const updateListTables = {...state.listTables, ...insideTable}
            // console.log('updateListTables', updateListTables)

            const listTables = {...updateListTables}
            // console.log('listTables', listTables)

            return {...state, listTables}

        }

        case EDIT_RECORDS: {
            console.log(EDIT_RECORDS, action.payload)
            return []
        }

        case DELETE_RECORDS: {
            console.group("Delete")
            const {table, field} = {...action.payload}
            console.log(DELETE_RECORDS, table, field)

            const listT = {...state.listTables}

            console.log('LIST!!!', listT )

            const changeTableRecord = listT[table].filter((_, record) => record.toString() !== field)

            listT[table] = changeTableRecord

            console.log('LIST LIST LIST :', listT)
            return {...state, listTables: {...listT}}
            console.groupEnd("Delete")

        }

        case CHANGE_ACTIVE_TABLE: {
            console.log('!!!CHANGED TABLE', state, action.payload)
            return {...state, ['activeTable']: action.payload}
            
        }

        default: return state;
    }
}
