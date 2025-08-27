import Counter from "../components/Counter"
import Gallery from "../components/Gallery"
import MenuLayout from "../components/MenuLayout"

// STATELESS COMPONENT
export default function App() {

    return (
        <MenuLayout>
            <div>
                <Counter />
                <Gallery />
                <span id={Math.random().toString()}>Fijo</span>
            </div>
        </MenuLayout>
    )

}