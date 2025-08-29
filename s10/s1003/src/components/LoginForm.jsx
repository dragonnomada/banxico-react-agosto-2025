"use client"
import { loginActions } from "@/store/slices/loginSlice"
import { signIn } from "@/store/thunks/singIn"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

export default function LoginForm() {

    const router = useRouter()

    const isLogin = useSelector(state => state.login.isLogin)
    const isLoading = useSelector(state => state.login.isLoading)
    const error = useSelector(state => state.login.error)
    const dispatch = useDispatch()

    const [correo, setCorreo] = useState("")
    const [frase, setFrase] = useState("")

    useEffect(() => {
        if (isLogin) {
            router.replace("/home")
        }
    }, [isLogin])

    const onLogin = () => {
        dispatch(signIn(correo, frase))
    }

    return (
        <form
            className="flex flex-col gap-2"
            onSubmit={event => {
                event.preventDefault()
            }}
        >
            {
                error ? (
                    <span className="text-red-500">{error}</span>
                ) : null
            }
            <input 
                className={
                    `border p-2 rounded ${isLoading ? "bg-gray-100" : ""}`
                }
                disabled={isLoading}
                type="text" 
                placeholder="Correo"
                value={correo}
                onChange={event => {
                    setCorreo(event.target.value)
                }}
            />
            <input 
                className={
                    `border p-2 rounded ${isLoading ? "bg-gray-100" : ""}`
                }
                disabled={isLoading}
                type="password" 
                placeholder="Contraseña"
                value={frase}
                onChange={event => {
                    setFrase(event.target.value)
                }}
            />
            <button
                className={
                    `border p-2 rounded ${isLoading ? "bg-gray-50 cursor-not-allowed" : "bg-blue-100 hover:bg-blue-50 cursor-pointer"}`
                }
                disabled={isLoading}
                onClick={() => {
                    onLogin()
                }}
            >
                <span><i className="fas fa-lock"></i></span>
                <span>Iniciar sesión</span>
            </button>
        </form>
    )

}