export default function Table({ columns, rows }) {

    return (
        <table>
            <thead>
                <tr>
                    {
                        columns.map(column => {
                            return <th key={column}>{column}</th>
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