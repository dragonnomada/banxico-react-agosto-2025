import { createBrowserRouter } from "react-router"
import Home from "../pages/Home"
import Saludar from "../pages/Saludar"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/saludar",
        element: <Saludar />
    },
])