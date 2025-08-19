import { createRoot } from "react-dom/client"
import { App } from "./modulo2/App"

import "@progress/kendo-theme-default/dist/all.css"


const root = createRoot(
    document.getElementById("root")
)

root.render(
    <App 
        title="App 201"
    />
)