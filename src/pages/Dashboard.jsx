import React from 'react'
import Dashboard from '../components/dashboard/Dashboard'
import {Container, Row, Col} from 'react-bootstrap'
import { Outlet} from "react-router-dom";

export default function Content() {
    return (      
        <Container className="page">
            <Row>
                <Col className="box" md={12}>
                    <Dashboard />
                    <Outlet />
                </Col>
            </Row>
        </Container>
    )
}