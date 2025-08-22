import ListProductTotal from "../components/ListProductTotal"

export default function SellPreviewLayout({
    productsSelected, // INPUT: State de la lista de productos seleccionados
}) {

    return (
        <ListProductTotal 
            productsSelected={productsSelected}
        />
    )

}