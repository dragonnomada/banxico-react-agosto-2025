import { configureStore } from "@reduxjs/toolkit"
import { loginSlice } from "./slices/loginSlice"

export const mainStore = configureStore({
    reducer: {
        login: loginSlice.reducer
    }
})