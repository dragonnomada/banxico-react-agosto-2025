import { useState } from "react"

import MenuLayout from "./MenuLayout"
import NavLayout from "./NavLayout"
import SellLayout from "./SellLayout"

export default function HomeLayout({ 
    products, // INPUT: State de la lista productos
    onProductAdd, // OUTPUT: Action para seleccionar un producto (payload: product)
}) {

    const [menuWidth, setMenuWidth] = useState(0)

    // TODO: Detectar cuando la pantalla es más grande para aumentar el tamaño del menú

    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                flexDirection: "column"
            }}
        >
            <div
                style={{
                    height: "4rem",
                    borderBottom: "1px solid gainsboro",
                    boxShadow: "0px 0px 8px 1px rgba(0, 0, 0, 0.1)",
                    backgroundColor: "steelblue",
                    color: "white"
                }}
            >
                <NavLayout />
            </div>
            <div
                style={{
                    position: "relative",
                    flexGrow: 1,
                    display: "flex",
                    height: "calc(100vh - 4rem)",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        left: "0px",
                        top: "0px",
                        width: `${menuWidth}px`,
                        height: "100%",
                        borderRight: "1px solid gainsboro",
                        background: "red",
                        overflow: "hidden"
                    }}
                >
                    <MenuLayout />
                </div>
                <div
                    style={{
                        flexGrow: 1,
                        padding: "1rem"
                    }}
                >
                    <SellLayout 
                        products={products}
                        onProductAdd={onProductAdd}
                    />
                </div>
            </div>
        </div>
    )

}