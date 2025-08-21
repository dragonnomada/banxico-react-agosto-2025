import { useState } from "react"
import { useEffect } from "react"
import { useLocation, useNavigate, useNavigation, useRouteLoaderData } from "react-router"

export default function HomePage() {

    const location = useLocation()

    const [token, setToken] = useState(null)

    useEffect(() => {
        console.log(location.state)
        if (location.state.token) {
            setToken(location.state.token)
        }
    }, [])

    if (!token) return (
        <div>
            <div>
                <span>Invalid token</span>
            </div>
            <button>
                Ir a iniciar sesión
            </button>
        </div>
    )

    return (
        <span>home {token}</span>
    )

    // const location = useLocation()
    // const navigate = useNavigate()

    // useEffect(() => {
    //     console.log({ location })

    //     if (location.pathname === "/") {
    //         console.log("Desde la página principal")
    //         // TODO: Ir al login
    //     } else {
    //         console.log("Desde la navegación")
    //         // TODO: Recuperar información de la navegación
    //     }
    // }, [location])

    // return (
    //     <div>
    //         <span>home {location.pathname}</span>
    //         <button
    //             onClick={() => {
    //                 navigate("/users", {
    //                     replace: true,
    //                     state: {

    //                     }
    //                 })
    //             }}
    //         >
    //             Ir a usuarios
    //         </button>
    //     </div>
    // )
}