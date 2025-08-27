import { useState } from "react"
import { useRef } from "react"

// STATEFULL
export function useTablePro() {

    const table = useRef()

    const [columns, setColumns] = useState([])
    const [columnsMap, setColumnsMap] = useState({})
    const [rows, setRows] = useState([])

    return {
        tableRef: table,
        columns,
        columnsMap,
        rows,
        updateModel(columns, columnsMap, rows = []) {
            setColumns(columns)
            setColumnsMap(columnsMap)
            setRows(rows)
        },
        updateColumns(columns, columnsMap) {
            setColumns(columns)
        },
        updateColumnsMap(columnsMap) {
            setColumnsMap(columnsMap)
        },
        updateRows(rows) {
            setRows(rows)
        },
        addColumn(name, label) {
            setColumns([
                ...columns,
                name
            ])
            setColumnsMap({
                ...columnsMap,
                [name]: label
            })
        },
        addRow(row) {
            setRows([
                ...rows,
                row
            ])
        },
        popRow() {
            setRows([
                ...rows.slice(0, -1)
            ])
        },
        shiftRow() {
            setRows([
                ...rows.slice(1,)
            ])
        },
        removeRow(index) {
            setRows([
                ...rows.slice(0, index),
                ...rows.slice(index + 1,),
            ])
        },
        removeAllRows() {
            setRows([])
        },
    }

}