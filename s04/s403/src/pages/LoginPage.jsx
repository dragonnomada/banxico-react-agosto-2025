import { useState } from "react"

export default function LoginPage() {

    const status = "warning"

    return (
        <span
            style={{
                color: ({
                    ok: "blue",
                    error: "red",
                    warning: "gold",
                })[status]
            }}
        >
            Hola mundo
        </span>
    )

    // const [error, setError] = useState({
    //     code: "@555",
    //     error: `System busy`
    // })

    // const messages = {
    //     "@123": "La contraseña no es válida",
    //     "@555": "El sistema no puede atender la petición en este momento",
    // }

    // return (
    //     <span>{messages[error?.code] || "Error: desconocido"}</span>
    // )

}