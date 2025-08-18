import React, { useEffect, useState } from "react"
import { createRoot } from "react-dom/client"

import "./styles.css"

const root = createRoot(
    document.getElementById("root")
)

// Opción 1 - Componente Clase
// Define una etiqueta (componente) nuevo que puede ser consumido <App1 />
class App1 extends React.Component {

    // Definimos el método de construcción
    constructor(props) {
        // Propagar las propiedades al componente base (padre)
        super(props)

        // Ajustamos el estado inicial como un objeto de valores
        this.state = {
            visitas: 555
        }
    }

    // Definimos el método de pintado (como se construye la vista)
    render() {

        // Devolvemos un único nodo que represente toda la vista
        return (
            <div>
                <h1>Bienvenido</h1>
                <img src="https://laeconomia.com.mx/wp-content/uploads/banco-de-mexico.gif.webp" />
                <button>Acceder</button>
                <span>Tu eres el visitante ({this.state.visitas})</span>
            </div>
        )

    }

}

// Opción 2 - Componente Fucional
// Define una etiqueta (componente) nuevo que puede ser consumido <App2 />
function App2(props) {

    const [visitas, setVisitas] = useState(123) // Hooks

    return (
        <div>
            <h1>Bienvenido</h1>
            <img src="https://laeconomia.com.mx/wp-content/uploads/banco-de-mexico.gif.webp" />
            <button>Acceder</button>
            <span>Tu eres el visitante ({visitas})</span>
        </div>
    )

}

// Montamos el nodo en el root
root.render(<App2 />)