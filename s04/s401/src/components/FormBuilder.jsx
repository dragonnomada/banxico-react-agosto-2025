import { Typography } from "@progress/kendo-react-common"
import { TextBox } from "@progress/kendo-react-inputs"

// 1. Determinar el control de un componente
// dado un modelo recibido
export function buildControl(control) {

    if (control?.type === "text") {
        // Se define un props que será inyectado al TextoBox
        // Los props contienen las mismas claves que un <input>
        const props = control?.textProps || {
            placeholder: "..."
        }
        return (
            <TextBox 
                key={control.field}
                {...props}
            />
        )
    }

    return (
        <Typography.p
            themeColor="error"
        >
            Control not defined as type ({control?.type || "null"})
        </Typography.p>
    )

}