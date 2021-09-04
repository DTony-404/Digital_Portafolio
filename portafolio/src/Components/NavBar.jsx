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
                    <Nav.Link href="#Hola">Hola</Nav.Link>
                    <Nav.Link href="#projectos">Proyectos</Nav.Link>
                    <Nav.Link href="#servicio">Servicios</Nav.Link>
                    <Nav.Link href="#contactos">Contacto</Nav.Link>
                </Nav>
                    <Navbar.Brand>
                        <a href="https://www.canva.com/design/DAEoIb_PAbE/y2MgtB8nKbHmp-akUVtqWg/view?utm_content=DAEoIb_PAbE&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu" target="target"><Button variant="primary" as="a">Ver currículum</Button></a>
                    </Navbar.Brand>
            </Navbar.Collapse>  
        </Container>
        </Navbar>
    )
}