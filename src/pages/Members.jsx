import React from 'react'
import Members from '../components/datatable/Members'
import {Container, Row, Col} from 'react-bootstrap'


export default function Content() {
    return (      
        <Container className="page">
            <Row>
                <Col className="box" md={12}>
                    <Members />                  
                </Col>
            </Row>
        </Container>
    )
}