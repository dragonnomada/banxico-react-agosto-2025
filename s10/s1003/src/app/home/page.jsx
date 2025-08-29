"use client"
import { Chart } from "chart.js/auto"
import { useEffect, useRef } from "react"
import { useSelector } from "react-redux"

const dataApi = [
    { fecha: "2025-01-01", concepto: "Tintorería", monto: 2500 },
    { fecha: "2025-01-01", concepto: "Transporte", monto: 4500 },
    { fecha: "2025-01-02", concepto: "Comida", monto: 1500 },
    { fecha: "2025-01-02", concepto: "Transporte", monto: 2600 },
    { fecha: "2025-01-03", concepto: "Comida", monto: 1300 },
    { fecha: "2025-01-03", concepto: "Transporte", monto: 4200 },
    { fecha: "2025-01-03", concepto: "Personal Externo", monto: 15_600 },
]

const data = Object.entries(dataApi.reduce((reporte, { fecha, monto }) => {

    let total = reporte[fecha] || 0
    total += monto
    reporte[fecha] = total

    return reporte

}, {})).map(([key, value]) => ({
    fecha: key,
    total: value
}))

console.log(data)

export default function HomePage() {

    const user = useSelector(state => state.login.user)

    const canvasRef = useRef()
    const chart = useRef()

    useEffect(() => {
        chart.current = new Chart(canvasRef.current, {
            type: "bar",
            data: {
                labels: data.map(row => row.fecha),
                datasets: [
                    {
                        label: "Acquisitions by year",
                        data: data.map(row => row.total)
                    }
                ]
            }
        })

        return () => {
            chart.current.destroy()
        }
    }, [])

    return (
        <div>
            <h1>Bienvenido {user.fullName}</h1>
            <button
                onClick={() => {
                    chart.current.destroy()
                    chart.current = new Chart(canvasRef.current, {
                        type: "bar",
                        data: {
                            labels: data.map(row => row.year),
                            datasets: [
                                {
                                    label: "Acquisitions by year",
                                    data: data.map(row => row.count)
                                }
                            ]
                        }
                    })
                }}
            >
                actualizar
            </button>
            <canvas ref={canvasRef}></canvas>
            <div className="flex w-screen">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Concepto</th>
                            <th>Monto</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dataApi.map(({ fecha, concepto, monto }, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{fecha}</td>
                                        <td>{concepto}</td>
                                        <td>$ {monto.toFixed(2)}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )

}