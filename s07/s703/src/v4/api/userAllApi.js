// Modelo: (search: string) => Promise<[users: User[] | null, error: string | null]>
export async function userAllApi(search = "") {
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
        else return users
    } else throw `Error al consultar los usuarios (HTTP/${response.status})`
}