export default function MoreInfoLayout({children}) {

    // TODO: Lógica del usuario

    // if (true) return <span>Acceso no permitido</span>

    return (
        <div
            style={{
                backgroundColor: "#333",
                color: "white",
                height: "100%"
            }}
        >
            {children}
        </div>
    )

}