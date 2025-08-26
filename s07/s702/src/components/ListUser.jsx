import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { userSearch } from "../store/thunks/userSearch"

export default function ListUser() {

    const users = useSelector(state => state.users.users)
    const isCompleted = useSelector(state => state.users.isCompleted)
    const dispatch = useDispatch()

    const [search, setSearch] = useState("")

    const onSearch = () => {
        dispatch(userSearch(search))
    }

    useEffect(() => {
        dispatch(userSearch())
    }, [])

    useEffect(() => {
        if (isCompleted) {
            dispatch(userSearch())
        }
    }, [isCompleted])

    return (
        <div>
            <div>
                <input
                    type="search"
                    placeholder="Buscar..."
                    value={search || ""}
                    onChange={event => {
                        setSearch(event.target.value)
                        if (!event.target.value) {
                            onSearch()
                        }
                    }}
                    onKeyDown={event => {
                        if (event.key === "Enter") {
                            onSearch()
                        }
                    }}
                    onKeyUp={event => {
                        if (event.key === "Escape") {
                            onSearch()
                        }
                    }}
                />
                <button
                    onClick={() => {
                        onSearch()
                    }}
                >
                    buscar
                </button>
            </div>
            {
                users.length === 0 ? (
                    <span>No hay usuarios</span>
                ) : null
            }
            {
                users.map(user => {
                    return (
                        <div
                            key={user.email}
                        >
                            {/* <pre><code>{JSON.stringify(user, null, 2)}</code></pre> */}
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "1rem",
                                    borderBottom: "1px dotted gray",
                                    paddingTop: "0.5rem"
                                }}
                            >
                                <div>
                                    <img
                                        style={{
                                            width: "4rem",
                                            height: "4rem",
                                            objectFit: "cover"
                                        }}
                                        src={user.picture || "https://placehold.co/300"}
                                        alt={`Picture of ${user.fullName}`}
                                    />
                                </div>
                                <div>
                                    <div>
                                        <span style={{ fontWeight: "bold" }}>{user.fullName}</span>
                                    </div>
                                    <div>
                                        <span style={{ color: "crimson" }}>{user.email}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )

}