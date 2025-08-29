import { loginActions } from "../slices/loginSlice"

// Thunk -> Lógica de operación
// Meta-función (función de orden superior)

// La primer función determina la acción
// La segunda función (interna) determina el proceso (el thunk)
export function signIn(email, password) {

    // thunk: dispatch / getState
    return async (dispatch, getState) => {

        dispatch(loginActions.startLogin())

        // Definimos la operación y consumimos otras acciones
        const response = await fetch(`https://geocarta.org/api/curso/banxico/signIn`, {
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        })

        if (response.ok) {
            const { user } = await response.json()
            // TODO: Encriptar la cadena JSON
            localStorage.setItem("user", JSON.stringify(user))
            dispatch(loginActions.successLogin(user))
        } else {
            const error = await response.text()
            dispatch(loginActions.failLogin(error))
        }

    }

}