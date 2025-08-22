import { useEffect } from "react"
import { useState } from "react"

import { fakePrincipalProducts } from "../mockup/products"

export default function ProductSelector() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        // TODO: Llamar al API de los productos principales
        setProducts(fakePrincipalProducts)
    }, [])

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
                    style={{
                        flexGrow: 1
                    }}
                    type="search" 
                    placeholder="Buscar producto..."
                />
                <button><span><i className="fas fa-search"></i></span></button>
            </div>
            <div>
                {
                    products.map(product => {
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
                                    <span>{product.label}</span>
                                </div>
                                <div>
                                    <button>
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