import { useMemo, useState } from "react" 

export default function MiniDashboard() {

    const icons = [
        "fas fa-user",
        "fas fa-home",
        "fas fa-lock",
        "fas fa-envelope",
        "fas fa-compass",
    ]

    const [total, setTotal] = useState(116)
    const [subtotal, setSubtotal] = useState(100)
    const [iva, setIva] = useState(0.16)
    const [subtotalIva, setSubtotalIva] = useState(0.16 * 100)
    const [descuento, setDescuento] = useState(20)

    const updateSubtotal = subtotal => {
        setSubtotal(subtotal)

        const subtotalIva = subtotal * iva
        const total = subtotal + subtotalIva + descuento
        setSubtotalIva(subtotalIva)
        setTotal(total)
    }

    const updateIva = iva => {
        setIva(iva)

        const subtotalIva = subtotal * iva
        const total = subtotal + subtotalIva + descuento
        setSubtotalIva(subtotalIva)
        setTotal(total)
    }

    const tarjetaTotal = useMemo(() => {
        return (
            <div className="flex gap-2 font-bold justify-between">
                <span><i className={icons[Math.floor(Math.random() * icons.length)]}></i></span>
                <span>Total</span>
                <span>$ {total.toFixed(2)}</span>
            </div>
        )
    }, [total])

    const tarjetaSubtotal = useMemo(() => {
        return (
            <div className="flex gap-2 justify-between">
                <span><i className={icons[Math.floor(Math.random() * icons.length)]}></i></span>
                <span>Subtotal</span>
                <span>$ {subtotal.toFixed(2)}</span>
            </div>
        )
    }, [subtotal])

    const tarjetaIVA = useMemo(() => {
        return (
            <div className="flex gap-2 justify-between">
                <span><i className={icons[Math.floor(Math.random() * icons.length)]}></i></span>
                <span>IVA (%)</span>
                <span>{(iva * 100).toFixed(2)}%</span>
            </div>
        )
    }, [iva])

    const tarjetaSubtotalIVA = useMemo(() => {
        return (
            <div className="flex gap-2 justify-between">
                <span><i className={icons[Math.floor(Math.random() * icons.length)]}></i></span>
                <span>Subtotal IVA</span>
                <span>$ {subtotalIva.toFixed(2)}</span>
            </div>
        )
    }, [subtotalIva])

    const tarjetaDescuento = useMemo(() => {
        return (
            <div className="flex gap-2 justify-between">
                <span><i className={icons[Math.floor(Math.random() * icons.length)]}></i></span>
                <span>Descuento</span>
                <span>$ {descuento.toFixed(2)}</span>
            </div>
        )
    }, [descuento])

    return (
        <div>
            <div>
                <div className="flex">
                    <div className="w-50 flex-grow bg-red-500 text-white p-4">
                        {tarjetaSubtotal}
                        <hr />
                        {tarjetaTotal}
                    </div>
                    <div className="w-50 flex-grow bg-blue-500 text-white p-4">
                        {tarjetaSubtotal}
                        <hr />
                        {tarjetaIVA}
                        <hr />
                        {tarjetaSubtotalIVA}
                    </div>
                </div>
                <div className="flex">
                    <div className="w-50 flex-grow bg-yellow-300 p-4">
                        {tarjetaSubtotal}
                        <hr />
                        {tarjetaSubtotalIVA}
                        <hr />
                        {tarjetaDescuento}
                    </div>
                    <div className="w-50 flex-grow bg-green-400 p-4">
                        {tarjetaTotal}
                        <hr />
                        {tarjetaIVA}
                    </div>
                </div>
            </div>
            <div>
                <button
                    onClick={() => {
                        updateSubtotal(Math.random() * 4000 + 1000)
                    }}
                >
                    Actualizar subtotal
                </button>
                <button
                    onClick={() => {
                        updateIva(Math.random() * 0.99 + 0.01)
                    }}
                >
                    Actualizar iva
                </button>
            </div>
        </div>
    )

}