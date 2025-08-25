// Resposabilidad:
// Unifica/separa a los reductores de estados
import { configureStore } from "@reduxjs/toolkit"
import { authSlice } from "./slices/authSlice"

export const store = configureStore({
    
    // slices
    reducer: {
        auth: authSlice.reducer,
    }

})