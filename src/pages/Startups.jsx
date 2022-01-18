import React from 'react'
import Startups from '../components/datatable/Startups'
import {Container, Row, Col} from 'react-bootstrap'


export default function Content() {
    return (      
        <Container className="page">
            <Row>
                <Col className="box" md={12}>
                    <Startups />                  
                </Col>
            </Row>
        </Container>
    )
}