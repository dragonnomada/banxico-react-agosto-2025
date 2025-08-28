import { useReducer, useState } from "react"
import TextInput from "./TextInput"

export function useForm(fields, validator) {

    const [data, updateData] = useReducer((data, [field, value]) => {
        return {
            ...data,
            [field]: value
        }
    }, {})
    const [errors, updateError] = useReducer((errors, [field, error]) => {
        return {
            ...errors,
            [field]: error ? error : undefined
        }
    }, {})

    const controls = fields.map(field => {

        field.value = data[field.name]
        field.error = errors[field.name]

        field.updateValue = (value) => {
            // TODO: Validar el campo
            if (validator) {
                updateError([field.name, null])
                try {
                    validator(field.name, value)
                } catch (error) {
                    updateError([field.name, `${error}`])
                } finally {
                    updateData([field.name, value])
                }
            } else {
                updateData([field.name, value])
            }
        }
        field.onEnter = () => {
            // ...
        }
        field.onEscape = () => {
            // ...
        }

        return field

    })

    return [controls, {
        data,
        errors
    }]

}

export default function FormUser() {

    const [controls, { data, errors }] = useForm([
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
    ], (name, value) => {
        if (name === "correo") {
            if (value && value.search("@") < 0) throw `El correo no es válido`
        }
    })

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
            <pre><code>{JSON.stringify({ data, errors }, null, 2)}</code></pre>
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