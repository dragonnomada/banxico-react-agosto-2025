import { useState, useEffect } from "react"

import { useSelector, useDispatch } from "react-redux"

import HomeLayout from "../layouts/HomeLayout"
import SplashScreen from "./SplahScreen"
import { usersActions } from "../store/usersSlice"


export default function Login() {

    const isSignedIn = useSelector(state => state.users.isSignedIn)
    const dispatch = useDispatch()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [sessionVerified, setSessionVerified] = useState(false)

    const signIn = (email, password) => {
        // TODO: Lógica del API para iniciar sesión
        const user = {
            fullName: "Tito Fuentes",
            email: "tito@fuentes.com",
            picture: "https://placehold.co/300"
        }
        dispatch(usersActions.signIn(user))
    }

    useEffect(() => {
        // TODO: Recuperar un posible token o sesión activa en el navegador
        // TODO: Verificar si es válida
        // TODO: Iniciar sesión o algo
        setSessionVerified(true)
    }, [])

    if (!sessionVerified) return (
        <SplashScreen title="Verificando la sesión" />
    )

    if (isSignedIn) return (
        <HomeLayout />
    )

    return (
        <div>
            <div>
                <input
                    type="text"
                    placeholder="Correo"
                    value={email}
                    onChange={event => {
                        setEmail(event.target.value)
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
                />
            </div>
            <div>
                <button
                    onClick={() => {
                        signIn(email, password)
                    }}
                >
                    Iniciar Sesión
                </button>
            </div>
        </div>
    )

}