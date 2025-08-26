import { useReducer } from "react"
import { userAllApi } from "../api/userAllApi"
import { useEffect } from "react"

// action: { type, payload } | action.type === "xxxx"
// action: [type, payload] | type === "xxxx"

const apiReducer = (state, { type, payload }) => {
    if (type === "FETCHING") {
        return {
            ...state,
            isLoading: true,
            error: null
        }
    } else if (type === "FETCHED") {
        const data = payload
        return {
            ...state,
            data
        }
    } else if (type === "FAIL") {
        const error = payload
        return {
            ...state,
            data: null,
            error,
            isLoading: false
        }
    } else if (type === "DONE") {
        return {
            ...state,
            isLoading: false
        }
    }

    return state
}

export function useUsersQuery(options = { autoFetch: true }) {

    const [state, dispatch] = useReducer(apiReducer, {
        data: [],
        error: null,
        isLoading: null,
        isError: false
    })

    const refetch = async (search = "") => {
        // FETCHING...
        dispatch({ type: "FETCHING" })
        const [users, error] = await userAllApi(search)
        // FETCHED
        dispatch({ type: "FETCHED", payload: users })
        if (error) dispatch({ type: "FAIL", payload: error }) // FAIL
        else dispatch({ type: "DONE" }) // DONE
    }

    useEffect(() => {
        if (options?.autoFetch) {
            refetch()
        }
    }, [])

    return {
        users: state.data,
        error: state.error,
        isError: state.isError,
        isLoading: state.isLoading,
        refetch,
    }

}