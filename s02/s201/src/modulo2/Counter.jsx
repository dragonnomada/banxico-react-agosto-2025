import React from "react"

export class Counter extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            autoCount: false
        }

        if (props.initialValue) {
            this.state.count = props.initialValue
        }
        if (props.autoCount) {
            this.state.autoCount = props.autoCount
        }
    }

    componentDidMount() {
        this.id = null

        if (this.state.autoCount) {
            this.id = setInterval(() => {
                this.setState({
                    count: this.state.count + 1
                })
            }, 1_000)
        }
    }

    componentWillUnmount() {
        if (this.id) {
            clearInterval(this.id)
        }
    }

    render() {

        // condición ? <expressión verdadera> : <expresión falsa>

        return (
            <div>
                <span>Count: {this.state.count}</span>
                {
                    !this.state.autoCount ? (
                        <div>
                            <div>
                                <button>increment</button>
                            </div>
                            <div>
                                <button>decrement</button>
                            </div>
                        </div>
                    ) : null
                }
            </div>
        )

    }

}