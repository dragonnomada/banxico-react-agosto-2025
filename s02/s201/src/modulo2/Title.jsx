import React from "react"

export class Title extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            text: "-"
        }

        if (props.text) {
            this.state.text = props.text
        }

        // se propone el state final (en la fase de construcción)
    }

    shouldComponentUpdate(nextProps) {
        console.log({ nextProps })
        this.setState({
            text: nextProps.text
        })
        return true
    }

    render() {

        return (
            <h1>{this.state.text}</h1>
        )

    }

}