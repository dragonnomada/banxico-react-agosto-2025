// STATELESS
export default function TablePro({ tableModel }) {

    return (
        <table 
            ref={tableModel.tableRef}
            border="1px"
            style={{
                width: "100%"
            }}
        >
            <thead>
                <tr>
                    {
                        tableModel.columns.map(column => {
                            return <th key={column}>{tableModel.columnsMap ? tableModel.columnsMap[column] : column}</th>
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {
                    tableModel.rows.map((row, index) => {
                        return (
                            <tr key={index}>
                                {
                                    tableModel.columns.map(column => {
                                        return <td key={`${index}-${column}`}>{row[column]}</td>
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )

}