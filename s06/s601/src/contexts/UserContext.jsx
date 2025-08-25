// Responsabilidad:
// Retener el estado del usuario y sus acciones
// 1. Definir el contexto
// 2. Definir el proveedor del contexto
import { useState } from "react"
import { createContext } from "react"

const initialState = {
    user: {
        fullName: "...",
        email: "...",
        picture: "..."
    },
    isSignedIn: false,
    signIn: async (email, password) => { throw `No se pudo iniciar sesión (${email}) [fake]` }
}

export const UserContext = createContext(initialState)

export function UserProvider({ children }) {

    const [user, setUser] = useState(null)
    const [isSignedIn, setIsSignedIn] = useState(false)

    const signIn = async (email, password) => {
        // TODO: Iniciar sesión real
        // !!! Se ejecutan dos cambios lógicos al estado
        // >>> Acción encadenada
        setUser({
            fullName: "Pepe Ortíz",
            email: "pepe.ortiz@empresa.com",
            picture: "https://m.media-amazon.com/images/M/MV5BMjRiMGMwMWItMTE3NC00OWFlLTk5NzQtMTZiZDA1ZDRjMjM3XkEyXkFqcGc@._V1_.jpg"
        })
        setIsSignedIn(true)
    }

    return (
        <UserContext.Provider value={{
            user,
            isSignedIn,
            signIn
        }}>
            {children}
        </UserContext.Provider>
    )

}