import { useEffect } from "react"
import { useState } from "react"
// import Gallery from "./Gallery"

// STATEFULL COMPONENT
export default function Counter() {

    const [count, setCount] = useState(1)

    useEffect(() => {
        const id = setTimeout(() => {
            setCount(count + 1)
        }, 1_000)
        return () => {
            clearTimeout(id)
        }
    }, [count])

    return (
        <div>
            <span id={Math.random().toString()}>app {count}</span>
            {/* <Gallery /> */}
        </div>
    )

}