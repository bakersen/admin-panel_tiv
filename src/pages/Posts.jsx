import React from 'react'
import Posts from '../components/datatable/Posts'
import {Container, Row, Col} from 'react-bootstrap'

export default function Content() {
    return (      
        <Container className="page">
            <Row>
                <Col className="box" md={12}>
                    <Posts />
                </Col>
            </Row>
        </Container>
    )
}