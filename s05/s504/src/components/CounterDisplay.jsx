import { useSelector } from "react-redux"

export default function CounterDisplay() {

    const count = useSelector(state => state.counter.count)

    return (
        <span>Count: {count}</span>
    )

}