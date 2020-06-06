import React from "react";
import Fields from './Field'
import {connect} from "react-redux";

function Table({id, fields}) {


    return (
        <table data-index={id} style={{width: '100%', textAlign: 'center', border: '1px solid #ccc'}}>
            <thead>
            <tr>
                <th>Name:</th><th>Surname:</th><th>Age:</th><th>City:</th><th>Action:</th>
            </tr>
            </thead>
            <tbody>
                {fields.map((field, key) => <Fields key={key} id={key} field={field} /> )}
            </tbody>
        </table>
    )
}

const mapStateToProps = () => {
    return ''
}

export default connect('', null)(Table)
