import { useSelector } from "react-redux"
import FormUserAdd from "./FormUserAdd"
import ListUser from "./ListUser"

export default function Home() {

    const user = useSelector(store => store.auth.user)

    return (
        <div
            style={{
                padding: "1rem"
            }}
        >
            <h1>Bienvenido {user.fullName}</h1>
            <div
                style={{
                    display: "flex",
                    gap: "2rem"
                }}
            >
                <div>
                    <FormUserAdd />
                </div>
                <div>
                    <ListUser />
                </div>
            </div>
        </div>
    )

}