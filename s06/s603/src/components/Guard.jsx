import { useSelector } from "react-redux"
import Login from "./Login"
import Home from "./Home"

export default function Guard() {

    const isSignedIn = useSelector(store => store.auth.isSignedIn)

    if (isSignedIn) return <Home />

    // TODO: Verficar si hay una sesión activo

    return <Login />

}