import styled from 'styled-components'
import {Container, Col, Row} from 'react-bootstrap'
const Box = styled.div`
background:white;
`
// fetch('../../assets/bdProjects.json').then((resp)=>resp.json()).then((data)=>{console.log(data)})

export default function BannerProjects(){
    return(
        <Box>
            <Container>
                
                <Row>
                    <Col xs={6}></Col>
                    <Col xs={6}></Col>
                </Row>
            </Container>
        </Box>
    )
}