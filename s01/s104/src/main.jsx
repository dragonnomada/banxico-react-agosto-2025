import { createRoot } from "react-dom/client"

// Importación/Exportación por defecto:
// App.jsx -> export default class/function App
// Other.jsx -> import App from "../<path>/App"

// Importación/Exportación parcial:
// App.jsx -> export class/function App
// Other.jsx -> import { App, ... } from "../<path>/App"

import { App } from "./components/App"

const root = createRoot(
    document.getElementById("root")
)

root.render(<App />)