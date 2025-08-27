import { useLayoutEffect } from "react"
import { useState } from "react"
import { useRef } from "react"
import { useEffect } from "react"

export default function Box() {

    const divRef = useRef()
    const imgRef = useRef()

    const [url, setUrl] = useState("https://placehold.co/200")

    // useEffect -> Pinta / Calcula (secundario / background) / Pinta (otra vez)
    // useLayoutEffect -> Calcula (secundario / background) / Pinta (otra vez)
    useLayoutEffect(() => {

        // let total = 0

        // for (let i = 0; i < 100_000; i++) {
        //     for (let i = 0; i < 10_000; i++) {
        //         total += 2 * 2 / 100
        //     }    
        // }

        // console.log(total)

        console.log(divRef.current)
        console.log(imgRef.current, imgRef.current.clientHeight)
        imgRef.current.src = url
        imgRef.current.onload = () => {
            divRef.current.style.height = `${imgRef.current.clientHeight}px`
        }
    }, [url])

    return (
        <div
            style={{
                backgroundColor: "black"
            }}
        >
            <div
                ref={divRef}
                style={{
                    backgroundColor: "red"
                }}
            >
                <div>
                    <span>{url}</span>
                </div>
                <button
                    onClick={() => {
                        const size = Math.floor(Math.random() * 600) + 100
                        setUrl(`https://placehold.co/${size}`)
                    }}
                >
                    Cambiar tamaño
                </button>
            </div>
            <img
                ref={imgRef}
                src={url}
                alt=""
            />
        </div>
    )

}