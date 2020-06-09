import React, {useState} from "react";
import {connect} from "react-redux"
import {addRecord, editRecord} from '../redux/actions'
import {onlyTextInput, onlyIntegerInput, checkEmptyInput} from '../assets/validate'
import data from '../assets/data.json'

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const mapStateToProps = state => {
    return {
        editMode: state.table.editMode,
    }
}

const mapDispatchToProps = {
    addRecord,
    editRecord
}

function Form({editMode, addRecord, editRecord}) {
    const randomIndex = () => Math.round(Math.random() * 100)
    const [flag, setFlag] = useState(true)
    const [user, setUser] = useState(data[0])

    const handleRandomUser = (event) => {
        event.target.parentNode.reset()
        setFlag(!flag)
        setUser(data[randomIndex()])
    }

    const handleSubmitForm = (event) => {
        event.preventDefault()
        const inputs = event.target.querySelectorAll("input")
        const result = Object.values(inputs).reduce((acc, current) => {
            acc[current.name] = current.value
            return acc
        }, {})


        if (editMode.flag) {
            if (checkEmptyInput(result)) {
                editRecord(result)
                event.target.reset()
            }
        } else {
            if (checkEmptyInput(result)) {
                addRecord(result, 0) // or addRecord(result, Math.round(Math.random() * 100))
                event.target.reset()
                setUser(data[randomIndex()])
            }
        }
    }

    const editUser = Object.keys(editMode.recordObj).length ? editMode.recordObj : user

    return (
        <form onSubmit={handleSubmitForm} className={"Form"}>

            {/* Dynamic object output */
                Object.keys(editUser).map((key, index) => {
                    const defaultPlaceholder = capitalizeFirstLetter(key)
                    return <input key={index}
                                  type="text"
                                  name={key}
                                  placeholder={defaultPlaceholder}
                                  defaultValue={flag ? '' : editUser[key]}
                                  onChange={key === 'age' ? onlyIntegerInput : onlyTextInput}
                                  onFocus={event => event.target.placeholder = ''}
                                  onBlur={event => event.target.placeholder = defaultPlaceholder}
                    />
                })}
            <button type='submit'>{editMode.flag ? 'Edit' : 'Add'}</button>
            <button type="button" onClick={handleRandomUser}>Random user</button>
        </form>
    )

}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
