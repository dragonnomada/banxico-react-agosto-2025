import ProductSelector from "../components/ProductSelector"

export default function ProductLayout({
    products, // INPUT: State de la lista de productos
    onProductAdd, // OUTPUT: Action para seleccionar un producto (payload: product)
}) {

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                maxWidth: "300px",
                height: "100%"
            }}
        >
            <ProductSelector 
                products={products}
                onProductAdd={onProductAdd}
            />
        </div>
    )

}