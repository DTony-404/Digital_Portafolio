import styled from 'styled-components'
import {Container, Col, Row, Button} from 'react-bootstrap'

const Box = styled.div`
background:white;
margin-top:20px;
`

const Banner1 = styled.div`
background-image: url("https://res.cloudinary.com/dd8jb0ikv/image/upload/v1630594604/DigitalPortafolio/Banner_vuvdrd.gif"); 
background-size: cover;
background-position:center;
height: 400px;
width: auto;
`
const Banner2 = styled(Banner1)`
background-image: url("https://res.cloudinary.com/dd8jb0ikv/image/upload/v1630697166/DigitalPortafolio/Dise%C3%B1o_sin_t%C3%ADtulo_okex4y.gif");
`
const Banner3 = styled(Banner1)`
background-image: url("https://res.cloudinary.com/dd8jb0ikv/image/upload/v1630700562/DigitalPortafolio/Ciencias_Sociales_vpcz5t.gif");
`

export default function BannerProjects(){
    return(
        <Box id="projectos">
            <Container className="d-flex flex-column">
                <Row className="m-3">
                    <Col xs={12} md={6}>
                    <h1 className="text-dark"> Parece magia, Funciona con código</h1>
                    </Col>
                    <Col>
                    <h5 className="text-secondary">A lo largo de mi carrera como Frontend, he tenido ek privilegio de trabajar en proyectos retadores e increíbles</h5>
                    </Col>
                </Row>
                <Banner1 className="d-flex justify-content-center align-items-center mt-2">
                    <div className="w-75 bg-dark">
                        <h4 className="text-light m-3">Página tributo</h4>
                        <h6 className="text-secondary m-3">
                            Un breve tributo a Stan Lee y Steve Jobs en donde relatamos un poco de su historia
                        </h6>
                        <Button variant="primary" className="m-2" href="https://dtony-404.github.io/portafolio_ag_2.0/page_tribute/" target="target">Ver proyecto</Button>{' '}
                        <Button variant="outline-light" className="m-2" href="https://github.com/DTony-404/portafolio_ag_2.0/tree/main/page_tribute" target="target">Ver código</Button>{' '}
                    </div>
                </Banner1>
                <Row>
                    <Col xs={12} md={6} className="mt-2">
                        <Banner2 className="d-flex justify-content-center align-items-center">
                        <div className="w-75 bg-dark">
                            <h4 className="text-light m-3">Página Comercial</h4>
                            <h6 className="text-secondary m-3">
                                Venta de tenis Nikes con envios internacionales
                            </h6>
                            <Button variant="primary" className="m-2" href="https://dtony-404.github.io/portafolio_ag_2.0/comercial_product/" target="target">Ver proyecto</Button>{' '}
                            <Button variant="outline-light" className="m-2" href="https://github.com/DTony-404/portafolio_ag_2.0/tree/main/comercial_product" target="target">Ver código</Button>{' '}
                        </div>
                        </Banner2>
                    </Col>
                    <Col xs={12} md={6} className="mt-2">
                    <Banner3 className="d-flex justify-content-center align-items-center">
                    <div className="w-75 bg-dark">
                        <h4 className="text-light m-3">Ecommerce</h4>
                        <h6 className="text-secondary m-3">
                            Venta de tegnologia y tenis en la que puedes comprar varios productos a la vez.
                        </h6>
                        <Button variant="primary" className="m-2" href="https://dtony-404.github.io/E-commerce/" target="target">Ver proyecto</Button>{' '}
                        <Button variant="outline-light" className="m-2" href="https://github.com/DTony-404/E-commerce" target="target">Ver código</Button>{' '}
                    </div>    
                    </Banner3>
                    </Col>
                </Row>
                <Button variant="outline-dark" className="m-5" href="https://github.com/DTony-404" target="target">Ver más proyectos <i></i></Button>{' '}
            </Container>
        </Box>
    )
}