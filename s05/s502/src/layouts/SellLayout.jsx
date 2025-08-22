import ProductLayout from "./ProductLayout";
import SellPreviewLayout from "./SellPreviewLayout";

export default function SellLayout({
    products, // INPUT: State de la lista de productos
    productsSelected, // INPUT: State de la lista de productos seleccionados
    onProductAdd, // OUTPUT: Action para seleccionar un producto (payload: product)
}) {

    return (
       <div
        style={{
            height: "100%",
            flexGrow: 1,
            display: "flex",
            backgroundColor: "ghostwhite",
            overflow: "hidden"
        }}
       >
            <div
                style={{
                    // flexGrow: 1
                }}
            >
                <ProductLayout 
                    products={products}
                    onProductAdd={onProductAdd}
                />
            </div>
            <div
                style={{
                    flexGrow: 1,
                }}
            >
                <SellPreviewLayout 
                    productsSelected={productsSelected}
                />
            </div>
       </div>
    )

}