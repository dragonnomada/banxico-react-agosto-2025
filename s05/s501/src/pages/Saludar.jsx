import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router"

export default function Saludar() {

    const navigate = useNavigate()
    const location = useLocation()

    const [esperando, setEsperando] = useState(true)
    const [nombre, setNombre] = useState(null)

    useEffect(() => {
        if (location.state.nombre) {
            setNombre(location.state.nombre)
        }
        const id = setTimeout(() => {
            setEsperando(false)
        }, 618)
        return () => {
            clearTimeout(id)
        }
    }, [])

    if (esperando) return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <div>
                <span><i className="fas fa-cog fa-spin"></i></span>
            </div>
            <div>
                <span>Cargando el estado...</span>
            </div>
        </div>
    )

    if (!nombre) return (
        <div>
            <h2>Oops! no se recibió ningún nombre</h2>
            <button
                onClick={() => {
                    navigate("/")
                }}
            >
                Ir al inicio
            </button>
        </div>
    )

    return (
        <div>
            <h1>¡Hola {nombre}!, bienvenido</h1>
            <button
                onClick={() => {
                    navigate(-1)
                }}
            >
                Regresar
            </button>
        </div>
    )

}