export default function Table({ columns, columnMap, rows }) {

    return (
        <table border="1px">
            <thead>
                <tr>
                    {
                        columns.map(column => {
                            return <th key={column}>{columnMap ? columnMap[column] : column}</th>
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {
                    rows.map((row, index) => {
                        return (
                            <tr key={index}>
                                {
                                    columns.map(column => {
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