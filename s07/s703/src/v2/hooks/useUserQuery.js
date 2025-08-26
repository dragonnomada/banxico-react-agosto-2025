import { useState } from "react"
import { userAllApi } from "../api/userAllApi"

export function useUsersQuery(options = { autoFetch: true }) {

    const [users, setUsers] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const refetch = async (search = "") => {
        setIsLoading(true)
        setError(null)

        const [users, error] = await userAllApi(search)
        
        if (error) setError(error)
        else setUsers(users)

        setIsLoading(false)
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