import React, {useState} from 'react';
// import logo from './logo.svg';
// import './App.css';
import Form from './Form.js'
import Table from "./Table"

function App() {

    // states
    const [table, setTable] = useState([])


    // const addF =

    // const addField = () => {
    //
    //     console.log(1333, formValues)
    //     // const values = FormValues
    //     // setTable([
    //     //         ...table,
    //     //         {
    //     //             1: {name: values.name, surname: values.surname, age: values.age, city: values.city}
    //     //         }
    //     //
    //     //     ]
    //     // )
    // }


    const addField = (obj) => {
        setTable([
            ...table,
            {
                ...obj
            }
        ])
    }

    return (
        <React.Fragment>
            <Form addField={addField}/>
            {[1].map((form, id) => <Table key={id} fields={table}/>)  }
        </React.Fragment>
    );
}

export default App;
