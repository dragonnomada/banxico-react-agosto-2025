import { useState } from "react"
import { Menu } from "../components/Menu"

export default function App() {

    // Estado compartido
    // Superior al menú y al botón (ambos tienen acceso)
    const [openMenu, setOpenMenu] = useState(false)

    return (
        <div>
            <h1>Bienvenido</h1>
            <Menu
                open={openMenu}
                // Cuando el menú notifica que debe cerrarse
                // (detectó un click fuera del menú / dentro de su backdrop)
                onClose={() => {
                    // Siempre que se dé clic afuera
                    // decidimos cerrar el menú
                    setOpenMenu(false)
                }}
                // children={"Hola"} // Menos común
                title={(
                    <h1>
                        <span style={{color: "tomato"}}>Banxico</span>
                        <span>Menú Principal</span>
                    </h1>
                )}
                // title="Hola mundo"
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                        padding: "1rem"
                    }}
                >
                    <button>Pulsame 1</button>
                    <button
                        onClick={() => {
                            setOpenMenu(false)
                        }}
                    >
                        cerrar
                    </button>
                </div>
            </Menu>
            <button
                onClick={() => {
                    // Siempre que se dé click al botón
                    // decidimos abrir el menú
                    // (mantemos el estado como true)
                    setOpenMenu(true)
                }}
            >
                Abrir menú
            </button>
            <input
                onKeyDown={event => {
                    if (event.key === "Enter") {
                        if (event.target.value === "abrir") {
                            setOpenMenu(true)
                        }
                    }
                }}
            />
        </div>
    )

}