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