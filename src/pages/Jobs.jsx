import React from 'react'
import Jobs from '../components/datatable/Jobs'
import {Container, Row, Col} from 'react-bootstrap'


export default function Content() {
    return (      
        <Container className="page">
            <Row>
                <Col className="box" md={12}>
                    <Jobs />
                </Col>
            </Row>
        </Container>
    )
}