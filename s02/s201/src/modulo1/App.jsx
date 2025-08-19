import React from "react"

export class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            bloqueado: false,
            title: "Mi app",
            count: 0
        }

        if (this.props.title) {
            this.state.title = this.props.title
        }

    }

    componentDidMount() {
        console.log("El componente se está montando :D")
        const uuid = Math.random().toString(16)
        this.id = setInterval(() => {
            console.log("tick", uuid)
            this.setState({ // Repintado automático
                count: this.state.count + 1
            })
        }, 1_000)
    }

    componentWillUnmount() {
        console.log("El componente se está desmontando")
        window.clearInterval(this.id)
    }

    componentDidCatch(props) {
        console.log({ props })
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log({ nextProps })
    // }

    // componentDidUpdate(prevProps, prevState) {

    // }

    render() {

        console.log("Render", new Date().toLocaleTimeString())

        if (this.state.bloqueado) return (
            <span style={{ color: "red" }}>BLOQUEADO</span>
        )

        return (
            <div>
                <div>
                    <h1>{this.state.title}</h1>
                </div>
                <div>
                    <span>Conteo: {this.state.count}</span>
                </div>
            </div>
        )

    }

}