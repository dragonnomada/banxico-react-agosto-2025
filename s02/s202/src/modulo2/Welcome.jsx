// Responsabilidad:

import { useEffect } from "react"
import { useState } from "react"

// Presentarle la plataforma al usuario
export function Welcome() {

    const [cursor, setCursor] = useState(0)

    const gallery = [
        <img
            width={"100%"}
            height={"100%"}
            style={{
                objectFit: "cover",
                filter: "grayscale(80%)",
                opacity: "0.5",
            }}
            src="https://transparencia.banxico.org.mx/dyn/multimedia/bannerT.jpg"
        />,
        <img
            width={"100%"}
            height={"100%"}
            style={{
                objectFit: "cover",
                filter: "grayscale(80%)",
                opacity: "0.5",
            }}
            src="https://upload.wikimedia.org/wikipedia/commons/9/93/WWF_Schweiz%2C_Zürich_Office_%28Ank_Kumar%2C_Infosys_Limited%29_01.jpg"
        />
    ]

    useEffect(() => {
        console.log("Aplica el efecto")
        const id = setTimeout(() => {
            console.log("Cambiando imagen", cursor)
            let nextCursor = cursor + 1
            setCursor(nextCursor)
            // if (nextCursor > gallery.length) {
            //     nextCursor = 0
            // }
        }, 5_000)
        return () => {
            console.log("Quita el efecto")
            clearTimeout(id)
        }
    }, [cursor])

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                overflow: "hidden"
            }}
        >
            {/* <span>{cursor}</span> */}
            {gallery[cursor % gallery.length]}
        </div>
    )

}