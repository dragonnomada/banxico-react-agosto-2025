import { useState } from "react"

// const modelo = {
//     title: "Datos generales",
//     flow: "vertical",
//     controls: [
//         {
//             field: "nombre",
//             label: "Nombre",
//             type: "text",
//             options: {
//                 placeholder: "Ej. Alicia Wong"
//             }
//         },
//         {
//             field: "edad",
//             label: "Edad",
//             type: "number",
//             options: {
//                 placeholder: "Ej. 23 años"
//             }
//         },
//         {
//             field: "frase",
//             label: "Contraseña",
//             type: "password",
//             options: {
//                 placeholder: "Ej. secreto"
//             }
//         },
//         {
//             field: "puesto",
//             label: "Puesto",
//             type: "select",
//             options: {
//                 items: [
//                     {
//                         id: "dev",
//                         label: "Recursos Humanos"
//                     },
//                     {
//                         id: "rh",
//                         label: "Recursos Humanos"
//                     },
//                     {
//                         id: "bi",
//                         label: "Análisis de Datos"
//                     },
//                     {
//                         id: "gg",
//                         label: "Generente General"
//                     },
//                 ]
//             }
//         },
//     ]

// }

// Typescript
/*

type ControlItem = {

    id: string
    label: string

}

type ControlOptions = {

    placeholder?: string
    item: ControlItem[]

}

type ControlSpec = {

    field: string
    type: "text" | "password" | "select" | "number"
    label?: string
    options?: ControlOptions

    getValue?: (field: string) => void
    updateValue?: (field: string, value: any) => void

}

type ControlModel = {

    title?: string
    flow?: "vertical" | "horizontal"
    controls: ControlSpec

}

*/

// Responsabilidad:
// 1. Construir el componente según la especificación del tipo
export const createControl = (control) => {
    if (control.type === "text") {
        return (
            <input
                type="text"
                placeholder={control.options?.placeholder}
                value={control.getValue ? control.getValue(control.field) : ""}
                onChange={event => {
                    if (control.updateValue) control.updateValue(control.field, event.target.value)
                }}
            />
        )
    }
    if (control.type === "number") {
        return (
            <input
                type="number"
                placeholder={control.options?.placeholder}
                value={control.getValue ? control.getValue(control.field) : ""}
                onChange={event => {
                    if (control.updateValue) control.updateValue(control.field, event.target.value)
                }}
            />
        )
    }
    if (control.type === "password") {
        return (
            <input
                type="password"
                placeholder={control.options?.placeholder}
                value={control.getValue ? control.getValue(control.field) : ""}
                onChange={event => {
                    if (control.updateValue) control.updateValue(control.field, event.target.value)
                }}
            />
        )
    }
    if (control.type === "select") {
        return (
            <select
                value={control.getValue ? control.getValue(control.field) : undefined}
                onChange={event => {
                    if (control.updateValue) control.updateValue(control.field, event.target.value)
                }}
            >
                {
                    control.options.items.map(item => {
                        return (
                            <option key={item.id} value={item.id}>
                                {item.label}
                            </option>
                        )
                    })
                }
            </select>
        )
    }
    console.error(`[${new Date().toLocaleString()}] Control type is not recognized (${control.type})`, [
        "text",
        "password",
        "number",
        "select"
    ], control)
    return (
        <span style={{ color: "red" }}>Error: Control type is not recognized {control.type}</span>
    )
}

// Responsabilidad:
// 1. Recibir un grupo de controles y mostrarlos (según su tipo)
// 2. Retener su estado y notificar los cambios
export function FormularioGrupo({
    title,
    flow,
    controls
}) {

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.3rem"
            }}
        >
            <div>
                <span
                    style={{
                        color: "#555",
                        // fontStyle: "italic"
                    }}
                >
                    {title}
                </span>
            </div>
            <div
                style={(
                    flow === "horizontal" ? ({
                        display: "flex",
                        flexDirection: "row",
                        gap: "0.5rem"
                    }) : ({
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem"
                    })
                )}
            >
                {
                    (controls || []).map(control => {
                        // controls -> lista de objetos
                        // control -> el objeto que especifica qué campo devolver

                        return (
                            <div
                                key={control.field}
                                style={{
                                    flexGrow: 1,
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "0.3rem"
                                }}
                            >
                                <label htmlFor={control.field}>{control.label}</label>
                                {createControl(control)}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

}