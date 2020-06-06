import {
    ADD_TODO, TOGGLE_TODO, SET_FILTER,     // new
    ADD_RECORDS,
    // EDIT_RECORDS,
    // DELETE_RECORDS,
    // COPY_TABLE
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
});
