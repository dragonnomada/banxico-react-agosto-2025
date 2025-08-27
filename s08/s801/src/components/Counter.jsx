import { useEffect } from "react"
import { useState } from "react"

// STATEFULL COMPONENTS
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

    const gallery = [...new Array(10)].map((_, index) => {
        console.log("Construyendo la imagen", index)
        return <img key={index} src={`https://placehold.co/${100 + 10 * index}`} alt="" />
    })

    return (
        <div>
            <span id={Math.random().toString()}>app {count}</span>
            {gallery}
        </div>
    )

}