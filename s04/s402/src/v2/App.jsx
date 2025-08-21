import { useState, useEffect } from "react"

// const customFetch = () => new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest()

//     // ... config

//     request.onload = event => {
//         // ...
//         resolve(result)
//     }

//     let data = ""

//     request.onreadystatechange = event => {
//         if (error) {
//             // ...
//             document.querySelector("root").innerHTML = "Hola"
//         }

//         data += chunk

//         if (fin) {
//             // ...
//             resolve(data)
//         }
//     }
// })

export default function App() {

    const [users, setUsers] = useState([])
    const [error, setError] = useState("")

    const getUsers = async () => {
        try {
            const response = await fetch("https://randomuser.me/api?results=100&seed=123")

            if (response.ok) {
                const data = await response.json()
                setUsers(data.results)
                return
            }

            // alert("No se puediron recuperar los usuarios")
            // const error = "No se puediron recuperar los usuarios"
            // const error = await response.text()
            const error = `[${response.status}] - ${response.statusText || "Error al cargar los usuarios"}`
            setError(error)
        } catch(error) {
            setError(`${error}`)
        }
    }

    useEffect(() => {
        getUsers()
        // fetch("https://randomuser.me/api?results=10&seed=123").then(response => {
        //     if (response.ok) {
        //         return response.json()
        //     }
        //     // throw `No se pudieron adquirir los datos`
        //     response.text().then(error => {
        //         throw error
        //     })
        // }).then(json => {
        //     setUsers(json.results)
        // })
    }, [])

    if (error) return (
        <span style={{ color: "crimson" }}>{error}</span>
    )

    return (
        <ol>
            {
                users.map(user => {
                    return (
                        <li key={user.login.uuid}>{user.email}</li>
                    )
                })
            }
        </ol>
    )

}