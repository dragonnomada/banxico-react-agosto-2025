import { useUserSearchQuery } from "../store/api/userSearchApi"

export default function TableUser() {

    const { data, error, isError, isLoading, isFetching, isSuccess, isUninitialized } = useUserSearchQuery()

    if (isUninitialized) return <span>Inicializando...</span>

    if (isError) return <span>{error}</span>

    if (isFetching) return <span>Adquiriendo...</span>
    
    if (isLoading) return <span>Cargando...</span>

    return (
        <pre><code>{JSON.stringify({ data }, null, 2)}</code></pre>
    )

}