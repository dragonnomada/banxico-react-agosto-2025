import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { signIn } from "../store/authSlice"

export default function Login() {

    const error = useSelector(store => store.auth.error)
    const dispatch = useDispatch()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const doSignIn = () => {
        // Despachamos el thunk (con el despachador de acciones)
        dispatch(signIn(email, password))
    }

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100vw",
                height: "100vh"
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    padding: "2rem",
                    border: "1px solid gainsboro",
                    borderRadius: "1rem",
                }}
            >
                <div>
                    <h3>Mi app</h3>
                    <h1>Bienvenido</h1>
                    <h2>Iniciar Sesión</h2>
                </div>
                {
                    error ? (
                        <div>
                            <span
                                style={{
                                    color: "red"
                                }}
                            >
                                {error}
                            </span>
                        </div>
                    ) : null
                }
                <div>
                    <input
                        type="email"
                        placeholder="Correo"
                        value={email}
                        onChange={event => {
                            setEmail(event.target.value)
                        }}
                        onKeyDown={event => {
                            if (event.key === "Enter") {
                                doSignIn()
                            }
                        }}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={event => {
                            setPassword(event.target.value)
                        }}
                        onKeyDown={event => {
                            if (event.key === "Enter") {
                                doSignIn()
                            }
                        }}
                    />
                </div>
                <div>
                    <button
                        onClick={() => {
                            doSignIn()
                        }}
                    >
                        Iniciar Sesión
                    </button>
                </div>
            </div>
        </div>
    )

}