import { useState } from "react"

export default function TableSearchPro({ tableModel }) {

    const [searchText, setSearchText] = useState("")

    const onSearch = () => {

        if (!searchText) {
            tableModel.resetRows()
            return
        }

        const rowsFiltered = tableModel.savedRows.filter(row => {
            const text = Object.values(row).join(" | ").toLowerCase()
            return text.search(searchText.toLowerCase()) >= 0
        })

        tableModel.updateRows(rowsFiltered)

    }

    return (
        <div>
            <input
                type="search"
                placeholder="Buscar..."
                value={searchText}
                onChange={event => {
                    setSearchText(event.target.value)
                    onSearch()
                }}
                onKeyDown={event => {
                    if (event.key === "Enter") {
                        onSearch()
                    }
                }}
                onKeyUp={event => {
                    if (event.key === "Escape") {
                        tableModel.resetRows()
                    }
                }}
            />
            <button
                onClick={() => {
                    onSearch()
                }}
            >
                buscar
            </button>
        </div>
    )

}