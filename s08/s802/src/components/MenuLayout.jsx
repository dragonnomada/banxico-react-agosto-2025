import { useState } from "react"

// STATELESS -> STATEFULL
export default function MenuLayout({ children }) {

    const [open, setOpen] = useState(true)

    return (
        <div style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            overflow: "hidden"
        }}>
            {
                open ? (
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            width: "150px",
                            background: "#333",
                            color: "white",
                            padding: "2rem",
                            gap: "2rem"
                        }}
                    >
                        <div>
                            <button
                                onClick={() => {
                                    setOpen(false)
                                }}
                            >
                                x
                            </button>
                        </div>
                        <div>
                            Menu
                        </div>
                    </div>
                ) : null
            }
            <div
                style={{
                    flexGrow: 1,
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <div
                    style={{
                        height: "64px",
                        background: "lavender",
                        padding: "1rem"
                    }}
                >
                    {
                        !open ? (
                            <button
                                onClick={() => {
                                    setOpen(true)
                                }}
                            >
                                Abrir menu
                            </button>
                        ) : null
                    }
                </div>
                <div
                    style={{
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden",
                        background: "whitesmoke",
                        padding: "1rem"
                    }}
                >
                    <div
                        style={{
                            flexGrow: 1,
                            display: "flex",
                            flexDirection: "column",
                            overflow: "auto",
                            background: "white",
                            padding: "1rem"
                        }}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )

}