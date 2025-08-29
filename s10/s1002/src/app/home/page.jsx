"use client"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useSelector } from "react-redux"

export default function HomePage() {

    const router = useRouter()

    const isLogin = useSelector(state => state.login.isLogin)
    const user = useSelector(state => state.login.user)

    useEffect(() => {
        if (!isLogin) {
            router.replace("/login")   
        }
    }, [isLogin])

    if (!isLogin) return <span>Acceso no permitido, redirigiendo...</span>

    return (
        <div>
            <h1>Bienvenido {user.fullName}</h1>
        </div>
    )

}