import { useEffect, useRef } from "react"

// Responsabilidad:
// Mostrar un panel genérico y notificar si se da click fuera de él
export function Menu({ children, title, open, onClose }) {

    const backdropRef = useRef()
    const menuRef = useRef()

    useEffect(() => {
        // El controlador es el ancla (identificador)
        // que permite suscribir y desuscribir
        const onClick = event => {
            if (!open) return

            if (!menuRef.current) return
            if (!backdropRef.current) return

            const target = event.target

            if (!menuRef.current.contains(target)) {
                if (backdropRef.current.contains(target)) {
                    console.log("Click fuera", open)
                    if (onClose) onClose()
                }
            }
        }

        // Suscribimos el evento
        window.addEventListener("click", onClick)

        return () => {
            window.removeEventListener("click", onClick)
        }
    }, [open])

    if (!open) return null

    return (
        <div
            ref={backdropRef}
            style={{
                position: "absolute",
                left: "0px",
                top: "0px",
                height: "100vh",
                width: "100vw",
                // background: "rgba(0, 0, 0, 0.5)",
                background: "rgba(0, 0, 0, 0)",
            }}
        >
            <div
                id={Math.random().toString(10)}
                ref={menuRef}
                style={{
                    position: "absolute",
                    left: "0px",
                    top: "0px",
                    height: "100vh",
                    width: "300px",
                    background: "whitesmoke",
                    borderRight: "1px solid gainsboro"
                }}
            >
                {title}
                {children}
            </div>
        </div>
    )

}