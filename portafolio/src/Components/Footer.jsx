import {Nav, Col, Container, Row} from 'react-bootstrap'
import { SiInstagram, SiLinkedin } from "react-icons/si";
import { FaGithub,FaRebel } from "react-icons/fa";

export default function Footer(){
    return(
            <Nav className="text-light bg-dark text-center">
                <Container className="d-flex flex-row align-items-center p-3">
                    <Col xs={2} >  <h4><a className="text-primary"><FaRebel /></a></h4> </Col>
                    <Col xs={8} >Hecho con ❤️ de Hernani. Copyright 3021 - Todos los derechos reservados</Col>
                    <Col xs={2} className="justify-content-center">
                        <a className="m-1" target="target" href="https://github.com/DTony-404">
                        <FaGithub />
                        </a>
                        <a className="m-1" target="target" href="https://www.linkedin.com/in/hernani-gonzalez-a59489219/">
                        <SiLinkedin />
                        </a>
                        <a className="m-1" target="target" href="https://www.instagram.com/tony__404/">
                        <SiInstagram />
                        </a>
                    </Col>
                </Container>
            </Nav>
    )
}