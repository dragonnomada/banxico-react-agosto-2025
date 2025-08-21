import { useEffect } from "react"
import { useNavigate } from "react-router"

export default function CheckSession() {

    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token")

        // const obj = {
        //     "token": token
        // }
        // const obj = {
        //     token: token
        // }
        // const obj = {
        //     token
        // }
        // console.log(obj)
        // console.log({ 
        //     "token": token
        // })
        console.log({ token })

        // {
        //    token // "token": token
        // }

        if (token) {
            // TODO: validar token
            fetch("https://geocarta.org/api/curso/checkSession", {
                method: "post",
                headers: {
                    "content-type": "application/json",
                    "authorization": `Bearer ${token}`
                },
                body: JSON.stringify({})
            }).then(response => {
                if (response.ok) {
                    return response.json()
                }
            }).then(({ isValid }) => {
                // console.log({ result })
                if (isValid) {
                    navigate("/home", {
                        state: {
                            token
                        }
                    })
                }
            })
        } else {
            navigate("/login")
        }
    }, [])

    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.5rem"
            }}
        >
            <span style={{ fontSize: "40px", color: "cornflowerblue" }}><i className="fas fa-spinner fa-spin" /></span>
            <span>Cargando la plataforma...</span>
        </div>
    )

}