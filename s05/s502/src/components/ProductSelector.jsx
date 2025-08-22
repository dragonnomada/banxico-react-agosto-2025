// import { useEffect } from "react"
// import { useState } from "react"

import { useContext } from "react"
import { ProductContext } from "../v1/App"

// import { fakePrincipalProducts } from "../mockup/products"

// Responsabilidad:
// 1. Mostrar una lista de productos que permitan seleccionar al producto
// >>> 2. Obtener la lista de los productos inicial (vía API/Mockup)
// --- 3. Buscar/filtrar la lista de productos
export default function ProductSelector() {

    // products, // INPUT: State de la lista productos
    // onProductAdd, // OUTPUT: Action para seleccionar un producto (payload: product)

    const { products, onProductAdd } = useContext(ProductContext)

    return (
        <div
            style={{
                borderRight: "1px solid gainsboro",
                height: "100%",
                padding: "0.5rem"
            }}
        >
            <div>
                <h3>Buscar producto</h3>
            </div>
            <div
                style={{
                    display: "flex",
                    gap: "0.5rem"
                }}
            >
                <input 
                    disabled
                    style={{
                        flexGrow: 1
                    }}
                    type="search" 
                    placeholder="Buscar producto..."
                />
                <button
                    disabled
                >
                    <span><i className="fas fa-search"></i></span>
                </button>
            </div>
            <div>
                {
                    (products || []).map(product => {
                        return (
                            <div
                                key={product.id}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                    padding: "1rem",
                                    borderBottom: "1px solid gainsboro"
                                }}
                            >
                                <div>
                                    <img 
                                        className="product-activate"
                                        style={{
                                            width: "2rem",
                                            height: "2rem",
                                            borderRadius: "100%",
                                        }}
                                        src={product.picture} 
                                        alt={product.label} 
                                    />
                                </div>
                                <div>
                                    <div><span>{product.label}</span></div>
                                    <div>$ <span>{Number(product.price).toFixed(2)}</span></div>
                                </div>
                                <div>
                                    <button
                                        disabled={!onProductAdd}
                                        onClick={() => {
                                            if (onProductAdd) onProductAdd(product)
                                        }}
                                    >
                                        <span><i className="fas fa-plus"></i></span>
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

}