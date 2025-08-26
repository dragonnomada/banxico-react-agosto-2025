// Resposabilidad:
// Los slices solo retienen estados contextuales
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
        autoLogin(state, action) {
            state.isSignedIn = true,
            state.user = {
                fullName: "Prueba",
                email: "dev@test",
                picture: "https://placehold.co/200"
            },
            state.error = null,
            state.isLoading = false,
            state.lastSignedIn = new Date().toISOString()
        }
    }

})

export const authActions = authSlice.actions