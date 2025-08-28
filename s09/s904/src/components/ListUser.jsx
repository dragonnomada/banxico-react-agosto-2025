// PASO 1 - Tarea asíncrona
async function fetchUsers() {
    const users = await new Promise(resolve => {
        setTimeout(() => {
            console.log("Usuarios adquiridos")
            resolve([{ a: 123 }])
        }, 4_000)
    })
    return users
}

// PASO 2 - Loader que recibe la tarea inicial y espera a que finalice
// > Marca un estado para arrojar una excepción que equivale a la suspensión
// > (se espera a que finalice la tarea)
function loader(task) {

    let status = "pending"
    let result

    const suspender = task.then(users => {
        status = "done"
        result = users
    }, error => { })

    return () => {
        if (status === "pending") throw suspender

        console.log("FINALIZADO", result)

        return result
    }
}

// PASO 3 - Retener una función que obtenga la suspesión o los resultados
const getUsers = loader(fetchUsers())

export default function ListUser() {

    // PASO 4 - Utilizamos la suspensión (obtenemos los usuarios suspendidos)
    const users = getUsers()

    console.log("RENDER USER")

    return JSON.stringify({ users })

}