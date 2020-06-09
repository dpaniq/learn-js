import React from "react";
import Fields from './Field'
import {connect} from "react-redux";
import { motion } from 'framer-motion'

import { copyTable, deleteTable} from '../redux/actions'

function Table({id, table, copyTable, deleteTable}) {
    const handleCopyTable = () => copyTable(id)
    const handleDeleteTable = () => deleteTable(id)

    return (
        <React.Fragment>
            <motion.table data-index={id}
                          initial={{ scale: 0 }}
                          animate={{ rotate: 360, scale: 1}}
                          whileTap={{ scale: 0.95 }}
                          transition={{
                              type: "spring",
                              stiffness: 200,
                              damping: 20
                          }}
            >
                <thead>
                <tr>
                    <th>Name</th><th>Surname</th><th>Age</th><th>City</th><th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {table[id].map((field, key) => <Fields key={key} id={key} table={id} field={field} />)}
                </tbody>
                <tfoot className="table__action">
                    <tr>
                        <td>
                            <button type="button" onClick={handleCopyTable}>&#x2398;Copy</button>
                            { id === '0' ? '' : <button type="button" className="remove" onClick={handleDeleteTable}>&#10006;</button>}
                        </td>
                    </tr>
                </tfoot>
            </motion.table>
        </React.Fragment>

    )
}

const mapStateToProps = state => {
    return {
        currentTable: state.table.activeTable,
        table: state.table.listTables
    }
}

const mapDispatchToProps = {
    copyTable,
    deleteTable
}

export default connect(mapStateToProps, mapDispatchToProps)(Table)
