"use client"
import { useSelector } from "react-redux"

export default function HomePage() {

    const user = useSelector(state => state.login.user)

    return (
        <div>
            <h1>Bienvenido {user.fullName}</h1>
        </div>
    )

}