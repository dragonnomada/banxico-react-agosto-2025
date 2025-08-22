// [PASO 1] Create Store
import { configureStore } from "@reduxjs/toolkit"
import { counterSlice } from "./counterSlice"

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
})