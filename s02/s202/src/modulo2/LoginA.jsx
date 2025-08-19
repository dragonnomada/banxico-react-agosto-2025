import { useState } from "react"
import { FormLoginA } from "./FormLoginA"
import { SplitLayout } from "./SplitLayout"

// Responsabilidad:
// Permitirle el inicio de sesión a usuarios desconocidos
export function LoginA({
    onSignedIn
}) {

    const [error, setError] = useState(null)

    const left = (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                overflow: "hidden"
            }}
        >
            <img
                width={"100%"}
                height={"100%"}
                style={{
                    objectFit: "cover",
                    filter: "grayscale(80%)",
                    opacity: "0.5",
                }}
                src="https://transparencia.banxico.org.mx/dyn/multimedia/bannerT.jpg"
            />
        </div>
    )

    const right = (
        <div
            style={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div
                style={{
                    padding: "1rem"
                }}
            >
                <h1>Iniciar Sesión</h1>
            </div>
            {
                error ? (
                    <div
                        style={{
                            color: "crimson",
                            padding: "1rem",
                            textAlign: "center",
                            fontSize: "0.7rem",
                            background: "rgba(255, 0, 0, 0.05)",
                            boxShadow: "0x 20px 40px 80px rgba(0, 0, 0, 1)"
                        }}
                    >
                        {error}
                    </div>
                ) : null
            }
            <FormLoginA
                onLogin={async (correo, contraseña, recordar) => {
                    // alert(`
                    //     CORREO: ${correo}
                    //     CONTRASEÑA: ${contraseña}
                    //     RECORDAR: ${recordar ? "✅" : "❌"}    
                    // `)
                    setError(null)

                    if (!/@/.test(correo)) {
                        setError("El correo no es válido")
                        return
                    }
                    if (!/[A-Za-z0-9\-\_\.\@\$\*]{4,10}/.test(contraseña)) {
                        setError("La contraseña no es válida")
                        return
                    }

                    const response = await fetch("https://randomuser.me/api?results=1000&seed=123")

                    if (response.ok) {
                        const result = await response.json()
                        let finalUser = null
                        for (const user of result.results) {
                            if (user.email === correo) {
                                if (user.login.password === contraseña) {
                                    finalUser = user
                                    if (recordar) {
                                        localStorage.setItem("user", JSON.stringify(finalUser))
                                    }
                                }
                            }
                        }
                        if (finalUser) {
                            if (onSignedIn) {
                                onSignedIn(finalUser)
                            }
                        } else {
                            setError(`No se pudo iniciar sesión con el usuario (${correo})`)
                        }
                    } else {
                        const error = await response.text()
                        console.warn(error)
                        setError(`No se pudieron consultar los usuarios.`)
                    }
                }}
            />
        </div>
    )

    return (
        <SplitLayout
            left={left}
            right={right}
        />
    )

}