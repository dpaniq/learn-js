import {
    ADD_RECORD,
    EDIT_RECORD,
    DELETE_RECORD,
    COPY_TABLE,
    DELETE_TABLE,
} from "./actionTypes";

export const addRecord = (record, table) => ({
    type: ADD_RECORD,
    table,
    payload: record
})

export const editRecord = (eRecord) => ({
    type: EDIT_RECORD,
    payload: eRecord
})

export const deleteRecord = (dRecord) => ({
    type: DELETE_RECORD,
    payload: dRecord
})

export const copyTable = (table) => ({
    type: COPY_TABLE,
    payload: table
})
export const deleteTable = (table) => ({
    type: DELETE_TABLE,
    payload: table
})
