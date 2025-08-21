import { useState, useEffect } from "react"

export default function App() {

    const [count, setCount] = useState(0)
    const [lock, setLock] = useState(false)

    const increment = async () => {
        setLock(true)

        const promiseDelay = new Promise((resolve, reject) => {
            try {
                setTimeout(() => {
                    resolve("ok")
                }, 5_000)
            } catch (error) {
                reject(error)
            }
        })

        // const promiseDelay = fetch("https://randomuser.me/api?results=10000")

        const result = await promiseDelay

        console.log(result)

        setLock(false)

        // Callback hell
        // promiseDelay.then(result => {
        //     console.log(result)
        //     setCount(count + 1)
        // }).catch(error => {
        //     alert(`${error}`)
        // }).finally(() => {
        //     setLock(false)
        // })
        
    }

    return (
        <div>
            <div>
                <span>{count}</span>
            </div>
            <button
                disabled={lock}
                onClick={() => {
                    increment()
                }}
            >
                incrementar
            </button>
        </div>
    )

    // const [users, setUsers] = useState([])

    // useEffect(() => {
    //     fetch("https://randomuser.me/api?results=10").then()
    // }, [])

    // return (
    //     <div>
    //         {
    //             users.map(user => {
    //                 return (
    //                     <span>{user.email}</span>
    //                 )
    //             })
    //         }
    //     </div>
    // )

}