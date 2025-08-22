import { useState } from "react";
import HomeLayout from "../layouts/HomeLayout";
import SplashScreen from "./SplahScreen";
import { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function Login() {

    const { isSignedIn, signIn } = useContext(UserContext)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [sessionVerified, setSessionVerified] = useState(false)

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