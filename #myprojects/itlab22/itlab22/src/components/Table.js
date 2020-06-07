import React from "react";
import Fields from './Field'
import {connect} from "react-redux";

import { changeActiveTable } from '../redux/actions'

function Table({id, fields, changeActiveTable, currentTable}) {

    console.log('FIELDS!!!', fields)
    console.log('currentTable!!!', currentTable)


    const changeTable = (event) => {
        // if (activeTable)

        // i dont need becouse single table has a event on it

        changeActiveTable(event.currentTarget.getAttribute('data-index'))
    }

    return (
        <table data-index={id} style={{width: '100%', textAlign: 'center', border: '1px solid #ccc'}} onClick={changeTable}>
            <thead>
            <tr>
                <th>Name:</th><th>Surname:</th><th>Age:</th><th>City:</th><th>Action:</th>
            </tr>
            </thead>
            <tbody>
                    {/* todo bad nameing props*/}
                {fields.map((field, key) => <Fields key={key} table={id} id={key} field={field} /> )}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => {
    return {
        currentTable: state.table.activeTable
    }
}

const mapDispatchToProps = {
    changeActiveTable
}

export default connect(mapStateToProps, mapDispatchToProps)(Table)
