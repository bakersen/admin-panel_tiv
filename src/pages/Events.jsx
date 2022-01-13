import React from 'react'
import Events from '../components/datatable/Events'
import {Container, Row, Col} from 'react-bootstrap'

export default function Content() {
    return (      
        <Container className="page">
            <Row>
                <Col className="box" md={12}>
                    <Events />
                </Col>
            </Row>
        </Container>
    )
}
