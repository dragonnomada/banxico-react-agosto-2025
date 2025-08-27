import Counter from "../components/Counter"

// STATELESS COMPONENTS
export default function App() {

    return (
        <div>
            <Counter />
            <span id={Math.random().toString()}>Fijo</span>
        </div>
    )

}