import { usersActions } from "../slices/usersSlice"

const apiUrl = "https://geocarta.org/api/curso/banxico" //process.env.REACT_APP_API_URL

export const userAddValidator = ({
    fullName,
    picture,
    email,
    password,
    passwordConfirm
}) => async (dispatch, getState) => {
    if (/[^\w\s]+/.test(fullName)) {
        dispatch(usersActions.updateError("El nombre no es válido"))
        return
    }

    if (!email) {
        dispatch(usersActions.updateError("El correo no es válido"))
        return
    }

    if (!/[a-z0-9\@\$\_\.\-\!\?]{4,}/i.test(password)) {
        dispatch(usersActions.updateError("La contraseña no tiene el formato adecuado"))
        return
    }

    if (password !== passwordConfirm) {
        dispatch(usersActions.updateError("La contraseña no coincide"))
        return
    }
}

export const userAdd = ({
    fullName,
    picture,
    email,
    password,
    passwordConfirm
}) => async (dispatch, getState) => {

    console.log({
        fullName,
        picture,
        email,
        password,
        passwordConfirm
    })

    dispatch(usersActions.completedNo())
    dispatch(usersActions.startLoading())
    dispatch(usersActions.clearError())

    await dispatch(
        userAddValidator({
            fullName,
            picture,
            email,
            password,
            passwordConfirm
        })
    )

    const state = getState()

    console.log({ state })

    if (state.users.error) {
        dispatch(usersActions.endLoading())
        return
    }

    // TODO: Registra el usuario y aplica las acciones correspondientes (acciones desencadenadas)
    const response = await fetch(`${apiUrl}/user/add`, {
        method: "post",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            fullName,
            picture,
            email,
            password
        })
    })

    if (response.ok) {
        const result = await response.json()

        console.log({ result })

        if (result.error) {
            dispatch(usersActions.updateError(result.error))
            dispatch(usersActions.endLoading())
            return
        } else {
            dispatch(usersActions.endLoading())
            dispatch(usersActions.completedYes())
            return
        }
    } else {
        dispatch(usersActions.updateError("Error al enviar los datos"))
        dispatch(usersActions.endLoading())
        return
    }

}