import { useSelector } from "react-redux"
import FormUserAdd from "./FormUserAdd"

export default function Home() {

    const user = useSelector(store => store.auth.user)

    return (
        <div
            style={{
                padding: "1rem"
            }}
        >
            <h1>Bienvenido {user.fullName}</h1>
            <div>
                <FormUserAdd />
            </div>
        </div>
    )

}