import { useReducer } from "react"

export default function CalculadoraIVA() {

    const [state, dispatch] = useReducer((state, [type, payload]) => {
        if (type === "UPDATE_SUBTOTAL") {
            const subtotal = payload
            const iva = state.iva
            const total = subtotal * (1 + iva / 100)
            return {
                ...state,
                subtotal,
                iva,
                total
            }
        } else if (type === "UPDATE_IVA") {
            const subtotal = state.subtotal
            const iva = payload
            const total = subtotal * (1 + iva / 100)
            return {
                ...state,
                subtotal,
                iva,
                total
            }
        } else if (type === "UPDATE_TOTAL") {
            const total = payload
            const iva = state.iva
            const subtotal = total / (1 + iva / 100)
            return {
                ...state,
                subtotal,
                iva,
                total
            }
        }
        return state
    }, {
        subtotal: 0,
        iva: 16,
        total: 0
    })

    return (
        <div>
            <div>
                <input
                    type="number"
                    placeholder="Subtotal"
                    value={state.subtotal.toFixed(2)}
                    onChange={event => {
                        dispatch(["UPDATE_SUBTOTAL", Number(event.target.value)])
                    }}
                />
            </div>
            <div>
                <input
                    type="number"
                    placeholder="IVA"
                    value={state.iva.toFixed(2)}
                    onChange={event => {
                        dispatch(["UPDATE_IVA", Number(event.target.value)])
                    }}
                />
            </div>
            <hr />
            <div>
                <input
                    type="number"
                    placeholder="Total"
                    value={state.total.toFixed(2)}
                    onChange={event => {
                        dispatch(["UPDATE_TOTAL", Number(event.target.value)])
                    }}
                />
            </div>
        </div>
    )

}