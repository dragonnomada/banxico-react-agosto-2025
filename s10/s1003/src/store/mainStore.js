import { configureStore } from "@reduxjs/toolkit"
import { loginSlice } from "./slices/loginSlice"
import { datasetsSlice } from "./slices/datasetsSlice"

export const mainStore = configureStore({
    reducer: {
        login: loginSlice.reducer,
        datasets: datasetsSlice.reducer
    }
})