/*
Uncontrolled: (nativo)
Controlled: value/onChange
*/

import { useEffect } from "react"
import { useRef } from "react"

// useState -> STATEFULL
// useRef -> STATELESS

export function useInputController(inputRef) {

    useEffect(() => {
        console.log(inputRef.current)
        const onFocus = event => {
            console.log("FOCUS")
        }
        const onBlur = event => {
            console.log("BLUR")
        }
        // Elemento DOM
        inputRef.current.addEventListener("focus", onFocus)
        inputRef.current.addEventListener("blur", onBlur)
        return () => {
            inputRef.current.removeEventListener("focus", onFocus)
            inputRef.current.removeEventListener("blur", onBlur)
        }
    }, [inputRef])

}

export default function FormUser() {

    const inputNombreRef = useRef()
    const inputCorreoRef = useRef()

    useInputController(inputNombreRef)
    useInputController(inputCorreoRef)

    return (
        <div id={Math.random().toString()}>
            <input 
                ref={inputNombreRef}
                type="text"
                placeholder="Nombre"
            />
            <input 
                ref={inputCorreoRef}
                type="text"
                placeholder="Correo"
            />
        </div>
    )

}