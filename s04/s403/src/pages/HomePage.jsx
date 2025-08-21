import { useState } from "react"
import { useEffect } from "react"
import { useLocation, useNavigate, useNavigation, useRouteLoaderData } from "react-router"

export default function HomePage() {

    const navigation = useNavigation()

    const [token, setToken] = useState("abc123")

    useEffect(() => {
        console.log(navigation.json)
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