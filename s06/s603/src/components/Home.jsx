import { useSelector } from "react-redux"

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
                <pre><code>{JSON.stringify(user, null, 2)}</code></pre>
            </div>
        </div>
    )

}