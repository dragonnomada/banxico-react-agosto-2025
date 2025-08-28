import { useLayoutEffect } from "react"
import { useState } from "react"
import { createPortal } from "react-dom"
import Home from "./Home"
import { useMemo } from "react"
import Pantalla1 from "./Pantalla1"
import Pantalla2 from "./Pantalla2"
import Pantalla3 from "./Pantalla3"
import { useEffect } from "react"

export default function Menu() {

    const [userMenu, setUserMenu] = useState([])

    const [path, setPath] = useState(null)

    const component = useMemo(() => {
        if (path === "/home") return <Home />
        if (path === "/pantalla1") return <Pantalla1 />
        if (path === "/pantalla2") return <Pantalla2 />
        if (path === "/pantalla3") return <Pantalla3 />
        if (path === "/pantalla4") return <span>Pantalla 4</span>
        return <span>Not found {path}</span>
    }, [path])

    // ! TIME-HACK
    useEffect(() => {
        setTimeout(() => {
            setPath("/home")
        }, 0)
    }, [])

    useEffect(() => {
        fetch("https://geocarta.org/api/curso/banxico/user/menu").then(async response => {
            if (response.ok) {
                const { menu } = await response.json()
                setUserMenu(menu)
            }
        })
    }, [])

    return (
        <div className="menu-container">
            {
                userMenu.length === 0 ? (
                    <span><i className="fas fa-spinner fa-spin"></i></span>
                ) : null
            }
            {
                userMenu.map(menu => {
                    return (
                        <a
                            key={menu.path}
                            href={`#/${menu.path}`}
                            onClick={event => {
                                event.preventDefault()
                                setPath(menu.path)
                            }}
                        >
                            {menu.label}
                        </a>
                    )
                })
            }
            {/* <a
                href="#"
                onClick={event => {
                    event.preventDefault()
                    setPath("/home")
                }}
            >
                Inicio
            </a>
            <a
                href="#"
                onClick={event => {
                    event.preventDefault()
                    setPath("/pantalla1")
                }}
            >
                Pantalla 1
            </a>
            <a
                href="#"
                onClick={event => {
                    event.preventDefault()
                    setPath("/pantalla2")
                }}
            >
                Pantalla 2
            </a>
            <a
                href="#"
                onClick={event => {
                    event.preventDefault()
                    setPath("/pantalla3")
                }}
            >
                Pantalla 3
            </a>
            <a
                href="#"
                onClick={event => {
                    event.preventDefault()
                    setPath("/pantalla4")
                }}
            >
                Pantalla 4
            </a> */}
            {
                path ? (
                    createPortal(
                        component,
                        document.getElementById("panel"),
                        path
                    )
                ) : component
            }
        </div>
    )

}