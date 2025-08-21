import { TextBox } from "@progress/kendo-react-inputs"
import { useState } from "react"

// A la larga
export function FormLogin({}) {

    const [nombre, setNombre] = useState("")

    return (
        <div>
            <h1>Iniciar sesión</h1>
            <TextBox 
                placeholder="Nombre"
                value={nombre}
                onChange={event => {
                    setNombre(event.target.value)
                }}
            />
        </div>
    )

}