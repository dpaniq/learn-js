import React, {useState} from "react";
// import App from "./App";


import data from './assets/data.json'

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


// function Form({index, addField}) {
function Form({addField}) {

    const randomIndex = () => Math.round(Math.random() * 100)

    const [flag, setFlag] = useState(true)

    const [user, setUser] = useState(data[0])


    const randomUser = () => {
        setFlag(!flag)
        setUser(data[randomIndex()])
    }

    const submitForm = (event) => {
        event.preventDefault()
        console.log('EVENT', event.type)

        const inputs = event.target.querySelectorAll("input");

        const result = Object.values(inputs).reduce((acc, current) => {
            console.log('name', current.name, 'value', current.value)
            acc[current.name] = current.value
            return acc
        }, {})

        addField(result)
        setUser(data[randomIndex()])
    }

    // const [placeholder, setPlaceholder] = useState('') // placeholder, setPlaceholder mb set placeholder

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

export default Form
