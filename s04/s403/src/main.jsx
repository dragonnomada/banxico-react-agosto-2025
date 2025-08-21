import { createRoot } from "react-dom/client"
import { RouterProvider } from "react-router"
import { mainRouter } from "./router"

const root = createRoot(
    document.getElementById("root")
)

root.render(
    <RouterProvider router={mainRouter} />
)