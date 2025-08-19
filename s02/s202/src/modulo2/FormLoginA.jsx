
import { useState } from "react"

// Responsabilidad:
// Capturar y entregar los datos de sesión de un usuario desconocido
export function FormLoginA({
    onLogin
}) {

    const [correo, setCorreo] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [recordar, setRecordar] = useState(false)

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                padding: "1rem",
                gap: "0.5rem"
            }}
        >
            <input
                type="email"
                placeholder="Correo"
                value={correo}
                onChange={event => {
                    setCorreo(event.target.value)
                }}
            />
            <input
                type="password"
                placeholder="Contraseña"
                value={contraseña}
                onChange={event => {
                    setContraseña(event.target.value)
                }}
            />
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    userSelect: "none"
                }}
            >
                <input
                    id="checkbox-login-a"
                    type="checkbox"
                    checked={recordar}
                    onChange={event => {
                        setRecordar(event.target.checked)
                    }}
                />
                <label 
                    htmlFor="checkbox-login-a"
                    style={{
                        fontSize: ".6rem"
                    }}
                >
                    Recordar credenciales
                </label>
            </div>
            <button
                onClick={() => {
                    if (onLogin) {
                        onLogin(correo, contraseña, recordar)
                    }
                }}
            >
                Iniciar Sesión
            </button>
        </div>
    )

}