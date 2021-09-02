import {Container, Col, Image, Row} from 'react-bootstrap'
import styled, {keyframes} from 'styled-components'

const Box = styled.div`
background-color: black;
height: 510px;
display:flex;
align-items: center;
`
const BoxText = styled.div`
margin-top: 30px;
justify-content: center;
`

export default function BannerInicial(){
    return(
        <Box>
            <Container>
                <Row>
                    <Col xs={12} md={7}>
                        <BoxText>
                        <h1 className="text-light text-center">¡Hola a todos!</h1>
                        <h1 className="text-light text-center">Soy Hernani Gonzalez</h1>
                        <h5 className="text-secondary text-center">Developer que le encanta implementar diseños que inspiran y atraen a las personas</h5>
                        </BoxText>
                    </Col>
                    <Col xs={12} md={3}>
                    <Image src="https://res.cloudinary.com/dd8jb0ikv/image/upload/v1630549816/DigitalPortafolio/Blanco_y_Negro_Monta%C3%B1a_Limpio_y_Moderno_Iglesia_Logotipo_g4uj7a.jpg" width={320} roundedCircle />
                    </Col>
                </Row>
            </Container>
        </Box>
    )
}