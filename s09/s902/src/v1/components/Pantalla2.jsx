import { useEffect } from "react"
import { useState } from "react"

export default function Pantalla2() {

    const [count, setCount] = useState(0)

    useEffect(() => {
        const id = setTimeout(() => {
            setCount(count + 1)
        }, 1_000)
        return () => {
            clearTimeout(id)
        }
    }, [])

    return (
        <div>
            <span>Count: {count}</span>
        </div>
    )

}