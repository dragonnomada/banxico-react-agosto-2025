import { useEffect } from "react"
import { userAllApi } from "../api/userAllApi"
import TablePro from "./TablePro"
import { useTablePro } from "../hooks/useTablePro"
import TableSearchPro from "./TableSearchPro"

export default function TableUser() {

    const table = useTablePro()

    useEffect(() => {
        table.updateModel(["fullName", "email"], {
            fullName: "Nombre Completo",
            email: "Correo"
        }, [])
        userAllApi().then(users => {
            table.saveRows(users)
            console.log({ users })
        })
    }, [])

    return (
        <div
            style={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                background: "gainsboro"
            }}
        >
            <TableSearchPro tableModel={table} />
            <hr />
            <div
                style={{
                    flexGrow: 1,
                    background: "white"
                }}
            >
                <TablePro tableModel={table} />
            </div>
            <hr />
            <div>
                <button
                    onClick={() => {
                        table.resetRows()
                    }}
                >
                    Reiniciar filas
                </button>
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
        </div>
    )

}