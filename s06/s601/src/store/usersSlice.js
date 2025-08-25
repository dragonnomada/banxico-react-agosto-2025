// [PASO 2] - Crear la lógica parcial del almacén de reductores (el reductor de usuarios)
import { createSlice } from "@reduxjs/toolkit"

/*
NOTA:

Las acciones reflejan cambios en el estado NO-CONDICIONALES
es decir, las acciones solicitan que el estado cambie,
esto significa que cuando ocurre una acción, no cuestionamos
si debería ocurrir el cambio en el estado, solo lo aplicamos
*/

// THUNK -> Efectos secundarios que desencadenan acciones

// SAGA -> Efectos secundarios que desencadenan acciones
// QUERY -> Efectos secundarios que desencadenan acciones

export const usersSlice = createSlice({
    name: "users",
    initialState: {
        error: null,
        user: null,
        isSignedIn: false,
    },
    reducers: {
        signIn(state, action) {
            state.error = null
            state.user = action.payload
            state.isSignedIn = true
        },
        signInError(state, action) {
            state.error = action.payload
            state.user = null
            state.isSignedIn = false
        },
        signOut(state, action) {
            state.error = null
            state.user = null
            state.isSignedIn = true
        },
    }
})

// Las acciones tienen que exportarse para un consumo más directo
export const { signIn, signInError, signOut } = usersSlice.actions
export const usersActions = usersSlice.actions