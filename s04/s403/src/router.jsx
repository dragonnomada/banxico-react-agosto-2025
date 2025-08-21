import { createBrowserRouter } from "react-router"
import HomePage from "./pages/HomePage"
import UsersPage from "./pages/UsersPage"
import LoginPage from "./pages/LoginPage"
import CheckSession from "./v1/CheckSession"

export const mainRouter = createBrowserRouter([
    {
        path: "/",
        element: <CheckSession />
    },
    {
        path: "/home",
        element: <HomePage />
    },
    {
        path: "/login",
        element: <LoginPage />
    },
])