import {
    ADD_TODO, TOGGLE_TODO, SET_FILTER,     // new
    ADD_RECORDS,
    EDIT_RECORDS,
    DELETE_RECORDS,
    // COPY_TABLE
    CHANGE_ACTIVE_TABLE
} from "./actionTypes";

let nextTodoId = 0;

export const addTodo = content => ({
    type: ADD_TODO,
    payload: {
        id: ++nextTodoId,
        content
    }
});

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    payload: {id}
});

export const setFilter = filter => ({type: SET_FILTER, payload: {filter}});




// new
export const addRecord = (record, table) => ({
    type: ADD_RECORDS,
    table,
    payload: record
})

export const editRecord = (eRecord) => ({
    type: EDIT_RECORDS,
    payload: eRecord
})

export const deleteRecord = (dRecord) => ({
    type: DELETE_RECORDS,
    payload: dRecord
})

export const changeActiveTable = (table) => ({
    type: CHANGE_ACTIVE_TABLE,
    payload: table
})
