import { createSlice } from "@reduxjs/toolkit"

export const authSlice = createSlice({

    name: "auth",

    // State
    initialState: {
        isSignedIn: false,
        user: null,
        error: null,
        isLoading: false,
        lastSignedIn: null
    },

    // Actions (non-conditional)
    reducers: {

        // signInDone(state, action) {
        //     const user = action.payload
        //     state.user = user
        //     state.isSignedIn = true
        //     state.isLoading = false
        //     state.error = null
        // },
        // signInError(state, action) {
        //     const error = action.payload
        //     state.user = null
        //     state.isSignedIn = false
        //     state.isLoading = false
        //     state.error = error
        // },
        clearError(state, action) {
            state.error = null
        },
        updateError(state, action) {
            const error = action.payload
            state.error = error
        },
        startLoading(state, action) {
            state.isLoading = true
        },
        endLoading(state, action) {
            state.isLoading = false
        },
        updateUser(state, action) {
            const user = action.payload
            state.user = user
        },
        clearUser(state, action) {
            state.user = null
        },
        signedInYes(state, action) {
            state.isSignedIn = true
        },
        signedInNo(state, action) {
            state.isSignedIn = false
        },
        updateLastSignedIn(state, action) {
            state.lastSignedIn = new Date().toISOString()
        },
    }

})

export const authActions = authSlice.actions

// Thunks (operaciones sobre las acciones)

/*
NOTA: Los thunks son funciones que reciben datos expuestos (parámetros)
y tienen acceso al despachador y al estado actual (estado fresco)
cada que se determine un proceso, por ejemplo, antes o después de la llamada a un api

El thunk es una meta-función (función compuesta) que recibe los parámetros
y devuelve la operación asíncrona sobre el despachador y el refrescador del estado

export function thunk(...params) {

    return async (dispatch, getState) => {
        ... TODO: llamar a las acciones y sincronizar los estados    
    }

}
*/

// Operación signIn - Acción de acciones (operación)
export const signIn = (email, password) => async (dispatch, getState) => {

    // [Acción 1] - Limpiar los errores
    dispatch(authActions.clearError())
    // [Acción 2] - Iniciar la espera (isLoading = true)
    dispatch(authActions.startLoading())

    // Llamar al API (inicio de sesión)
    const response = await fetch("https://geocarta.org/api/curso/banxico/signIn", {
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
        const { error, user } = await response.json()

        if (error) {
            // [Acción 3.AE1] - Actualizar el error
            dispatch(authActions.updateError(error))
            // [Acción 3.AE2] - Desactiva el inicio de sesión
            dispatch(authActions.signedInNo())
        } else {
            // [Acción 3.AS1] - Actualizar el usuario
            dispatch(authActions.updateUser(user))
            // [Acción 3.AS2] - Actualizar la última fecha de inicio de sesión
            dispatch(authActions.updateLastSignedIn())
            // [Acción 3.AS3] - Activar el inicio de sesión
            dispatch(authActions.signedInYes())
        }

    } else {
        const error = await response.text()
        console.warn({ error })
        // [Acción 3.B1] - Actualizar el error
        dispatch(authActions.updateError(`No se pudo llamar al API (${response.status})`))
        // [Acción 3.B2] - Finalizar la espera
        dispatch(authActions.signedInNo())
    }

    // [Acción 4] - Finalizar la espera
    dispatch(authActions.endLoading())
}