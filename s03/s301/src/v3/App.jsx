import { useState } from "react";
import { FormularioGrupo } from "../components/FormularioGrupo";

export default function App() {

    const [datos, setDatos] = useState({})

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                padding: "2rem"
            }}
        >
            <h1>Registro del empleado</h1>
            <pre><code>{JSON.stringify(datos, null, 2)}</code></pre>
            <FormularioGrupo 
                title="Datos generales"
                flow="horizontal"
                controls={[
                    {
                        field: "nombre",
                        type: "text",
                        label: "Nombre",
                        options: {
                            placeholder: "Ej. Alicia Ruby"
                        },
                        getValue(field) {
                            return datos[field] || ""
                        },
                        updateValue(field, value) {
                            console.log("El control", field, value)
                            setDatos({
                                ...datos,
                                [field]: value
                            })
                        }
                    },
                    {
                        field: "apellidoPaterno",
                        type: "text",
                        label: "Apellido Paterno",
                        options: {
                            placeholder: "Ej. Wong"
                        },
                        getValue(field) {
                            return datos[field]
                        },
                        updateValue(field, value) {
                            console.log("El control", field, value)
                            setDatos({
                                ...datos,
                                [field]: value
                            })
                        }
                    },
                    {
                        field: "apellidoMaterno",
                        type: "text",
                        label: "Apellido Materno",
                        options: {
                            placeholder: "Ej. Díaz"
                        },
                        getValue(field) {
                            return datos[field]
                        },
                        updateValue(field, value) {
                            console.log("El control", field, value)
                            setDatos({
                                ...datos,
                                [field]: value
                            })
                        }
                    },
                ]}
            />
            <FormularioGrupo 
                title="Edad e ingreso"
                flow="horizontal"
                controls={[
                    {
                        field: "edad",
                        type: "number",
                        label: "Edad",
                        options: {
                            placeholder: "Ej. 23 años"
                        }
                    },
                    {
                        field: "sueldo",
                        type: "number",
                        label: "Salario",
                        options: {
                            placeholder: "Ej. $25,800"
                        }
                    },
                ]}
            />
            <FormularioGrupo
                title="Datos adicionales"
                controls={[
                    {
                        field: "puesto",
                        type: "select",
                        label: "Puesto laboral",
                        options: {
                            items: [
                                {
                                    id: "dev",
                                    label: "Desarrollador"
                                },
                                {
                                    id: "rh",
                                    label: "Recursos Humanos"
                                },
                            ]
                        }
                    }
                ]}
            />
        </div>
    )

}