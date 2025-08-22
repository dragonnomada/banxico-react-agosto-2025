// [PASO 3] Config store provider
import { Provider } from "react-redux"

import { store } from "../stores/store"

import CounterControls from "../components/CounterControls"
import CounterDisplay from "../components/CounterDisplay"

export default function App() {

    return (
        <Provider store={store}>
            <div>
                <h1>App v1</h1>
                <div>
                    <div>
                        <CounterDisplay />
                    </div>
                    <div>
                        <CounterControls />
                    </div>
                </div>
            </div>
        </Provider>
    )

}