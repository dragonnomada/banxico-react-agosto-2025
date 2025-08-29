"use client"
import { signInAuto } from "@/store/thunks/singInAuto"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

export default function AppPage() {

    const router = useRouter()

    const isLogin = useSelector(state => state.login.isLogin)
    const error = useSelector(state => state.login.error)
    const dispatch = useDispatch()

    useEffect(() => {

        if (isLogin) {
            router.replace("/home")
        }

    }, [isLogin])
    
    useEffect(() => {

        if (error) {
            router.replace("/login")
        }

    }, [error])

    useEffect(() => {

        dispatch(signInAuto())

    }, [])

    return (
        <div
            className="w-screen h-screen flex justify-center items-center bg-gray-800 text-white"
        >
            <span>Verificando la sesión...</span>
        </div>
    )

}