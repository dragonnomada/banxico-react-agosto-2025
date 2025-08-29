import { loginActions } from "../slices/loginSlice"

// Thunk -> Lógica de operación
// Meta-función (función de orden superior)

// La primer función determina la acción
// La segunda función (interna) determina el proceso (el thunk)
export function signInAuto() {

    // thunk: dispatch / getState
    return async (dispatch, getState) => {

        dispatch(loginActions.startLogin())

        // TODO: Desencriptar la cadena del usuario
        const user = JSON.parse(localStorage.getItem("user") || "null")

        if (user) {
            dispatch(loginActions.successLogin(user))
        } else {
            const error = "El usuario no ha iniciado sesión"
            dispatch(loginActions.failLogin(error))
        }

    }

}