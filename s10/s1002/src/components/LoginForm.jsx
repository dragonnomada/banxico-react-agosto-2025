"use client"
import { loginActions } from "@/store/slices/loginSlice"
import { useDispatch, useSelector } from "react-redux"

export default function LoginForm() {

    const isLoading = useSelector(state => state.login.isLoading)
    const error = useSelector(state => state.login.error)
    const dispatch = useDispatch()

    const onLogin = () => {
        dispatch(loginActions.startLogin())
        setTimeout(() => {
            // console.log("SUCCESS")
            // dispatch(loginActions.successLogin())
            dispatch(loginActions.failLogin("Error desconocido"))
        }, 5_000)
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
            />
            <input 
                className={
                    `border p-2 rounded ${isLoading ? "bg-gray-100" : ""}`
                }
                disabled={isLoading}
                type="password" 
                placeholder="Contraseña"
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