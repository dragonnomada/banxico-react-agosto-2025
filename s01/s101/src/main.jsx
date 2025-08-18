// import React from "react"
import { createRoot } from "react-dom/client"
import "./styles.css"

const root = createRoot(
    document.getElementById("root") // <div id="root"></div>
)

// const elemento = <h1>Hola React 🥹</h1>

// const pre1 = React.createElement("img", { src: "https://placehold.co/300" })
// const elemento = React.createElement("h2", null, pre1)

// const pre1 = <img src="https://placehold.co/300" />
// const elemento = <h2>{pre1}</h2>

const nombre = "Pepe Toño"

// <h2 class="titulo" onclick="...">
// <img>
// <> <=> <React.Fragment
const elemento = (
    <>
        <h2 
            className="titulo"
            onClick={() => {
                alert("Hola")
            }}
        >
            {nombre}
        </h2>
        <img src="https://placehold.co/300" />
    </>
)

// Render dibuja sobre el elemento root
root.render(elemento)
