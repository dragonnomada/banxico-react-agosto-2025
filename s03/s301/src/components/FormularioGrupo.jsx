const modelo = {

    title: "Datos generales",
    flow: "vertical",
    controls: [
        {
            field: "nombre",
            label: "Nombre",
            type: "text",
            options: {
                placeholder: "Ej. Alicia Wong"
            }
        },
        {
            field: "edad",
            label: "Edad",
            type: "number",
            options: {
                placeholder: "Ej. 23 años"
            }
        },
        {
            field: "frase",
            label: "Contraseña",
            type: "password",
            options: {
                placeholder: "Ej. secreto"
            }
        },
        {
            field: "puesto",
            label: "Puesto",
            type: "select",
            options: {
                items: [
                    {
                        id: "dev",
                        label: "Recursos Humanos"
                    },
                    {
                        id: "rh",
                        label: "Recursos Humanos"
                    },
                    {
                        id: "bi",
                        label: "Análisis de Datos"
                    },
                    {
                        id: "gg",
                        label: "Generente General"
                    },
                ]
            }
        },
    ]

}

export function FormularioGrupo() {

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
                    {modelo.title}
                </span>
            </div>
            <div
                style={(
                    modelo.flow === "horizontal" ? ({
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
                    modelo.controls.map((control, index) => {

                        const createControl = () => {
                            if (control.type === "text") {
                                return (
                                    <input
                                        type="text"
                                        placeholder={control.options.placeholder}
                                    />
                                )
                            }
                            if (control.type === "number") {
                                return (
                                    <input
                                        type="number"
                                        placeholder={control.options.placeholder}
                                    />
                                )
                            }
                            if (control.type === "password") {
                                return (
                                    <input
                                        type="password"
                                        placeholder={control.options.placeholder}
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
                            return (
                                <span style={{ color: "red" }}>Error: Tipo no válido {control.type}</span>
                            )
                        }

                        return (
                            <div
                                key={control.field}
                            >
                                {createControl()}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

}