import React from "react"

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

        if (this.state.error) return <p style={{color: "red"}}>{this.state.error}</p>

        return (
            <div>
                <span>Count: {this.state.count}</span>
            </div>
        )

    }

}