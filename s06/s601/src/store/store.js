// [PASO 1] - Configuración del almacén de estados y acciones (reductores)
import { configureStore } from "@reduxjs/toolkit"
import { usersSlice } from "./usersSlice"
import { productsSlice } from "./productsSlice"

export const store = configureStore({

    reducer: {
        // [usersSlice.name]: usersSlice.reducer,
        users: usersSlice.reducer,
        products: productsSlice.reducer
    }

})