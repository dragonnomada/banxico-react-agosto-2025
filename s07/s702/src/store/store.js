// Resposabilidad:
// Unifica/separa a los reductores de estados
import { configureStore } from "@reduxjs/toolkit"
import { authSlice } from "./slices/authSlice"
import { usersSlice } from "./slices/usersSlice"
import { userSearchApi } from "./api/userSearchApi"

export const store = configureStore({
    
    // slices
    reducer: {
        [userSearchApi.reducerPath]: userSearchApi.reducer,
        auth: authSlice.reducer,
        users: usersSlice.reducer,
    },
    middleware: middleware => {
        return middleware().concat(userSearchApi.middleware)
    }

})