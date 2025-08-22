import { useState } from "react"
import { useNavigate } from "react-router"

// Reponsabilidad: 
// Capturar un nombre válido mediante formulario que lo envíe a /saludar
export default function Home() {

    // Permite hacer la navegación entre rutas (react-router)
    const navigate = useNavigate()

    // Retiene el nombre del formulario
    const [nombre, setNombre] = useState("")

    // Define una función que valida y envía el nombre a /saludar (si es válido)
    const enviarNombre = () => {
        // Se utiliza un patrón RegExp para determinar si el nombre no es válido
        if (!/[A-ZÁÉÍÓÚ][a-z]+/.test(nombre)) {
            alert("El nombre no es válido")
            return
        }

        // Navega a /saludar pasando el nombre como el estado de la navegación
        navigate("/saludar", {
            state: {
                nombre
            }
        })
    }

    // Muestra el formulario para capturar el nombre
    // y un botón para enviarlo (lo mismo que al pulsar enter)
    return (
        <div>
            <h1>Home</h1>
            <div>
                <input 
                    type="text" 
                    placeholder="Escribe tu nombre"
                    value={nombre}
                    onChange={event => {
                        setNombre(event.target.value)
                    }}
                    onKeyUp={event => {
                        if (event.key === "Enter") {
                            enviarNombre()
                        }
                    }}
                />
                <button
                    onClick={enviarNombre}
                >
                    Aceptar
                </button>
            </div>
        </div>
    )

}