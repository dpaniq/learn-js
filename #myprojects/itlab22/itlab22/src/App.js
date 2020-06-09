import './App.css';
import React from 'react';
import {connect} from 'react-redux'
import Form from './components/Form.js'
import Table from "./components/Table"


const mapStateToProps = state => {
    return {
        tables: Object.entries(state.table.listTables)
    }
}

function App({tables}) {
    return (
        <React.Fragment>
            <Form/>
            <section className="tables">
                {tables.map((table, id) => {
                    return (
                        <Table key={id} id={table[0]} fields={table[1]}/>
                    )
                })}
            </section>
        </React.Fragment>
    );
}

export default connect(mapStateToProps, null)(App);
