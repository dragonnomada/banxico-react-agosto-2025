// [PASO 2] - Crear la lógica parcial del almacén de reductores (el reductor de productos)

import { createSlice } from "@reduxjs/toolkit"
import { fakePrincipalProducts } from "../mockup/products"

export const productsSlice = createSlice({
    name: "products",
    initialState: {
        error: null,
        isLoading: false,
        productsSearch: fakePrincipalProducts,
        productsSelected: [],
        total: 0,
    },
    reducers: {
        updateError(state, action) {
            state.error = action.payload
        },
        clearError(state, action) {
            state.error = null
        },
        startLoading(state, action) {
            state.isLoading = true
        },
        stopLoading(state, action) {
            state.isLoading = false
        },
        updateProductsSearch(state, action) {
            state.productsSearch = action.payload
        },
        updateProductsSelected(state, action) {
            state.productsSelected = action.payload
            // Calcular el nuevo estado del total 
            // (precio de todos los productos seleccionados)
            state.total = 0
            for (const product of state.productsSelected) {
                state.total += product.price
            }
        },
        selectProduct(state, action) {
            const productSelected = action.payload
            state.productsSelected = [
                ...state.productsSelected,
                productSelected
            ]
            // Calcular el nuevo estado del total 
            // (precio de todos los productos seleccionados)
            state.total = 0
            for (const product of state.productsSelected) {
                state.total += product.price
            }
        },
        clearProductsSelected(state, action) {
            state.productsSelected = []
            state.total = 0
        },
    }
})

export const {
    clearError,
    clearProductsSelected,
    selectProduct,
    startLoading,
    stopLoading,
    updateError,
    updateProductsSearch,
    updateProductsSelected
} = productsSlice.actions

export const productsActions = productsSlice.actions