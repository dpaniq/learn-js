import React from 'react'
import {connect} from 'react-redux'
import {editRecord, deleteRecord} from '../redux/actions'

function Fields({table, id, field, editRecord, deleteRecord}) {

    const handleEditRecord = (event) => {
        document.querySelector('form').querySelector('input').focus()
        const record = event.target.parentNode.getAttribute('data-record-index')
        editRecord({table, record, flag: true})
    }

    const handleDeleteRecord = (event) => {
        const record = parseInt(event.target.parentNode.getAttribute('data-record-index'))
        deleteRecord({table, record})
    }

    return (
        <tr>
            <td>{field.name}</td>
            <td>{field.surname}</td>
            <td>{field.age}</td>
            <td>{field.city}</td>
            <td data-record-index={id}>
                <button onClick={handleEditRecord}>&#9998;</button>
                <button className="remove" onClick={handleDeleteRecord}>&#10006;</button>
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
    editRecord,
    deleteRecord,
}

export default connect(mapStateToProps, mapDispatchToProps)(Fields)
