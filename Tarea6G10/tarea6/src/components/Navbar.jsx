import { Container, Nav, Navbar as NavbarBs } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

export function Navbar() {
    return (
        <NavbarBs className="bg-white shadow-sm mb-3">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link to="/" as ={NavLink}>
                        Home
                    </Nav.Link>
                    <Nav.Link to="/eduardo" as ={NavLink}>
                        Eduardo
                    </Nav.Link>
                    <Nav.Link to="/victor" as ={NavLink}>
                        Victor
                    </Nav.Link>
                    <Nav.Link to="/benjamin" as ={NavLink}>
                        Benjamin
                    </Nav.Link>
                </Nav>
            </Container>
        </NavbarBs>
    )
}