import { Provider } from "react-redux"

import Guard from "../components/Guard"
import { store } from "../store/store"

export default function App() {

    return (
        <Provider store={store}>
            <Guard />
        </Provider>
    )

}