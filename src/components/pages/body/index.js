import { Card, Container} from "react-bootstrap"
import { listarMedia } from "../../../api/media"
import { useEffect, useState } from "react"
import "./body.css"

const Body = () => {

    const [peliculas, setPeliculas] = useState([])

    useEffect(() => {
        async function fetchMedia() {
            try {
                const peliculas = await listarMedia()
                setPeliculas(peliculas)
                console.log(peliculas)
            }
            catch (error) {
                console.log("Ocurrio un error", error)
            }
        }
        fetchMedia()
    }, [])


    return (<Container>
        <div className="movies">
            {peliculas.map((peliculas, idx) => (
                <Card className="custom-card" bg="dark" text="white">
                    <Card.Img variant="top" src={peliculas && peliculas.imagenPortada} alt="portada" />
                </Card>
            ))}
        </div>

    </Container>
    )
}

export default Body