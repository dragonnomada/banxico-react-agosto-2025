"use client"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useSelector } from "react-redux"

export default function AppPage() {

    const router = useRouter()

    const isLogin = useSelector(state => state.login.isLogin)

    useEffect(() => {

        if (isLogin) {
            router.replace("/home")
        } else {
            router.replace("/login")
        }

    }, [isLogin])

    return (
        <div
            className="w-screen h-screen flex justify-center items-center bg-gray-800 text-white"
        >
            <span>Verificando la sesión...</span>
        </div>
    )

}