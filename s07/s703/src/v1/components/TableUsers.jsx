import { useState } from "react"
import { useUsersQuery } from "../hooks/useUserQuery"

export default function TableUsers() {

    const [search, setSearch] = useState("")

    const { users, isError, error, isLoading, refetch } = useUsersQuery({
        autoFetch: false
    })

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