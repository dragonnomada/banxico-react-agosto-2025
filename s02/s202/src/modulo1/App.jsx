import { useEffect } from "react"
import { useState } from "react"

export function App() {

    const [count, setCount] = useState(0)
    const [progress, setProgress] = useState(0)
    const [lock, setLock] = useState(false)

    // Efecto directo
    useEffect(() => {
        setProgress(100 * count / 20)
    }, [count])

    // Efecto condicional
    useEffect(() => {
        if (progress >= 100) {
            setLock(true)
        }
        if (count <= 0) {
            setLock(false)
        }
    }, [progress, count])

    return (
        <div>
            <h1>App</h1>
            <div>
                <span>Count: {count} ({progress}%)</span>
            </div>
            <button
                disabled={lock}
                onClick={() => {
                    setCount(count + 1)
                }}
            >
                incrementar
            </button>
            <button
                disabled={!lock}
                onClick={() => {
                    setCount(0)
                }}
            >
                reiniciar
            </button>
        </div>
    )

}