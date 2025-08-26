import { useDispatch, useSelector } from "react-redux"
import Login from "./Login"
import Home from "./Home"
import { useEffect } from "react"
import { authActions } from "../store/slices/authSlice"

const autoLogin = import.meta.env.VITE_APP_BUILD_MODE === "dev"

export default function Guard() {

    const isSignedIn = useSelector(store => store.auth.isSignedIn)

    const dispatch = useDispatch()

    useEffect(() => {

        if (autoLogin) {
            dispatch(authActions.autoLogin())
        }

    }, [])

    if (isSignedIn) return <Home />

    // TODO: Verficar si hay una sesión activo

    return <Login />

}