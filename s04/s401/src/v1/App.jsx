import { useState } from "react"
import { buildControl } from "../components/FormBuilder"
import { loginControls, loginDefaultState } from "../controls/login"
import { FormLogin } from "../components/FormLogin"

export default function App() {

    const [datos, setDatos] = useState(loginDefaultState)

    const controls = loginControls({
        getField(field) {
            return datos[field]
        },
        setField(field, value) {
            setDatos({
                ...datos,
                [field]: value
            })
        },
    })

    return (
        <div>
            <pre><code>{JSON.stringify(datos, null, 2)}</code></pre>
            {controls.map(buildControl)}
            <FormLogin />
        </div>
    )

}