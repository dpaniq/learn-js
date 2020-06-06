import React from 'react'

function Fields({id, field}) {


    const edit = (x) => {

        const form = document.querySelectorAll()
        console.log()
        console.log(Math.random(), x)
    }

    return (
        <tr data-field-index={id}>
            <td>{field.name}</td>
            <td>{field.surname}</td>
            <td>{field.age}</td>
            <td>{field.city}</td>
            <td>
                <button type="button" onClick={() => edit(id)}>Edit</button>
                <button type="button">Delete</button>
            </td>
        </tr>
    )
}

export default Fields
