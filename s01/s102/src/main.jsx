import { createRoot } from "react-dom/client"

// React.createElement(<tag>, props, children)

// <tag
//      {...props}
// >
//      {children}
// </tag>

const root = createRoot(document.getElementById("root"))

let i = 0

setInterval(() => {
    console.log(i)
    // Nodo: app
    const app = <h1>Hola {++i}</h1> // React.createElement("h1", null, "Hola mundo")

    root.render(app)
}, 1_000)