import { useReducer, useState } from "react"
import TextInput from "./TextInput"

export function useForm(fields) {

    const [state, dispatch] = useReducer((state, [field, value]) => {
        return {
            ...state,
            [field]: value
        }
    }, {})

    const controls = fields.map(field => {

        field.value = state[field.name]

        field.updateValue = (value) => {
            // TODO: Validar el campo
            dispatch([field.name, value])
        }
        field.onEnter = () => {
            // ...
        }
        field.onEscape = () => {
            // ...
        }

        return field

    })

    return [controls, state]

}

export default function FormUser() {

    const [controls, data] = useForm([
        {
            name: "nombre",
            type: "text",
            label: "Nombre"
        },
        {
            name: "paterno",
            type: "text",
            label: "Apellido Paterno"
        },
        {
            name: "materno",
            type: "text",
            label: "Apellido Materno"
        },
        {
            name: "correo",
            type: "email",
            label: "Correo"
        },
    ])

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                // backgroundColor: "#333",
                padding: "2rem",
                gap: "1rem"
            }}
        >
            <pre><code>{JSON.stringify({ data }, null, 2)}</code></pre>
            {
                controls.map(control => (
                    <TextInput
                        key={control.name}
                        inputModel={control}
                    />
                ))
            }
        </div>
    )

}