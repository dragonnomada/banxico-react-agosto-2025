import { Formulario } from "../components/Formulario"

export default function App() {

    return (
        <Formulario 
            defaultData={{
                nombre: "Pepe",
                edad: 24,
            }}
            debug
        />
    )

}