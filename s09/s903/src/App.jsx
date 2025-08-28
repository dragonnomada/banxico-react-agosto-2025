import { useState, lazy, Suspense } from "react"

// import Home from "./components/Home"

const Home = lazy(() => import("./components/Home"))

export default function App() {

    const [path, setPath] = useState("/")

    const routes = {
        "/": (
            <div className="welcome">
                <h1>Bienvenido</h1>
                <button
                    onClick={() => {
                        setPath("/home")
                    }}
                >
                    Ir al inicio
                </button>
            </div>
        ),
        "/home": (
            <Suspense
                fallback={
                    <div className="loading">
                        <span>Cargando...</span>
                    </div>
                }
            >
                <Home 
                    onComplete={() => {
                        setPath("/")
                    }}
                />
            </Suspense>
        )
    }

    return routes[path]

}