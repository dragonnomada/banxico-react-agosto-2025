import Counter from "../components/Counter"
import Gallery from "../components/Gallery"

// STATELESS COMPONENT
export default function App() {

    return (
        <div>
            <Counter />
            <Gallery />
            <span id={Math.random().toString()}>Fijo</span>
        </div>
    )

}