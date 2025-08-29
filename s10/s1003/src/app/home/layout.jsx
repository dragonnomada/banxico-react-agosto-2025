"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useSelector } from "react-redux"

export default function HomeLayout({ children }) {

    const router = useRouter()

    const isLogin = useSelector(state => state.login.isLogin)
    
    useEffect(() => {
        if (!isLogin) {
            router.replace("/")   
        }
    }, [isLogin])

    if (!isLogin) return (
        <div className="w-screen h-screen flex justify-center items-center bg-gray-800 text-white">
            <span>Verificando la sesión...</span>
        </div>
    )

    return children

}