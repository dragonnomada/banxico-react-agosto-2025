import { createRoot } from "react-dom/client"
import { RouterProvider } from "react-router"
import { router } from "./v1/router"

const root = createRoot(
    document.getElementById("root")
)

root.render(
    <RouterProvider router={router} />
)