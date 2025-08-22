import { useState } from "react"

export default function ListProductTotal() {

    const [productsSelected, setProductsSelected] = useState([])

    return (
        <div
            style={{
                padding: "1rem",
                display: "flex",
                height: "100%",
                flexDirection: "column",
                overflow: "auto"
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "0.5rem",
                    border: "1px solid gainsboro",
                    borderRadius: "0.5rem",
                    backgroundColor: "ivory"
                }}
            >
                <div>
                    <span
                        style={{
                            fontSize: "3rem"
                        }}
                    >
                        <i className="fas fa-dollar"></i>
                    </span>
                </div>
                <div
                    style={{
                        display: "flex",
                        gap: "1rem",
                        fontSize: "2rem",
                    }}
                >
                    <span>100.99</span>
                    <span>MNX</span>
                </div>
            </div>
            <div>
                {
                    productsSelected.map(product => {
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
                                    <button>
                                        <span><i className="fas fa-minus"></i></span>
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