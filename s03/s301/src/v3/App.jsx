import { FormularioGrupo } from "../components/FormularioGrupo";

export default function App() {

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
            <FormularioGrupo 
                flow="horizontal"
                controls={[
                    {
                        field: "nombre",
                        type: "text",
                        label: "Nombre",
                        options: {
                            placeholder: "Ej. Alicia Ruby"
                        }
                    },
                    {
                        field: "apellidoPaterno",
                        type: "text",
                        label: "Apellido Paterno",
                        options: {
                            placeholder: "Ej. Wong"
                        }
                    },
                    {
                        field: "apellidoMaterno",
                        type: "text",
                        label: "Apellido Materno",
                        options: {
                            placeholder: "Ej. Díaz"
                        }
                    },
                ]}
            />
            <FormularioGrupo 
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