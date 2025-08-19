import React from "react"
import { Title } from "./Title"
import { Counter } from "./Counter"

export class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            fecha: new Date().toLocaleString()
        }
    }

    componentDidMount() {
        this.id = setInterval(() => {
            this.setState({
                fecha: new Date().toLocaleString()
            })
        }, 5_000)
    }

    componentWillUnmount() {
        clearInterval(this.id)
    }

    render() {

        return (
            <div>
                <Title 
                    text={`App 201 - ${this.state.fecha}`}
                />
                <Counter 
                    initialValue={200}
                    autoCount
                />
                <Counter 
                    initialValue={100}
                    // autoCount={false}
                />
            </div>
        )

    }

}