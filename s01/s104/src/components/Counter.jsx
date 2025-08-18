import React from "react"

// this.state -> diccionario de valores retenidos
// this.setState -> cambiamos parcialmente el diccionario

// En los componentes funcionales: const [state, setState] = useState({ ... })

export class Counter extends React.Component {

    // props -> { <key>: <value> }
    constructor(props) {
        super(props)

        this.state = {
            error: null,
            count: 0
        }

        if (props.initialCount === undefined) {
            this.state.error = "No se recibió el conteo inicial"
        } else {
            if (typeof props.initialCount === "number") {
                this.state.count = props.initialCount
            } if (typeof props.initialCount === "string") {
                this.state.count = Number(props.initialCount)
                if (Number.isNaN(this.state.count)) {
                    this.state.error = `El conteo inicial se puede tratar como número (${props.initialCount})`
                    this.state.count = 0
                }
            } else {
                this.state.error = `El conteo inicial no es un número (${typeof props.initialCount})`
            }
        }
    }

    render() {

        if (this.state.error) return <p style={{ color: "red" }}>{this.state.error}</p>

        // if (this.state.count >= 110) return <h1>🎉 Felicidades, llegaste al 110</h1>
        if (this.state.count >= 110) return null

        return (
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <span>Count: {this.state.count}</span>
                <div style={{ display: "flex", gap: "1rem" }}>
                    <button
                        onClick={event => {
                            if (event.shiftKey) {
                                if (this.state.count <= 100) {
                                    this.setState({
                                        error: "El contado no podía ser menor a 100"
                                    })
                                    return
                                }

                                this.setState({
                                    count: this.state.count - 1
                                })
                            } else {
                                this.setState({
                                    count: this.state.count + 1
                                })
                            }
                        }}
                    >
                        Increment
                    </button>
                    <button
                        onClick={event => {
                            if (event.shiftKey) {
                                this.setState({
                                    count: this.state.count + 1
                                })
                            } else {
                                if (this.state.count <= 100) {
                                    this.setState({
                                        error: "El contado no podía ser menor a 100"
                                    })
                                    return
                                }

                                this.setState({
                                    count: this.state.count - 1
                                })
                            }
                        }}
                    >
                        Decrement
                    </button>
                </div>
            </div>
        )

    }

}