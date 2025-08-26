import { createSlice } from "@reduxjs/toolkit"

export const usersSlice = createSlice({
    name: "users",
    initialState: {
        isCompleted: false,
        error: null,
        isLoading: false,
        users: []
    },
    reducers: {
        updateError(state, action) {
            state.error = action.payload
        },
        clearError(state, action) {
            state.error = action.payload
        },
        completedYes(state, action) {
            state.isCompleted = true
        },
        completedNo(state, action) {
            state.isCompleted = false
        },
        startLoading(state, action) {
            state.isLoading = true
        },
        endLoading(state, action) {
            state.isLoading = false
        },
        reset(state, action) {
            state.isCompleted = false
            state.error = null
            state.isLoading = false
        },
        updateUsers(state, action) {
            state.users = action.payload
        },
    }
})

export const usersActions = usersSlice.actions