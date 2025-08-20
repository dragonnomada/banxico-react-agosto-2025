import { useEffect, useRef, useState } from "react"

export function Menu({ open, onClose }) {

    const menuRef = useRef()

    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("menú montado")

        // El controlador es el ancla (identificador)
        // que permite suscribir y desuscribir
        const onClick = event => {
            console.log("click", event)
            const target = event.target
            console.log(menuRef.current)
            // if (menuRef.current.contains(target)) {
            //     alert("Contenido")
            // } else {
            //     alert("Fuera")
            // }
            if (!menuRef.current.contains(target)) {
                if (onClose) onClose()
            }
        }

        // Suscribimos el evento
        window.addEventListener("click", onClick)

        return () => {
            console.log("menú desmontado")
            window.removeEventListener("click", onClick)
        }
    }, [])

    useEffect(() => {
        const id = setTimeout(() => {
            setCount(count + 1)
        }, 1_000)
        return () => {
            clearTimeout(id)
        }
    }, [count])

    if (!open) return null

    return (
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
            <p>
                <span>Hola {count}</span>
            </p>
        </div>
    )

}