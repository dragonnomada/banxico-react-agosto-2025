import { createRoot } from "react-dom/client"

import "@progress/kendo-theme-default/dist/all.css"
import App from "./v1/App"

const root = createRoot(
    document.getElementById("root")
)

root.render(<App />)