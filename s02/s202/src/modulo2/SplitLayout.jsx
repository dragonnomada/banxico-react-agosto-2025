// Responsabilidad:
// Mostrar dos paneles separados con subcomponentes
export function SplitLayout({ left, right }) {

    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                display: "flex"
            }}
        >
            <div
                style={{
                    width: "60vw",
                    display: "flex",
                    flexGrow: 1,
                    borderRight: "1px solid gray",
                    backgroundColor: "whitesmoke"
                }}
            >
                {left}
            </div>
            <div
                style={{
                    width: "40vw",
                    flexGrow: 1,
                    display: "flex"
                }}
            >
                {right}
            </div>
        </div>
    )

}