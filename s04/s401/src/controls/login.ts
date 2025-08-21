export const loginDefaultState = {
    nombre: "",
    correo: "",
    frase: ""
}

export const loginControls = ({
    getField,
    setField
}) => [
    {
        type: "text",
        field: "nombre",
        textProps: {
            placeholder: "Ej. Nombre",
            value: getField("nombre"),
            onChange(event) {
                console.log(event.target.value)
                setField("nombre", event.target.value)
            }
        }
    },
    {
        type: "text",
        field: "contraseña",
        textProps: {
            placeholder: "Ej. Secreto",
            value: getField("frase"),
            onChange(event) {
                console.log(event.target.value)
                setField("frase", event.target.value)
            }
        }
    },
    {
        type: "text",
        field: "correo",
        textProps: {
            placeholder: "Ej. Correo",
            value: getField("correo"),
            onChange(event) {
                console.log(event.target.value)
                setField("correo", event.target.value)
            }
        }
    }
]