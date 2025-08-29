"use client"
import getAcquisitions from "@/store/thunks/getAcquisitions"
import { Chart } from "chart.js/auto"
import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"

export default function HomePage() {

    const user = useSelector(state => state.login.user)
    const acquisitions = useSelector(state => state.datasets.acquisitions)
    const reportAcquisitions = useSelector(state => state.datasets.reportAcquisitions)
    const dispatch = useDispatch()

    const canvasRef = useRef()
    const chart = useRef()

    const updateReport = () => {
        if (chart.current) {
            chart.current.destroy()
        }
        chart.current = new Chart(canvasRef.current, {
            type: "bar",
            data: {
                labels: reportAcquisitions.map(row => row.fecha),
                datasets: [
                    {
                        label: "Acquisitions by year",
                        data: reportAcquisitions.map(row => row.total)
                    }
                ]
            }
        })
    }

    useEffect(() => {
        dispatch(getAcquisitions())
        return () => {
            if (chart.current) {
                chart.current.destroy()
            }
        }
    }, [])

    useEffect(() => {
        if (reportAcquisitions) {
            updateReport()
        }
    }, [reportAcquisitions])

    return (
        <div>
            <h1>Bienvenido {user.fullName}</h1>
            <button
                onClick={() => {
                    dispatch(getAcquisitions())
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
                            acquisitions.map(({ fecha, concepto, monto }, index) => {
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