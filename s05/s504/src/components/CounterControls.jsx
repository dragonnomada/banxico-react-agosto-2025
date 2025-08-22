import { useDispatch, useSelector } from "react-redux"
import { counterSlice } from "../stores/counterSlice"

export default function CounterControls() {

    const count = useSelector(state => state.counter.count)
    const dispatch = useDispatch()

    const increment = () => {
        dispatch(counterSlice.actions.increment())
    }
    const decrement = () => {
        dispatch(counterSlice.actions.decrement())
    }

    return (
        <div>
            <button
                onClick={() => {
                    increment()
                }}
            >
                Increment
            </button>
            <button
                disabled={count < 1}
                onClick={() => {
                    decrement()
                }}
            >
                Decrement
            </button>
        </div>
    )

}