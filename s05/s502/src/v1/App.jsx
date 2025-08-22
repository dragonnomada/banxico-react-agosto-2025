import { createContext } from "react"

import { useState } from "react"
import HomeLayout from "../layouts/HomeLayout"
import { useEffect } from "react"
import { fakePrincipalProducts } from "../mockup/products"

const initialState = {
    products: [],
    productsSelected: [],
    onProductAdd: (product) => { throw `No está implementada aún` }
}

// Creación del contexto:
// Nos regalan un Provider que permite
// reemplazar el initialState (llamado el value)
export const ProductContext = createContext(initialState)

function ProductProvider({ children }) {

    const [products, setProducts] = useState([])
    const [productsSelected, setProductsSelected] = useState([])

    const onProductAdd = product => {
        // alert(`
        // Producto seleccionado:

        // ${product.label}
        // $ ${Number(product.price).toFixed(2)}
        // `)
        setProductsSelected([
            ...productsSelected,
            product
        ])
    }

    useEffect(() => {
        // TODO: Obtenemos la lista de productos iniciales
        setProducts(fakePrincipalProducts)
    }, [])

    return (
        <ProductContext.Provider value={{
            products, // INPUT: State de los productos de búsqueda
            productsSelected, // INPUT: State de los productos seleccionados
            onProductAdd // OUTPUT: Action de lo que ocurre al agregar un producto
        }}>
            {children}
        </ProductContext.Provider>
    )

}

export default function App() {

    return (
        <ProductProvider>
            <HomeLayout />
        </ProductProvider>
    )

}