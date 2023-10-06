import { Card } from "react-bootstrap"
import '../css/Home.css'

export function HomeItem({id, name, img}){
    return <Card className="card-color" style={{ border: "transparent", borderRadius: "10px" }}>
        <Card.Img 
            variant="top" 
            src={img} 
            height="300px" 
            style={{ objectFit: "fill" }}  />
        <Card.Body className="d-flex flex-column">
            <Card.Title className="d-flex justify-content-center">
                <span className="fs-2">{name}</span>
            </Card.Title>
        </Card.Body>
    </Card>
}