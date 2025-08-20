import { useState } from "react"

export function Formulario({ defaultData, debug }) {

    const [data, setData] = useState(defaultData || {})

    return (
        <div>
            <h1>Registrar Empleado</h1>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                    padding: "1rem"
                }}
            >
                <div
                    style={{
                        display: "flex",
                        gap: "1rem"
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.3rem"
                        }}
                    >
                        <label htmlFor="nombre">Nombre:</label>
                        <input
                            id="nombre"
                            type="text"
                            placeholder="Nombre"
                            value={data.nombre}
                            onChange={event => {
                                const nombre = event.target.value
                                setData({
                                    ...data, // Objeto propagado | spread | Propaga las claves anteriores (copia del objeto)
                                    nombre // Variable incrustada | embeding: key: value, key: <key>
                                    // "nombre": nombre
                                })
                            }}
                        />
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.3rem"
                    }}>
                        <label htmlFor="edad">Edad:</label>
                        <input
                            id="edad"
                            type="number"
                            placeholder="0"
                            value={data.edad || ""}
                            onChange={event => {
                                const edad = Number(event.target.value)
                                setData({
                                    ...data,
                                    edad
                                })
                            }}
                        />
                    </div>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.3rem"
                }}>
                    <label htmlFor="salario">Salario:</label>
                    <input
                        id="salario"
                        type="number"
                        placeholder="0"
                        value={data.salario}
                        onChange={event => {
                            const salario = Number(event.target.value)
                            setData({
                                ...data,
                                salario
                            })
                        }}
                    />
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.3rem"
                }}>
                    <label htmlFor="puesto">Puesto:</label>
                    <select
                        id="puesto"
                        value={data.puesto}
                        onChange={event => {
                            const puesto = event.target.value
                            setData({
                                ...data,
                                // puesto: ({rh: 1})[puesto]
                                puesto
                            })
                        }}
                    >
                        <option value="dev">Desarrollador</option>
                        <option value="rh">Recursos Humanos</option>
                        <option value="bi">Análisis de Datos</option>
                    </select>
                </div>
            </div>
            {
                debug ? (
                    <div>
                        <pre><code>{JSON.stringify(data, null, 2)}</code></pre>
                    </div>
                ) : null
            }
        </div>
    )

}