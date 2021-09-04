import {Col, Row, Container, Button, Form, FloatingLabel} from 'react-bootstrap'
import styled from 'styled-components'

const Box = styled.div`
background: linear-gradient(135deg, #9EF1E9 0%, #32F4E2 100%);
`
const FormL = styled.div`
@media (max-width: 680px){
    width:90vw !important;
}
`

const InputLocal = styled.input`
 height: 64px;
 padding: 12px 10px 12px 16px;
`
const InputLocal2 = styled.textarea`
 height: 181px;
 padding: 12px 10px 12px 16px;

`

export default function BannerContacto(){
    return(
        <Box className="d-flex justify-content-center" id="contactos">
                <FormL className="bg-dark w-50 d-flex flex-column justify-content-center align-items-center mt-5 mb-5">
                    <h1 className="text-light">Contacto</h1>
                    <h5 className="text-secondary w-75 m-3">Si estas interesado en trabajar conmigo en su próximo proyecto, no dude en ponerse en contacto.</h5>

                    <InputLocal size="lg" type="text" placeholder="Nombre Completo" className="w-75 m-2" />
                    <InputLocal size="lg" type="text" placeholder="Correo electrónico" className="w-75 m-2" />
                    <InputLocal2 as="textarea" size="lg" placeholder="Mensaje" className="w-75 m-2" />

                    <a href="/"><Button variant="primary" size="lg" className="m-3" type="submit">
                        Enviar mensaje
                    </Button></a>
                </FormL>
        </Box>
    )
}