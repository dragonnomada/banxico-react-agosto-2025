import { useEffect } from "react"
import { useReducer } from "react"

const fetchApiReducer = (state, [type, payload]) => {
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

/**
 * 
 * @param {*} fetchApi 
 * @param {*} defaultData 
 * @param {*} autoFetch 
 * @returns 
 */
export function useFetchQuery(fetchApi, defaultData = [], autoFetch = true) {

    const [state, dispatch] = useReducer(fetchApiReducer, {
        data: defaultData,
        error: null,
        isLoading: null,
        isError: false
    })

    const refetch = async (...params) => {
        dispatch(["FETCHING"])
        try {
            const data = await fetchApi(...params)
            dispatch(["FETCHED", data])
            dispatch(["DONE"])
        } catch (error) {
            dispatch(["FAIL", `${error}`])
        }
    }

    useEffect(() => {
        if (autoFetch) {
            refetch()
        }
    }, [])

    return {
        data: state.data,
        error: state.error,
        isError: state.isError,
        isLoading: state.isLoading,
        refetch,
    }

}