"use client" // IMPORTATE: Todos los componentes STATEFULL requieren ser marcados del lado del cliente
import { useRouter } from "next/navigation"

// src/app/page.jsx -> /
// STATELESS -> STATEFULL
export default function AppPage() {

    const router = useRouter()

    return (
        <div>
            <h1>Bienvenido 🤗 <span><i className="fas fa-home"></i></span></h1>
            <div>
                <button
                    onClick={() => {
                        router.push("/about")
                    }}
                >
                    Acerca de nostros
                </button>
            </div>
        </div>
    )

}