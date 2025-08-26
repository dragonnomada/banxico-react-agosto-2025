import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { userAdd } from "../store/thunks/userAdd"
import { usersActions } from "../store/slices/usersSlice"

export default function FormUserAdd() {

    const isCompleted = useSelector(state => state.users.isCompleted)
    const error = useSelector(state => state.users.error)
    const isLoading = useSelector(state => state.users.isLoading)
    const dispatch = useDispatch()

    const [picture, setPicture] = useState("https://placehold.co/400")

    if (isCompleted) return (
        <div>
            <h1>Usuario agregado</h1>
            <button
                onClick={() => {
                    dispatch(usersActions.reset())
                    setPicture("https://placehold.co/400")
                }}
            >
                Agregar otro usuario
            </button>
        </div>
    )

    return (
        <div>
            {
                error ? (
                    <div>
                        <span style={{ color: "red" }}>{error}</span>
                    </div>
                ) : null
            }
            <form onSubmit={event => {
                event.preventDefault()
                const formData = new FormData(event.target)
                const fullName = formData.get("fullName")
                const picture = formData.get("picture")
                const email = formData.get("email")
                const password = formData.get("password")
                const passwordConfirm = formData.get("passwordConfirm")
                console.log("submit", {
                    fullName,
                    picture,
                    email,
                    password,
                    passwordConfirm
                })
                dispatch(userAdd({
                    fullName,
                    picture,
                    email,
                    password,
                    passwordConfirm
                }))
            }}>
                <div>
                    <input
                        disabled={isLoading}
                        name="fullName"
                        required
                        type="text"
                        placeholder="Nombre completo"
                    />
                </div>
                <div>
                    <img
                        style={{
                            width: "120px",
                            height: "120px",
                            objectFit: "cover"
                        }}
                        src={picture || "https://placehold.co/400"}
                        alt="Foto de perfil"
                    />
                </div>
                <div>
                    <input
                        disabled={isLoading}
                        name="picture"
                        type="text"
                        placeholder="Imagen (URL)"
                        value={picture}
                        onChange={event => {
                            setPicture(event.target.value)
                        }}
                    />
                </div>
                <div>
                    <input
                        disabled={isLoading}
                        name="email"
                        type="email"
                        placeholder="Correo"
                    />
                </div>
                <div>
                    <input
                        disabled={isLoading}
                        name="password"
                        type="password"
                        placeholder="Contraseña"
                    />
                </div>
                <div>
                    <input
                        disabled={isLoading}
                        name="passwordConfirm"
                        type="password"
                        placeholder="Confirmar contraseña"
                    />
                </div>
                <div>
                    <button
                        disabled={isLoading}
                        type="submit"
                    >
                        Agregar usuario
                    </button>
                </div>
            </form>
        </div>
    )

}