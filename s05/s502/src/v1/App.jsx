import { useState } from "react"
import HomeLayout from "../layouts/HomeLayout"
import { useEffect } from "react"
import { fakePrincipalProducts } from "../mockup/products"

export default function App() {

    const [products, setProducts] = useState([])
    const [productsSelected, setProductsSelected] = useState([])

    useEffect(() => {
        // TODO: Obtenemos la lista de productos iniciales
        setProducts(fakePrincipalProducts)
    }, [])

    return (
        <HomeLayout 
            products={products}
            productsSelected={productsSelected}
            onProductAdd={product => {
                // alert(`
                // Producto seleccionado:
                
                // ${product.label}
                // $ ${Number(product.price).toFixed(2)}
                // `)
                setProductsSelected([
                    ...productsSelected,
                    product
                ])
            }} 
        />
    )

}