import { useEffect } from "react"
import { useState } from "react"

export function useUsersQuery(options = { autoFetch: true }) {

    const [users, setUsers] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const refetch = async (search = "") => {
        setIsLoading(true)
        setError(null)

        try {
            const response = await fetch("https://geocarta.org/api/curso/banxico/user/all", {
                method: "post",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    search
                })
            })
            if (response.ok) {
                const { users, error } = await response.json()
                if (error) throw error
                else {
                    setUsers(users)
                }
            } else throw `Error al consultar los usuarios (HTTP/${response.status})`
        } catch (error) {
            setError(`${error}`)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        if (options?.autoFetch) {
            refetch()
        }
    }, [])

    return {
        users,
        error,
        isError: !!error,
        isLoading,
        refetch,
    }

}

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