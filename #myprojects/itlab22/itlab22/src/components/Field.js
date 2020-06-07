import React from 'react'
import { connect } from 'react-redux'

import { changeActiveTable, editRecord, deleteRecord } from '../redux/actions'

function Fields({table, id, field, editRecord, deleteRecord}) {



    const handleEditRecord = (event) => {
        const field = event.target.parentNode.getAttribute('data-field-index')
        editRecord({table, field})
    }

    const handleDeleteRecord = (event) => {
        const field = event.target.parentNode.getAttribute('data-field-index')
        deleteRecord({table, field})
    }

    return (
        <tr>
            <td>{field.name}</td>
            <td>{field.surname}</td>
            <td>{field.age}</td>
            <td>{field.city}</td>
            <td data-field-index={id}>
                <button type="button" onClick={handleEditRecord}>Edit</button>
                <button type="button" onClick={handleDeleteRecord}>Delete</button>
            </td>
        </tr>
    )
}

const mapStateToProps = state => {
    return {
        currentTable: state.table.activeTable
    }
}

const mapDispatchToProps = {
    changeActiveTable,
    editRecord,
    deleteRecord
}

export default connect(mapStateToProps, mapDispatchToProps)(Fields)