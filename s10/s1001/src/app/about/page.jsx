"use client"
import { useRouter } from "next/navigation"

export default function AboutPage() {

    const router = useRouter()

    return (
        <div>
            <h1>Acerca de nosotros</h1>
            <p>Somos una empresa responsable...</p>
            <button
                onClick={() => {
                    router.back()
                }}
            >
                regresar
            </button>
        </div>
    )

}