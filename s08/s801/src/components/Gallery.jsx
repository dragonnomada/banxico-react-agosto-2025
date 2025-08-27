// STATELESS COMPONENT <- STATEFULL
// STATE
export default function Gallery() {

    const gallery = [...new Array(10)].map((_, index) => {
        console.log("Construyendo la imagen", index)
        return <img key={index} src={`https://placehold.co/${100 + 10 * index}`} alt="" />
    })

    return gallery

}