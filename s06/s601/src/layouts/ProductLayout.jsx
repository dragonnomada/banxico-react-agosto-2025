import ProductSelector from "../components/ProductSelector"

export default function ProductLayout() {

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                maxWidth: "300px",
                height: "100%"
            }}
        >
            <ProductSelector />
        </div>
    )

}