import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Checkboxes from './Checkboxes'
import './list.css'


export default function Header() {
    return (
        <React.Fragment>
            <Container>
                <h4>Jobs</h4>
                <Row className="header-row">
                    <Col md={1}>
                        <Checkboxes />
                    </Col>
                    <Col md={3}>
                        <h6>Company</h6>
                    </Col>
                    <Col md={2}>
                        <h6>Job title</h6>
                    </Col>
                    <Col md={2}>
                        <h6>Date created</h6>
                    </Col>
                    <Col md={2}>
                        <h6>Deadline</h6>
                    </Col>
                    <Col md={2}>
                        
                    </Col>
    
                </Row>
            </Container>
        </React.Fragment>
    )
}
