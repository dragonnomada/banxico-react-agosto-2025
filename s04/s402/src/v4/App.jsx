import axios from "axios"
import { useState } from "react"

export default function App() {

    const [correo, setCorreo] = useState("")
    const [frase, setFrase] = useState("")
    const [error, setError] = useState(null)
    const [completed, setCompled] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const iniciarSesion = async () => {
        setIsLoading(true)
        
        const response = await axios.post("http://geocarta.org/api/curso/login", {
            correo,
            frase
        })

        const result = response.data

        console.log(result)
        
        if (result.ok) {
            setCompled(true)
        } else {
            setError(result.error)
        }

        setIsLoading(false)
    }

    if (completed) return "home"

    return (
        <div>
            <div>
                <span>{error}</span>
            </div>
            <div>
                <input
                    disabled={isLoading}
                    value={correo}
                    onChange={event => {
                        setCorreo(event.target.value)
                    }}
                />
            </div>
            <div>
                <input
                    disabled={isLoading}
                    value={frase}
                    onChange={event => {
                        setFrase(event.target.value)
                    }}
                />
            </div>
            <div>
                <button
                    disabled={isLoading}
                    onClick={iniciarSesion}
                >
                    iniciar sesión
                </button>
            </div>
        </div>
    )

}