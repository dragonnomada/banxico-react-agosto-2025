import { useState } from "react"
import { useFetchQuery } from "../hooks/useFetchQuery"
import { userAllApi } from "../../v3/api/userAllApi"

export default function TableUsers() {

    const [search, setSearch] = useState("")

    const { data: users, isError, error, isLoading, refetch } = useFetchQuery(userAllApi)

    if (isError) return <span>{error}</span>

    if (isLoading) return <span>Cargando...</span>

    return (
        <div>
            <button
                onClick={() => {
                    refetch(search)
                }}
            >
                actualizar
            </button>
            <div>
                <input 
                    type="search" 
                    value={search}
                    onChange={event => {
                        setSearch(event.target.value)
                    }}
                />
            </div>
            <pre><code>{JSON.stringify(users, null, 2)}</code></pre>
        </div>
    )

}