import { useEffect } from "react"
import { userAllApi } from "../api/userAllApi"
import TablePro from "./TablePro"
import { useTablePro } from "../hooks/useTablePro"

export default function TableUser() {

    const table = useTablePro()

    useEffect(() => {
        table.updateModel(["fullName", "email"], {
            fullName: "Nombre Completo",
            email: "Correo"
        }, [])
        userAllApi().then(users => {
            table.updateRows(users)
        })
    }, [])

    return (
        <div>
            <TablePro tableModel={table} />
            <button
                onClick={() => {
                    table.addRow({
                        fullName: Math.random().toString(),
                        email: Math.random().toString() + "@ejemplo.com"
                    })
                }}
            >
                Crear fila
            </button>
            <button
                onClick={() => {
                    table.popRow()
                }}
            >
                Eliminar última fila
            </button>
            <button
                onClick={() => {
                    table.shiftRow()
                }}
            >
                Eliminar primera fila
            </button>
            <button
                onClick={async () => {
                    const users = await userAllApi()
                    table.updateRows(users)
                }}
            >
                Get users
            </button>
            <button
                onClick={() => {
                    table.removeAllRows()
                }}
            >
                Vaciar tabla
            </button>
        </div>
    )

}