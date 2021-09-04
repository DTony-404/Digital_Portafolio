import {Navbar, Nav, Container, Button} from 'react-bootstrap'
import { FaGithub,FaRebel } from "react-icons/fa";

export default function Nav_bar(){
    return(
        <Navbar expand="lg" variant="dark" bg="black">
        <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />      
            <Navbar.Brand href="#home"><h4><a className="text-primary"><FaRebel /></a></h4></Navbar.Brand> 
            <Navbar.Collapse id="basic-navbar-nav" className="text-center">
                <Nav className="me-auto">
                    <Nav.Link href="/">Hola</Nav.Link>
                    <Nav.Link href="/">Proyectos</Nav.Link>
                    <Nav.Link href="/">Testimonios</Nav.Link>
                </Nav>
                    <Navbar.Brand>
                        <Button variant="primary" as="a">Descarga</Button>
                    </Navbar.Brand>
            </Navbar.Collapse>  
        </Container>
        </Navbar>
    )
}