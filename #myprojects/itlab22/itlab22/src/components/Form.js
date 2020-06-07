import React, {useState} from "react";
import { connect } from "react-redux"

import { addRecord } from '../redux/actions'
// import App from "./App";

import data from '../assets/data.json'

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const mapStateToProps = state => {
    return {
        listRecords: state
    }
}

const mapDispatchToProps = {
    addRecord
}

function Form({listRecords, addRecord}) {
    // console.log('listRecords', listRecords)

    const randomIndex = () => Math.round(Math.random() * 100)

    const [flag, setFlag] = useState(true)

    const [user, setUser] = useState(data[0])

    const randomUser = () => {
        setFlag(!flag)
        setUser(data[randomIndex()])
    }

    const submitForm = (event) => {
        event.preventDefault()
        const inputs = event.target.querySelectorAll("input")

        const result = Object.values(inputs).reduce((acc, current) => {
            acc[current.name] = current.value
            return acc
        }, {})

        // Zero -         \/ should be dynamically value
        // addRecord(result, Math.round(Math.random() * 100))
        addRecord(result, 0)
        setUser(data[randomIndex()])
    }

    return (
        <form onSubmit={submitForm}>

            {/* Dynamic object output */
            Object.keys(user).map((key, index) => {
                const defaultPlaceholder = capitalizeFirstLetter(key)
                return <input key={index}
                              type="text"
                              name={key}
                              placeholder={defaultPlaceholder}
                              defaultValue={flag ? '' : user[key]}
                              onFocus={event => event.target.placeholder = ''}
                              onBlur={event => event.target.placeholder = defaultPlaceholder}
                />
            })}

            <button type='submit'>Add</button>
            <button type="button" onClick={randomUser}>Random user</button>
        </form>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
