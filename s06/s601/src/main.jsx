import { createRoot } from "react-dom/client"

import "./css/styles.css"

import App from "./v1/App"

const root = createRoot(
    document.getElementById("root")
)

root.render(
    <App />
)