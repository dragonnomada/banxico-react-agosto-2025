import { Suspense } from "react"
import ListUser from "./components/ListUser"

export default function App() {

    return (
        <Suspense
            fallback={
                <span>Cargando...</span>
            }
        >
            <ListUser />
        </Suspense>
    )

}