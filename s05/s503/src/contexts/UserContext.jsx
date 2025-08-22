import { createContext } from "react"

const initialState = {
    user: {
        fullName: "Paco Ortíz",
        email: "paco.ortiz@empresa.com",
        picture: "https://www.altoromexico.com/media/cmsimgnoticias/foto_noticia34765.jpg"
    },
    isSignedIn: false,
    signIn: async (email, password) => { throw `No se pudo iniciar sesión (${email}) [fake]` }
}

export const UserContext = createContext(initialState)