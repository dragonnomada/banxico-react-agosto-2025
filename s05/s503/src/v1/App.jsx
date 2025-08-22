import { ProductProvider } from "../contexts/ProductContext"
import HomeLayout from "../layouts/HomeLayout"

export default function App() {

    return (
        <ProductProvider>
            <HomeLayout />
        </ProductProvider>
    )

}