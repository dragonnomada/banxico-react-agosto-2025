// Resposabilidad:
// Unifica/separa a los reductores de estados
import { configureStore } from "@reduxjs/toolkit"
import { authSlice } from "./slices/authSlice"
import { usersSlice } from "./slices/usersSlice"

export const store = configureStore({
    
    // slices
    reducer: {
        auth: authSlice.reducer,
        users: usersSlice.reducer,
    }

})