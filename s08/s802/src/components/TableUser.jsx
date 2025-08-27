import { useState } from "react"
import Table from "./Table"
import { useEffect } from "react"
import { userAllApi } from "../api/userAllApi"

export default function TableUser() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        userAllApi("").then(users => {
            console.log(users)
            setUsers(users)
        })
    }, [])

    return (
        <Table
            columns={["fullName", "email"]}
            columnMap={{
                fullName: "Nombre Completo",
                email: "Correo"
            }}
            rows={users}
        />
    )

}