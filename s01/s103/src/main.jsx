import { createRoot } from "react-dom/client"

import "./styles.css"

const root = createRoot(
    document.getElementById("root")
)

// Opción 1 - Componente Clase

// Opción 2 - Componente Fucional

let visita = Math.random().toString(10).slice(2) % 1_000

root.render(
    <div>
        <h1>Bienvenido</h1>
        <img src="https://laeconomia.com.mx/wp-content/uploads/banco-de-mexico.gif.webp" />
        <button>Acceder</button>
        <span>Tu eres el visitante ({visita})</span>
    </div>
)