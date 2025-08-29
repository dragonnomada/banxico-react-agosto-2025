export default function AboutLayout({ children }) {

    return (
        <div className="about-container">
            <div
                style={{
                    borderBottom: "1px solid gainsboro",
                    paddingBottom: "1rem"
                }}
            >
                <div>LOGO</div>
                <div
                    style={{
                        display: "flex",
                        gap: "1rem"
                    }}
                >
                    <div><span>Inicio</span></div>
                    <div><span>Hello</span></div>
                    <div><span>Acerca de</span></div>
                </div>
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "300px",
                    padding: "2rem",
                }}
            >
                {children}
            </div>
        </div>
    )

}