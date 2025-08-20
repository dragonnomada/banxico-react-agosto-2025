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

export const createControl = control => {
    if (control.type === "text") {
        return (
            <input
                type="text"
                placeholder={control.options?.placeholder}
            />
        )
    }
    if (control.type === "number") {
        return (
            <input
                type="number"
                placeholder={control.options?.placeholder}
            />
        )
    }
    if (control.type === "password") {
        return (
            <input
                type="password"
                placeholder={control.options?.placeholder}
            />
        )
    }
    if (control.type === "select") {
        return (
            <select>
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