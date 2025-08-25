// [PASO 3] - Exponer el proveedor del almacén de reductores
import { Provider } from "react-redux"

import Login from "../components/Login"
import { store } from "../store/store"

export default function App() {

    return (
        <Provider store={store}>
            <Login />
        </Provider>
    )

}