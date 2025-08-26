import { usersActions } from "../slices/usersSlice"

export function userSearch(search) {
    
    return async (dispatch, getState) => {

        dispatch(usersActions.startLoading())
        dispatch(usersActions.clearError())

        const response = await fetch("http://geocarta.org/api/curso/banxico/user/all", {
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                search
            })
        })

        if (response.ok) {
            const { error, users } = await response.json()

            if (error) {
                dispatch(usersActions.updateError(error))    
            } else {
                dispatch(usersActions.updateUsers(users))
            }
        } else {
            dispatch(usersActions.updateError(`Falló la petición (HTTP/${response.status})`))
        }

        dispatch(usersActions.endLoading())

    }

}