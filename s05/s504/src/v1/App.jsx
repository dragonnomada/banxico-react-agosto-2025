import CounterControls from "../components/CounterControls";
import CounterDisplay from "../components/CounterDisplay";

export default function App() {

    return (
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
    )

}