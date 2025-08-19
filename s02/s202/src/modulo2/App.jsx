import { useState } from "react"
import { LoginA } from "./LoginA"
import { useEffect } from "react"

export function App() {

    const [user, setUser] = useState(null)

    useEffect(() => {
        console.log("Montado")

        const finalUser = JSON.parse(localStorage.getItem("user") || "null")

        if (finalUser) {
            setUser(finalUser)
        }

        return () => {
            console.log("Desmontado")
        }
    }, [])

    if (user) return (
        <span>home</span>
    )

    return (
        <LoginA 
            onSignedIn={finalUser => {
                setUser(finalUser)
            }}
        />
    )

}