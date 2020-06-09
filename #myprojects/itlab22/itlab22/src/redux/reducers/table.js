import {
    ADD_RECORD,
    EDIT_RECORD,
    DELETE_RECORD,
    COPY_TABLE,
    DELETE_TABLE,
} from '../actionTypes'

const initialState = {
    listTables: {},
    activeTable: '0',
    editMode: {flag: false, table: 0, record: 0, recordObj: {}}
}

export default function (state = initialState, action) {

    switch (action.type) {
        case ADD_RECORD: {
            const stateCurrentTable = state.listTables[action.table] ? state.listTables[action.table] : []
            const insideTable = {[action.table]: [...stateCurrentTable, action.payload]}
            const listTables = {...state.listTables, ...insideTable}

            return {...state, listTables}
        }

        case EDIT_RECORD: {
            if (action.payload.flag) {
                const {table, record} = {...action.payload}
                const editMode = {flag: true, table: table, record:record, recordObj: state.listTables[table][record]}

                return {...state, editMode}
            }

            const [table, record] = [state.editMode.table, state.editMode.record]
            const editMode = {flag: false, table: 0, record: 0, recordObj: {}}
            const listTables = {...state.listTables}
            listTables[table][record] = action.payload

            return {...state, listTables, editMode, state}

        }

        case DELETE_RECORD: {
            const {table, record} = {...action.payload}
            const listTables = {...state.listTables}

            listTables[table] = listTables[table].filter((_, recordNum) => {
                return recordNum !== record
            })

            return {...state, listTables}
        }

        case COPY_TABLE: {
            // insert copied table under original one
            const copyTableNum = parseInt(action.payload)
            const listTables = Object.entries({...state.listTables}).reduce((acc, previous) => {
                const tableNum = parseInt(previous[0])
                const container = previous[1]

                if (tableNum < copyTableNum){
                    acc[tableNum] = [...container]
                } else if (tableNum > copyTableNum) {
                    acc[tableNum + 1] = [...container]
                } else {
                    acc[tableNum] = [...container]
                    acc[tableNum + 1] = [...container]
                }

                return acc
            }, {})

            return {...state, listTables}
        }

        case DELETE_TABLE: {
            const table = action.payload
            const listTables = {...state.listTables}
            const updateListTables = Object.keys(listTables).reduce((acc, tableNum) => {
                if (tableNum !== table) {
                    acc[tableNum] = listTables[tableNum]
                    return acc
                }
                return acc
            }, {})  

            return {...state, listTables: {...updateListTables}}
        }
        default: return state;
    }
}
