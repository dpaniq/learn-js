import React, {useState} from "react";
import Fields from './Field'

function Table({fields}) {

    // state table 1/2/3/4 ....

    return (
        <table style={{width: '100%', textAlign: 'center', border: '1px solid #ccc'}}>
            <thead>
            <tr>
                <th>Name:</th>
                <th>Surname:</th>
                <th>Age:</th>
                <th>City:</th>
                <th>Action:</th>
            </tr>
            </thead>
            <tbody>
                {fields.map((field, key) => <Fields key={key} id={key} field={field} /> )}
            </tbody>
        </table>
    )
}

export default Table
