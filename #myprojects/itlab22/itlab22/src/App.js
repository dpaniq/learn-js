// import logo from './logo.svg';
// import './App.css';

import React from 'react';
import {connect} from 'react-redux'


import Form from './components/Form.js'
import Table from "./components/Table"


const mapStateToProps = state => {
    return {
        tables: state.table
    }
}

function App({tables}) {
    console.log('TABLES MEGA SINCE', tables)

    return (
        <React.Fragment>
            <Form/>
            {Object.entries(tables).map((table, id) => {
                return (
                    <Table key={id} id={table[0]} fields={table[1]}/>
                )
            })}
        </React.Fragment>
    );
}

export default connect(mapStateToProps, null)(App);
