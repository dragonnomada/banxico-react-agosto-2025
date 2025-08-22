import { ProductProvider } from "../contexts/ProductContext"
import { UserProvider } from "../contexts/UserContext"

import Login from "../components/Login"

export default function App() {

    return (
        <UserProvider>
            <ProductProvider>
                <Login />
            </ProductProvider>
        </UserProvider>
    )

}