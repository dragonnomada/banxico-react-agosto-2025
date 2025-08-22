export default function CounterControls() {

    const count = 0

    const increment = () => {}
    const decrement = () => {}

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