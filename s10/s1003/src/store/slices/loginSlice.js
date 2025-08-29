import { createSlice } from "@reduxjs/toolkit"

export const loginSlice = createSlice({

    name: "login",

    initialState: {
        user: null, // User
        isLogin: false, // boolean
        error: null, // string | null
        isLoading: false, // boolean
    },

    reducers: {

        successLogin(state, { payload: user }) {
            state.user = user
            state.isLogin = true
            state.error = null
            state.isLoading = false
        },
        failLogin(state, { payload: error }) {
            state.isLogin = false
            state.error = error
            state.isLoading = false
        },
        startLogin(state) {
            state.isLoading = true
            state.error = null
            state.isLogin = false
        }

    }

})

export const loginActions = loginSlice.actions