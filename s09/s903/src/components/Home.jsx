// import ... (ms 1)
// import ... (ms 2)

// for (let i = 0; i < 10_000; i++) {
//     for (let j = 0; j < 1_000; j++) {
//         document.dispatchEvent(new CustomEvent("x"))
//     }
// }

console.log("CALL HOME")

export default function Home({ onComplete }) {

    console.log("HOME RENDER")

    return (
        <div>
            <h2>Home</h2>
            <button
                onClick={() => {
                    if (onComplete) onComplete()
                }}
            >
                completar
            </button>
        </div>
    )

}